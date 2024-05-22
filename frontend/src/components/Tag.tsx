'use client'
import { ButtonHTMLAttributes, FunctionComponent, useState } from "react";

interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  interactable?: boolean;
  checked?: boolean
  tagName: string
}

export const Tag: FunctionComponent<TagProps> = ({
  interactable = false,
  checked = false,
  tagName,
  ...rest
}) => {
    
  return <button className={`px-2 py-1 w-fit rounded-lg border text-base md:text-lg capitalize ${checked?"text-slate-100 bg-violet-700 border-violet-700":"border-slate-500"} ${!interactable&&"cursor-default"}`} {...rest}>{tagName}</button>;
};
