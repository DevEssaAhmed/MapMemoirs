import React from "react";
import { createPortal } from "react-dom";

import "./SideNav.css";

const SideNav = (props) => {
  return (
    <>
      <aside className="side-drawer">{props.children}</aside>;
    </>
  );
};

export default SideNav;
