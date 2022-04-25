import React, { useState } from 'react'
import projectData from '../data/projects'
import img1 from '../assets/images/img-code.png'
import img2 from '../assets/images/img-code.png'

export default function Work() {
    const [projects] = useState(projectData)

    const project = projects.map(project => {
        return <div key={project.id} className="project">
            {/* title */}
            <div className="project-title flex-row">
                <h3>{project.title}</h3>
                <h4>{project.type}</h4>
                <img src={`../assets/images/projects/${project.cover}`} alt="map" width="50" />
                <img src={require(`../assets/images/projects/${project.cover}`)} alt="map" width="50" />
            </div>
            {/* tech */}
            {/* <div className="project-tech flex-row-center">
                {project.tech.map((el, i) => {
                    return <div key={i} className="project-tech-inner"><p>{el}</p> </div>
                })}
            </div> */}
            {/* image */}
            <div className="project-images flex-row-center">
                <div className="project-img flex-column-center"
                    id={`project-img-${project.id}`}
                    style={{ backgroundImage: `url(../assets/images/projects/${project.cover})` }}>
                </div>
            </div>
            {/* links */}
            {/* <div className="project-links flex-row-center">
                <a href={project.linkCode} className='project-link flex-row' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    <p>source code</p>
                </a>
                <a href={project.linkFigma}
                    className={`project-link flex-row ${project.linkFigma !== "" ? "" : "no-link"}`}
                    target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFigma} />
                    <p>wireframe</p>
                </a>
                <a href={project.linkDemo} className='project-link flex-row' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGlobe} />
                    <p>live demo</p>
                </a>
            </div> */}
        </div>
    })

    return (
        <div className='container'>
            <h2>work</h2>
            <p>require img ../</p>
            <img src={require('../assets/images/img-design.png')} alt="require" />

            {/* <p>require img ./</p> */}
            {/* <img src={require('./assets/images/img-design.png')} alt="require" /> */}

            <p>import ../assets/images/img-code.png</p>
            <img src={img1} alt="import ../" />

            <p>import ./assets/images/img-code.png</p>
            <img src={img2} alt="import ./" />

            <p>map</p>
            <div className="projects flex-row-center">
                {project}
            </div>
        </div>
    )
}