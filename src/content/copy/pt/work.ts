import { type WorkCopy } from "@/content/types/work";

export const work: WorkCopy = {
  label: "Projetos",
  heading: { text: "Projetos", accent: "selecionados" },
  partLabel: "Meu papel:",
  kinds: { caseStudy: "Estudo de caso", code: "Código", live: "Ao vivo" },
  featured: {
    marksage: {
      description:
        "Um editor de Markdown local-first que sugere correções enquanto você escreve: regras heurísticas e dois modelos de 385 KB treinados para ele, executados no navegador. Seus arquivos nunca saem dele.",
      part: "Projeto solo · produto, modelos, medição e código",
      visualAlt: "O editor do Marksage sugerindo a linguagem de um bloco de código",
    },
    zollama: {
      description:
        "Um SDK tipado para saída estruturada de modelos de IA, local-first via Ollama ou com qualquer um dos principais provedores. A saída do modelo é tratada como um body HTTP não confiável: um schema Zod é o contrato, e as falhas são corrigidas ou refeitas.",
      part: "Autor e mantenedor · open source",
      visualAlt: "Exemplo do Zollama: um schema Zod e uma chamada generate() tipada",
    },
    loreforge: {
      description:
        "Uma plataforma de RPG de mesa pensada para IA: mundos de campanha, grafos de história e sessões multiplayer ao vivo em mapas táticos, com um copiloto que lembra da campanha inteira.",
      part: "Autor · da engine de grid ao copiloto de IA",
      visualAlt: "A função de linha de visão do Loreforge",
    },
    "route-flyover-studio": {
      description:
        "Transforma um arquivo de atividade GPS em um vídeo cinematográfico 9:16, com um HUD animado de estatísticas. A leitura do arquivo, a renderização do mapa 3D e o encoding em MP4 acontecem no navegador.",
      part: "Autor · transformou um protótipo em um app completo",
      visualAlt: "Route Flyover Studio: vídeos de sobrevoo a partir de atividades GPS",
    },
  },
  moreTitle: "Primeiros projetos",
  more: {
    diversight: { description: "Back-end de um produto de análise de diversidade, ioasys CAMP 2021" },
    "send-email-api": { description: "API de e-mail do formulário de contato do meu primeiro portfólio" },
    pokedex: { description: "Todos os Pokémon, com busca, via PokéAPI" },
    podcastr: { description: "Player de podcasts, NLW 5 da Rocketseat" },
    letmeask: { description: "Salas de perguntas ao vivo, NLW 6 da Rocketseat" },
    ignite: { description: "Descoberta de jogos com a RAWG.io" },
  },
};
