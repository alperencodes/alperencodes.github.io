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
    description: "Passionate about backend development, distributed systems, and clean code. Currently studying Computer Science at the University of Applied Sciences and Arts Northwestern Switzerland (FHNW) in Brugg-Windisch, Switzerland.",
    heroStatement: "Informatiker EFZ | Student in Computer Science",
    email: "hello@alperen.codes",
    github: "https://github.com/alperencodes",
    gitlab: "https://gitlab.fhnw.ch/alperen.yilmaz",
    linkedin: "https://www.linkedin.com/in/alperen-yilmaz-dev/",
};

// navigation

export const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
] as const;

// projects

export const projects: Project[] = [
    {
        name: "Modern Pong: Physics Simulation",
        stack: ["Java", "JavaFX", "SQLite", "Gradle"],
        description:
            "Object-oriented reimplementation of the classic Pong game. Built with JavaFX and Gradle, featuring a custom physics engine and SQLite integration for high scores.",
        github: "https://gitlab.fhnw.ch/alperen.yilmaz/modernpong",
    },
    {
        name: "SecAuth Security Suite",
        stack: ["PHP", "PHPMailer", "HTML/CSS"],
        description:
            "Hardened web application infrastructure built to mitigate OWASP Top-10 vulnerabilities. Features manual implementations of anti-SQL Injection, CSRF token validation, and XSS sanitization layers.",
        github: "https://github.com/alperencodes/SecAuth",
    },
    {
        name: "UmweltReise: Simulation of sustainable travel",
        stack: ["Java", "Pi4J", "SQLite", "System Architecture"],
        description: "Interactive educational software integrated with embedded hardware (Pi4J). As Lead Software Architect, I authored the technical documentation (SAD) and designed the modular system architecture. Note: This project is WIP & closed source. If you're a contributor of this project, feel free to commence by clicking this link.",
        github: "https://gitlab.fhnw.ch/ip12-25hs/ip12-hs25-team4/umweltreise",
    },
    {
        name: "Autohaus (enterprise inventory manager)",
        stack: ["C#", "T-SQL", "HTML/CSS", ".NET"],
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
    "PHP",
    "Docker",
    "PostgreSQL",
    "T-SQL",
    "Git",
    "Linux",
];