import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectCarousel } from './components/ProjectCarousel';
import { ContactInfo } from './components/ContactInfo';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <AboutSection />

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experiência</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Desenvolvedor Full Stack</h3>
              <p className="text-gray-600 mt-2">
                Desenvolvimento de aplicações web utilizando React, Node.js e outras tecnologias modernas.
                Trabalho em equipe e participação em projetos complexos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Projetos</h2>
          <ProjectCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>© 2024 Pedro Henrique. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;