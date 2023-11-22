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
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/certifications"> Certifications </Link>
      </div>
    </div>
  );
}

