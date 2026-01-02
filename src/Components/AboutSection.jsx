import { Briefcase, Code, School } from "lucide-react";




export const AboutSection = () => {
    return(
        <section id="about" className="py-23 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-left">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Designer</h3>

                        <p className="text-muted-foreground text-left">I'm Imanka Silva, an undergraduate at the Faculty of Technology, Rajarata University of Sri Lanka, currently pursuing a BICT (Hons) degree. I’m a passionate full-stack developer with a strong focus on the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
                        <p className="text-muted-foreground text-left ">I enjoy building responsive and user-friendly web applications that provide great user experiences. My journey into web development began during my university studies, and since then, I’ve been actively learning, taking on personal projects, and collaborating with others to sharpen my skills.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#contact" className="cosmic-button">                       
                                    Get in Touch
                                </a>
                                <a href="file:///C:/Users/USER/Downloads/imanka%20silva%20cv.pdf%20(1).pdf" className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                    Download CV
                                </a>
                            </div>
                        </div>
                     <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover bg-gradient-to-br from-cyan-500/5 to-blue-500/5 hover:from-cyan-500/20 hover:to-blue-500/20 border-cyan-500/30 hover:border-cyan-500/70 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 transition-colors duration-300">
                                    <Code className="h-6 w-6 text-cyan-400" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-cyan-300">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive and user-friendly web applications using the MERN stack.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover bg-gradient-to-br from-purple-500/5 to-pink-500/5 hover:from-purple-500/20 hover:to-pink-500/20 border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition-colors duration-300">
                                    <School className="h-6 w-6 text-purple-400" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-purple-300">Education & Learning</h4>
                                    <p className="text-muted-foreground">Continuously expanding my knowledge through courses and real-world projects.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover bg-gradient-to-br from-green-500/5 to-emerald-500/5 hover:from-green-500/20 hover:to-emerald-500/20 border-green-500/30 hover:border-green-500/70 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-green-500/20 hover:bg-green-500/40 transition-colors duration-300">
                                    <Briefcase className="h-6 w-6 text-green-400" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-green-300">Professional Experience</h4>
                                    <p className="text-muted-foreground">Internship experience and collaboration with teams on impactful projects.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};