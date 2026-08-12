import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const education = [
    {
        degree: "Bachelor of Engineering",
        field: "Electronics and Computer Engineering",
        institution: "MET Institute of Engineering, Bhujbal Knowledge City",
        duration: "Aug 2025 – Aug 2029",
        grade: "8.62 CGPA",
        details: "Engineering",
        badge: "BE",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        field: "Science",
        institution: "Yews National Jr. College for Boys and Girls",
        duration: "Jun 2023 – May 2025",
        grade: "82%",
        details: "MHT-CET: 81.1%",
        badge: "12th",
    },
    {
        degree: "Secondary School Certificate (SSC)",
        field: "Primary and Secondary Education",
        institution: "Myron English School",
        duration: "Jun 2013 – May 2023",
        grade: "85.60%",
        details: "",
        badge: "10th",
    },
];

export default function Education() {
    const containerRef = React.useRef(null);

    // Dynamic scroll-linked progress for vertical beam
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 70%", "end 50%"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="education" className="relative bg-black text-white py-24 px-6 overflow-hidden">
            {/* Background Red Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-red-500 font-semibold mb-3">
                        My Academic Journey
                    </p>
                    <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                        Education<span className="text-red-500">.</span>
                    </h2>
                    <p className="text-gray-400 mt-3 text-lg max-w-xl mx-auto">
                        The academic foundation that built my knowledge in engineering, programming, and core computer science.
                    </p>
                </motion.div>

                {/* Vertical Timeline Container */}
                <div ref={containerRef} className="relative">
                    {/* Background Track Line */}
                    <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 -translate-x-1/2" />

                    {/* Animated Red Progress Line (Shrinks back up on scroll up) */}
                    <motion.div
                        className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500 via-rose-500 to-red-600 origin-top -translate-x-1/2 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                        style={{ scaleY }}
                    />

                    {/* List Items */}
                    <div className="space-y-12 sm:space-y-16">
                        {education.map((item, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <motion.div
                                    key={`${item.institution}-${item.degree}`}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: idx * 0.1,
                                    }}
                                    className="relative flex flex-col sm:flex-row items-center"
                                >
                                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                                        <div className="w-5 h-5 rounded-full bg-black border-2 border-red-500 flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        </div>
                                    </div>

                                    <div
                                        className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                                            isEven
                                                ? "sm:ml-auto sm:pl-8"
                                                : "sm:pr-8"
                                        }`}
                                    >
                                        <motion.article
                                            whileHover={{ y: -5 }}
                                            transition={{ duration: 0.25 }}
                                            className="group bg-gray-900/90 backdrop-blur-md border border-gray-800 hover:border-red-500/40 rounded-2xl p-6 sm:p-7 shadow-xl transition-colors duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                <span className="text-red-500 font-bold text-sm">
                                    {item.badge}
                                </span>
                                                </div>

                                                <div className="min-w-0">
                                                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-red-400 transition-colors">
                                                        {item.degree}
                                                    </h3>

                                                    <p className="mt-1 text-sm sm:text-base text-red-400 font-medium">
                                                        {item.field}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-5">
                                                <h4 className="text-base sm:text-lg font-medium text-gray-200">
                                                    {item.institution}
                                                </h4>

                                                <p className="mt-1 text-sm text-gray-400">
                                                    {item.duration}
                                                </p>
                                            </div>

                                            <div className="mt-5 pt-4 border-t border-gray-800/70 flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300">
                                Grade: {item.grade}
                            </span>

                                                {item.details && (
                                                    <span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300">
                                    {item.details}
                                </span>
                                                )}
                                            </div>
                                        </motion.article>
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