import { type CaseStudyCopy } from "@/content/types/caseStudy";

export const routeFlyoverStudio: CaseStudyCopy = {
  meta: {
    title: "Estudo de caso do Route Flyover Studio · Pablo Felipe",
    description:
      "Transforma um arquivo de atividade GPS em um vídeo vertical de sobrevoo, inteiramente no navegador: sem servidor e sem chaves de API.",
  },
  eyebrow: "Estudo de caso · Route Flyover Studio",
  heading: { text: "Sua corrida,", accent: "em sobrevoo." },
  lead: "Transforma um arquivo de atividade GPS em um vídeo 9:16 de um mapa 3D seguindo o seu trajeto, com um HUD animado de estatísticas. Tudo acontece no navegador: sem servidor e sem chaves de API.",
  facts: [
    { value: "1080 × 1920", label: "vídeo vertical, pronto para postar" },
    { value: "5", label: "formatos de arquivo: GPX, FIT, GeoJSON, KML e Suunto" },
    { value: "0", label: "servidores ou chaves de API" },
    { value: "16", label: "decisões registradas como ADRs" },
  ],
  sections: [
    {
      heading: "O problema",
      blocks: [
        {
          type: "paragraph",
          text: "Um arquivo de GPS guarda uma história inteira: o trajeto, o ritmo, as subidas e a frequência cardíaca. Compartilhado como print de um mapa plano, quase tudo se perde.",
        },
        {
          type: "paragraph",
          text: "O studio transforma esse arquivo em um vídeo vertical curto, o formato que as pessoas de fato postam.",
        },
      ],
    },
    {
      heading: "A arquitetura",
      blocks: [
        {
          type: "paragraph",
          text: "O React cuida das configurações que o usuário edita. Uma engine imperativa cuida do mapa, do canvas, do loop de animação e da exportação, e devolve um estado somente leitura. Assim, o loop de renderização fica fora do caminho crítico do React, e as entradas continuam declarativas.",
        },
        {
          type: "paragraph",
          text: "Cada frame desenha o mapa do MapLibre e o HUD num canvas fixo de 1080 × 1920, que é o que vira vídeo.",
        },
      ],
    },
    {
      heading: "A exportação",
      blocks: [
        {
          type: "paragraph",
          text: "A primeira versão da exportação em MP4 usava ffmpeg.wasm: um core de 30 MB baixado de uma CDN, e lento demais em 1080 × 1920. Ela foi trocada pelo encoder H.264 do próprio navegador, via WebCodecs, e um muxer de MP4. Os frames viram vídeo enquanto o sobrevoo acontece, com aceleração de hardware quando disponível.",
        },
        {
          type: "paragraph",
          text: "Quando o navegador não consegue gerar H.264, a exportação usa WebM e avisa.",
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
              name: "Uma direção fixa na entrada da câmera",
              body: "Girar em direção a um alvo em movimento fazia a câmera inverter o sentido no meio da curva. Um alvo fixo deixa cada transição suave.",
            },
            {
              name: "Um clima que reconhece quando está seco",
              body: "Atividades recentes usam o modelo de previsão, porque o histórico exagera a garoa em climas úmidos. Um ajuste manual cobre o resto.",
            },
            {
              name: "Escopo cortado de propósito",
              body: "Links compartilháveis, a opção de WebM e a escolha manual do horário foram removidos para manter o studio focado.",
            },
          ],
        },
      ],
    },
  ],
  lessons: [
    "Mantenha uma engine imperativa fora do React e deixe que ela devolva o estado.",
    "Meça uma dependência pesada antes de mantê-la: o navegador já tinha um encoder mais rápido.",
    "Quando uma fonte de dados externa erra de vez em quando, ofereça um ajuste manual em vez de correr atrás do modelo.",
  ],
  credit:
    "A IA ajudou na implementação e na revisão, no fluxo descrito em “Como trabalho”. As decisões de design desta página são minhas.",
  more: {
    body: "Cada escolha que não é óbvia está registrada como decisão, com contexto e consequências.",
    links: [
      {
        label: "Registro de decisões",
        href: "https://github.com/PabloFLPs/activies-flyover-studio/blob/main/docs/DECISIONS.md",
      },
      { label: "README", href: "https://github.com/PabloFLPs/activies-flyover-studio#readme" },
    ],
  },
};
