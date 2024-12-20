import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/PedroHSGuimaraes",
    icon: <Github size={24} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/pedro-henrique-santos-guimarães-b06555121/",
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:pedro.guimaraes02@hotmail.com",
    icon: <Mail size={24} />,
    label: "Email",
  },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="text-gray-500 hover:text-gray-900 transform hover:scale-110 transition-all duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
