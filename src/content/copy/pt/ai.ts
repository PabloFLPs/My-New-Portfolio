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
    text: "No Marksage, três modelos treinados ficaram fora do app porque não atingiram um critério definido antes do treinamento.",
    link: "Os números estão no estudo de caso.",
  },
  articleLink: "A versão completa, no DEV (em inglês)",
};
