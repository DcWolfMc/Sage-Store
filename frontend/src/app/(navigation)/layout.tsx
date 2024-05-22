import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-[0.75rem]">
      <Header />
      <main className="flex-1 pt-[0.75rem] mt-[44px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
