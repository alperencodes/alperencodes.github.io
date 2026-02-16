import { siteConfig } from "@/data/portfolio";
import Header from "@/components/layout/Header";
import Contact from "@/components/ui/Contact";
import Timeline from "@/components/ui/Timeline";

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
                            Hi, I&#39;m Alperen, a 21 year-old Swiss-Turkish CS student based in Basel. 🇨🇭
                        </p>

                        <p>
                            I&#39;m currently focused on my studies and building projects that help me understand systems in depth.
                        </p>

                        <p>
                            A quick overview of my career:
                        </p>
                        
                        <Timeline />

                        <p>
                            Outside of tech, I do powerlifting, play padel, and spend time with friends and family.
                            Also, I&#39;ve been into cars for as long as I can remember—driving, maintaining, and just appreciating them.
                            Lately, I&#39;ve also been getting back into chess, mostly fast chess.
                        </p>

                        <p>
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            If you want to talk or collaborate, feel free to <a href="/#contact">reach out</a>!
                        </p>
                    </div>

                    <div className="mt-8">
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a
                            href="/" 
                            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted hover:text-ink transition-colors group"
                        >
                            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
                        </a>
                    </div>
                </section>
            </main>

            <footer className="px-10 md:px-12 py-6 border-t border-border">
                <p className="text-[0.65rem] uppercase tracking-widest text-muted">
                    © {new Date().getFullYear()} {siteConfig.name}
                </p>
            </footer>
        </>
    );
}