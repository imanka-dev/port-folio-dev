import { SkillsSection } from "../Components/SkillsSection";
import { AboutSection } from "../Components/AboutSection";
import { HeroSection } from "../Components/HeroSection";
import { Navbar } from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "@/Components/StarBackground";
import { ProjectsSection } from "../Components/ProjectsSection";

export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Theme Toogle*/}
                <ThemeToggle />
            {/*Background effect*/}
                <StarBackground />



            {/*Navbar*/}
                <Navbar />
            
            {/*Main content*/}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
            </main>

            {/*Footer*/}


        </div>
    )
}