"use client";
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import useWindowDimensions from "@/utils/useWindowDimensions";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export const Footer: FunctionComponent = () => {
  const { width } = useWindowDimensions();

  const links = [
    { title: "Products", path: "/products" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <footer className="flex flex-col gap-[10px]">
      <button onClick={scrollToTop} className="flex justify-center items-center py-2 gap-2 w-full bg-slate-500/30 hover:bg-slate-500/50 dark:bg-slate-500/70 dark:hover:bg-slate-500">
        <span>Back to top</span>
        <ArrowUp />
      </button>
      <div className="flex  flex-col gap-[10px] p-2 xl:px-32 lg:px-24 md:px-16">
        <div className="flex flex-col py-2 px-4 gap-4 md:flex-row md:justify-between md:px-8 lg:px-16 ">
          <div className="flex flex-col gap-1 w-fit">
            <strong>Navigation</strong>
            {
              <Link
                href={"/login"}
                className="text-slate-500 text-xs hover:underline"
              >
                Enter
              </Link>
            }
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="text-slate-500 text-xs hover:underline"
              >
                {item.title}
              </Link>
            ))}
          </div>
          {width >= 768 && (
            <span className="text-slate-500/50 dark:text-slate-500 truncate">
              Copyright 2024 Daniel Colares
            </span>
          )}
          <div className="flex flex-col gap-1 w-fit">
            <strong>Follow us</strong>
            <div className="flex flex-row gap-2 items-center">
              <Link target="_blank" href={"https://github.com/DcWolfMc"}>
                <FaGithub size={24} />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/daniel-colares-b590681b6/"}
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
          {width < 768 && (
            <span className="text-slate-500/50 dark:text-slate-500 truncate w-fit">
              Copyright 2024 Daniel Colares
            </span>
          )}
        </div>
        <div className="flex flex-row justify-center items-center gap-2 py-2 border-t border-slate-500">
        <div className="relative min-h-[40px] min-w-11">
        <Image src={"/logo.png"} alt="logo image" fill sizes="40px"/>
        </div>
        <strong className="text-2xl xl:flex text-nowrap">
        Sage Store
        </strong>
        </div>
      </div>
    </footer>
  );
};
