import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/sections/AboutSection";
import { TechnicalSkills } from "./components/TechnicalSkills";
import { ProjectCarousel } from "./components/ProjectCarousel";
import { GitHubRepositories } from "./components/GitHubRepositories";
import { ContactInfo } from "./components/ContactInfo";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/animations.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <AboutSection />

        {/* Technical Skills Section */}
        <section
          id="skills"
          className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Habilidades Técnicas
            </h2>
            <TechnicalSkills />
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Experiência
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Desenvolvedor Full Stack
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Desenvolvimento de aplicações web utilizando React, Node.js e
                  outras tecnologias modernas. Trabalho em equipe e participação
                  em projetos complexos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Projetos em Destaque
            </h2>
            <ProjectCarousel />

            {/* GitHub Repositories Section */}
            <GitHubRepositories />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Contato
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <p>© 2024 Pedro Henrique. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
