import Hero from "../components/Hero";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <div className="pt-16 animate-in fade-in duration-1000 slide-in-from-bottom-8">
            <Hero />
            <div className="mt-20">
                <Skills />
            </div>
        </div>
    );
}
