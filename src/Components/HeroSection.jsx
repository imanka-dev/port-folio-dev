import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
            <div className="container max-w-6xl mx-auto z-10">
                {/* Grid Layout: Text on Left, Image on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    
                    {/* LEFT CONTENT */}
                    <div className="text-left space-y-6 order-2 lg:order-1">
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                                <span className="block opacity-0 animate-fade-in">Hi, I am</span>
                                <span className="text-primary opacity-0 animate-fade-in-delay-1">Imanka</span>
                                <span className="text-gradient ml-3 opacity-0 animate-fade-in-delay-2">Silva</span>
                            </h1>
                            <p className="text-lg md:text-xl font-medium text-primary/80 opacity-0 animate-fade-in-delay-2">
                                I am a <span className="text-cyan-400">Full-Stack Developer</span>
                            </p>
                        </div>

                        <p className="text-base md:text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3 leading-relaxed">
                            I recently graduated in ICT (Hons) from Rajarata University of Sri Lanka. 
                            With internship experience and a passion for modern web technologies, 
                            I build high-performance, intuitive applications with a focus on clean design.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="/resume.pdf" target="_blank" className="cosmic-button bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium flex items-center gap-2">
                                View Resume <span className="text-xl">→</span>
                            </a>
                            <a href="#contact" className="border border-primary/50 hover:bg-primary/10 px-8 py-3 rounded-md font-medium transition-all">
                                Contact Me
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-5 pt-6 opacity-0 animate-fade-in-delay-4 text-muted-foreground">
                            <a href="#" className="hover:text-primary transition-colors"><Github size={24} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={24} /></a>
                        </div>
                    </div>

                    {/* RIGHT CONTENT: PROFILE IMAGE */}
                    <div className="relative flex justify-center md:justify-end items-center order-1 lg:order-2 opacity-0 animate-fade-in mt-20 md:mt-0">
                        <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* Glowing Background Circles */}
                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-105"></div>
                            
                            {/* The Image Container */}
                            <div className="relative w-full h-full rounded-full border-4 border-cyan-500/50 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                                <img 
                                    src="/Projects/dp.jpg"
                                    alt="Imanka Silva"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* "Hire Me" Floating Badge */}
                            <div className="hidden md:flex absolute bottom-4 right-4 bg-primary text-primary-foreground w-20 h-20 md:w-24 md:h-24 rounded-full items-center justify-center text-center text-sm font-bold shadow-lg hover:scale-110 transition-transform cursor-default">
                                Hire Me
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
                <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}