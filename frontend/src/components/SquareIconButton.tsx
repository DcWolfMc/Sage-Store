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
      className="flex flex-row px-3 py-3 min aspect-square min-h-12 rounded-lg border border-slate-500 dark:border-slate-600 bg-transparent hover:dark:bg-slate-600 hover:bg-slate-500 transition-colors"
      {...rest}
    >
      {Icon !== "none" && <Icon className="transition-colors"{...iconProps} />}
    </button>
  );
};
