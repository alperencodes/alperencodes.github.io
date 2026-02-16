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
    gitlab: string;
    linkedin: string;
}

// site config

export const siteConfig: SiteConfig = {
    name: "alperen.codes",
    title: "alperen.codes",
    description: "Passionate about backend development, distributed systems, and clean code. Currently studying Computer Science at FHNW in Brugg-Windisch AG. 🇨🇭",
    heroStatement: "Informatiker EFZ & Student in Computer Science",
    email: "hello@alperen.codes",
    github: "https://github.com/alperencodes",
    gitlab: "https://gitlab.fhnw.ch/alperen.yilmaz",
    linkedin: "https://linkedin.com/in/alperenyilmazdev",
};

// navigation

export const navLinks = [
    { label: "Who am I?", href: "/about" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
] as const;

// projects

export const projects: Project[] = [
    {
        name: "Modern Pong - Solo Project \"Individuelles Softwareprojekt\" @ FHNW",
        stack: ["Java", "JavaFX", "SQLite"],
        description:
            "Object-oriented reimplementation of the classic Pong game. Built with JavaFX and Gradle, featuring a custom physics engine and SQLite integration for high scores.",
        github: "https://gitlab.fhnw.ch/alperen.yilmaz/modernpong",
    },
    {
        name: "SecAuth",
        stack: ["PHP", "PHPMailer", "HTML/CSS"],
        description:
            "Security-focused web application implementing defenses against OWASP Top-10 vulnerabilities, including SQL Injection, XSS, and CSRF protection.",
        github: "https://github.com/alperencodes/SecAuth",
    },
    {
        name: "UmweltReise - Group Project \"Projekt 1 Informatik\" @ FHNW",
        stack: ["Java", "Trick17", "Pi4J", "SQLite"],
        description: "Educational game about sustainable travel. As Software Architect, I designed the system architecture, authored the SAD (Software Architecture Document), and led the implementation of core game mechanics.",
        github: "https://gitlab.fhnw.ch/ip12-25hs/ip12-hs25-team4/umweltreise",
    },
    {
        name: "Autohaus",
        stack: ["C#", "TSQL", "HTML/CSS"],
        description:
            "Car dealership management system. Features a normalized relational database schema (3NF) and a C# backend for inventory management.",
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