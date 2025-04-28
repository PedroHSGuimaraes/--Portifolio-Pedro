import React from "react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">
          Sobre Mim
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-colors duration-300">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Desenvolvedor Full Stack apaixonado por criar soluções web
              inovadoras e eficientes. Experiência com React, Node.js e
              tecnologias modernas de desenvolvimento web.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Especializado em automatização de processos usando ferramentas
              como n8n, Make e integração de APIs. Focado na criação de soluções
              que otimizam fluxos de trabalho e aumentam a produtividade das
              equipes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
