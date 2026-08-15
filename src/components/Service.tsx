import SkillIcon from "./Skill";

export default function Service({ service }: ServiceProps) {

    return (
        <section
            className="border border-outline-variant p-6 hover:border-on-background hover:bg-background-ghost transition-all duration-150"
        >
            <div className="w-12 h-12 rounded-full border-2 border-charcoal-ink dark:border-pure-white flex items-center justify-center mb-5">
                <SkillIcon icon={service.icon} className="w-5 h-5" />
            </div>

            <h3 className="font-serif text-lg font-semibold text-on-background mb-2">
                {service.name}
            </h3>

            <p className="text-sm text-on-surface-variant leading-relaxed">
                {service.description}
            </p>

            {service.price && (
                <p className="font-mono text-xs text-on-background mt-4 pt-4 border-t border-outline-variant">
                    Starting from {service.price}
                </p>
            )}
        </section>
    );
}