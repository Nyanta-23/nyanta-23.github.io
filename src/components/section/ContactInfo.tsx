import { Mail, MapPin, Phone } from "lucide-react";
import SocialMedia from "../SocialMedia";

const INFO_ICON_SIZE = "w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5";

export default function ContactInfo({
    email,
    phone,
    location,
    social_medias,
    contact_details_title
}: ContactInfoProps) {
    return (
        <div className="border border-outline-variant p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
            <p className="font-mono text-xs uppercase tracking-wide text-on-surface-variant mb-2">
                {contact_details_title}
            </p>

            <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 sm:gap-3 group"
            >
                <Mail className={`${INFO_ICON_SIZE} text-on-surface-variant flex-shrink-0`} />
                <span className="text-xs sm:text-sm text-on-background group-hover:text-on-surface-variant transition-colors duration-150">
                    {email}
                </span>
            </a>

            <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 sm:gap-3 group"
            >
                <Phone className={`${INFO_ICON_SIZE} text-on-surface-variant flex-shrink-0`} />
                <span className="text-xs sm:text-sm text-on-background group-hover:text-on-surface-variant transition-colors duration-150">
                    {phone}
                </span>
            </a>

            <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className={`${INFO_ICON_SIZE} text-on-surface-variant flex-shrink-0`} />
                <span className="text-xs sm:text-sm text-on-background">{location}</span>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-outline-variant space-y-3 sm:space-y-4">
                {social_medias?.map((social) => (
                    <SocialMedia key={social.id} social_media={social} />
                ))}
            </div>
        </div>
    );
}