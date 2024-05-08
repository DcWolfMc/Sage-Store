import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {

    const links = [
        {title:"Products",path:"/products"},
        {title:"About",path:"/about"},
        {title:"Contact",path:"/contact"},
    ]

  return (
    <header className="pb-[5px] bg-gradient-to-r from-transparent via-violet-900 to-transparent">
    <div className="flex flex-row items-center justify-center px-8 py-2 gap-4 bg-slate-200 dark:bg-slate-900">
      <Link href={links[0].path} id="logo" className="flex items-center px-2 gap-2"> 
        <div id="logo-image-wrapper" className="max-w-11 max-h-11 size-11 ">
        <Image src={"/logo.png"} alt="logo image" width={42} height={42}/>
        </div>
        <strong className="text-2xl">
        Sage Store
        </strong>
        </Link>
      <div id="navbar" className="flex gap-2 justify-center items-center">
        {links.map((item)=>(
            <Link key={item.title} href={item.path} className="px-2 rounded-lg hover:bg-slate-500/50">
                {item.title}
            </Link>
        ))}
      </div>
    </div>
    </header>
  );
};
