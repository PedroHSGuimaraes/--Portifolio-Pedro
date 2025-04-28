import React from "react";

export function TechnicalSkills() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript",
      ],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "API REST"],
    },
    {
      category: "Bancos de Dados",
      technologies: ["MongoDB", "Supabase", "PostgreSQL"],
    },
    {
      category: "DevOps",
      technologies: ["Git", "GitHub", "Docker", "CI/CD"],
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* AI Automation Card */}
        <div className="lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500 animate-pulse transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            AI Automation
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Desenvolvimento de soluções de automação com IA integrando diversas
            ferramentas para criar fluxos de trabalho inteligentes para
            empresas. Implementação de sistemas automatizados para processos de
            negócios, marketing e atendimento ao cliente.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Tecnologias principais:
            </h4>
            <div className="flex flex-wrap gap-2">
              {["n8n", "Make", "Typebot", "Airtable", "AI Integration"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Competências:
            </h4>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              {[
                "Fluxos de trabalho automatizados com IA",
                "Integração entre múltiplas plataformas",
                "Formulários inteligentes com Typebot",
                "Gerenciamento de dados com Airtable",
                "Dashboards de análise de resultados",
              ].map((feature, i) => (
                <li key={i} className="mb-1">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Categorias de habilidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
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
