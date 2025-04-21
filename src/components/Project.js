import React from 'react';

export default function Project(props) {
  const techIcons = props.tech.map((techItem, index) => {
    const srcPath = `/imgs/techstack/${techItem.icon_file}`;

    return (
      <li className="project-tech" key={index} title={techItem.icon_tooltip}>
        <img
          src={srcPath}
          alt={techItem.icon_tooltip}
          className="tech-icon"
        />
      </li>
    );
  });

  return (
    <section className="project-card-container">
      <div className="project-info">
        <h4 className="project-title">{props.title}</h4>
        <p>{props.desc}</p>
        <h3 className="proj-tech-header">Primary Technologies</h3>
        <ul className="proj-tech-list">{techIcons}</ul>
        <div className="btn-container">
          <a
            href={props.git}
            className="project-btn btn-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={props.demo}
            className="project-btn btn-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
      <div className="project-card">
        <img className="project-image" src={props.image} alt={props.title} />
      </div>
    </section>
  );
}
