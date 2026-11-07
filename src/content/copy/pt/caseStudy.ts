import { type CaseStudyCopy } from "@/content/types/caseStudy";

export const caseStudy: CaseStudyCopy = {
  meta: {
    title: "Estudo de caso do Marksage · Pablo Felipe",
    description:
      "Como um visualizador de Markdown virou um editor com modelos de machine learning próprios, e por que a parte mais útil da história é o que ficou fora do app.",
  },
  back: "Voltar aos projetos selecionados",
  eyebrow: "Estudo de caso · Marksage",
  heading: { text: "O editor", accent: "atento aos detalhes." },
  lead: "Como um visualizador de Markdown virou um editor com modelos de machine learning próprios, e por que a parte mais útil da história é o que ficou fora do app.",
  tryIt: "Testar ao vivo",
  readCode: "Ler o código",
  imageAlt:
    "Marksage: o editor de Markdown atento aos detalhes. Regras heurísticas e dois modelos pequenos sugerem correções no seu dispositivo.",
  facts: [
    { value: "385 KB", label: "por modelo, com download único" },
    { value: "~0,1 ms", label: "por decisão, no seu navegador" },
    { value: "1,7–2,2×", label: "as sugestões de linguagem certas das regras" },
    { value: "0", label: "bytes do seu texto enviados para fora" },
  ],
  sections: [
    {
      heading: "O problema",
      paragraphs: [
        "O Marksage começou como um visualizador simples. Quando ele virou um editor, eu quis que ele notasse detalhes enquanto você escreve: um bloco de código sem linguagem, uma tabela colada, um título que quase é um título.",
        "Regras heurísticas, escritas à mão, resolvem parte disso, e com precisão. Mas deixam sem resposta cerca de três em cada quatro blocos de código. O motivo: escrever uma regra para cada padrão de vinte linguagens não tem fim.",
      ],
    },
    {
      heading: "A decisão",
      paragraphs: [
        "Um LLM convencional responderia mais, mas isso significaria centenas de megabytes, um notebook lento ou enviar os documentos das pessoas para um servidor. O modelo de decisão open weight que planejei usar no começo tem de 322 a 421 milhões de parâmetros.",
        "Então treinei os meus: dois classificadores pequenos, um para a linguagem de um bloco de código e outro para o tipo de uma seção do documento. São cerca de 262 mil parâmetros cada, mais de mil vezes menores que aquele modelo de decisão, e são executados inteiramente dentro da página.",
      ],
    },
    {
      heading: "O treinamento",
      paragraphs: [
        "O modelo de código aprendeu com cerca de 270.000 blocos de código de 309 repositórios públicos, rotulados com a linguagem que os próprios autores marcaram. O treinamento é feito em TypeScript, com o mesmo código que o app usa para ler os trechos. Por isso, o que o modelo viu no treinamento é exatamente o que ele vê no editor.",
      ],
      bullets: [
        "Cada repositório vai inteiro para o conjunto de treinamento, de desenvolvimento ou de teste. Assim, nenhum projeto vaza para a própria prova.",
        "Toda configuração é escolhida no conjunto de desenvolvimento. Cada conjunto de teste é usado uma única vez, no final.",
        "A confiança é calibrada: “80% de certeza” significa acertar cerca de oito vezes em dez.",
        "O critério de aprovação de um modelo é definido de antemão, e não depois do resultado.",
      ],
    },
  ],
  results: {
    heading: "Resultados",
    intro:
      "Medido uma única vez em 284 blocos de código de 67 repositórios que nenhuma versão do modelo e nenhum ajuste tinham visto:",
    columns: {
      engine: "Engine",
      accuracy: "Acurácia",
      shown: "Sugestões exibidas",
      precision: "Precisão quando exibe",
    },
    rows: [
      { engine: "Regras", accuracy: "59%", shown: "70", precision: "93%" },
      { engine: "Modelo v1", accuracy: "72%", shown: "151", precision: "88%" },
      { engine: "Modelo v2 (no app)", accuracy: "74%", shown: "158", precision: "92%", shipped: true },
    ],
    note: "Nos três conjuntos de teste, são de 1,7 a 2,2 vezes as sugestões certas das regras, com praticamente a mesma precisão. Ele entrou como um modo opcional, porque baixa um arquivo e a precisão dele ainda não é claramente maior que a das regras.",
  },
  notShipped: {
    heading: "O que ficou fora do app",
    items: [
      {
        name: "Modelo de dicas de formatação",
        verdict:
          "Atingiu o critério de aprovação por uma linha, em 227 linhas reais de issues e pull requests. Não valia um download.",
      },
      {
        name: "Modelo de tipos de conteúdo colado",
        verdict:
          "Precisão de 90,9% quando exibe, contra 97,6% das regras, em 53 colagens reais. As regras ficaram.",
      },
      {
        name: "Modelo de código v3 (mean + max pooling)",
        verdict:
          "Testado como solução geral para TypeScript e JavaScript. Não ajudou: a maior parte do código marcado como TypeScript não tem nenhuma sintaxe exclusiva de TypeScript.",
      },
    ],
  },
  lessons: {
    heading: "O que levei disso",
    items: [
      "Defina o critério de aprovação antes do experimento. É o único jeito de “não está bom o suficiente” continuar sendo uma resposta honesta.",
      "Um modelo pequeno e medido vale mais que um modelo grande e presumido.",
      "Experimentos que falharam merecem documentação. A próxima tentativa começa pelos números, e não do zero.",
    ],
  },
  credit:
    "A IA (Claude) ajudou na implementação e na revisão. A arquitetura, os critérios de aprovação e cada decisão do que entra ou não no app ficaram com o autor.",
  more: {
    heading: "Quer todos os detalhes?",
    body: "Cada modelo, conjunto de teste e versão está documentado no repositório, escrito para quem não tem experiência com machine learning.",
    modelsLink: "Como os modelos funcionam",
    storyLink: "A história no app",
  },
};
