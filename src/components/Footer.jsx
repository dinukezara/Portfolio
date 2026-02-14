import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-white/50 flex items-center justify-between">
        <span>© {new Date().getFullYear()} {portfolioData.hero.name}</span>
        <span className="hidden sm:block">Built with React + Tailwind</span>
      </div>
    </footer>
  );
}
