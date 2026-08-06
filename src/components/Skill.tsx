import { getIconByName } from "../helpers/helper";

interface SkillIconProps {
  icon?: string | null;
  color?: string | null;
  size?: number;
  className?: string;
}

export default function SkillIcon({
  icon,
  color,
  size = 24,
  className,
}: SkillIconProps) {

  const Icon = getIconByName(icon ? icon : "");

  return (
    <Icon
      size={size}
      color={color ?? ""}
      className={className}
    />
  );
}