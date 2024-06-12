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
  return <button className={`w-[40px] md:w-[44px] flex flex-row gap-2 justify-center items-center py-1 rounded-lg text-lg border ${variant ==="fill"?"bg-slate-500/30  dark:bg-slate-500/70":"border-slate-500/30 dark:border-slate-500/50 bg-transparent"} enabled:hover:bg-slate-500/50 enabled:dark:hover:bg-slate-500 disabled:opacity-70`} {...rest}>
    {Icon !== "none" && iconPosition === "left" && <Icon className="transition-colors"{...iconProps} />}
    {children}
    {Icon !== "none" && iconPosition === "right" && <Icon className="transition-colors"{...iconProps} />}
  </button>;
};
