import React, { useState } from "react";
import "./MainNavigation.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import NavLinks from "../NavLink/NavLinks";

import SideNav from "../SideNav/SideNav";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && (
        <SideNav>
          <i  className="fa fa-times" onClick={closeDrawer}></i>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideNav>
      )}
      <Header>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;
