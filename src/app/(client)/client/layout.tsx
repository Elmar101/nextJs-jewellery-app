export const metadata = {
  title: "Client Layout",
  description: "Client Layout",
  viewport: "width=device-width, initial-scale=1",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "lightblue",
        }}
      >
        <a href="/client/home">Home</a> <br />
        <a href="/client/dashboard">Dashboard</a> <br />
      </header>
      <main style={{ backgroundColor: "blue", height: "90vh" }}>
        {children}
      </main>
      <footer style={{ backgroundColor: "lightblue" }}>
        Client Layout Footer
      </footer>
    </>
  );
}
