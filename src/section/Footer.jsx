// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
    FaXTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaGithub,
} from "react-icons/fa6";

const socials = [
    {
        Icon: FaLinkedinIn,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/theafzalansari/",
    },
    {
        Icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/theafzalansari",
    },
    {
        Icon: FaXTwitter,
        label: "X",
        href: "https://x.com/theafzalansari?t=uI1zGCYMTkXfjfM47WhCow&s=09",
    },
    {
        Icon: FaInstagram,
        label: "Instagram",
        href: "https://www.instagram.com/theafzalansarii?igsh=MXRkdTI2dmc3Zjh4MA==",
    },
];

const glowVariants = {
    initial: {
        scale: 1,
        y: 0,
        filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
    },

    hover: {
        scale: 1.2,
        y: -3,
        filter:
            "drop-shadow(0 0 8px rgba(239,68,68,0.9)) drop-shadow(0 0 18px rgba(239,68,68,0.5))",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15,
        },
    },

    tap: {
        scale: 0.95,
        y: 0,
        transition: {
            duration: 0.08,
        },
    },
};

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-black">

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(239,68,68,0.15),transparent_70%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(239,68,68,0.10),transparent_70%)]" />

            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.8,
                }}
                className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
            >

                <div className="w-full">

                    <h1
                        className="font-bangers font-semibold leading-none text-white text-center select-none"
                        style={{
                            fontSize: "clamp(3rem, 5vw, 14rem)",
                            letterSpacing: "0.02em",
                            lineHeight: 0.9,
                            paddingLeft: "3vw",
                            paddingRight: "3vw",
                            whiteSpace: "nowrap",
                            textShadow: "0 2px 18px rgba(0,0,0,0.45)",
                        }}
                    >
                        Afzal Ansari
                    </h1>

                </div>

                <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-red-600" />

                <div className="flex gap-5 text-2xl md:text-3xl">

                    {socials.map(({ Icon, label, href }) => (
                        <motion.a
                            key={label}
                            href={href}
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={glowVariants}
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Icon />
                        </motion.a>
                    ))}

                </div>

                <p className="text-gray-300 italic max-w-xl">
                    "Oversimplify don't Overcomplicate."
                </p>

                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} Afzal Ansari. All rights reserved.
                </p>

            </motion.div>

        </footer>
    );
};

export default Footer;