import { Mail, MapPin, Phone } from "lucide-react";
import { Github, Linkedin } from "react-bootstrap-icons";

interface ContactInfoProps {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
}

export default function ContactInfo({
    email,
    phone,
    linkedin,
    github,
    location,
}: ContactInfoProps) {
    return (
        <div className="bg-background-ghost border border-outline-variant p-8 space-y-6">
            <p className="font-mono text-xs uppercase tracking-wide text-on-surface-variant mb-2">
                Contact Details
            </p>

            <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 group"
            >
                <Mail size={18} className="text-on-surface-variant flex-shrink-0" />
                <span className="text-sm text-on-background group-hover:text-on-surface-variant transition-colors duration-150">
                    {email}
                </span>
            </a>

            <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 group"
            >
                <Phone size={18} className="text-on-surface-variant flex-shrink-0" />
                <span className="text-sm text-on-background group-hover:text-on-surface-variant transition-colors duration-150">
                    {phone}
                </span>
            </a>

            <div className="flex items-center gap-3">
                <MapPin size={18} className="text-on-surface-variant flex-shrink-0" />
                <span className="text-sm text-on-background">{location}</span>
            </div>

            <div className="pt-4 border-t border-outline-variant space-y-4">
                <a
                    href={`https://linkedin.com/in/${linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                >
                    <Linkedin size={18} className="text-on-surface-variant flex-shrink-0" />
                    <span className="text-sm text-on-background group-hover:text-on-surface-variant transition-colors duration-150">
                        linkedin.com/in/{linkedin}
                    </span>
                </a>

                <a
                    href={`https://github.com/${github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                >
                    <Github size={18} className="text-on-surface-variant flex-shrink-0" />
                    <span className="text-sm text-on-background group-hover:text-on-surface-variant transition-colors duration-150">
                        github.com/{github}
                    </span>
                </a>
            </div>
        </div>
    );
}