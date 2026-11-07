import { type JourneyCopy } from "@/content/types/journey";

export const journey: JourneyCopy = {
  label: "Trajetória",
  heading: { text: "Dos circuitos", accent: "ao código" },
  intro:
    "Um começo na eletrotécnica, uma graduação em Engenharia de Computação e as experiências no meio do caminho.",
  now: "atual",
  kinds: { work: "trabalho", education: "formação", community: "comunidade" },
  items: {
    electrotechnics: { role: "Técnico em Eletrotécnica", institution: "CEFET-MG" },
    skill: { role: "Suporte de TI", institution: "Skill Informática" },
    "computer-engineering": { role: "Engenharia de Computação", institution: "CEFET-MG" },
    "cefet-it": { role: "Analista de TI", institution: "Escritório de Projetos do CEFET-MG" },
    "commit-jr": { role: "Analista de Marketing", institution: "Commit Jr." },
    lecode: { role: "Desenvolvedor Full-Stack", institution: "LeCode · Upwork" },
    tagna: { role: "Desenvolvedor Full-Stack", institution: "TAGNA" },
    shopper: { role: "Engenheiro de Software Full-Stack", institution: "Shopper.com.br" },
  },
};
