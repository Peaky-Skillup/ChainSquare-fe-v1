import { useContext, useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {children} {/* main */}
      <SideBar position="right" />
    </div>
  );
};
export default Layout;
