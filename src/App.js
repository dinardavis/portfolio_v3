import React from "react"
import './assets/css/style.css';
import Navbar from './components/Navbar'
import SocialsDesktop from './components/SocialsDesktop'
import Intro from './components/Intro'
import Technologies from "./components/Technologies"
import Email from './components/Email'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'




function App() {

  //Detect and handle dark-mode toggle

 
  // React.useEffect(() => {
  //   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setDarkMode(true)
  //     toggleDarkMode()
  //   } 
  // }, [])
  
  return (
    <div className="master-container">
      <Navbar />
      <SocialsDesktop />
      {/* <Email /> */}
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
