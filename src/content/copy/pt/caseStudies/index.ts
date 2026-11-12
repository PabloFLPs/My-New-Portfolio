import { type CaseStudiesCopy } from "@/content/types/caseStudy";
import { loreforge } from "./loreforge";
import { marksage } from "./marksage";
import { routeFlyoverStudio } from "./routeFlyoverStudio";
import { zollama } from "./zollama";

export const caseStudies: CaseStudiesCopy = {
  labels: {
    back: "Voltar aos projetos selecionados",
    tryIt: "Testar ao vivo",
    readCode: "Ler o código",
    lessons: "O que levei disso",
    more: "Quer todos os detalhes?",
    shareImageAlt: "Estudo de caso",
  },
  studies: { marksage, zollama, loreforge, "route-flyover-studio": routeFlyoverStudio },
};
