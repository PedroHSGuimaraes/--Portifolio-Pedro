import React from 'react';

const skills = [
  {
    title: "Frontend",
    technologies: "React, TypeScript, Tailwind CSS"
  },
  {
    title: "Backend",
    technologies: "Node.js, Express, SQL"
  }
];

export function SkillsGrid() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Habilidades Técnicas</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.title} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h4 className="font-medium text-gray-900">{skill.title}</h4>
            <p className="text-gray-600">{skill.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
}