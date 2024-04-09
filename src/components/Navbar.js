
import React from 'react';
import MobileNav from './MobileNav';
import { debounce } from './utilities/helpers';

export default function Navbar() {
  const [prevScroll, setPrevScroll] = React.useState(0) 
  const [visible, setVisible] = React.useState(true)
  const [mobileNavState, setMobileNavState] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
    if(!darkMode) {
      document.body.id = "dark-mode"
    } else {
      document.body.id = ""
    }
  }

  function handleToggle() {
    setMobileNavState(prevNav => !prevNav)
  }


  const handleScroll = debounce(() => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop === 0) {
      setVisible(true)
    } else if(scrollTop > 120 && scrollTop < 700) {
      if (scrollTop > prevScroll) {
          setVisible(false)
      } else {
        setVisible(true)
      }  
    } else if(scrollTop > 700 ) {
      setVisible(true)
    } 
    setPrevScroll(scrollTop)
  }, 10)

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScroll, visible, handleScroll])

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowResize)

    if(windowWidth > 800) {
      setMobileNavState(false)
    }
  }, [windowWidth])

  const styles = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    zIndex: '100',
    width: '100%',
    transition: 'top 0.3s'
  }

  return (
    <header className={`nav-container ${prevScroll === 0 || mobileNavState ? "no-background" : "nav-shadow"}`} style = {{...styles, top: visible ? '0px' : '-75px', backgroundColor: mobileNavState ? "transparent" : ""}}>
      <a href="#top">
        <img className="nav-logo" style = {{opacity: mobileNavState ? "0" : "1"}} src="imgs/main_logo.png" alt="Dinar Davis Main Logo" />
      </a>

      <div className="main-nav">
        <a href="#about" className="nav-link">about</a>
        <a href="#work" className="nav-link">projects</a>
        <a href="#contact" className="nav-link">contact</a>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}><i className="fa-solid fa-lightbulb"></i></div>
      </div>

      <MobileNav 
        mobileNavState={mobileNavState}
        handleToggle={handleToggle} 
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      
    </header>
      
  )
}