import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const technicalSkills = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Python', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'C++', category: 'Languages' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Git', category: 'Tools' },
    { name: 'Node.js', category: 'Backend' }
  ];

  const softSkills = [
    { name: 'Problem Solving' },
    { name: 'Team Work' },
    { name: 'Communication' },
    { name: 'Leadership' },
    { name: 'Agility' }
  ];

  const languages = [
    { name: 'English', level: 'Professional' },
    { name: 'Sinhala', level: 'Native' }
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skill-category">
        <h3>Technical Skills</h3>
        <div className="skill-tags">
          {technicalSkills.map((skill, index) => (
            <span key={index} className={`skill-tag ${skill.category.toLowerCase()}`}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
      <div className="skill-category">
        <h3>Soft Skills</h3>
        <div className="skill-tags">
          {softSkills.map((skill, index) => (
            <span key={index} className="skill-tag soft">
              {skill.name}
            </span>
          ))}
        </div>
      </div>
      <div className="skill-category">
        <h3>Languages</h3>
        <div className="skill-tags">
          {languages.map((lang, index) => (
            <span key={index} className="skill-tag language">
              {lang.name} - {lang.level}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;