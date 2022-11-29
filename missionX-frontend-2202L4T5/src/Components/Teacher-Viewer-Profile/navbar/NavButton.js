import React from "react";
import { Link } from "react-router-dom";

export default function NavButtons() {
  return (
    <div className="navButtons">
      <Link to='/'>
      <button>HOME</button>
      </Link>
      <button>PROJECTS</button>
      <Link to = "/teacher">
      <button>TEACHER</button>
      </Link>
    </div>
  );
}
