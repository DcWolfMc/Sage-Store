import { Icon, IconProps } from "@phosphor-icons/react";
import { ButtonHTMLAttributes, FunctionComponent } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  icon?: Icon | "none";
  iconProps?: IconProps;
  variant?: "fill" | "outline";
}

export const Button: FunctionComponent<ButtonProps> = ({
  fullWidth = false,
  icon = "none",
  iconProps,
  variant = "fill",
  children,
  ...rest
}) => {
  const Icon = icon;
  return (
    <button
      className={`flex flex-grow-0 flex-row items-center justify-center px-2 py-[10px] text-lg rounded-lg ${
        fullWidth ? `w-full` : `max-w-60`
      } ${
        variant === "outline"
          ? "border border-slate-500 hover:bg-slate-500 "
          : "bg-violet-700 hover:bg-violet-900 text-slate-100"
      }`}
      {...rest}
    >
      {Icon !== "none" && <Icon className="transition-colors" {...iconProps} />}
      {children}
    </button>
  );
};
