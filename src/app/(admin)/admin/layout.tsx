import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Admin Layout",
  description: "Admin Layout",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "blue",
  icons: {
    icon: [
      {
        url: "/admin-logo.ico",
        media: "(prefers-color-scheme: light)",
        href: "/admin-logo.ico",
      },
      {
        url: "/logico.ico",
        media: "(prefers-color-scheme: dark)",
        href: "/logico.ico",
      },
    ],
  },
  manifest: "/manifest.json",
  robots: "noindex",
  applicationName: "Admin Layout Aplication Name",
  authors: [{ name: "Elmar" }],
  creator: "Eldar",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "green",
        }}
      >
        <a href="/admin/home">Home</a> <br />
        <a href="/admin/dashboard">Dashboard</a> <br />
      </header>
      <main style={{ backgroundColor: "red", height: "90vh" }}>{children}</main>
      <footer style={{ backgroundColor: "green" }}>Admin Layout Footer</footer>
    </>
  );
}
