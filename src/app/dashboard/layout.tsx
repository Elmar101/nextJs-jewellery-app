import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  team: ReactNode;
  analytics: ReactNode;
  login: ReactNode;
}

const DashboardLayout: FC<IProps> = ({ children, team, analytics, login }) => {
  const isLogin = true;

  return (
    <div className="dashboard-container">
      <header style={{ backgroundColor: "lightblue", textAlign: "center" }}>
        <h2>Dashboard Header</h2>
      </header>
      <br />
      <main className="content" style={{ height: "87vh" }}>
        {isLogin ? (
          <>
            <aside>{team}</aside>
            <br /> <br />
            <main>{analytics}</main>
            <br /> <br />
            <hr />
            {children}
          </>
        ) : (
          login
        )}
      </main>
      <footer
        style={{
          backgroundColor: "lightblue",
          textAlign: "center",
        }}
      >
        Dashboard Layout Footer
      </footer>
    </div>
  );
};

export default DashboardLayout;
