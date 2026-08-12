import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
    {
        role: "Data Analyst Intern",
        company: "Edunet Foundation",
        duration: "Aug 2026 - Present",
        skills: ["Python", "Data Analysis", "Visualization", "Problem Solving"],
        description:
            "Selected for VOIS & Vodafone Idea Foundation program. Building skills in Python, data analysis, visualization, and solving real-world problems through hands-on projects.",
    },
    {
        role: "Founder & Director – Strategy & Technology",
        company: "Food Fed Foundation",
        duration: "Aug 2026 - Present",
        skills: ["Leadership", "Digital Platforms", "Strategy", "Tech for Social Impact"],
        description:
            "Driving vision and digital platform development to tackle food waste and hunger. Leading team coordination and leveraging technology for social impact.",
    },
];

export default function Experience() {
    const containerRef = React.useRef(null);

    // Scroll progress line tracker
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 70%", "end 50%"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="relative bg-black text-white py-24 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                        Experience<span className="text-red-500">.</span>
                    </h2>
                    <p className="text-gray-400 mt-3 text-lg max-w-xl mx-auto">
                        My career path and key technical contributions across different roles.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative">
                    {/* Background Static Line */}
                    <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 -translate-x-1/2" />

                    {/* Animated Progress Line */}
                    <motion.div
                        className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500 via-rose-500 to-red-600 origin-top -translate-x-1/2 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                        style={{ scaleY }}
                    />

                    {/* List Items */}
                    <div className="space-y-12 sm:space-y-16">
                        {experiences.map((exp, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <motion.div
                                    key={`${exp.company}-${idx}`}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className={`relative flex flex-col sm:flex-row items-center ${
                                        isEven ? "sm:flex-row-reverse" : ""
                                    }`}
                                >
                                    {/* Center Dot Node */}
                                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                                        <div className="w-5 h-5 rounded-full bg-black border-2 border-red-500 flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        </div>
                                    </div>

                                    {/* Card Content Container */}
                                    <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                                        <div className="bg-gray-900/90 border border-gray-800 hover:border-gray-700/80 transition-all duration-300 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-red-950/20 group">
                                            {/* Role & Duration Header */}
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 w-fit">
                                                    {exp.duration}
                                                </span>
                                            </div>

                                            {/* Company */}
                                            <p className="text-sm font-medium text-gray-400 mb-4">
                                                {exp.company}
                                            </p>

                                            {/* Description */}
                                            <p className="text-sm text-gray-300 leading-relaxed mb-5 break-words">
                                                {exp.description}
                                            </p>

                                            {/* Tech Badges */}
                                            {exp.skills && (
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="text-xs px-2.5 py-1 rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/50"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}