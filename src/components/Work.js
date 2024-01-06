import React from "react"
import Project from "./Project"
import projectData from "../projectData"
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="work section-container" id="work">
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

export default function Work() {
  const projects = projectData.map(project => {
    return ( 
      <Project 
        key={project.id}
        image={project.imageURL}
        title={project.title}
        desc={project.description}
        tech={project.tech}
        git={project.gitURL}
        demo={project.liveDemoURL}
      />
    )
  })

  return (
    <Section>
      <div className="section-title">
        <h3 >Projects</h3>
        <div className="title-decoration"></div>
      </div>

      <div className="projects-container">
        {projects}
      </div>
    </Section>
  )
}