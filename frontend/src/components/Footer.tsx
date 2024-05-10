'use client'
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { FunctionComponent } from "react";
import useWindowDimensions from "@/utils/useWindowDimensions";
export const Footer: FunctionComponent = () => {
  const {height, width} = useWindowDimensions()
  
  const links = [
    { title: "Products", path: "/products" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <footer className="flex flex-col gap-[10px]">
      <button className="flex justify-center items-center py-2 gap-2 w-full bg-slate-500/30 hover:bg-slate-500/50 dark:bg-slate-500/70 dark:hover:bg-slate-500">
        <span>Back to top</span>
        <ArrowUp />
      </button>
      <div className="flex  flex-col gap-[10px] p-2 xl:px-32 lg:px-24 md:px-16">
        <div className="flex flex-col py-2 px-4 gap-4 md:flex-row md:justify-between md:px-8 lg:px-16 ">
          <div className="flex flex-col gap-1">
            <strong>Navigation</strong>
            {
              <Link href={"/login"} className="text-slate-500 text-xs">
                Enter
              </Link>
            }
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="text-slate-500 text-xs"
              >
                {item.title}
              </Link>
            ))}
          </div>
          { width>=768&&
            <span className="text-slate-500/50 dark:text-slate-500 truncate">
            Copyright 2024 Daniel Colares
            </span>
          }
          <div className="flex flex-col gap-1">
            <strong>Follow us</strong>
            {/* aqui fica os links do seguir */}
          </div>
          { width<768&&
            <span className="text-slate-500/50 dark:text-slate-500 truncate">
            Copyright 2024 Daniel Colares
            </span>
          }
        </div>
      </div>
    </footer>
  );
};
