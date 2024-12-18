import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Pedro Henrique</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Sobre</a>
            <a href="#experience" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Experiência</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Projetos</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Contato</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}