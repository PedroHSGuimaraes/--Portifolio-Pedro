import React from 'react';

const skills = [
  {
    title: "Frontend",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    icon: "🎨"
  },
  {
    title: "Backend",
    technologies: ["Node.js", "Express", "SQL"],
    icon: "⚙️"
  },
  {
    title: "DevOps",
    technologies: ["Git", "Docker", "CI/CD"],
    icon: "🚀"
  },
  {
    title: "Mobile",
    technologies: ["React Native", "Expo"],
    icon: "📱"
  }
];

export function SkillsGrid() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Habilidades Técnicas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.title}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{skill.icon}</span>
              <h4 className="text-xl font-semibold text-gray-900">{skill.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}