import { getIconByName } from "../helpers/helper";

export default function SocialMedia({ social_media }: SocialMediaProps) {

    const { name, icon, link } = social_media;

    const Icon = getIconByName(icon);

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 group"
        >
            <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-on-surface-variant flex-shrink-0" />
            <span className="text-xs sm:text-sm text-on-background group-hover:text-on-surface-variant transition-colors duration-150">
                {name}
            </span>
        </a>
    )
}