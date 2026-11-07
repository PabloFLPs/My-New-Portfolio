import { type CaseStudyCopy } from "@/content/types/caseStudy";

export const zollama: CaseStudyCopy = {
  meta: {
    title: "Estudo de caso do Zollama · Pablo Felipe",
    description:
      "Um SDK tipado para saída estruturada de modelos de IA, construído sobre uma regra: tratar o que o modelo devolve como o body HTTP de um desconhecido.",
  },
  eyebrow: "Estudo de caso · Zollama",
  heading: { text: "Não confiável", accent: "por padrão." },
  lead: "Um SDK tipado para saída estruturada de modelos de IA, construído sobre uma regra: tratar o que o modelo devolve como o body HTTP de um desconhecido.",
  facts: [
    { value: "4", label: "camadas entre o modelo e o seu código" },
    { value: "2", label: "dependências em runtime, para qualquer provedor" },
    { value: "6", label: "formas de usar, local ou na nuvem" },
    { value: "7B", label: "o tamanho de modelo para o qual foi projetado" },
  ],
  sections: [
    {
      heading: "O problema",
      blocks: [
        {
          type: "paragraph",
          text: "Pedir JSON a um modelo e chamar JSON.parse funciona numa demo. Num modelo de IA local pequeno, quebra: blocos de markdown sobrando, tipos errados, campos a mais e valores válidos, mas errados.",
        },
        {
          type: "paragraph",
          text: "Por isso, tudo o que toca a saída do modelo parte do princípio de que ela não é confiável, do mesmo jeito que um back-end trata uma requisição recebida.",
        },
      ],
    },
    {
      heading: "O design",
      blocks: [
        {
          type: "paragraph",
          text: "Um único schema Zod faz dois papéis. Ele vai para o modelo como JSON Schema, para restringir o que pode ser gerado, e valida o que volta. Quem chama recebe um valor totalmente tipado ou um erro lançado, nunca um any sem verificação.",
        },
        {
          type: "list",
          items: [
            "Restringir: o schema vai para o modo de saída estruturada do provedor, então só JSON compatível pode ser gerado.",
            "Validar: safeParse com o mesmo schema, mais verificações determinísticas de enums, referências e campos que precisam concordar.",
            "Corrigir: ajusta deslizes mecânicos, como um número enviado como string, sem gastar outra chamada ao modelo.",
            "Refazer: devolve ao modelo o erro de validação exato, e ele se corrige bem mesmo com 7B.",
          ],
        },
      ],
    },
    {
      heading: "Provedores",
      blocks: [
        {
          type: "paragraph",
          text: "Ele funciona localmente com Ollama ou LM Studio, ou na nuvem com OpenAI, Claude, Gemini e qualquer endpoint compatível com OpenAI. Cada provedor implementa saída estruturada de um jeito, então cada um é um transport pequeno atrás da mesma interface.",
        },
        {
          type: "paragraph",
          text: "Cada transport chama a API HTTP do provedor com fetch puro. A lib inteira tem duas dependências em runtime, zod e zod-to-json-schema, não importa quantos provedores suporte.",
        },
      ],
    },
    {
      heading: "Decisões e o que ficou de fora",
      blocks: [
        {
          type: "entries",
          items: [
            {
              name: "A validação decide, a avaliação mede",
              body: "Verificações determinísticas decidem em tempo de execução. Um LLM avaliador só é executado fora da requisição, sobre um dataset. Assim, nenhum modelo é encarregado de verificar outro modelo no caminho da requisição.",
            },
            {
              name: "Temperatura 0 por padrão",
              body: "Tarefas estruturadas pedem a resposta mais provável, de forma reproduzível. Isso também faz as novas tentativas convergirem mais rápido.",
            },
            {
              name: "Sem streaming e ainda fora do npm",
              body: "Streaming complicaria a regra de que um resultado só é entregue depois de validado. E a API ainda não está estável, o que o private: true deixa claro.",
            },
            {
              name: "Transports de nuvem testados com mocks",
              body: "Cada transport tem testes com HTTP simulado. Os de nuvem ainda precisam de um teste contra as APIs reais.",
            },
          ],
        },
      ],
    },
  ],
  lessons: [
    "Trate a saída do modelo como qualquer entrada não confiável: defina o contrato uma vez, aplique na fronteira e tenha um jeito determinístico de se recuperar.",
    "Desenvolver contra um modelo de 7B ensina a disciplina que um modelo de ponta deixa você pular.",
    "Diga o que ficou de fora, para que isso seja lido como decisão, e não como lacuna.",
  ],
  credit:
    "A IA ajudou na implementação e na revisão, no fluxo descrito em “Como trabalho”. As decisões de design desta página são minhas.",
  more: {
    body: "Cada decisão está documentada no playbook de design, junto com o cenário em que valeria escolher diferente.",
    links: [
      { label: "O playbook de design", href: "https://github.com/PabloFLPs/Zollama/blob/main/PLAYBOOK.md" },
      {
        label: "Como cada provedor funciona",
        href: "https://github.com/PabloFLPs/Zollama/blob/main/docs/PROVIDERS.md",
      },
    ],
  },
};
