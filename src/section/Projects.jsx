    import { useEffect, useMemo, useRef, useState } from "react";
    import img1 from "../assets/img1.png";
    import photo1 from "../assets/photo1.jpg";
    import img2 from "../assets/img2.png";
    import img3 from "../assets/img3.png";
    import photo2 from "../assets/photo2.jpg";
    import photo3 from "../assets/photo3.jpg";
    import {
        motion,
        AnimatePresence,
        useMotionValueEvent,
        useScroll
    } from "framer-motion";

    const useIsMobile = (query = "(max-width : 639px)") => {
        const [isMobile, setIsMobile] = useState(
            typeof window !== "undefined" && window.matchMedia(query).matches
        );

        useEffect(() => {
            if (typeof window === "undefined") return;

            const mql = window.matchMedia(query);
            const handler = (e) => setIsMobile(e.matches);

            mql.addEventListener("change", handler);
            setIsMobile(mql.matches);

            return () => mql.removeEventListener("change", handler);
        }, [query]);

        return isMobile;
    };

    export default function Projects({onViewAllProjects}) {
        const isMobile = useIsMobile();
        const sceneRef = useRef(null);

        const projects = useMemo(
            () => [
                {
                    title: "ResumeCraft Ai",
                    link: "https://resume-craft-ai-eta.vercel.app/",
                    bgColor: "#8a70db",
                    image: isMobile ? photo1 : img1,
                },
                {
                    title: "MovieFlix",
                    link: "https://movieflix-react-app-zeta.vercel.app/",
                    bgColor: "#013764",
                    image: isMobile ? photo2 : img2,
                },
                {
                    title: "Chronos",
                    link: "https://chronos-lac.vercel.app/",
                    bgColor: "#B80101",
                    image: isMobile ? photo3 : img3,
                },
            ],
            [isMobile]
        );

        const { scrollYProgress } = useScroll({
            target: sceneRef,
            offset: ["start start", "end end"],
        });

        const thresholds = projects.map(
            (_, i) => (i + 1) / projects.length
        );

        const [activeIndex, setActiveIndex] = useState(0);

        useMotionValueEvent(scrollYProgress, "change", (v) => {
            const idx = thresholds.findIndex((t) => v <= t);

            setActiveIndex(
                idx === -1 ? thresholds.length - 1 : idx
            );
        });

        const activeProject = projects[activeIndex];

        return (
            <section
                id="projects"
                className="relative text-white"
                ref={sceneRef}
                style={{
                    height: `${100 * projects.length}vh`,
                    backgroundColor: activeProject.bgColor,
                    transition: "background-color 400ms ease",
                }}
            >
                {/*featured projects*/}

                <div className="sticky top-0 h-screen flex flex-col items-center justify-center">

                    <h2
                        className={`text-3xl font-semibold z-10 text-center text-gray-50 ${
                            isMobile ? "mt-4" : "mt-8"
                        }`}
                    >
                        Featured Projects
                    </h2>

                    <div
                        className={`relative w-full flex-1 flex items-center justify-center ${
                            isMobile ? "-mt-4" : ""
                        }`}
                    >
                        {projects.map((project, idx) => (
                            <div
                                key={project.title}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                                    activeIndex === idx
                                        ? "opacity-100 z-20"
                                        : "opacity-0 z-0 sm:z-10"
                                }`}
                                style={{
                                    width: "85%",
                                    maxWidth: "1200px",
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    {activeIndex === idx && (
                                        <motion.h3
                                            key={project.title}
                                            initial={{
                                                opacity: 0,
                                                y: -30,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 30,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeOut",
                                            }}
                                            className={`block text-center text-[clamp(2rem,6vw,5rem)] text-white/95 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] sm:mb-0 italic font-semibold ${
                                                isMobile ? "-mt-24" : ""
                                            }`}
                                            style={{
                                                zIndex: 5,
                                                textAlign: isMobile
                                                    ? "center"
                                                    : "left",
                                            }}
                                        >
                                            {project.title}
                                        </motion.h3>
                                    )}
                                </AnimatePresence>

                                <div
                                    className={`relative w-full overflow-hidden bg-black/20 shadow-2xl
                                    md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${
                                        isMobile
                                            ? "mb-6 rounded-lg"
                                            : "mb-10 sm:mb-12 rounded-xl"
                                    }
                                    h-[62vh] sm:h-[66vh]`}
                                    style={{
                                        zIndex: 10,
                                        transition:
                                            "box-shadow 250ms ease",
                                    }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
                                        style={{
                                            position: "relative",
                                            zIndex: 10,
                                            filter:
                                                "drop-shadow(0,16px 40px rgba(0,0,0,0.65))",
                                            transition:
                                                "filter 200ms ease",
                                        }}
                                        loading="lazy"
                                    />

                                    <div
                                        className="pointer-events-none absolute inset-0"
                                        style={{
                                            zIndex: 11,
                                            background:
                                                "linear-gradient(100deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)",
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Existing View Project Button */}

                    <div
                        className={`absolute ${
                            isMobile ? "bottom-20" : "bottom-10"
                        }`}
                    >
                        <a
                            href={activeProject?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-white transition-all"
                            aria-label={`view ${activeProject?.title}`}
                        >
                            View Project
                        </a>
                    </div>
                </div>

               {/*//view all projects*/}

                <div
                    className={`absolute left-0 right-0 flex justify-center ${
                        isMobile ? "bottom-4" : "bottom-6"
                    }`}
                >
                    <motion.button
                        onClick={onViewAllProjects}
                        initial={{
                            opacity: 0,
                            x: isMobile ? 0 : 60,
                            y: isMobile ? 40 : 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 bg-black/20 backdrop-blur-md text-white font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                    >
                        <span>View All Projects</span>

                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            ↗
        </span>
                    </motion.button>


                </div>
            </section>
        );
    }