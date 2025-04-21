import React from "react"
import { ThemeProvider } from "./ThemeContext";
import './assets/css/style.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Technologies from "./components/Technologies"
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'





function App() {
  
  return (
    <ThemeProvider>
    <div className="master-container">
      <Navbar />
      <div className="main-container">
        <Intro />
        <About />
        <Technologies />
        <Work />
        <Contact />
      </div>
    </div>  
    </ThemeProvider> 
  );
}

export default App;
