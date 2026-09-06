export interface Work {
  title: string;
  context: string;
  description: string;
  technologies: string[];
  href?: string;
  linkLabel?: string;
}

// Selection confirmed by Alperen. Sources and remaining questions: CONTENT_TODO.md.
// UmweltReise has no public destination; do not link visitors to a private GitLab.
export const selectedWork: Work[] = [
  {
    title: "SecAuth",
    context: "Web security",
    description:
      "A PHP web application built to learn how security measures work in practice, with a MySQL database and email integration.",
    technologies: ["PHP", "MySQL", "PHPMailer"],
    href: "https://github.com/alperencodes/SecAuth",
    linkLabel: "GitHub",
  },
  {
    title: "UmweltReise",
    context: "FHNW coursework",
    description:
      "Educational software exploring sustainable travel, connecting an interactive simulation with embedded hardware.",
    technologies: ["Java", "Pi4J", "SQLite", "Maven"],
  },
  {
    title: "HomeSecuritySystem",
    context: "Camera-based motion detection",
    description:
      "Motion detection from a camera feed using OpenCV, with configurable thresholds and actions that open a local file and a web page.",
    technologies: ["Python", "OpenCV"],
    href: "https://github.com/AronBA/HomeSecuritySystem",
    linkLabel: "GitHub",
  },
  {
    title: "dotfiles",
    context: "Personal configuration",
    description:
      "My Windows setup, kept under version control: tiling windows, keyboard shortcuts, and a status bar, with configuration notes alongside the files.",
    technologies: ["Komorebi", "whkd", "YASB"],
    href: "https://github.com/alperencodes/dotfiles",
    linkLabel: "GitHub",
  },
];
