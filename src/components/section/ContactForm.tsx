import { useEffect, useState } from "react";
import Button from "../Button";
import { sendEmail } from "../../services/email";
import { canSendEmail, getRemainingCooldown, saveLastSentTime } from "../../services/ratelimit";


export default function ContactForm() {

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
        <div className="border border-outline-variant p-8">
            <p className="font-mono text-xs uppercase tracking-wide text-on-surface-variant mb-6">
                Send a Message
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

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
                    <label className="font-mono text-xs uppercase tracking-wide text-on-surface-variant block mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full bg-transparent border-b border-outline-variant py-2 text-on-background font-mono text-sm placeholder:text-on-surface-variant focus:outline-none focus:border-on-background transition-colors duration-150"
                    />
                </div>


                <div>
                    <label className="font-mono text-xs uppercase tracking-wide text-on-surface-variant block mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-b border-outline-variant py-2 text-on-background font-mono text-sm placeholder:text-on-surface-variant focus:outline-none focus:border-on-background transition-colors duration-150"
                    />
                </div>

                <div>
                    <label className="font-mono text-xs uppercase tracking-wide text-on-surface-variant block mb-2">
                        Message
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Tell me about your project..."
                        className="w-full bg-transparent border-b border-outline-variant py-2 text-on-background font-mono text-sm placeholder:text-on-surface-variant focus:outline-none focus:border-on-background transition-colors duration-150 resize-none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                {status.type && (
                    <div
                        aria-live="polite"
                        className={`rounded-md border p-3 text-sm ${status.type === "success"
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
                    className="nav-btn w-full sm:w-auto px-6 py-3 rounded-md bg-primary text-on-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading
                        ? "Sending..."
                        : cooldown > 0
                            ? `Wait ${cooldown}s`
                            : "Send Message"}
                </Button>
            </form>
        </div>
    );
}