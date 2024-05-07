"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";
import { SquareIconButton } from "./SquareIconButton";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <SquareIconButton icon={"none"} />;

  if (resolvedTheme === "dark") {
    return (
      <SquareIconButton icon={Sun} iconProps={{ size: "1.5rem" }} onClick={() => setTheme("light")}/>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <SquareIconButton icon={Moon} iconProps={{ size: "1.5rem" }} onClick={() => setTheme("dark")}
      />
    );
  }
}
