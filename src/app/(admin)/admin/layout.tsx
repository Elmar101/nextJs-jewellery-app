export const metadata = {
  title: "Admin Layout",
  description: "Admin Layout",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  lang: "en",
  icons: {
    icon: "/admin-logo.png",
  },
  manifest: "/manifest.json",
  robots: "noindex",
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
