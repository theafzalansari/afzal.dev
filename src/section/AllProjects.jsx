import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

export default function AllProjects({ isOpen, onClose }) {
    const projects = [
        {
            title: "ResumeCraft AI",
            description:
                "Built an AI-powered resume builder that helps users create ATS-friendly, professional resumes using customizable templates and intelligent AI-generated content suggestions. The application focuses on delivering a modern user experience with responsive design and real-time editing capabilities.",
            image: img1,
            tech: ["React", "AI Integration", "JavaScript", "TailwindCSS", "Respnsive Web Design", "Git", "GitHub", "Vercel Deployment", "Strapi Backend"],
            live: "https://resume-craft-ai-eta.vercel.app/",
            github: "https://github.com/theafzalansari/resume-craft-ai",
        },
        {
            title: "MovieFlix – Movie Discovery Platform",
            description:
                "Built a responsive movie discovery platform using React, Vite, Tailwind CSS, TMDB API, and Appwrite. Features include real-time movie search, trending movies, responsive UI, and API integration for dynamic content.",
            image: img2,
            tech: ["React", "API", "JavaScript", "TailwindCSS", "TMDB API", "Appwrite", "REST APIs", "Git", "GitHub", "Vercel Deployment"],
            live: "https://movieflix-react-app-zeta.vercel.app/",
            github: "https://github.com/theafzalansari/movieflix-react-app",
        },
        {
            title: "Chronos – Kanban Task Manager",
            description:
                "Designed and developed a Kanban-style task management application with drag-and-drop functionality, persistent local storage, and a clean responsive interface for organizing daily tasks efficiently.",
            image: img3,
            tech: ["HTML", "JavaScript", "CSS", "Drag & Drop API", "Local Storage", "Responsive Web Design", "Git", "GitHub", "Vercel Deployment"],
            live: "https://chronos-lac.vercel.app/",
            github: "https://github.com/theafzalansari/chronos",
        },
        {
            title: "PPS Practice Hub",
            description:
                "Created an interactive Python Programming learning platform featuring 20 practice programs, progress tracking, sample outputs, study tips, and local storage support to help first-year engineering students practice programming concepts.",
            image: img4,
            tech: ["HTML", "JavaScript", "CSS", "Local Storage", "Responsive Web Design", "Git", "GitHub", "Vercel Deployment"],
            live: "https://pps-practice-hub.vercel.app/",
            github: "https://github.com/theafzalansari/pps-practice-hub",
        },
        {
            title: "Profile Card",
            description:
                "Built a fully responsive profile card featuring dropdown menus, animated UI elements, social media integration, and modern CSS styling, then deployed it on Vercel.",
            image: img5,
            tech: ["HTML", "JavaScript", "CSS", "Responsive Web Design", "Git", "GitHub", "Vercel Deployment"],
            live: "https://profile-card-taupe-rho.vercel.app/",
            github: "https://github.com/theafzalansari/profile-card",
        },
        {
            title: "Sieca – Scientific Calculator",
            description:
                "Developed a modern scientific calculator supporting arithmetic and trigonometric operations, calculation history, and a responsive user interface using HTML, CSS, and JavaScript.",
            image: img6,
            tech: ["HTML", "JavaScript", "CSS", "Responsive Web Design", "DOM Manipulation", "Git", "GitHub", "Vercel Deployment"],
            live: "https://sieca-the-calculator.vercel.app/",
            github: "https://github.com/theafzalansari/sieca-the-calculator",
        },
        {
            title: "Amazon Homepage Clone",
            description:
                "Recreated the Amazon homepage interface using HTML and CSS to strengthen front-end development fundamentals, responsive layouts, and modern UI design practices.",
            image: img7,
            tech: ["HTML", "CSS", "Responsive Web Design", "Git", "GitHub", "Vercel Deployment"],
            live: "https://amazon-clone-html-css-hazel.vercel.app/",
            github: "https://github.com/theafzalansari/Amazon-clone-html-css",
        },


    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="fixed top-6 right-6 z-[110] w-11 h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xl hover:bg-white hover:text-black transition-all duration-300"
                        aria-label="Close projects"
                    >
                        ×
                    </button>

                    {/* Popup Content */}
                    <div className="min-h-screen px-6 py-20 sm:px-10 lg:px-20">

                        {/* Header */}
                        <div className="max-w-6xl mx-auto mb-14">

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4"
                            >
                                My Work
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-red-500"
                            >
                                All Projects
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1,
                                }}
                                className="mt-4 max-w-2xl text-white/60 text-base sm:text-lg"
                            >
                                A collection of projects I've built while
                                learning, experimenting, and growing as a
                                developer.
                            </motion.p>

                        </div>

                        {/* Projects Grid */}
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">

                            {projects.map((project, index) => (

                                <motion.article
                                    key={project.title}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors duration-300"
                                >

                                    {/* Image */}
                                    <div className="relative aspect-video overflow-hidden bg-white/5">

                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />

                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                                    </div>

                                    {/* Content */}
                                    <div className="p-6">

                                        <h2 className="text-2xl font-semibold text-white">
                                            {project.title}
                                        </h2>

                                        <p className="mt-3 text-white/60 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mt-5">

                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/70"
                                                >
                                                    {tech}
                                                </span>
                                            ))}

                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3 mt-6">

                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/80 transition"
                                            >
                                                Live Demo ↗
                                            </a>

                                            {project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
                                                >
                                                    GitHub ↗
                                                </a>
                                            )}

                                        </div>

                                    </div>

                                </motion.article>

                            ))}

                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}