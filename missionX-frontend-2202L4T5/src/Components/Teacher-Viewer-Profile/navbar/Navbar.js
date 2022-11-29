import React from "react";
import { Link } from "react-router-dom";
import NavButtons from "./NavButton";
import LevelUpLogo from "./LevelUpLogo";
import NavLogin from "./NavLogin";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to='/'>
      <LevelUpLogo />
      </Link>
      <NavButtons />
      <NavLogin />
    </div>
  );
}
