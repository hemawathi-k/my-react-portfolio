import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { img: '../assets/1.png' },
    { img: '../assets/2.png' },
    { img: '../assets/3.png' },
    { img: '../assets/4.png' },
    { img: '../assets/5.png' },
    { img: '../assets/6.png' },
    { img: '../assets/7.png' },
    { img: '../assets/8.png' },
    { img: '../assets/9.png' },
    { img: '../assets/10.png' },
    { img: '../assets/11.png' },
    { img: '../assets/12.png' },
    { img: '../assets/13.png' },
    { img: '../assets/14.png' },
    { img: '../assets/15.png' },
    { img: '../assets/16.png' },
    { img: '../assets/17.png' },
    { img: '../assets/18.png' },
  ];

  return (
    <div className="projects-section" id='projects-section'>
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-img-wrapper">
              <img src={project.img} alt={`Screenshot ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
