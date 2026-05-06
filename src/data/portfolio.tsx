// types

export interface Project {
    name: string;
    stack: string[];
    description: string;
    repo: string;
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
    heroStatement: "B.Sc. Computer Science student at FHNW with a VET diploma in computer science.",
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
        repo: "https://gitlab.fhnw.ch/alperen.yilmaz/modernpong",
    },
    {
        name: "SecAuth Security Suite",
        stack: ["PHP", "PHPMailer", "HTML/CSS"],
        description:
            "Hardened web application infrastructure built to mitigate OWASP Top-10 vulnerabilities. Features manual implementations of anti-SQL Injection, CSRF token validation, and XSS sanitization layers.",
        repo: "https://github.com/alperencodes/SecAuth",
    },
    {
        name: "UmweltReise: Simulation of sustainable travel",
        stack: ["Java", "Trick17 GUI", "Pi4J", "SQLite", "Maven"],
        description: "Interactive educational software integrated with embedded hardware (Pi4J). As a Software Developer on a 10-person team, I contributed to the modular system architecture and technical documentation (arc42). Closed-source FHNW coursework; source available to project contributors via the link.",
        repo: "https://gitlab.fhnw.ch/ip12-25hs/ip12-hs25-team4/umweltreise",
    },
    {
        name: "Autohaus (enterprise inventory manager)",
        stack: ["C#", "SQL-Server", "HTML/CSS", ".NET"],
        description:
            "Car dealership management system. Features a normalized relational database schema (3NF) and a C# backend for inventory management.",
        repo: "https://github.com/alperencodes/autohaus",
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
    "SQL-Server",
    "Git",
    "Linux",
];

// timeline

export interface TimelineItem {
    year: string;
    title: string;
    description: string;
    icon: string;
}

export const timelineData: TimelineItem[] = [
    {
        year: "2016",
        title: "First steps",
        description: "Wrote my first aim assist (cheat software) for Counter-Strike: Global Offensive and discovered my passion for how computers work",
        icon: "rocket_launch"
    },
    {
        year: "2020",
        title: "Vocational School for Information Technology",
        description: "Passed the entrance exam into the \"Informatikmittelschule Basel-Stadt\" (Vocational School focusing on IT in Basel) after which I started actually learning stuff",
        icon: "school"
    },
    {
        year: "2023",
        title: "Internship as Informatiker EFZ Applikationsentwicklung",
        description: "Started a 1-year internship in Basel, gaining hands-on experience in the industry & in order to graduate high school.",
        icon: "code"
    },
    {
        year: "2024",
        title: "Job as System Engineer",
        description: "Temporarily worked as a System Engineer at the same company as my internship before my Military Service.",
        icon: "work"
    },
    {
        year: "2025",
        title: "Mandatory National Service",
        description: "Fulfilled federal service obligations (Military/Civil Protection).",
        icon: "military_tech"
    },
    {
        year: "2025",
        title: "B.Sc. Computer Science at FHNW",
        description: "Began my Bachelors in Computer Science, focusing on software engineering and distributed systems.",
        icon: "school"
    }
];