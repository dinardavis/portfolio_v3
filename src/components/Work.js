import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Project from "./Project";
import projectData from "../projectData";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
     once: true,
     amount: 0.03
   });

  return (
    <section ref={ref} className="work section-container" id="work">
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

export default function Work() {
  return (
    <Section>
      <div className="section-title work">
        <h3>Selected Work</h3>
        <div className="title-decoration"></div>
      </div>

      <div className="projects-container">
        {projectData.map((project) => (
          <Project
            key={project.id}
            image={project.imageURL}
            title={project.title}
            desc={project.description}
            tech={project.tech}
            git={project.gitURL}
            demo={project.liveDemoURL}
          />
        ))}
      </div>
    </Section>
  );
}
