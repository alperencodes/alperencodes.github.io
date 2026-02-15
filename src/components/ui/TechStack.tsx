import { skills } from "@/data/portfolio";

export default function TechStack() {
    return (
        <section id="about">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                Tech Stack
            </h2>
            <p className="text-sm leading-relaxed text-ink/80">
                {skills.join(", ")}
            </p>
        </section>
    );
}