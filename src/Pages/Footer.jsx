import React from "react";
import "../styles/Footer.css";

export const Footer=() => {
  return (
    <div className="footer">
      <p className="footer-size"> 
    <a href="https://www.github.com/JBreitenbr" target="_blank" >
  <i className="fa fa-github"></i></a>&nbsp;&nbsp;&nbsp;
      <a href="mailto:julia.breitenbruch@gmail.com">
    <i className="fa fa-envelope"></i></a>&nbsp;&nbsp;&nbsp;
  <a href="tel:+4915253917250">
    <i className="fa fa-phone" style={{marginRight:"2rem"}}></i></a>&copy; 2023 Julia Breitenbruch
    </p>
    </div>
  );
}

