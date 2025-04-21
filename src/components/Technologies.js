import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import { IoStopOutline } from "react-icons/io5";



function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
     once: true,
     amount: 0.4
   });

  return (
    <section ref={ref} className="technologies-section section-container" id="technologies" >
      <span
        className="technologies-content"
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

export default function Technologies() {

  return (
    <>
      <Section>
        <div className="section-title tech">
          <p>These are some technologies I've been working with recently:</p>
          <div className="title-decoration"></div>
        </div>
        <div className="stack-logos">
          <div className='stack-tech-container'>
            <p className='stack-tech-name'><IoStopOutline className='stack-tech-marker' /> JavaScript</p>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/javascript.svg" className="stack-logo" title="Javascript" alt="JavaScript Logo" />
            </div>
          </div>

          <div className='stack-tech-container'>
            <p className='stack-tech-name'><IoStopOutline className='stack-tech-marker' />React</p>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/react.svg" className="stack-logo" title="React" alt="React Logo" />
            </div>
          </div>

          <div className='stack-tech-container'>
            <p className='stack-tech-name'><IoStopOutline className='stack-tech-marker' />Node.js</p>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/nodejs.svg" className="stack-logo" title="Node.js" alt="Node.js Logo" />
            </div>
          </div>

          <div className='stack-tech-container'>
            <p className='stack-tech-name'><IoStopOutline className='stack-tech-marker' />Next.js</p>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/nextjs.svg" className="stack-logo" title="Next.js" alt="Next.js Logo" />
            </div>
          </div>

          <div className='stack-tech-container'>
            <p className='stack-tech-name'><IoStopOutline className='stack-tech-marker' />Gatsby</p>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/gatsby.svg" className="stack-logo" title="Gatsby" alt="Gatsby Logo" />
            </div>
          </div>


          <div className='stack-tech-container'>
            <p className='stack-tech-name'><IoStopOutline className='stack-tech-marker' />Mongo DB</p>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/mongodb.svg" className="stack-logo" title="Mongo DB" alt="Mongo DB" />
            </div>
          </div>

          <div className='stack-tech-container'>
            <p className='stack-tech-name'><IoStopOutline className='stack-tech-marker' />Sass</p>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/sass.svg" className="stack-logo" title="Sass" alt="Sass Logo" />
            </div>
          </div>

          <div className='stack-tech-container'>
            <p className='stack-tech-name'><IoStopOutline className='stack-tech-marker' />Photoshop</p>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/photoshop.svg" className="stack-logo" title="Photoshop" alt="Photoshop Logo" />
            </div>
          </div>

          <div className='stack-tech-container'>
            <p className='stack-tech-name'><IoStopOutline className='stack-tech-marker' />Illustrator</p>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/illustrator.svg" className="stack-logo" title="Illustrator" alt="Illustrator Logo" />
            </div>
          </div> 
        </div> 
      </Section>
    </>
  )
}