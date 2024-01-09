import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai"

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="intro" className='intro-section'>
      <span
        className="greeting-message"
        style={{
          transform: isInView ? "none" : "translateX(-700px)",
          opacity: isInView ? 1 : 0,
          transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Intro() {

  return (
    <>
      <Section>
        <div className='greeting-container'>
          <h1 className="intro-greeting">Hi, my name is<span className="name"><a className="pulse" href="https://www.google.com/search?q=dinar+pronunciation&rlz=1C5CHFA_enUS760US760&ei=cBthYdrKL5Cq_QbdorbAAw&oq=dinar+pronunciation&gs_lcp=Cgdnd3Mtd2l6EAEYADIECAAQQzIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIECAAQQzIGCAAQBxAeMgYIABAHEB4yCAgAEAcQChAeMggIABAHEAoQHjIGCAAQBRAeSgQIQRgASgUIRBiccUoFCEQYuXJKBAhDGAJKBQhFGLlyULhuWORxYI9_aABwAngAgAGMAYgB_QSSAQMwLjWYAQCgAQHAAQE&sclient=gws-wiz"  target="_blank" rel="noreferrer">Dinar</a> Davis.</span></h1>
          <p className="paragraph-text intro-text">I'm a Developer focused on connecting with opportunities to build engaging, useful and accessible tools for the web.</p>
        </div>

        <div className='intro-logo-container'>
          <img className="intro-logo" src="imgs/main_logo.png" alt="Dinar Davis Main Logo" />
        </div>

        <div className='intro-text-container'>
          
          <p className="paragraph-text intro-text">If you have a project that you're interested in collaborating on, feel free to drop me a line.</p>


          <div className='intro-btn-container'>
            <a href="mailto:dinardavis@gmail.com?subject=I%20saw%20your%20portfolio%20and..." target="_blank" rel="noopener noreferrer" className="contact-btn intro-btn">Get In Touch</a>
            <a href={require("../assets/dinardavis.pdf")} download="Dinar Davis Resume" className="contact-btn intro-btn" target="_blank" rel="noopener noreferrer"><AiOutlineDownload className='btn-icon' /> Resumé</a>
          </div>
        </div>
      </Section>
    </>
  )
}