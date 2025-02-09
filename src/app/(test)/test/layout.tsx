import React from "react";

export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
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
      <main style={{ backgroundColor: "red", height: "90vh" }}>
        {children}
        {team}
        {analytics}
      </main>
      <footer style={{ backgroundColor: "green" }}>Admin Layout Footer</footer>
    </>
  );
}
