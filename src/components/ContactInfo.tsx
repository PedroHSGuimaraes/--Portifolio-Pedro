import React from "react";
import { Mail, Linkedin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Interessado em trabalhar juntos? Entre em contato através dos canais
        abaixo.
      </p>
      <div className="space-y-4">
        <a
          href="mailto:pedro.guimaraes02@hotmail.com"
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          aria-label="Email"
        >
          <Mail className="mr-3" size={20} />
          pedro.guimaraes02@hotmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-henrique-santos-guimarães-b06555121/"
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="mr-3" size={20} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
