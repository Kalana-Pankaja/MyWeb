import React from 'react';
import '../styles/WorkExperience.css';

function WorkExperience() {
  const experiences = [
    {
      title: 'Computer Science and Engineering Undergraduate',
      company: 'University Of Moratuwa',
      period: 'Jan 2025 - Present',
      description: [
        'Solving Mathematical Problems Using Programming Languages',
        'Developing Software Applications',
        
      ],
      technologies: ['Java', 'c++', 'Python',]
    },
    {
        title: 'Freelancer',
        company: 'Fiver',
        period: '2018 - present',
        description: [
          'Created logos and designs for clients',
          'photo editing',
          'video editing',
          '3D',
        ],
        technologies: ['Photoshop', 'Premierpro', 'Blender', 'Ilustrator']
      }
    
  ];

  return (
    <section className="work-experience" id="experience">
      <h2>Work Experience</h2>
      
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <div className="experience-header">
            <div>
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="period">{exp.period}</p>
            </div>
            <div className="experience-controls">
              <button className="control-btn"><i className="fas fa-expand"></i></button>
              <button className="control-btn"><i className="fas fa-external-link-alt"></i></button>
            </div>
          </div>
          
          <div className="experience-body">
            <ul>
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="experience-footer">
            {exp.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default WorkExperience;