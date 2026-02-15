"use client";

import { projects } from "@/data/portfolio"

export default function ProjectTable() {
    return (
        <section id={"projects"}>
            <h2 className={"text-xs font-semibold uppercase tracking-widest text-muted mb-6"}>
                Projects
            </h2>
            <div className={"flex flex-col"}>
                {projects.map((project, i) => (
                    <a
                        href={project.github}
                        key={project.name}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={`project-row group flex flex-col gap-2 py-5 ${i !== projects.length - 1 ? "border-b border-border" : ""
                        }`}
                    >
                        <div className={"flex items-baseline justify-between gap-4"}>
                            <h3 className={"text-sm font-semibold group-hover:underline"}>
                                {project.name}
                            </h3>
                            <span className={"shrink-0 text-[0.65rem] font-medium uppercase tracking-widest text-muted opacity-0 transition-opacity group-hover:opacity-100"}>
                                Github →
                            </span>
                        </div>
                        <p className={"text-xs leading-relaxed text-muted"}>
                            {project.description}
                        </p>
                        <div>
                            {project.stack.map((tech) => (
                                <span key={tech} className={"tag"}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}