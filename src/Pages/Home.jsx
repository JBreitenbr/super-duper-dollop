import "../styles/Home.css";
import wordcloud from './assets/wordcloud.png';
import {Footer} from './Footer';
import Type from './Type';
export const Home = () => {
  return (
   <><div className="home">
      <h2 className="name-tag">Julia Breitenbruch</h2> 
              <div className="type-wrapper">
                <Type />
              </div>
    <img src={wordcloud} id="wordcloud"/>
    </div><Footer/></>
  );
};
