export interface Work {
  title: string;
  context: string;
  description: string;
  technologies: string[];
  href?: string;
  linkLabel?: string;
}

// UmweltReise has no public destination; do not link visitors to a private GitLab.
export const selectedWork: Work[] = [
  {
    title: "Complemedis",
    context: "software engineering internship",
    description:
        "Contributed to a closed-source healthcare webplatform across security, reliability, localization, and product development - conducting SAST-backed security analysis with Qodana, implementing dev/prod health checks and i18n, and shipping multiple frontend and backend features.",
    technologies: ["TypeScript", "Next.js", "Express.js", "Supabase", "Qodana"],
  },
  {
    title: "UmweltReise",
    context: "university coursework",
    description:
      "Educational software exploring sustainable travel, connecting an interactive simulation with embedded hardware.",
    technologies: ["Java", "Pi4J", "SQLite", "Maven"],
  },
  {
    title: "HomeSecuritySystem",
    context: "camera-based motion detection",
    description:
      "Motion detection from a camera feed using OpenCV, with configurable thresholds and actions that open a local file and a web page.",
    technologies: ["Python", "OpenCV"],
    href: "https://github.com/AronBA/HomeSecuritySystem",
    linkLabel: "GitHub",
  },
  {
    title: "dotfiles",
    context: "personal configuration",
    description:
      "My Windows/macOS configs, version controlled: tiling WM, keyboard shortcuts, status bar and more.",
    technologies: ["komorebi", "whkd", "YASB"],
    href: "https://github.com/alperencodes/dotfiles",
    linkLabel: "GitHub",
  },
];
