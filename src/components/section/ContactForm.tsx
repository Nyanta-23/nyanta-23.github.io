import Button from "../Button";

export default function ContactForm() {
    return (
        <div className="border border-outline-variant p-8">
            <p className="font-mono text-xs uppercase tracking-wide text-on-surface-variant mb-6">
                Send a Message
            </p>

            <form className="space-y-6">
                <div>
                    <label className="font-mono text-xs uppercase tracking-wide text-on-surface-variant block mb-2">
                        Name
                    </label>
                    <input
                        type="text"
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
                    />
                </div>

                <Button
                    type="submit"
                    className="nav-btn w-full sm:w-auto px-6 py-3 rounded-md bg-primary text-on-primary cursor-pointer"
                >
                    Send Message
                </Button>
            </form>
        </div>
    );
}