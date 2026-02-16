import { siteConfig } from "@/data/portfolio";
import Header from "@/components/layout/Header";
import ProjectTable from "@/components/ui/ProjectTable";
import TechStack from "@/components/ui/TechStack";
import Contact from "@/components/ui/Contact";

export default function Home() {
    return (
        <>
            <Header />

            <main className="px-10 md:px-12 pb-16">
                {/* hero */}
                <section className="pt-16 pb-14 border-b border-border">
                    <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">
                        Aspiring Engineer
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug max-w-lg">
                        {siteConfig.heroStatement}
                    </h1>
                    <p className="mt-4 text-sm leading-relaxed text-muted max-w-md">
                        {siteConfig.description}
                    </p>
                    <div className="mt-8">
                        <a
                            href="/about"
                            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted hover:text-ink transition-colors group"
                        >
                            More about me <span className="group-hover:translate-x-1 transition-transform material-icons-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </section>

                {/* projects */}
                <div className="pt-12 pb-12 border-b border-border">
                    <ProjectTable />
                    <br/>
                    See more on my <a href="https://github.com/alperencodes" target={"_blank"}>GitHub</a> and <a href="https://gitlab.fhnw.ch/alperen.yilmaz" target={"_blank"}>GitLab</a>.
                </div>

                {/* tech stack */}
                <div className="pt-12 pb-12 border-b border-border">
                    <TechStack />
                </div>

                {/* contact */}
                <div className="pt-12 pb-8">
                    <Contact />
                </div>
            </main>

            {/* footer */}
            <footer className="px-10 md:px-12 py-6 border-t border-border">
                <p className="text-[0.65rem] uppercase tracking-widest text-muted">
                    © {new Date().getFullYear()} {siteConfig.name}
                </p>
            </footer>
        </>
    );
}