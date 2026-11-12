import { type CaseStudyCopy } from "@/content/types/caseStudy";

export const marksage: CaseStudyCopy = {
  meta: {
    title: "Estudo de caso do Marksage · Pablo Felipe",
    description:
      "Como um visualizador de Markdown virou um editor com modelos de machine learning próprios, e por que a parte mais útil da história é o que ficou fora do app.",
  },
  eyebrow: "Estudo de caso · Marksage",
  heading: { text: "O editor", accent: "atento aos detalhes." },
  lead: "Como um visualizador de Markdown virou um editor com modelos de machine learning próprios, e por que a parte mais útil da história é o que ficou fora do app.",
  facts: [
    { value: "385 KB", label: "por modelo, com download único" },
    { value: "~0,1 ms", label: "por decisão, no seu navegador" },
    { value: "1,7–2,2×", label: "as sugestões de linguagem certas das regras" },
    { value: "0", label: "bytes do seu texto enviados para fora" },
  ],
  sections: [
    {
      heading: "O problema",
      blocks: [
        {
          type: "paragraph",
          text: "O Marksage começou como um visualizador simples. Quando ele virou um editor, eu quis que ele notasse detalhes enquanto você escreve: um bloco de código sem linguagem, uma tabela colada, um título que quase é um título.",
        },
        {
          type: "paragraph",
          text: "Regras heurísticas, escritas à mão, resolvem parte disso, e com precisão. Mas deixam sem resposta cerca de três em cada quatro blocos de código. O motivo: escrever uma regra para cada padrão de vinte linguagens não tem fim.",
        },
      ],
    },
    {
      heading: "A decisão",
      blocks: [
        {
          type: "paragraph",
          text: "Um LLM convencional responderia mais, mas isso significaria centenas de megabytes, um notebook lento ou enviar os documentos das pessoas para um servidor. O modelo de decisão open weight que planejei usar no começo tem de 322 a 421 milhões de parâmetros.",
        },
        {
          type: "paragraph",
          text: "Então treinei os meus: dois classificadores pequenos, um para a linguagem de um bloco de código e outro para o tipo de uma seção do documento. São cerca de 262 mil parâmetros cada, mais de mil vezes menores que aquele modelo de decisão, e são executados inteiramente dentro da página.",
        },
      ],
    },
    {
      heading: "O treinamento",
      blocks: [
        {
          type: "paragraph",
          text: "O modelo de código aprendeu com cerca de 270.000 blocos de código de 309 repositórios públicos, rotulados com a linguagem que os próprios autores marcaram. O treinamento é feito em TypeScript, com o mesmo código que o app usa para ler os trechos. Por isso, o que o modelo viu no treinamento é exatamente o que ele vê no editor.",
        },
        {
          type: "list",
          items: [
            "Cada repositório vai inteiro para o conjunto de treinamento, de desenvolvimento ou de teste. Assim, nenhum projeto vaza para a própria prova.",
            "Toda configuração é escolhida no conjunto de desenvolvimento. Cada conjunto de teste é usado uma única vez, no final.",
            "A confiança é calibrada: “80% de certeza” significa acertar cerca de oito vezes em dez.",
            "O critério de aprovação de um modelo é definido de antemão, e não depois do resultado.",
          ],
        },
      ],
    },
    {
      heading: "Resultados",
      blocks: [
        {
          type: "paragraph",
          text: "Medido uma única vez em 284 blocos de código de 67 repositórios que nenhuma versão do modelo e nenhum ajuste tinham visto:",
        },
        {
          type: "table",
          columns: ["Engine", "Acurácia", "Sugestões exibidas", "Precisão quando exibe"],
          rows: [
            { cells: ["Regras", "59%", "70", "93%"] },
            { cells: ["Modelo v1", "72%", "151", "88%"] },
            { cells: ["Modelo v2 (no app)", "74%", "158", "92%"], highlight: true },
          ],
        },
        {
          type: "paragraph",
          text: "Nos três conjuntos de teste, são de 1,7 a 2,2 vezes as sugestões certas das regras, com praticamente a mesma precisão. Ele entrou como um modo opcional, porque baixa um arquivo e a precisão dele ainda não é claramente maior que a das regras.",
        },
      ],
    },
    {
      heading: "O que ficou fora do app",
      blocks: [
        {
          type: "entries",
          items: [
            {
              name: "Modelo de dicas de formatação",
              body: "Atingiu o critério de aprovação por uma linha, em 227 linhas reais de issues e pull requests. Não valia um download.",
            },
            {
              name: "Modelo de tipos de conteúdo colado",
              body: "Precisão de 90,9% quando exibe, contra 97,6% das regras, em 53 colagens reais. As regras ficaram.",
            },
            {
              name: "Modelo de código v3 (mean + max pooling)",
              body: "Testado como solução geral para TypeScript e JavaScript. Não ajudou: a maior parte do código marcado como TypeScript não tem nenhuma sintaxe exclusiva de TypeScript.",
            },
          ],
        },
      ],
    },
  ],
  lessons: [
    "Defina o critério de aprovação antes do experimento. É o único jeito de “não está bom o suficiente” continuar sendo uma resposta honesta.",
    "Um modelo pequeno e medido vale mais que um modelo grande e presumido.",
    "Experimentos que falharam merecem documentação. A próxima tentativa começa pelos números, e não do zero.",
  ],
  credit:
    "A IA (Claude) ajudou na implementação e na revisão. A arquitetura, os critérios de aprovação e cada decisão do que entra ou não no app ficaram com o autor.",
  more: {
    body: "Cada modelo, conjunto de teste e versão está documentado no repositório, escrito para quem não tem experiência com machine learning.",
    links: [
      {
        label: "Como os modelos funcionam",
        href: "https://github.com/PabloFLPs/Marksage/blob/main/docs/MODELS.pt-BR.md",
      },
      { label: "A história no app", href: "https://marksage.vercel.app/#story" },
    ],
  },
};
