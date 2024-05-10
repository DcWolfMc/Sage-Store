import { Icon, IconProps } from "@phosphor-icons/react";
import { ButtonHTMLAttributes, FunctionComponent } from "react";

interface SmallButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: Icon | "none";
  iconProps?: IconProps;
  iconPosition?: "right" | "left";
  variant?: "outline" | "fill";
}

export const SmallButton: FunctionComponent<SmallButtonProps> = ({
  icon = "none",
  iconProps,
  iconPosition = "left",
  variant = "fill",
  children,
  ...rest
}) => {
    const Icon = icon;
  return <button className="flex flex-row gap- 2 justify-center items-center px-4 py-1 rounded-lg text-lg bg-slate-500/30 hover:bg-slate-500/50 dark:bg-slate-500/70 dark:hover:bg-slate-500" {...rest}>
    {Icon !== "none" && iconPosition === "left" && <Icon className="transition-colors"{...iconProps} />}
    {children}
    {Icon !== "none" && iconPosition === "right" && <Icon className="transition-colors"{...iconProps} />}
  </button>;
};
