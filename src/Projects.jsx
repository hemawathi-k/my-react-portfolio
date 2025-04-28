import React from 'react';
import './Projects.css';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';
import img13 from '../assets/13.png';
import img14 from '../assets/14.png';
import img15 from '../assets/15.png';
import img16 from '../assets/16.png';
import img17 from '../assets/17.png';
import img18 from '../assets/18.png';

const Projects = () => {
  const projects = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
    { img: img11 },
    { img: img12 },
    { img: img13 },
    { img: img14 },
    { img: img15 },
    { img: img16 },
    { img: img17 },
    { img: img18 },
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
