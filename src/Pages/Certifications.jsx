import "../styles/Certifications.css";
import {Footer} from './Footer';
import {certs} from "./helpers/certs";
const listItems =certs.map(
(item) => {
return (
  <div key={item.id}>
       <p className="dim-margin"><a href={item.url} className="cert-items" target="_blank">{item.desc}</a>
       </p>
  </div>
      )});

export const Certifications = () => {
  return (
   <> <div className="certs">
      <div className="certs-container">
      <div className="certs-wrapper">  <p className="pre-list">Im folgenden eine Liste meiner Zertifizierungen auf freeCodeCamp (es mussten dafür jeweils fünf Projekte erstellt werden, welche im unteren Bereich des jeweiligen Dokuments verlinkt sind): </p>
  <div>{listItems}</div>
      </div></div>
  </div>
     <Footer/></>
  );
};
