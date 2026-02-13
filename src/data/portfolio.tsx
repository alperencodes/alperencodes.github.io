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