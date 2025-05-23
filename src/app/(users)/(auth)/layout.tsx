import type { Metadata } from "next";
import "../../globals.css";
import { MainProvider } from "@/app/context/MainProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      Auth Header
      <MainProvider>{children}</MainProvider>
      Auth Footer
    </>
  );
}
