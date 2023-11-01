import { icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons; // Use keyof to specify that name should be a valid key from icons
  color?: string;
  size?: number;
}

const LucidaIcon: React.FC<IconProps> = ({ name, color, size }) => {
  const LucideIcon = icons[name as keyof typeof icons];

  if (!LucideIcon) {
    // Handle the case where the icon name is not found
    return null;
  }

  return <LucideIcon color={color} size={size} />;
};

export default LucidaIcon;
