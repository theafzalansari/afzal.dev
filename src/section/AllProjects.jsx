import { motion } from "framer-motion";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
// Add your other project images here later

export default function AllProjects() {
    const projects = [
        {
            title: "ResumeCraft AI",
            description:
                "An AI-powered resume platform designed to help users create and improve their resumes.",
            image: img1,
            tech: ["React", "AI", "JavaScript"],
            live: "https://resume-craft-ai-eta.vercel.app/",
            github: "#",
        },
        {
            title: "MovieFlix",
            description:
                "A movie discovery web application with a modern interface for browsing and exploring movies.",
            image: img2,
            tech: ["React", "API", "JavaScript"],
            live: "https://movieflix-react-app-zeta.vercel.app/",
            github: "#",
        },
        {
            title: "Chronos",
            description:
                "A task management application designed to organize tasks using a simple and intuitive workflow.",
            image: img3,
            tech: ["React", "JavaScript", "CSS"],
            live: "https://chronos-lac.vercel.app/",
            github: "#",
        },
    ];

    return (
        <section className="min-h-screen bg-black text-white px-6 py-24 sm:px-10 lg:px-20">

            {/* Header */}
            <div className="max-w-6xl mx-auto mb-16">

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
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                >
                    All Projects
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-5 max-w-2xl text-white/60 text-base sm:text-lg"
                >
                    A collection of projects I've built while learning,
                    experimenting, and growing as a developer.
                </motion.p>

            </div>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {projects.map((project, index) => (

                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.6,
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

                            <h2 className="text-2xl font-semibold">
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

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
                                >
                                    GitHub ↗
                                </a>

                            </div>

                        </div>

                    </motion.article>

                ))}

            </div>

        </section>
    );
}