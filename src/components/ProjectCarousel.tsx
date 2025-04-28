/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";

// Componente para pré-carregar imagens
function PreloadImages({ images }: { images: string[] }) {
  return (
    <div style={{ display: "none" }}>
      {images.map((src, index) => (
        <img key={`preload-${index}`} src={src} alt="Preload" />
      ))}
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "Agente de Prospecção de Clientes com n8n",
    description:
      "Desenvolvimento de um agente automatizado utilizando n8n e RapidAPI para coletar vagas de emprego. O sistema busca empresas no Google, realiza scraping de dados e salva informações no Supabase, com contato via WhatsApp e e-mail.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    technologies: ["n8n", "RapidAPI", "Supabase", "Web Scraping", "API Google"],
    features: [
      "Busca automática de empresas no Google",
      "Coleta de dados de vagas de emprego",
      "Scraping de sites corporativos",
      "Armazenamento no Supabase",
      "Contato automático via WhatsApp e e-mail",
    ],
  },
  {
    id: 2,
    title: "Agente de Atendimento com n8n e Botpress",
    description:
      "Criação de um agente de atendimento com n8n e Botpress, incluindo widget personalizado de chatbot para páginas de captura, com integração automática de leads ao CRM RD Station.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: [
      "n8n",
      "Botpress",
      "JavaScript",
      "RD Station CRM",
      "API Integration",
    ],
    features: [
      "Widget personalizado de chatbot",
      "Integração com páginas de captura",
      "Fluxo de conversação inteligente",
      "Qualificação automática de leads",
      "Integração com RD Station CRM",
    ],
  },
  {
    id: 3,
    title: "Agente de Prospecção para Lojas do Mercado Livre",
    description:
      "Implementação de um agente em Python e n8n para prospecção de lojas do Mercado Livre, utilizando Serper API para busca, scraping de dados de contato e integração com Supabase para oferecimento de produtos específicos.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["Python", "n8n", "Serper API", "Supabase", "Web Scraping"],
    features: [
      "Busca de lojas no Mercado Livre",
      "Extração de dados de contato",
      "Análise de nicho de mercado",
      "Armazenamento no Supabase",
      "Oferecimento personalizado de produtos",
    ],
  },
];

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [direction, setDirection] = useState("right");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const slideContainerRef = useRef<HTMLDivElement | null>(null);
  
  // Extrair URLs das imagens para pré-carregamento
  const projectImages = projects.map(project => project.image);

  // Função para aplicar efeito de transição suave
  const applyTransition = (direction: "left" | "right") => {
    if (slideContainerRef.current) {
      const container = slideContainerRef.current;
      
      // Primeiro removemos qualquer transformação existente
      container.style.transition = "none";
      container.style.transform = "translateX(0)";
      
      // Forçar um reflow para garantir que a transição seja aplicada corretamente
      void container.offsetWidth;
      
      // Definimos a animação baseada na direção com easing mais suave
      container.style.transition = "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)";
      
      if (direction === "right") {
        container.style.transform = "translateX(-30px)";
        setTimeout(() => {
          container.style.transform = "translateX(0)";
        }, 10);
      } else {
        container.style.transform = "translateX(30px)";
        setTimeout(() => {
          container.style.transform = "translateX(0)";
        }, 10);
      }
    }
  };

  // Efeito para pré-carregar todas as imagens quando o componente é montado
  useEffect(() => {
    // Iniciar apenas com detalhes visíveis, sem animação automática
    setShowDetails(true);
    
    // Função para pré-carregar todas as imagens dos projetos
    const preloadImages = () => {
      // Criamos um array de promessas, uma para cada imagem a ser carregada
      const imagePromises = projectImages.map((src) => {
        // Cada promessa é resolvida quando a imagem carrega ou rejeitada se ocorrer erro
        return new Promise((resolve, reject) => {
          const img = new Image(); // Cria um novo elemento de imagem
          img.src = src;           // Define a URL da imagem
          img.onload = resolve;    // Resolve a promessa quando a imagem carregar
          img.onerror = reject;    // Rejeita a promessa se ocorrer erro
        });
      });
      
      // Aguarda todas as imagens serem carregadas
      Promise.all(imagePromises)
        .then(() => {
          // Quando todas as imagens carregarem, atualiza o estado
          setImagesLoaded(true);
          console.log("Todas as imagens foram pré-carregadas");
        })
        .catch(err => console.error("Erro ao pré-carregar imagens:", err));
    };
    
    // Chama a função de pré-carregamento
    preloadImages();
    
    // Não é necessário adicionar projectImages como dependência
    // pois é constante e não muda durante o ciclo de vida do componente
  }, []);

  const handlePrevious = () => {
    setDirection("left");
    setShowDetails(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
      setShowDetails(true);
      applyTransition("left");
    }, 200); // Reduzindo o tempo de espera para uma transição mais fluida
  };

  const handleNext = () => {
    setDirection("right");
    setShowDetails(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
      setShowDetails(true);
      applyTransition("right");
    }, 200); // Reduzindo o tempo de espera para uma transição mais fluida
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Componente para pré-carregar todas as imagens */}
      <PreloadImages images={projectImages} />
      
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-12 transition-colors duration-300">
        {/* Controles de navegação */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 dark:bg-gray-600 text-white p-3 z-10 opacity-70 hover:opacity-100 transition-opacity rounded-r-lg"
          onClick={handlePrevious}
          aria-label="Projeto anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 dark:bg-gray-600 text-white p-3 z-10 opacity-70 hover:opacity-100 transition-opacity rounded-l-lg"
          onClick={handleNext}
          aria-label="Próximo projeto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Projeto atual */}
        <div className="flex flex-col md:flex-row">
          {/* Contenedor da imagem com tamanho fixo para evitar layout shift */}
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
            {/* 
              Imagem do projeto com tratamento especial:
              1. Mostra a imagem apenas quando todas estão carregadas (imagesLoaded)
              2. Usa transição suave para opacity e transform
              3. Atributo loading="eager" para carregar com alta prioridade
            */}
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className={`w-full h-full object-cover ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s ease-in-out",
              }}
              loading="eager"
              onLoad={() => {
                // Garante que a imagem está visível após carregamento individual
                setImagesLoaded(true);
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
              <h3 className="text-2xl font-bold mb-2 animate-fade-in">
                {currentProject.title}
              </h3>
            </div>
          </div>

          <div 
            ref={slideContainerRef} 
            className="md:w-1/2 p-6"
          >
            {showDetails && (
              <div 
                style={{
                  animation: `${direction === "right" ? "slideInRight" : "slideInLeft"} 0.3s ease-out forwards`
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {currentProject.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {currentProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Tecnologias utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Funcionalidades:
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                    {currentProject.features.map((feature, i) => (
                      <li key={i} className="mb-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Indicadores de navegação */}
      <div className="flex justify-center space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gray-800 dark:bg-gray-200 w-4"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left");
              setShowDetails(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setShowDetails(true);
              }, 300);
            }}
            aria-label={`Ir para projeto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
