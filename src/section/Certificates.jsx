import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaArrowRight,
    FaCertificate,
    FaExternalLinkAlt,
    FaTimes,
} from "react-icons/fa";


const certificates = [
    {
        title: "Getting Started with Python Environment Installations",
        issuer: "Edunet Foundation",
        date: "Aug 2026",
        description:
            "Successfully completed the Getting Started with Python Environment Installations course by Vodafone Idea Foundation (VOIS) and Edunet Foundation, gaining foundational knowledge of Python environment setup and installation.",
        certificateUrl: "/certificates/vois2.pdf",
        credentialUrl: "https://voisfortech.com/certificate-verification/VFLMS26_163570/293",
        skills: ["Python (Programming Language)", "Python Environment Setup", "Software Installation & Configuration"],
    },

    {
        title: "Basics of Linux Operating System",
        issuer: "Edunet Foundation",
        date: "Aug 2026",
        description:
            "Successfully completed the Basics of Linux Operating System course by Vodafone Idea Foundation (VOIS) and Edunet Foundation, gaining foundational knowledge of Linux and command-line operations.",
        certificateUrl: "/certificates/vois1.pdf",
        credentialUrl: "https://voisfortech.com/certificate-verification/VFLMS26_163570/283",
        skills: ["Linux", "Linux System Administration", "CLI", "Operating Systems", "Unix"],
    },

    {
        title: "Build a Data Warehouse with BigQuery",
        issuer: "Google",
        date: "Jul 2026",
        description:
            "Completed the intermediate Build a Data Warehouse with BigQuery skill badge course.",
        certificateUrl: "https://www.skills.google/public_profiles/1736f891-32dc-47fc-9aed-a2f0528e4cc4/badges/25723900",
        credentialUrl: "https://www.skills.google/public_profiles/1736f891-32dc-47fc-9aed-a2f0528e4cc4/badges/25723900",
        skills: ["joining data to create new tables", "troubleshooting joins", "appending data with unions", "creating date-partitioned tables", "working with JSON", "arrays and structs in BigQuery"],
    },

    {
        title: "NESTGEN Manufacturing & Engineering Masterclass",
        issuer: "Nestlé",
        date: "Jul 2026",
        description:
            "Successfully completed the NESTGEN Manufacturing & Engineering Masterclass.",
        certificateUrl: "/certificates/NESTGEN2.pdf",
        credentialUrl: "https://vepimg.b8cdn.com/uploads/vjfnew/1000004891/content/files/certificate_239631784944596.pdf",
        skills: ["Computer Engineering and Technology "],
    },

    {
        title: "NESTGEN Supply Chain & Logistics Masterclass",
        issuer: "Nestlé",
        date: "Jul 2026",
        description:
            "Successfully completed the NESTGEN Supply Chain & Logistics Masterclass.",
        certificateUrl: "/certificates/NESTGEN4.pdf",
        credentialUrl: "https://vepimg.b8cdn.com/uploads/vjfnew/1000004891/content/files/certificate_23849851784909971.pdf",
        skills: ["Technology, investing and Sustainability in the future of Supply Chain"],
    },

    {
        title: "Strategic Prompt Engineering: From Fundamentals to Expertise",
        issuer: "LinkedIn",
        date: "Jul 2026",
        description:
            "Successfully completed the Strategic Prompt Engineering: From Fundamentals to Expertise.",
        certificateUrl: "/certificates/LinkedIn1.pdf",
        credentialUrl: "https://www.linkedin.com/learning/certificates/be04f866763a3a15d71428a4c3c8e8a3f6932133ff00902fd85c1c51afcfb018",
        skills: ["Artificial Intelligence (AI)", "AI Prompting", "Prompt Engineering"],
    },

    {
        title: "NESTGEN Finance & Entrepreneurship Masterclass",
        issuer: "Nestlé",
        date: "Jul 2026",
        description:
            "Successfully completed the NESTGEN Finance & Entrepreneurship Masterclass.",
        certificateUrl: "/certificates/NESTGEN5.pdf",
        credentialUrl: "https://vepimg.b8cdn.com/uploads/vjfnew/1000004891/content/files/certificate_24006601784909976.pdf",
        skills: ["Start-up Acceleration & Entrepreneurship"],
    },

    {
        title: "NESTGEN Digital & Marketing Masterclass",
        issuer: "Nestlé",
        date: "Jul 2026",
        description:
            "Successfully completed the NESTGEN Digital & Marketing Masterclass.",
        certificateUrl: "/certificates/NESTGEN1.pdf",
        credentialUrl: "https://vepimg.b8cdn.com/uploads/vjfnew/1000004891/content/files/certificate_23694261784648321.pdf",
        skills: ["Digital Marketing"],
    },

    {
        title: "NESTGEN Manufacturing & Engineering Masterclass",
        issuer: "Nestlé",
        date: "Jul 2026",
        description:
            "Successfully completed the NESTGEN Manufacturing & Engineering Masterclass.",
        certificateUrl: "/certificates/NESTGEN3.pdf",
        credentialUrl: "https://vepimg.b8cdn.com/uploads/vjfnew/1000004891/content/files/certificate_239631784944596.pdf",
        skills: ["Robotics", "Automation", "Energy Efficiency"],
    },
];

const CertificateCard = ({ certificate, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
            }}
            whileHover={{ y: -6 }}
            className="
                group
                relative
                flex flex-col
                min-h-[310px]
                rounded-2xl
                border border-gray-800
                bg-gray-900/80
                backdrop-blur-md
                p-6
                shadow-xl
                transition-all duration-300
                hover:border-red-500/40
                hover:shadow-2xl
                hover:shadow-red-950/20
            "
        >
            {/* Certificate Icon */}
            <div className="mb-5 flex items-start justify-between">
                <div
                    className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-xl
                        border border-red-500/20
                        bg-red-500/10
                    "
                >
                    <FaCertificate className="text-red-500" />
                </div>

                <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                    {certificate.date}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-red-400">
                {certificate.title}
            </h3>

            {/* Issuer */}
            <p className="mt-2 text-sm font-medium text-red-400">
                {certificate.issuer}
            </p>

            {/* Description */}
            <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400">
                {certificate.description}
            </p>

            {/* Skills */}
            {certificate.skills?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                        <span
                            key={skill}
                            className="
                                rounded-md
                                border border-gray-700/70
                                bg-gray-800/70
                                px-2.5 py-1
                                text-xs
                                text-gray-300
                            "
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-800 pt-5">
                <a
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex items-center gap-2
                        text-sm font-semibold
                        text-white
                        transition-colors
                        hover:text-red-400
                    "
                >
                    View Certificate
                    <FaArrowRight className="text-xs" />
                </a>

                <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex items-center gap-2
                        text-sm font-semibold
                        text-gray-400
                        transition-colors
                        hover:text-red-400
                    "
                >
                    View Credentials
                    <FaExternalLinkAlt className="text-xs" />
                </a>
            </div>
        </motion.article>
    );
};

export default function Certificates() {
    const [showAll, setShowAll] = useState(false);

    const visibleCertificates = certificates.slice(0, 6);

    return (
        <section
            id="certificates"
            className="
                relative
                overflow-hidden
                bg-black
                px-6 py-24
                text-white
            "
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="
                        absolute
                        left-1/2 top-1/3
                        h-[450px] w-[450px]
                        -translate-x-1/2
                        rounded-full
                        bg-red-500/5
                        blur-[140px]
                    "
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-red-500 sm:text-sm">
                        Certifications & Achievements
                    </p>

                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                        Credentials<span className="text-red-500">.</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                        A collection of certifications, programs, and achievements
                        that reflect my continuous learning and growth.
                    </p>
                </motion.div>

                {/* Certificate Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {visibleCertificates.map((certificate, index) => (
                        <CertificateCard
                            key={`${certificate.title}-${index}`}
                            certificate={certificate}
                            index={index}
                        />
                    ))}
                </div>

                {/* View All Button */}
                {certificates.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-12 flex justify-center"
                    >
                        <button
                            type="button"
                            onClick={() => setShowAll(true)}
                            className="
                                group
                                inline-flex items-center gap-3
                                rounded-full
                                border border-gray-700
                                bg-gray-900/80
                                px-7 py-3.5
                                text-sm font-semibold
                                text-white
                                shadow-lg
                                transition-all duration-300
                                hover:border-red-500/50
                                hover:bg-gray-900
                                hover:shadow-red-950/30
                            "
                        >
                            View All Certificates

                            <FaArrowRight
                                className="
                                    transition-transform duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </button>
                    </motion.div>
                )}
            </div>

            {/* ================= MODAL ================= */}

            <AnimatePresence>
                {showAll && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowAll(false)}
                        className="
                            fixed inset-0
                            z-[100]
                            flex items-center justify-center
                            bg-black/80
                            p-4
                            backdrop-blur-md
                        "
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="
                                relative
                                flex
                                max-h-[90vh]
                                w-full
                                max-w-6xl
                                flex-col
                                overflow-hidden
                                rounded-2xl
                                border border-gray-800
                                bg-gray-950
                                shadow-2xl
                                shadow-red-950/20
                            "
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-5">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                                        My Credentials
                                    </p>

                                    <h3 className="mt-1 text-2xl font-bold text-white">
                                        All Certificates
                                    </h3>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setShowAll(false)}
                                    className="
                                        flex h-10 w-10
                                        items-center justify-center
                                        rounded-full
                                        border border-gray-700
                                        bg-gray-900
                                        text-gray-400
                                        transition-all
                                        hover:border-red-500/50
                                        hover:text-red-400
                                    "
                                    aria-label="Close certificates"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="overflow-y-auto p-6">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                                    {certificates.map((certificate, index) => (
                                        <CertificateCard
                                            key={`modal-${certificate.title}-${index}`}
                                            certificate={certificate}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}