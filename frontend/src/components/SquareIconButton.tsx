import { Icon, IconProps } from "@phosphor-icons/react";
import { ButtonHTMLAttributes, FunctionComponent } from "react";
interface SquareIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Icon | "none";
  iconProps?: IconProps;
}
export const SquareIconButton: FunctionComponent<SquareIconButtonProps> = ({
  icon,
  iconProps,
  ...rest
}) => {
  const Icon = icon;
  return (
    <button
      className="flex flex-row items-center justify-center p-2 aspect-square min-h-11 rounded-lg border border-slate-500/30 dark:border-slate-500/50 bg-transparent dark:hover:bg-slate-500/50 hover:bg-slate-500/30"
      {...rest}
    >
      {Icon !== "none" && <Icon className="transition-colors"{...iconProps} />}
    </button>
  );
};
