import { type WorkCopy } from "@/content/types/work";

export const work: WorkCopy = {
  label: "Projetos",
  heading: { text: "Projetos", accent: "selecionados" },
  partLabel: "Meu papel:",
  kinds: { caseStudy: "Estudo de caso", code: "Código", live: "Ao vivo" },
  featured: {
    marksage: {
      tagline: "O editor de Markdown atento aos detalhes.",
      description:
        "Um editor de Markdown local-first que sugere correções enquanto você escreve: regras heurísticas e dois modelos de 385 KB treinados para ele, executados no navegador. Seus arquivos nunca saem dele.",
      part: "Projeto solo · produto, modelos, medição e código",
      fact: "modelos de 385 KB · ~0,1 ms por decisão",
    },
    zollama: {
      tagline: "Trate a saída de um modelo como um body HTTP não confiável.",
      description:
        "Um SDK tipado para saída estruturada de modelos de IA, local-first via Ollama ou com qualquer um dos principais provedores. Um schema Zod é o contrato: a saída que não o cumpre é corrigida ou refeita, nunca aceita em silêncio.",
      part: "Autor e mantenedor · open source",
      fact: "2 dependências em runtime · 6 provedores",
    },
    loreforge: {
      tagline: "Campanhas, mapas e um copiloto que lembra de tudo.",
      description:
        "Uma plataforma de RPG de mesa pensada para IA: mundos de campanha, grafos de história e sessões multiplayer ao vivo em mapas táticos, com um copiloto que lembra da campanha inteira.",
      part: "Autor · da engine de grid ao copiloto de IA",
      fact: "346 testes · 1 engine de grid no servidor e no navegador",
    },
    "route-flyover-studio": {
      tagline: "Sua corrida, em um sobrevoo cinematográfico.",
      description:
        "Transforma um arquivo de atividade GPS em um vídeo cinematográfico 9:16, com um HUD animado de estatísticas. A leitura do arquivo, a renderização do mapa 3D e o encoding em MP4 acontecem no navegador.",
      part: "Autor · transformou um protótipo em um app completo",
      fact: "MP4 em 1080 × 1920 · encoding no navegador",
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
