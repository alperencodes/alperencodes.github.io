// Homepage copy, external profiles, and chronological background entries.
export const profile = {
  name: "alperen yilmaz",
  role: "software engineer · computer science",
  introduction: {
    beforeCountry: "CS student based in ",
    country: "Switzerland",
    afterCountry: ". Passionate about backend development, systems, and ",
    security: "$ecurity",
    afterSecurity: ".",
  },
  aboutLead: {
    beforeEmphasis: "I like understanding what happens ",
    emphasis: "beneath the surface",
    afterEmphasis: ".",
  },
  about:
    "I’m Swiss-Turkish. Alongside my studies, I build projects to understand systems in depth, from the software itself to the infrastructure it runs on. I care about code that is clear enough to come back to and make sense of.",
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
      "TypeScript · Next.js · Express.js · Supabase/PostgreSQL · Tailwind CSS · Full-stack · Security",
  },
  {
    period: "2024",
    organization: "Dexion Services AG",
    role: "System Engineer · Fixed-term",
    context:
      "Windows · Linux · Virtualization · Microsoft Entra ID · Monitoring · Backups",
  },
  {
    period: "2023-2024",
    organization: "Dexion Services AG",
    role: "Software Engineer Intern · Informatiker EFZ",
    context: "Python · Automation · Monitoring · PHP · WordPress",
  },
];

export const education = [
  {
    period: "2025-present",
    institution: "University of Applied Sciences and Arts Northwestern Switzerland",
    degree: "B.Sc. Computer Science",
    context:
      "Security · Platforms · DevOps · Software Engineering · Databases · Linux/Systems · CI/CD",
  },
  {
    period: "2020-2024",
    institution: "Informatikmittelschule (IMS)",
    degree:
      "Informatiker Applikationsentwicklung EFZ & Berufsmaturität Wirtschaft",
    context: "Computer Science · Business & Finance",
  },
];
