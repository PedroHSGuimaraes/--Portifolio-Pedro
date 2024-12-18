import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Desenvolvimento de aplicação web com React e Node.js",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Sistema de gerenciamento com TypeScript e Express",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Aplicação móvel desenvolvida com React Native",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-96">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project) => (
          <div 
            key={project.id}
            className="min-w-full h-full flex-shrink-0 group"
          >
            <div className="relative h-full">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-center">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}