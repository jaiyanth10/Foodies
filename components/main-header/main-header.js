import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        {/*Main Page*/}
        <img src={Logo.src} alt="Logo"/>
        {/*in next u have use .src because u will get object when u import img */}
        Foodies
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
           <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
          <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
