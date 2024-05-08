"use client";
import Link from "next/link";
import { FunctionComponent } from "react";
import { NavbarLink } from "./NavbarLink";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
import { SquareIconButton } from "./SquareIconButton";
import {ShoppingCart, MagnifyingGlass} from "@phosphor-icons/react"
export const Navbar: FunctionComponent = () => {
  const pathname = usePathname();
  console.log(pathname);
  const links = [
    { title: "Products", path: "/products" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div id="navbar" className="flex gap-2 w-full justify-end xl:justify-between items-center">
      <div className="hidden xl:flex gap-2 justify-center items-center">
        {links.map((item) => (
          <NavbarLink
            key={item.title}
            path={item.path}
            title={item.title}
            active={item.path === pathname}
          />
        ))}
      </div>
      <div className="flex flex-row gap-2">
      <SquareIconButton icon={MagnifyingGlass} iconProps={{ size: "1.5rem" }}/>
      <ThemeSwitch />
      <SquareIconButton icon={ShoppingCart} iconProps={{ size: "1.5rem" }}/>
      </div>
    </div>
  );
};
