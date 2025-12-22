import { useState } from "react"
import { Github, Instagram, Linkedin, MailIcon, MapPin, Phone, Send, X } from "lucide-react"
import { cn } from "../lib/utils"

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxU_ISPCuWwqzDJYgEif8Ps1GXvjfAjHx9F-IevtrJSZRDIN_CyFn8WOSFJevTd12p4/exec';
        const form = e.target;

        fetch(scriptURL, { 
            method: 'POST', 
            body: new FormData(form)
        })
        .then(response => {
            alert("Message sent successfully!");
            form.reset();
            setIsSubmitting(false);
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Failed to send message.");
            setIsSubmitting(false);
        });
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column: Contact Info & Socials */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-semibold mb-6 text-left">Contact Information</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MailIcon className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a href="mailto:imankasilvatharusha@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">imankasilvatharusha@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Phone</h4>
                                    <a href="tel:+94788203522" className="text-muted-foreground hover:text-primary transition-colors">+94788203522</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Location</h4>
                                    <p className="text-muted-foreground">Gampaha, Sri Lanka</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="pt-8 border-t border-border">
                            <h4 className="font-medium mb-4 text-left">Connect With Me</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                                    <Linkedin size={20}/>
                                </a>
                                <a href="https://github.com/imanka-dev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                                    <Github size={20}/>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                                    <Instagram size={20}/>
                                </a>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                                    <X size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
                        <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                    name="name" 
                                    type="text" 
                                    id="name" 
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Enter Your Name"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                    name="email" 
                                    type="email" 
                                    id="email" 
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="ex@example.com"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    required
                                    rows="4" 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none resize-none"
                                    placeholder="Enter Your Message">
                                </textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2", isSubmitting && "opacity-70 cursor-not-allowed")}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}