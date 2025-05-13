import { MainProvider } from "@/app/context/MainProvider";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-4">
        <MainProvider>{children}</MainProvider>
      </main>
      <Footer />
    </div>
  );
}
