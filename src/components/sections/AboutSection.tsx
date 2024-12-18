import React from 'react';
import { SkillsGrid } from '../SkillsGrid';

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in">Sobre Mim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <p className="text-gray-600">
              Desenvolvedor Full Stack apaixonado por criar soluções web inovadoras e eficientes. 
              Experiência com React, Node.js e tecnologias modernas de desenvolvimento web.
            </p>
          </div>
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}