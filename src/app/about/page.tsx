import { siteConfig } from "@/data/portfolio";
import Header from "@/components/layout/Header";
import Contact from "@/components/ui/Contact";

export default function About() {
    return (
        <>
            <Header />

            <main className="px-10 md:px-12 pb-16">
                <section className="pt-16 pb-14">
                    <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">
                        About Me
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug max-w-lg mb-8">
                        More than just code.
                    </h1>
                    
                    <div className="prose prose-sm prose-neutral text-ink/80 max-w-2xl space-y-6 leading-relaxed">
                        <p>
                            Hi, I’m Alperen, a Swiss-Turkish CS student based in Basel. 🇨🇭
                        </p>

                        <p>
                            I’m currently focused on my studies and building projects that help me understand systems in depth.
                        </p>

                        <p>
                            Outside of tech, I train powerlifting, play padel and tennis, and spend time with friends and family.
                            I’ve been into cars for as long as I can remember-driving, maintaining, and just appreciating them.
                            Lately, I’ve also been getting back into chess, mostly fast chess.
                        </p>

                        <p>
                            I keep this section short for privacy reasons. If you want to talk, collaborate, or need technical help, feel free to reach out. ;)
                        </p>
                    </div>

                    <div className="mt-8">
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a
                            href="/" 
                            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted hover:text-ink transition-colors group"
                        >
                            <span className="group-hover:-translate-x-1 transition-transform">⬅</span> Go back
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}