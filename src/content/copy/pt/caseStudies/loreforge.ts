import { type CaseStudyCopy } from "@/content/types/caseStudy";

export const loreforge: CaseStudyCopy = {
  meta: {
    title: "Estudo de caso do Loreforge · Pablo Felipe",
    description:
      "Uma plataforma de RPG de mesa pensada para IA, com mapas táticos multiplayer ao vivo, em que o servidor guarda as regras e a IA só sugere.",
  },
  eyebrow: "Estudo de caso · Loreforge",
  heading: { text: "O servidor", accent: "guarda as regras." },
  lead: "Uma plataforma de RPG de mesa pensada para IA: mundos de campanha, grafos de história e sessões multiplayer ao vivo em mapas táticos, com um copiloto que lembra da campanha e nunca a altera sozinho.",
  facts: [
    { value: "346", label: "testes, sem banco de dados nem rede" },
    { value: "1", label: "engine de grid, no servidor e no navegador" },
    { value: "3", label: "estados de névoa: inexplorado, explorado e visível" },
    { value: "0", label: "mudanças da IA sem o aceite do mestre" },
  ],
  sections: [
    {
      heading: "O problema",
      blocks: [
        {
          type: "paragraph",
          text: "Jogar uma campanha online pede três coisas ao mesmo tempo: um mapa compartilhado, regras que ninguém consegue burlar do próprio navegador e uma memória de tudo o que aconteceu na mesa.",
        },
      ],
    },
    {
      heading: "Uma engine, dois lugares",
      blocks: [
        {
          type: "paragraph",
          text: "As regras táticas são funções puras num único módulo: grid, pathfinding, linha de visão, névoa e áreas de efeito. O servidor Socket.IO e o navegador executam o mesmo código. Por isso, o movimento que o jogador vê na prévia é o mesmo que o servidor vai aceitar.",
        },
        {
          type: "list",
          items: [
            "Todo movimento passa pelo mesmo pipeline: validar, salvar, transmitir, recalcular o que o grupo vê e salvar as casas recém-exploradas.",
            "As casas exploradas ficam salvas; o que o grupo vê agora é sempre recalculado. Assim, um registro antigo nunca revela a posição atual de um token.",
            "A visão isométrica é uma projeção do mesmo grid quadrado, e não uma segunda engine.",
            "Os tokens são botões de verdade sobre o canvas, então o mapa funciona com teclado e leitor de tela.",
          ],
        },
      ],
    },
    {
      heading: "O copiloto",
      blocks: [
        {
          type: "paragraph",
          text: "O copiloto lê a linha do tempo da campanha, as quests abertas e o último resumo para preparar sessões e sugerir NPCs, quests e momentos da história. Ele nunca grava no banco: devolve sugestões validadas, e o mestre aceita, edita ou descarta cada uma.",
        },
        {
          type: "paragraph",
          text: "Os jogadores têm o próprio copiloto, com um contexto montado para eles. Segredos, conteúdo exclusivo do mestre e lugares ainda não descobertos são removidos antes de o modelo ver qualquer coisa, e “o seu grupo ainda não sabe disso” é uma resposta válida.",
        },
      ],
    },
    {
      heading: "Decisões",
      blocks: [
        {
          type: "entries",
          items: [
            {
              name: "Canvas2D, e não PixiJS",
              body: "Alguns milhares de casas planas não precisam de um scene graph em WebGL. Organizar em camadas o renderizador que já existia foi a mudança menor, com o bundle menor.",
            },
            {
              name: "A memória da campanha são eventos, e não resumos",
              body: "Uma linha do tempo tipada é a fonte da verdade. Os resumos, feitos à mão ou pela IA, são sínteses dela.",
            },
            {
              name: "O estado do combate fica no servidor",
              body: "Os clientes renderizam uma única transmissão do estado completo. Assim, existe uma só fonte da verdade e nada para divergir.",
            },
            {
              name: "Funciona offline por padrão",
              body: "Um provedor simulado e determinístico responde quando nenhum modelo está configurado. Isso deixa as demos reproduzíveis e os testes estáveis.",
            },
          ],
        },
      ],
    },
  ],
  lessons: [
    "Coloque as regras em funções puras primeiro. O servidor, a interface e os testes reaproveitam todas elas.",
    "Deixe a IA propor e uma pessoa aceitar. Assim, o copiloto é útil sem precisar de acesso aos dados.",
    "Registre por que uma decisão foi tomada, principalmente quando o código a contradizia.",
  ],
  credit:
    "A IA ajudou na implementação e na revisão, no fluxo descrito em “Como trabalho”. As decisões de design desta página são minhas.",
  more: {
    body: "Como o app é montado, e cada trade-off importante, está documentado no repositório.",
    links: [
      { label: "Arquitetura", href: "https://github.com/PabloFLPs/loreforge/blob/main/ARCHITECTURE.md" },
      { label: "Decisões", href: "https://github.com/PabloFLPs/loreforge/blob/main/DECISIONS.md" },
    ],
  },
};
