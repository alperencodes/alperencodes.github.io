// Homepage copy and profile destinations. Keep unconfirmed details in CONTENT_TODO.md.
export const profile = {
  name: "alperen yilmaz",
  role: "software engineer · computer science",
  introduction:
    "CS student based in Switzerland, passionate about backend development, systems, and security.",
  aboutLead: "I like understanding what happens beneath the surface.",
  about:
    "I’m Swiss-Turkish, based in Basel. Alongside my studies, I build projects to understand systems in depth, from the software itself to the infrastructure it runs on. I care about code that is clear enough to come back to and make sense of.",
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

// Awaiting confirmed employer names, role titles, and dates; see CONTENT_TODO.md.
// Add one object per position. The paired section remains present while awaiting content.
export const experience: Experience[] = [];

export const education = [
  {
    period: "2025–present",
    institution: "FHNW",
    degree: "B.Sc. Computer Science",
    context: "University of Applied Sciences and Arts Northwestern Switzerland",
  },
];
