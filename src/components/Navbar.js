
import React from 'react';
import { useTheme } from "../ThemeContext";
import MobileNav from './MobileNav';
import { debounce } from './utilities/helpers';

export default function Navbar() {
  const [prevScroll, setPrevScroll] = React.useState(0) 
  const [visible, setVisible] = React.useState(true)
  const [mobileNavState, setMobileNavState] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  const { isDarkMode, toggleTheme } = useTheme();

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

  function handleToggle() {
    setMobileNavState(prevNav => !prevNav)
  }


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
        <a href="#technologies" className="nav-link">technologies</a>
        <a href="#work" className="nav-link">work</a>
        <a href="#contact" className="nav-link">contact</a>
      </div>

      <div className="main-nav-right">
        <a href="https://github.com/dinardavis" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/github.svg" alt="Github Logo"/></a>
        <a href="https://www.linkedin.com/in/dinardavis/" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/linkedin.svg" alt="LinkedIn Logo"/></a>
        <a href="https://x.com/dinardavis" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/twitter.svg" alt="X Logo"/></a>
        <div onClick={toggleTheme} className=" dark-mode-toggle theme-toggle">
          <i className="fa-solid fa-lightbulb"></i>
        </div>
      </div>

      <MobileNav 
        mobileNavState={mobileNavState}
        handleToggle={handleToggle} 
      />
    </header>
      
  )
}