import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const cartStyle = { border: "1px solid #ccc", padding: "10px" };
const XCart: FC<IProps> = ({ children }) => {
  return <div style={cartStyle}>{children}</div>;
};

export default XCart;
