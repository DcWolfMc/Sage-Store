"use client";
import { FunctionComponent } from "react";
import { NavbarLink } from "./NavbarLink";
import { usePathname} from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
import { SquareIconButton } from "./SquareIconButton";
import { ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import useWindowDimensions from "@/utils/useWindowDimensions";
export const Navbar: FunctionComponent = () => {
  const pathname = usePathname();
  const {width} = useWindowDimensions()
  const links = [
    { title: "Products", path: "/products" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div
      id="navbar"
      className="flex gap-2 w-full justify-end xl:justify-between items-center"
    >
      <div className="hidden xl:flex gap-2 justify-center items-center">
        {links.map((item) => (
          <NavbarLink
            key={item.title}
            href={item.path}
            title={item.title}
            active={item.path === pathname}
          />
        ))}
      </div>
      <div className="flex flex-row gap-2">
        <SquareIconButton
          icon={MagnifyingGlass}
          iconProps={{ size: "1.5rem" }}
        />
        {width>=768&&<ThemeSwitch />}
        <SquareIconButton icon={ShoppingCart} iconProps={{ size: "1.5rem" }} />
        {width>=768&&
        <Link
          href={"/login"}
          className="flex flex-row gap- 2 justify-center items-center px-8 py-1 rounded-lg text-lg bg-slate-500/30 hover:bg-slate-500/50 dark:bg-slate-500/70 dark:hover:bg-slate-500"
        >
          Enter
        </Link>}
      </div>
    </div>
  );
};
