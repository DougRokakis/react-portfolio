import React from 'react'
import Header from "../components/Header"
import {FaLaptopCode} from 'react-icons/fa'
import projectsdata from './projectsdata'

function Projects() {
  return (
    <div>
      <Header />
      <div className="container projects-intro">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 n-box2 px-3 py-5" data-aos='fade-down'>
            <div >
              <h1 className='font-bold'>
                Projects
              </h1>
              <p className='font-bold'>
                Good ideas are not adopted automatically. They must be driven into practice with courageous patience.
              </p>
              <button className='primary-button projects-btn'><a href="#projects" className='white'>Get Started</a></button>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path 
                fill="#0F62FE" 
                d="M48,-67.2C62.5,-55.6,74.6,-41.9,80.9,-25.6C87.2,-9.3,87.6,9.7,82.1,26.7C76.6,43.7,65.1,58.8,50.5,66.9C35.8,74.9,17.9,76,0.9,74.8C-16.2,73.7,-32.4,70.3,-44.6,61.4C-56.8,52.5,-65,38.1,-69.2,23C-73.4,7.9,-73.6,-8,-69.5,-23.2C-65.4,-38.4,-57.1,-52.8,-44.8,-65.1C-32.5,-77.4,-16.3,-87.7,0.3,-88.1C16.8,-88.4,33.6,-78.9,48,-67.2Z" 
                transform="translate(100 100)" 
              />
            </svg>
            <FaLaptopCode 
            color='white'
            size="180"
            className='position-absolute top-50 start-50 translate-middle'/>
          </div>
        </div>
      </div>

      <div className="container projects-list">

        <h3 className='font-bold' id="projects">Take a look at our projects</h3>
        <hr />

        <div className="row">

          {projectsdata.map(project=>{
            return <div className="col-md-4">
              <div className="position-relative project">
                <img src={project.image} alt="" />
                <div className="project-content">
                  <p>{project.title}</p>
                  <hr />
                  <p>{project.description}</p>
                  <button className='primary-button'>Demo</button>
                </div>
              </div>
            </div>
          })}

        </div>

      </div>
    </div>
  )
}

export default Projects