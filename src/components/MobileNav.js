import React from "react";
import { useTheme } from "../ThemeContext";

export default function MobileNav(props) {
  const { isDarkMode, toggleTheme } = useTheme();

  if(props.mobileNavState) {
    document.body.classList.add('fixed-position')
  } else {
    document.body.classList.remove('fixed-position')
  }
 
  return (
    <div className="mobile-nav">
      <div className="hamburger" onClick={props.handleToggle} >
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
      </div>
      

      <div className={`mobile-nav-container ${props.mobileNavState ? "show-mobile-nav" : ""}`} onClick={props.handleToggle}>

        <a href="#about" className="nav-link">about</a>
        <a href="#technologies" className="nav-link">technologies</a>
        <a href="#work" className="nav-link">work</a>
        <a href="#contact" className="nav-link">contact</a>



        <div className="socials-mobile-nav">
          <a href="https://github.com/dinardavis" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/github.svg" alt="Github Logo"/></a>
          <a href="https://www.linkedin.com/in/dinardavis/" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/linkedin.svg" alt="LinkedIn Logo"/></a>
          <a href="https://x.com/dinardavis" className="social-link" target="_blank" rel="noopener noreferrer"><img src="imgs/social/twitter.svg" alt="X Logo"/></a>
     
        </div>

        <div onClick={toggleTheme} className=" dark-mode-toggle theme-toggle">
          <i className="fa-solid fa-lightbulb"></i>
        </div>
       
      </div>
    </div>
  )
}


