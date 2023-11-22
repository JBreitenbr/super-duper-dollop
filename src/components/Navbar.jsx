import Giulietta from './assets/Giulietta.png';
{/*export const Navbar=() => {
  return ( 
    <nav id="navbar" className="navbar navbar-expand-sm navbar-light" style={{backgroundColor:"#f3f3f3"}}><Link to="/" className="navbar-brand" >
    <img className="jull-brand" src={Giulietta}/></Link><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
<div className="collapse navbar-collapse" id="navbarNav">
<Link to="/" className="nav-link nav-item nav-custom" 
>Start</Link>
<Link to="/about" className="nav-link nav-item nav-custom" 
>Über mich</Link>
<Link to="/projects" className="nav-link nav-item nav-custom" 
>Projekte</Link>
 <Link to="/certifications" className="nav-link nav-item nav-custom" 
>Zertifizierungen</Link>
</div> 
 </nav>);
 }*/}
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
/*import ReorderIcon from "@material-ui/icons/Reorder";*/

export const Navbar=() => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
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

