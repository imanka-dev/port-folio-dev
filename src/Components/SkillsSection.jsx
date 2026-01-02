import { act, use, useState } from "react"
import { cn } from "../lib/utils"


const skills = [
    // Frontend Skills
    {name: "React", level: "80", category: "Frontend"},
    {name: "Vue.js", level: "80", category: "Frontend"},
    {name: "HTML/CSS", level: "90", category: "Frontend"},
    {name: "Tailwind CSS", level: "85", category: "Frontend"},
    {name: "JavaScript", level: "90", category: "Frontend"},
    {name: "TypeScript", level: "80", category: "Frontend"},
    {name: "Next.js", level: "75", category: "Frontend"},

    // Backend Skills
    {name: "Node.js", level: "85", category: "Backend"},
    {name: "Express.js", level: "80", category: "Backend"},
    {name: "MongoDB", level: "70", category: "Backend"},
    {name: "PostgreSQL", level: "65", category: "Backend"},

    // Tools
    {name: "Git/GitHub", level: "90", category: "Tools"},
    {name: "Docker", level: "60", category: "Tools"},
    {name: "VS Code", level: "95", category: "Tools"},
    {name: "Postman", level: "70", category: "Tools"},
    

]

const categories = ["all", "Frontend", "Backend", "Tools"];









export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filterSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return(
        <section id="skills" 
         className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    MY <span className="text-primary">SKILLS</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary/90"
                        )}>{category}</button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    { filterSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg card-hover border border-primary/20 hover:border-primary/50 shadow-[0_8px_32px_rgba(139,92,246,0.15)] hover:shadow-[0_12px_48px_rgba(139,92,246,0.25),0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 hover:-translate-y-1">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{width: skill.level + "%"}}></div>
                            </div>
                            <div className="text-right mt-1 ">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>               
                    ))}
                </div>

            </div>
        </section>
    )
}
 