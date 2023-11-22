import React, { useEffect, useState } from "react";
import { Link,useLocation} from "react-router-dom";
import "../styles/Navbar.css";


export const Navbar=() => {
  const [expandNavbar, setExpandNavbar] = useState(true);

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

