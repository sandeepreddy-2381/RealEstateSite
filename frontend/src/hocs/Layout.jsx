import React from "react";
import NavBars from "../components/navigation";
import { logout } from "../actions/auth";
const Layout = (props) => {
  return (
        <>
      <NavBars />
      {props.children}
      </>
  );
};

export default Layout;
