import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import {Providers} from './providers'
const roboto = Roboto({ weight:['400','700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sage Store",
  description: "A Virtual Wise Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} dark:bg-slate-900 dark:text-slate-100 text-slate-900 bg-slate-200 transition-colors`}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
