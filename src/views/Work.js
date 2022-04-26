import React, { useState } from 'react'
import projectData from '../data/projects'
import img1 from '../assets/images/img-code.png'
import HeroImg from '../components/HeroImg'

export default function Work() {
    const [projects] = useState(projectData)

    const project = projects.map(project => {
        return <div key={project.id} className="project">
            {/* title */}
            <div className="project-title flex-row">
                <h3>{project.title}</h3>
                <h4>{project.type}</h4>
                {/* <img src={`${project.cover}`} alt="map" width="50" /> */}
                <img src={`../assets/images/projects/${project.cover}`} alt="map" width="50" />
                <img src={require(`../assets/images/projects/${project.cover}`)} alt="map require" width="50" />
            </div>
            {/* image */}
            <div className="project-images flex-row-center">
                <div className="project-img flex-column-center"
                    style={{ backgroundImage: `url(../assets/images/projects/${project.cover})` }}>
                </div>
            </div>
            {/* img fit */}
            <h2>img fit mat</h2>
            <div className="project-img-fit">
                <img src={require(`../assets/images/projects/${project.cover}`)} alt={project.title} className="img-fit" width="300" />
            </div>
        </div>
    })

    return (
        <div className='container'>
            <h2>work</h2>
            <p>1 - require img ../</p>
            <img src={require('../assets/images/img-design.png')} alt="require" />
            <hr />
            <p>2 - import ../assets/images/img-code.png</p>
            <img src={img1} alt="import ../" />
            <hr />
            <p>3 - import img component</p>
            <HeroImg />
            <hr />
            <p>map</p>
            <div className="projects flex-row-center">
                {project}
            </div>
        </div>
    )
}