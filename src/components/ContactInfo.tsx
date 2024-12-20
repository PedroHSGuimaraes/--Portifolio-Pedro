import React from "react";
import { Mail, Linkedin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="transform hover:scale-105 transition-transform duration-300">
      <p className="text-gray-600">
        Interessado em trabalhar juntos? Entre em contato através dos canais
        abaixo.
      </p>
      <div className="mt-6 space-y-4">
        <a
          href="mailto:contact@example.com"
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <Mail className="mr-2" size={20} />
          pedro.guimaraes02@hotmail.com
        </a>
        <a
          href="https://linkedin.com"
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <Linkedin className="mr-2" size={20} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
