import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Navbar } from "./Navbar";
import { List } from "@phosphor-icons/react/dist/ssr";
import { DrawerMenu } from "./DrawerMenu";
export const Header: FunctionComponent = () => {
  return (
    <header className="top-0 left-0 z-10 fixed w-full flex justify-center pb-[5px] bg-gradient-to-r from-transparent via-violet-900 to-transparent">
      <div className="w-full flex flex-row items-center justify-between xl:justify-start px-8 py-2 gap-4 bg-slate-200 dark:bg-slate-900">
        <div className="flex flex-row gap-2">
          <DrawerMenu />
          <Link
            href={"/products"}
            id="logo"
            className=" flex items-center px-2 gap-2"
          >
            <div className="relative min-h-[40px] min-w-11">
              <Image src={"/logo.png"} alt="logo image" fill />
            </div>
            <strong className="text-2xl hidden xl:flex text-nowrap">
              Sage Store
            </strong>
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};
