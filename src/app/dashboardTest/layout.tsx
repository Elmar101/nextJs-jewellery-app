import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const DashboardLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="dashboard-container">
      <nav>
        <h2>Dashboard</h2>
      </nav>
      <div className="content">{children}</div>
    </div>
  );
};

export default DashboardLayout;
