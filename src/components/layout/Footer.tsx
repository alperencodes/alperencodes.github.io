import { siteConfig } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="px-10 md:px-12 py-6 border-t border-border">
            <p className="text-[0.65rem] uppercase tracking-widest text-muted">
                © {new Date().getFullYear()} {siteConfig.name}
                <span className="mx-3 opacity-30">·</span>
                <a href="https://github.com/alperencodes/alperencodes.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
                    View source
                </a>
            </p>
        </footer>
    );
}