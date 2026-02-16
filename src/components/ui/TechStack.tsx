import { skills } from "@/data/portfolio";

export default function TechStack() {
    return (
        <section id="about">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-6">
                Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span 
                        key={skill} 
                        className="px-3 py-1.5 text-xs font-medium border border-border rounded bg-white/50 text-ink/90 hover:border-muted transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}