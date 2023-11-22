import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "../styles/Navbar.css";


export const Navbar=() => {


  return (
    <div className="navbar" >
      {/* <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>*/}
      <div className="links">
        <Link to="/">Start</Link>
        <Link to="/about">Über mich</Link>
        <Link to="/projects">Projekte</Link>
        <Link to="/certifications">Zertifizierungen</Link>
      </div>
    </div>
  );
}

