// types

export interface Project {
    name: string;
    stack: string[];
    description: string;
    github: string;
}

export interface SiteConfig {
    name: string;
    title: string;
    description: string;
    heroStatement: string;
    email: string;
    github: string;
    linkedin: string;
}

// site config

export const siteConfig: SiteConfig = {
    name: "ALPEREN YILMAZ",
    title: "alperen.codes",
    description: "Passionate about backend development, distributed systems, and clean code. Currently studying Computer Science at FHNW in Brugg-Windisch AG. 🇨🇭",
    heroStatement: "Informatiker EFZ & Student in Computer Science",
    email: "hello@alperen.codes",
    github: "https://github.com/alperencodes",
    linkedin: "https://linkedin.com/in/alperenyilmazdev",
};

// navigation

export const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
] as const;

// projects

export const projects: Project[] = [
    {
        name: "Modern Pong",
        stack: ["Java", "JavaFX", "SQLite"],
        description:
            "A robust, object-oriented reimplementation of the 1972 classic, built with JavaFX and Gradle. (Closed Source until grading)",
        github: "https://gitlab.fhnw.ch/alperen.yilmaz/modernpong",
    },
    {
        name: "SecAuth",
        stack: ["PHP", "PHPMailer", "HTML/CSS"],
        description:
            "Web-App demonstrating the implementation of the OWASP Top-10",
        github: "https://github.com/alperencodes/SecAuth",
    },
    {
        name: "UmweltReise - IP12 Group Project at FHNW",
        stack: ["Java", "Trick17", "Pi4J", "SQLite"],
        description: "Interactive game demonstrating sustainable travel. Wrote SAD (Software Documentation) and developed various features as the Software Architect of this project.",
        github: "https://gitlab.fhnw.ch/ip12-25hs/ip12-hs25-team4/umweltreise",
    },
    {
        name: "autohaus",
        stack: ["C#", "TSQL", "HTML/CSS"],
        description:
            "Web-App demonstrating a car dealership",
        github: "https://github.com/alperencodes/autohaus",
    },
];

// skills

export const skills: string[] = [
    "Java",
    "Python",
    "TypeScript",
    "C#",
    "Docker",
    "PostgreSQL",
    "TSQL",
    "Git",
    "Linux",
];