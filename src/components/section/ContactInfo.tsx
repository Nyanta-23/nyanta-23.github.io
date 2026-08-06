import { Mail, MapPin, Phone } from "lucide-react";
import SocialMedia from "../SocialMedia";



export default function ContactInfo({
    email,
    phone,
    location,
    social_medias
}: ContactInfoProps) {
    return (
        <div className=" border border-outline-variant p-8 space-y-6">
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
                {social_medias?.map((social) => (
                    <SocialMedia key={social.id} social_media={social} />
                ))}
            </div>
        </div>
    );
}