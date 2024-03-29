import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="about about-section section-container" id="about">
      <span
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

export default function About() {

  return (
    <>
      <Section>
        <div className="section-title about-title">
          <h3 >About</h3>
          <div className="title-decoration"></div>
        </div>
        <div className="about-content">      
          <div className="about-text-container">
            <p className="paragraph-text about-text">Howdy! Dinar, here. I began learning web development because I believe it to be the perfect combination of technical skill and creative expression, and I enjoy the challenge of combining them. Utilizing modern technologies to create valuable, fun, and aesthetically pleasing user experiences is my goal with every project.</p>
                    
            <p className="paragraph-text about-text">A few other tidbits about me: I'm a Japanese birth certificate holder,  globetrotter (Translation: I've eaten McDonald's on 4 continents), Star Trek fanatic (TNG), and a Fashionista...Interrupted.</p>
          </div>
        </div>
      </Section>
    </>
  )
  
}