import React from "react";
import { Link } from "react-router-dom";
import PinkButton from "../TopNavbar/Buttons/PinkButton";
import YellowButton from "../TopNavbar/Buttons/YellowButton";
import BlueButton from "../TopNavbar/Buttons/BlueButton";
import Flags from "../TopNavbar/Flags";
import LevelUpLogo from "./LevelUpLogo";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles.teacher_navbar}>
        <Link to='/'>
        <LevelUpLogo></LevelUpLogo>
        </Link>
        <div className={styles.navbar_buttons}>
          <YellowButton></YellowButton>
          <PinkButton></PinkButton>
          <BlueButton></BlueButton>
          <Flags></Flags>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
