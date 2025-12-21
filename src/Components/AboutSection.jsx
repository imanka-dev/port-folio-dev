import { Briefcase, Code, School } from "lucide-react";




export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
        {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Designer</h3>

                        <p className="text-muted-foreground">I'm Imanka Silva, an undergraduate at the Faculty of Technology, Rajarata University of Sri Lanka, currently pursuing a BICT (Hons) degree. I’m a passionate full-stack developer with a strong focus on the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
                        <p className="text-muted-foreground">I enjoy building responsive and user-friendly web applications that provide great user experiences. My journey into web development began during my university studies, and since then, I’ve been actively learning, taking on personal projects, and collaborating with others to sharpen my skills.</p>
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
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive and user-friendly web applications using the MERN stack.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover"><div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <School className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive and user-friendly web applications using the MERN stack.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive and user-friendly web applications using the MERN stack.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};