import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl animate-fade-in">
            Desenvolvedor Full Stack
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 animate-slide-up">
            Especializado em desenvolvimento web moderno e soluções tecnológicas
            inovadoras
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/PedroHSGuimaraes"
              className="text-gray-500 hover:text-gray-900 transform hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-henrique-santos-guimarães-b06555121/"
              className="text-gray-500 hover:text-gray-900 transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:  pedro.guimaraes02@hotmail.com"
              className="text-gray-500 hover:text-gray-900 transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
