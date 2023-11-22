import "../styles/Home.css";
import wordcloud from './assets/wordcloud.png';

import Type from './Type';
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material
export const Home = () => {
  return (
   <><div className="home">
      <h2 className="name-tag">Julia Breitenbruch</h2> 
              <div className="type-wrapper">
                <Type />
              </div>
    <img src={wordcloud} id="wordcloud"/>
      <a href="mailto:julia.breitenbruch@gmail.com"><EmailIcon /></a>
      <a href="https://www.github.com/JBreitenbr"><GithubIcon /></a>
      <a href="tel:+4915253917250"><PhoneIcon /></a></div></>
  );
};
