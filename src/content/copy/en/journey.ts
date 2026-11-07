import { type JourneyCopy } from "@/content/types/journey";

export const journey: JourneyCopy = {
  label: "Journey",
  heading: { text: "From circuits", accent: "to code" },
  intro: "An electrotechnical start, a degree in Computer Engineering, and the roles in between.",
  now: "now",
  kinds: { work: "work", education: "education", community: "community" },
  items: {
    electrotechnics: { role: "Electrotechnical Technician", institution: "CEFET-MG" },
    skill: { role: "IT Support", institution: "Skill Informática" },
    "computer-engineering": { role: "Computer Engineering", institution: "CEFET-MG" },
    "cefet-it": { role: "IT Analyst", institution: "CEFET-MG Projects Office" },
    "commit-jr": { role: "Marketing Analyst", institution: "Commit Jr." },
    lecode: { role: "Full-Stack Developer", institution: "LeCode · Upwork" },
    tagna: { role: "Full-Stack Developer", institution: "TAGNA" },
    shopper: { role: "Full-Stack Software Engineer", institution: "Shopper.com.br" },
  },
};
