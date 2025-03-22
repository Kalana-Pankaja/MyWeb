import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Image Converter App',
      period: 'March 2025 - Present',
      description: [
        'Designed and developed React application for converting images',
        'various image formats',
        'changing quality and size of images',
        'responsive web design',
      ],
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Kalana-Pankaja/Image-Converter',
      demo: 'https://kalana-pankaja.github.io/Image-Converter/'
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-header">
            <div>
              <h3>{project.title}</h3>
              <p className="period">{project.period}</p>
            </div>
            <div className="project-controls">
              <button className="control-btn"><i className="fas fa-expand"></i></button>
              <button className="control-btn"><i className="fas fa-external-link-alt"></i></button>
            </div>
          </div>
          <div className="project-body">
            <ul>
              {project.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fab fa-github"></i> View Code
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
          <div className="project-footer">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;