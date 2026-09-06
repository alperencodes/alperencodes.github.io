// Homepage copy, external profiles, and chronological background entries.
export const profile = {
  name: "alperen yilmaz",
  role: "software engineer · computer science",
  introduction: {
    beforeCountry: "CS student based in ",
    country: "Switzerland",
    afterCountry: ". Passionate about backend development, systems, and ",
    security: "security",
    afterSecurity: ".",
  },
  aboutLead: {
    beforeEmphasis: "I like understanding what happens ",
    emphasis: "beneath the surface",
    afterEmphasis: ".",
  },
  about:
    "Alongside my studies, I build projects to understand systems in depth, from the software itself to the infrastructure it runs on. I care about code that is clear enough to come back to and make sense of.",
  elsewhere: [
    { label: "GitHub", href: "https://github.com/alperencodes" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alperen-yilmaz-dev/",
    },
  ],
};

export interface Experience {
  period: string;
  organization: string;
  role: string;
  context?: string;
}

export const experience: Experience[] = [
  {
    period: "2026",
    organization: "Complemedis AG",
    role: "Software Engineer · 3-month summer internship",
    context:
      "typescript · next.js · express.js · supabase · tailwind · qodana",
  },
  {
    period: "2024",
    organization: "Dexion Services AG",
    role: "System Engineer · Fixed-term",
    context:
      "windows · linux · virtualization · azure IAM · monitoring · backups",
  },
  {
    period: "2023-2024",
    organization: "Dexion Services AG",
    role: "Software Engineer · 12-month internship",
    context: "python · automation · monitoring",
  },
];

export const education = [
  {
    period: "2025-present",
    institution:
      "University of Applied Sciences and Arts Northwestern Switzerland",
    degree: "B.Sc. Computer Science",
    context:
      "security · platforms · devops · software engineering · databases · linux · system architecture · CI/CD",
  },
  {
    period: "2020-2024",
    institution: "Informatikmittelschule (transl. computer science secondary school)",
    degree:
      "Federal VET Diploma in Computer Science & Federal Voccational Baccaleaurate in Business",
    context: "computer science · business & finance",
  },
];
