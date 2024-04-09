import React from "react"
import './assets/css/style.css';
import Navbar from './components/Navbar'
import SocialsDesktop from './components/SocialsDesktop'
import Intro from './components/Intro'
import Technologies from "./components/Technologies"
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'




function App() {
  
  return (
    <div className="master-container">
      <Navbar />
      <SocialsDesktop />
      <div className="main-container">
        <Intro />
        <Technologies />
        <About />
        <Work />
        <Contact />
      </div>
    </div>   
  );
}

export default App;
