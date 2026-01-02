import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";



export const Footer = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 120);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center justify-center gap-4">
            <p className="text-sm text-muted-foreground text-center">&copy; {new Date().getFullYear()} Imanka-dev</p>

            {showBackToTop && (
                <a
                    href="#hero"
                    className="fixed bottom-28 right-6 p-2 rounded-full bg-primary text-background hover:bg-primary/90 transition-colors shadow-md"
                    aria-label="Back to top"
                >
                    <ChevronUp size={20} />
                </a>
            )}
        </footer>
    );
};