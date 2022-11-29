import React from "react";
import NZflag from "../navbar/images/NZ-Flag.png";
import MaoriFlag from "../navbar/images/Maori-flag.png";
import PersonIcon from "../navbar/images/Iconawesome-user-circle.png";
import "./Navbar.css";

export default function NavLogin() {
  return (
    <section className="navLogin">
      <div className="flags">
        <p1>LANG</p1>
        <img src={NZflag} alt="NZ flag"></img>
        <img src={MaoriFlag} alt="Maori Flag"></img>
      </div>
      <div className="login">
        <img src={PersonIcon} alt="Person Icon"></img>
        <button>REGISTER | LOGIN</button>
      </div>
    </section>
  );
}
