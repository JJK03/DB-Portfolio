import React from 'react';

function TechStackSection({ title, description, skills }) {
  return (
    <div className="card-glass p-4 p-md-4 mb-4 h-100">
      <h3 className="text-center mb-3">{title}</h3>
      <p className="text-center text-muted mb-4">{description}</p>
      <div className="d-flex justify-content-center flex-wrap gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-icon" title={skill.name}>
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStackSection;