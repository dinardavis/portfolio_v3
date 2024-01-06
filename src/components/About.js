import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="about section-container" id="about">
      <span
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

export default function About() {

  return (
    <>
      <Section>
        <div className="section-title">
          <h3 >About</h3>
          <div className="title-decoration"></div>
        </div>
        <div className="about-content">      
          <div className="about-text-container">
            <p className="paragraph-text about-text">Howdy! Dinar, here. I began learning web development because I believe it to be the perfect combination of technical skill and creative expression, and I enjoy the challenge of combining them. Utilizing modern technologies to create valuable, fun, and aesthetically pleasing user experiences is my goal with every project.</p>
                    
            <p className="paragraph-text about-text">A few other tidbits about me: I'm a Japanese birth certificate holder,  globetrotter (Translation: I've eaten McDonald's on 4 continents), Star Trek fanatic (TNG), and a Fashionista...Interrupted.</p>

            <p className="paragraph-text about-text">The technologies that I'm most commonly working with right now:</p>
          </div>
          <div className="tech-stack">
            <div className="stack-logos">
              <img src="/imgs/techstack/javascript.svg" className="stack-logo" title="Javascript" alt="JavaScript Logo" />
              <img src="/imgs/techstack/nodejs.svg" className="stack-logo" title="Node.js" alt="Node.js Logo" />
              <img src="/imgs/techstack/react.svg" className="stack-logo" title="React" alt="React Logo" />
              <img src="/imgs/techstack/jquery.svg" className="stack-logo" title="jQuery" alt="JQuery Logo" />
              <img src="/imgs/techstack/sass.svg" className="stack-logo" title="Sass" alt="Sass Logo" />
              <img src="/imgs/techstack/photoshop.svg" className="stack-logo" title="Photoshop" alt="Photoshop Logo" />
              <img src="/imgs/techstack/illustrator.svg" className="stack-logo" title="Illustrator" alt="Illustrator Logo" />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
  
}