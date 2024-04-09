import React from 'react'

export default function Project(props) {
  let listItems = []
  for(let i = 0; i < props.tech.length; i++) {
    listItems.push(<li className='project-tech' key={i} > {props.tech[i]}</li>)
  }

  return (
    <>
      <div className='project-card-mobile-container'>
        <div className='project-info'>
          <h3 className="proj-tech-header">Primary Technologies</h3>
          <ul className="proj-tech-list">
            {listItems}
          </ul>
        </div>
        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <h4 className="project-title">{props.title}</h4>
              <div className="project-image" style={{backgroundImage: props.image}}>
              </div>  
            </div>
            <div className="project-card-back">
              <div className="project-desc">
                <p>{props.desc}</p>
              </div>
              <div className='btn-container'>
                <a href={props.git} className="project-btn btn-1" target="_blank" rel="noopener noreferrer">Github</a>
                <a href={props.demo} className="project-btn btn-2" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>         
            </div>     
          </div>
        </div>
      </div>

      <section className='project-card-desktop-container'>
        <div className='project-info'>
          <h3 className="proj-tech-header">Primary Technologies</h3>
          <ul className="proj-tech-list">
            {listItems}
          </ul>
        </div>
        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <h4 className="project-title">{props.title}</h4>
              <div className="project-image" style={{backgroundImage: props.image}}>
            
              </div>  
            </div>
            <div className="project-card-back">
              <div className="project-desc">
                <p>{props.desc}</p>
              </div>
              <div className='btn-container'>
                <a href={props.git} className="project-btn btn-1" target="_blank" rel="noopener noreferrer">Github</a>
                <a href={props.demo} className="project-btn btn-2" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>         
            </div>     
          </div>
        </div>
      </section>

    </>
   
  )
}