import Link from "next/link";

import { FunctionComponent } from "react";
interface LinkProps {
  title: string;
  path: string;
  active: boolean
}

export const NavbarLink: FunctionComponent<LinkProps> = ({ path, title, active=false }) => {


  
    return (
    <Link href={path} className={`px-2 py-1  rounded-lg dark:hover:bg-slate-500/50 hover:bg-slate-500/30 ${active&&"text-violet-700 dark:text-violet-500 font-bold"}` } >
      {title}
    </Link>
  );
};
