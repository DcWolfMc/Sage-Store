import Link from "next/link";
import { LinkProps } from "next/link";

import { FunctionComponent } from "react";
interface NavbarLinkProps extends LinkProps {
  title: string;
  active: boolean;
}

export const NavbarLink: FunctionComponent<NavbarLinkProps> = ({
  href,
  title,
  active = false,
  ...rest
}) => {
  return (
    <Link
      href={href}
      className={`px-2 py-1  rounded-lg dark:hover:bg-slate-500/50 hover:bg-slate-500/30 ${
        active && "text-violet-700 dark:text-violet-500 font-bold"
      }`}
      {...rest}
    >
      {title}
    </Link>
  );
};
