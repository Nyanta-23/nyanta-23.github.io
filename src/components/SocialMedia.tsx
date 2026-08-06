import { getIconByName } from "../helpers/helper";

export default function SocialMedia({ social_media }: SocialMediaProps) {

    const { name, icon, link } = social_media;

    const Icon = getIconByName(icon);

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
        >
            <Icon
            />
            <span className="text-sm text-on-background group-hover:text-on-surface-variant transition-colors duration-150">
                {name}
            </span>
        </a>
    )
}