import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="technologies" className='technologies-section'>
      <span
        className="technologies-content"
        style={{
          transform: isInView ? "none" : "translateX(700px)",
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
        <div className='technologies-copy-container'>
          <p className='technologies-copy'>Some technologies I commonly work with...</p>
        </div>
        <div className="stack-logos">
          <div className='stack-logos-ticker'>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/javascript.svg" className="stack-logo" title="Javascript" alt="JavaScript Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/nodejs.svg" className="stack-logo" title="Node.js" alt="Node.js Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/nextjs.svg" className="stack-logo" title="Next.js" alt="Next.js Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/react.svg" className="stack-logo" title="React" alt="React Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/gatsby.svg" className="stack-logo" title="Gatsby" alt="Gatsby Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/jquery.svg" className="stack-logo" title="jQuery" alt="JQuery Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/mongodb.svg" className="stack-logo" title="Mongo DB" alt="Mongo DB" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/sass.svg" className="stack-logo" title="Sass" alt="Sass Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/photoshop.svg" className="stack-logo" title="Photoshop" alt="Photoshop Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/illustrator.svg" className="stack-logo" title="Illustrator" alt="Illustrator Logo" />
            </div>  
          </div> 

          <div className='stack-logos-ticker' aria-hidden="true">
            <div className='stack-logo-container'>
              <img src="imgs/techstack/javascript.svg" className="stack-logo" title="Javascript" alt="JavaScript Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/nodejs.svg" className="stack-logo" title="Node.js" alt="Node.js Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/nextjs.svg" className="stack-logo" title="Next.js" alt="Next.js Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/react.svg" className="stack-logo" title="React" alt="React Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/gatsby.svg" className="stack-logo" title="Gatsby" alt="Gatsby Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/jquery.svg" className="stack-logo" title="jQuery" alt="JQuery Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/mongodb.svg" className="stack-logo" title="Mongo DB" alt="Mongo DB" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/sass.svg" className="stack-logo" title="Sass" alt="Sass Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/photoshop.svg" className="stack-logo" title="Photoshop" alt="Photoshop Logo" />
            </div>
            <div className='stack-logo-container'>
              <img src="imgs/techstack/illustrator.svg" className="stack-logo" title="Illustrator" alt="Illustrator Logo" />
            </div>          
          </div>
        </div>
      </Section>
    </>
  )
}