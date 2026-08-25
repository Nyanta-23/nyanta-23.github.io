import { useEffect, useState } from "react";
import Button from "../Button";
import { sendEmail } from "../../services/email";
import { canSendEmail, getRemainingCooldown, saveLastSentTime } from "../../services/ratelimit";


export default function ContactForm({
    contact_form_title,
    contact_form_name_label,
    contact_form_name_placeholder,
    contact_form_email_label,
    contact_form_email_placeholder,
    contact_form_message_label,
    contact_form_message_placeholder,
    contact_form_button_label
}: ContactEmailProps) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [website, setWebsite] = useState("");
    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({
        type: null,
        message: "",
    });

    const [cooldown, setCooldown] = useState(0);

    useEffect(() => {
        if (status.type) {
            const timer = setTimeout(() => setStatus({ type: null, message: "" }), 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    useEffect(() => {
        setCooldown(getRemainingCooldown());
    }, []);

    useEffect(() => {
        if (cooldown <= 0) return;

        const interval = setInterval(() => {
            setCooldown((prev) => Math.max(0, prev - 1));
        }, 1000);

        return () => clearInterval(interval);
    }, [cooldown]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus({
            type: null,
            message: "",
        });

        if (website.trim() !== "") {
            return;
        }

        if (!canSendEmail()) {
            setStatus({
                type: "error",
                message: `Please wait ${getRemainingCooldown()} seconds before sending another message.`,
            });

            return;
        }

        if (name.trim().length < 2) {
            setStatus({
                type: "error",
                message: "Name must contain at least 2 characters.",
            });

            return;
        }

        if (!email.includes("@")) {
            setStatus({
                type: "error",
                message: "Please enter a valid email address.",
            });

            return;
        }

        if (message.trim().length < 20) {
            setStatus({
                type: "error",
                message: "Message must contain at least 20 characters.",
            });

            return;
        }

        try {
            setLoading(true);

            await sendEmail({
                name,
                email,
                message,
            });

            saveLastSentTime();

            setCooldown(getRemainingCooldown());

            setStatus({
                type: "success",
                message:
                    "Your message has been sent successfully. I'll get back to you as soon as possible.",
            });

            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error(error);

            setStatus({
                type: "error",
                message:
                    "Something went wrong while sending your message. Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="border border-outline-variant p-5 sm:p-6 md:p-8 bg-background-ghost/80 rounded-md hover:border-on-background hover:bg-background-ghost">
            <p className="font-mono text-xs uppercase tracking-wide text-on-surface-variant mb-4 sm:mb-5 md:mb-6">
                {contact_form_title}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">

                <div aria-hidden="true" className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none">
                    <label htmlFor="website">Website</label>
                    <input
                        id="website"
                        name="website"
                        type="text"
                        autoComplete="off"
                        tabIndex={-1}
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>

                <div>
                    <label className="font-mono text-xs uppercase tracking-wide text-on-surface-variant block mb-1.5 sm:mb-2">
                        {contact_form_name_label}
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={contact_form_name_placeholder ?? "Name"}
                        className="w-full bg-transparent border-b border-outline-variant py-1.5 sm:py-2 text-on-background font-mono text-xs sm:text-sm placeholder:text-on-surface-variant focus:outline-none focus:border-on-background transition-colors duration-150"
                    />
                </div>


                <div>
                    <label className="font-mono text-xs uppercase tracking-wide text-on-surface-variant block mb-1.5 sm:mb-2">
                        {contact_form_email_label}
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={contact_form_email_placeholder ?? "email"}
                        className="w-full bg-transparent border-b border-outline-variant py-1.5 sm:py-2 text-on-background font-mono text-xs sm:text-sm placeholder:text-on-surface-variant focus:outline-none focus:border-on-background transition-colors duration-150"
                    />
                </div>

                <div>
                    <label className="font-mono text-xs uppercase tracking-wide text-on-surface-variant block mb-1.5 sm:mb-2">
                        {contact_form_message_label}
                    </label>
                    <textarea
                        rows={4}
                        placeholder={contact_form_message_placeholder ?? "message"}
                        className="w-full bg-transparent border-b border-outline-variant py-1.5 sm:py-2 text-on-background font-mono text-xs sm:text-sm placeholder:text-on-surface-variant focus:outline-none focus:border-on-background transition-colors duration-150 resize-none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                {status.type && (
                    <div
                        aria-live="polite"
                        className={`rounded-md border p-2.5 sm:p-3 text-xs sm:text-sm ${status.type === "success"
                            ? "border-outline-variant bg-surface-container text-on-background"
                            : "border-error bg-error-container text-on-error-container"
                            }`}
                    >
                        {status.message}
                    </div>
                )}

                <Button
                    type="submit"
                    disabled={loading || cooldown > 0}
                    className="nav-btn w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md bg-primary text-on-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading
                        ? "Sending..."
                        : cooldown > 0
                            ? `Wait ${cooldown}s`
                            : contact_form_button_label}
                </Button>
            </form>
        </div>
    );
}