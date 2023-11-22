import "../styles/Projects.css";
import {projects} from "./helpers/projects";
import {Footer} from './Footer';
import Cards from './Cards';
const projItems =projects.map(
(item) => {
return (
  <div key={item.id} className="card-wrap" >
     <Cards img={item.img}
            alt={item.alt}
            title={item.title}
            demoUrl={item.demoUrl}
            githubUrl={item.githubUrl}
       dropBox={item.dropBox}/>
  </div>
            )
        });
export const Projects = () => {
  return (
   <>
     <div className="card-grid">
      {projItems}
    </div>
     <Footer/></>
  );
};
