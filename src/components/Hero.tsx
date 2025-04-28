import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl animate-fade-in">
            Desenvolvedor Full Stack
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 animate-slide-up">
            Especializado em desenvolvimento web moderno e soluções tecnológicas
            inovadoras
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/PedroHSGuimaraes"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-henrique-santos-guimarães-b06555121/"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:pedro.guimaraes02@hotmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
