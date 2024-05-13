"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarLink } from "./NavbarLink";
import { Separator } from "./ui/separator";

export const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  const links = [
    { title: "Products", path: "/products" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen} onClose={() => setOpen(false)}>
      <DrawerTrigger asChild onClick={()=> setOpen(true)}>
        <button className="xl:hidden">
          <List size={32} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-[75%] max-w-[400px] bottom-0">
        <DrawerHeader>
          <DrawerTitle className="flex flex-row justify-between p-2 ">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="relative min-h-[40px] min-w-11">
                <Image src={"/logo.png"} alt="logo image" fill />
              </div>
              <strong className="text-2xl xl:flex text-nowrap">
                Sage Store
              </strong>
            </div>
            <DrawerClose type="button" onClick={() => setOpen(false)}>
              <X size={32} />
            </DrawerClose>
          </DrawerTitle>
          <Separator />
        </DrawerHeader>
        <div className="p-2 flex flex-col gap-4 ">
          {links.map((item) => (
              <NavbarLink
              key={item.title}
              href={item.path}
              title={item.title}
              active={item.path === pathname}
              onClick={() => setOpen(false)}             />

          ))}
        </div>

        <DrawerFooter>
          <button>Submit</button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
