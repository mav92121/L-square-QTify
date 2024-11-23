import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import ButtonComponent from "../Button";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search placeholder="Search a song of your choice" />
      <ButtonComponent text={"Give Feedback"} />
    </nav>
  );
}

export default Navbar;
