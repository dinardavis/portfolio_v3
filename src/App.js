import React from "react"
import Navbar from './components/Navbar'
import SocialsDesktop from './components/SocialsDesktop'
import Intro from './components/Intro'
import Email from './components/Email'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  //Detect and handle dark-mode toggle

 
  // React.useEffect(() => {
  //   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setDarkMode(true)
  //     toggleDarkMode()
  //   } 
  // }, [])
  
  return (
      <>  
        <div className="master-container">
          <Navbar />
          <SocialsDesktop />
          <Email />
          <div className="main-container">
            <Intro />
            <About />
            <Work />
            <Contact />
          </div>
          <Footer />
        </div>   
      </>
  
  );
}

export default App;
