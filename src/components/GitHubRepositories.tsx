import React, { useState, useEffect } from "react";

type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
};

export function GitHubRepositories() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Nome de usuário correto do GitHub
    const username = "PedroHSGuimaraes";

    // Função para buscar os repositórios
    const fetchRepositories = async () => {
      // Verificar se existem dados em cache e se são recentes (menos de 1 hora)
      const cachedData = localStorage.getItem("github_repos");
      const cachedTime = localStorage.getItem("github_repos_time");

      // Se temos dados em cache e eles têm menos de 1 hora
      if (cachedData && cachedTime) {
        const parsedTime = parseInt(cachedTime);
        const now = new Date().getTime();
        const oneHour = 60 * 60 * 1000; // 1 hora em milissegundos

        if (now - parsedTime < oneHour) {
          // Usar dados do cache
          console.log("Usando dados em cache do GitHub");
          setRepositories(JSON.parse(cachedData));
          setLoading(false);
          return;
        }
      }

      try {
        setLoading(true);
        console.log(
          `Buscando repositórios do GitHub para o usuário: ${username}...`
        );

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          {
            headers: {
              // Adicionar cabeçalho de aceite para utilizar a API v3 do GitHub
              Accept: "application/vnd.github.v3+json",
            },
            // Adicionar um timeout para a requisição
            signal: AbortSignal.timeout(10000), // 10 segundos de timeout
          }
        );

        if (!response.ok) {
          // Gerar mensagem de erro mais detalhada
          const errorDetail = await response.text();
          console.error(`Erro HTTP ${response.status}: ${errorDetail}`);

          if (response.status === 403) {
            throw new Error(
              "Limite de requisições da API do GitHub excedido. Tente novamente mais tarde."
            );
          } else if (response.status === 404) {
            throw new Error(`Usuário '${username}' não encontrado no GitHub.`);
          } else {
            throw new Error(
              `Erro ao carregar repositórios (HTTP ${response.status})`
            );
          }
        }

        const data = await response.json();

        // Salvar no cache local
        localStorage.setItem("github_repos", JSON.stringify(data));
        localStorage.setItem("github_repos_time", String(new Date().getTime()));

        setRepositories(data);
        setLoading(false);
        console.log(
          `Repositórios carregados com sucesso: ${data.length} encontrados`
        );
      } catch (err) {
        if (err instanceof Error) {
          console.error("Erro ao carregar repositórios:", err.message);
          setError(err.message);
        } else {
          console.error("Erro desconhecido:", err);
          setError("Erro ao carregar repositórios do GitHub");
        }

        // Em caso de erro, tentar usar dados do cache mesmo antigos
        if (cachedData) {
          console.log("Usando dados em cache antigos devido ao erro");
          setRepositories(JSON.parse(cachedData));
        }

        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="animate-pulse flex flex-col items-center">
          <svg
            className="animate-spin h-8 w-8 text-gray-500 mb-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Carregando repositórios do GitHub...</span>
        </div>
      </div>
    );
  }

  if (error && repositories.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="text-red-500 mb-4">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
        >
          Tentar Novamente
        </button>
      </div>
    );
  }

  if (repositories.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">
          Nenhum repositório encontrado para o usuário PedroHSGuimaraes.
        </p>
        <a
          href={`https://github.com/PedroHSGuimaraes`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
        >
          Ver Perfil no GitHub
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </a>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Meus Repositórios no GitHub
      </h3>
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">
            {error}. Mostrando dados que podem estar desatualizados.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {repositories.map((repo) => (
          <div
            key={repo.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:translate-y-[-5px] transition-all duration-300"
          >
            <div className="p-5">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">
                {repo.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 h-12 overflow-hidden">
                {repo.description || "Sem descrição disponível"}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  {repo.language || "N/A"}
                </span>
                <div className="flex space-x-3 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {repo.forks_count}
                  </span>
                </div>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                Ver Repositório
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href={`https://github.com/PedroHSGuimaraes`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          Ver Todos os Repositórios
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
