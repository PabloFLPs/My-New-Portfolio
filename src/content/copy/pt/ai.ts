import { type AiCopy } from "@/content/types/ai";

export const ai: AiCopy = {
  label: "Como trabalho",
  heading: { text: "Um time,", accent: "não uma ferramenta." },
  intro:
    "Todo mundo usa três ferramentas de IA. O que as torna úteis é dar um papel para cada uma, como num time: uma escreve, outra revisa, e uma memória guarda o contexto para que nenhuma sessão comece do zero.",
  roles: [
    {
      kicker: "implementação",
      title: "Escreve o código",
      tools: "Cursor",
      body: "Guiado por skills versionadas e ajustadas à stack: o spec-writer transforma um ticket informal em spec, e o debug-helper e o code-reviewer mantêm o ciclo honesto.",
    },
    {
      kicker: "revisão",
      title: "Revisa cada diff",
      tools: "Codex",
      body: "Um modelo diferente, de propósito: quem escreveu o código não deve ser quem dá a nota.",
    },
    {
      kicker: "memória",
      title: "Guarda o contexto",
      tools: "Claude + Obsidian",
      body: "Uma vault estruturada, com skills, playbooks e notas de projeto, que devolve contexto a cada sessão. Quando as fontes discordam, o código vale mais que os testes, os testes valem mais que as specs, e tudo vale mais que um resumo de IA.",
    },
  ],
  loopTitle: "O ciclo de cada mudança não trivial",
  loop: [
    {
      step: "Spec",
      body: "Objetivo, restrições, casos de borda e critérios de aceite, antes de qualquer código. Uma auditoria de restrições confere o que o projeto já tem configurado.",
    },
    { step: "Plano", body: "A IA propõe uma abordagem; eu aprovo ou peço outra." },
    { step: "Geração", body: "O implementador escreve o código a partir da spec, e não de um palpite." },
    {
      step: "Crítica",
      body: "Modelos defendem o próprio código, então a autorrevisão não basta. Um checklist procura referências inventadas, testes que não testam nada e lógica que só cobre o caminho feliz.",
    },
    { step: "Testes", body: "Os casos de borda da spec viram testes que falhariam sem a implementação." },
    {
      step: "Ajuste",
      body: "Itero até ficar sólido e depois corrijo a spec ou a skill que deixou o problema passar.",
    },
  ],
  ownershipTitle: "O que fica comigo",
  ownership: [
    "A arquitetura e os trade-offs.",
    "O critério de aprovação, definido de antemão.",
    "A decisão do que entra ou não no app.",
    "A leitura do diff antes do commit.",
  ],
  example: {
    label: "na prática · Marksage",
    title: "Um critério definido de antemão",
    body: [
      "O Marksage é o meu editor de Markdown. O assistente dele sugere correções enquanto você escreve, e eu treinei modelos pequenos para ajudar nisso.",
      "Antes de cada rodada de treinamento, defini o que um modelo precisava fazer para entrar no app: superar as regras heurísticas em repositórios que ele nunca tinha visto.",
      "Dois modelos conseguiram e estão no app. Três ficaram de fora:",
    ],
    outcomes: [
      "O de dicas de formatação atingiu o critério por uma linha em 227. Não valia um download.",
      "O de tipos de conteúdo colado teve menos precisão que as regras, então as regras ficaram.",
      "Uma terceira versão do modelo de código não resolveu o problema para o qual foi criada.",
    ],
    link: "Ler o estudo de caso do Marksage",
  },
  articleLink: "A versão completa, no DEV (em inglês)",
};
