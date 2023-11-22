import './App.css'
import {useState,useEffect} from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Projects} from './Pages/Projects';
import {Certifications} from './Pages/Certifications';
import {Navbar} from './components/Navbar';


export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
          <Route path="/certifications" element={<Certifications/>}/>
        </Routes>
        </Router>
    </>
  )
}
