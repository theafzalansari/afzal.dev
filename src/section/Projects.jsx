import {useEffect, useMemo, useRef, useState} from "react";
import img1 from "../assets/img1.png";
import photo1 from "../assets/photo1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import {useMotionValueEvent, useScroll} from "framer-motion";


const useIsMobile = (query = "(max-width : 639px") => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" && window.matchMedia(query).matches
    )
    useEffect(() => {
        if(typeof window === "undefined") return;
        const mql = window.matchMedia(query);
        const handler = (e) => setIsMobile(e.matches);

        mql.addEventListener("change",handler);
        setIsMobile(mql.matches);
        return() => mql.removeEventListener("change", handler);
    }, [query]);
    return isMobile;
}

export default function Projects() {
    const isMobile = useIsMobile();
    const sceneRef = useRef(null);

    const projects = useMemo(() => [
        {
            title: "ResumeCraft Ai",
            link: "https://resume-craft-ai-eta.vercel.app/",
            bgColor: "#ffffff",
            image: isMobile ? photo1 : img1,
        },
        {
            title: "MovieFlix",
            link: "https://resume-craft-ai-eta.vercel.app/",
            bgColor: "#9370db",
            image: isMobile ? photo2 : img2,
        },
        {
            title: "Chronos",
            link: "https://chronos-lac.vercel.app/",
            bgColor: "#7d7d7d",
            image: isMobile ? photo3 : img3,
        },
    ], [isMobile])

    const {scrollYProgress} = useScroll({
        target: sceneRef,
        offset: ['start start', 'end end']
    })
    const thresholds = projects.map((_,i) => (i+1)/projects.length)
    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (v)=> {
        const idx = thresholds.findIndex((t) => v <= t);
        setActiveIndex(idx === -1 ? thresholds.length-1 : idx)
    })

    const activeProject = projects[activeIndex];

    return (
        <section id='projects' className="relative text-white"
        ref={sceneRef}
        >

        </section>
    )
}