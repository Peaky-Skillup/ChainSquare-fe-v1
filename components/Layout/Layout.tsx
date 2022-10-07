import { useContext, useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar position="left" />
      {children}
    </div>
  );
};
export default Layout;
