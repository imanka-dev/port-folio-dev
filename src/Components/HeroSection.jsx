import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Imanka</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Silva</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I just finished my degree in Information and Communication Technology(Hons) at Rajarata
University of Sri Lanka, with a strong passion for Full-Stack Development. And I completed a six
month internship as a Full-Stack Developer. I continuously build my knowledge and skills through
coursework, personal projects, and self-learning. I am currently seeking a job opportunity to gain
hands-on experience, collaborate with professionals, and further develop my technical and
problem-solving skills in IT related company. 
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>

            </div>

        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">

        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />

        </div>

    </section>
}