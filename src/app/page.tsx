import { siteConfig } from "@/data/portfolio";
import Header from "@/components/layout/Header"

export default function Home() {
    return (
        <>
            <Header />

            <main className={"px-10 md:px-12 pb-16"}>
                <section className={"pt-16 pb-14 border-b border-border"}>
                    <p className={"text-xs font-medium uppercase tracking-widest text-muted mb-3"}>
                        Future Engineer
                    </p>
                    <h1 className={"text-2xl md:text-3xl font-bold tracking-tight leading-snug max-w-lg"}>
                        {siteConfig.heroStatement}
                    </h1>
                    <p className={"mt-4 text-sm leading-relaxed text-muted max-w-md"}>
                        {siteConfig.description}
                    </p>
                </section>
            </main>
        </>
    );
}