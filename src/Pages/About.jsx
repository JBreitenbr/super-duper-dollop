import "../styles/About.css";
import AboutText from "./helpers/AboutText.jsx";
import {Footer} from './Footer';
export const About = () => {
  return (
   <><div className="about-div">
     <div>
 <div className="about-container"><h2 className="about">Über mich</h2>
   <AboutText/>
      </div>
   </div></div><Footer/></>
  );
};
