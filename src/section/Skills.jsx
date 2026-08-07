import { TbBrandCpp, } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiWebstorm } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { RiNpmjsFill } from "react-icons/ri";
import {motion} from "framer-motion";
import { FaNodeJs } from "react-icons/fa";



export default function Skills() {
    const skills = [
        { name: "C++", icon: <TbBrandCpp /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <BsTypescript /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
        { name: "React", icon: <FaReact /> },
        { name: "Responsive Design", icon: <DiResponsive /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithubSquare /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "WebStorm", icon: <SiWebstorm /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "NPM", icon: <RiNpmjsFill /> },
        { name: "NodeJs", icon: <FaNodeJs /> },];
    const repeated = [...skills, ...skills];


    return (
        <section id="skills" className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">

            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute top-1/4 left-0 w-[300px] h-[3000px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
                opacity-20 blur-[120px] animate-pulse
                "/>
                <div className="absolute bottom-1/4 right-0 w-[300px] h-[3000px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
                opacity-20 blur-[120px] animate-pulse delay-500
                " />

            </div>

            <motion.h2 className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-tex text-gray-200
            "
            initial={{opacity:0 , y:-30}}
            whileInView={{opacity: 1, y:0}}
                       transition={{duration:0.5, delay:0.1}}
            >
                My Skills
            </motion.h2>

            <motion.p className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
            initial={{opacity:0, y:-10}}
                      whileInView={{opacity:1, y:0}}
                      transition={{duration:0.5, delay:0.1}}
            >
                Technologies | Tech Stack
            </motion.p>

            <div className="relative w-full overflow-hidden">
                <motion.div className="flex gap-10 text-6xl text-[#D22B2B] ">

                    {repeated.map((s,i) => (
                        <div
                        key={i} className='flex flex-col items-center gap-2 min-w-[120px]'
                        aria-label={s.name}
                        title={s.name}>
                            <span className="hover:scale-125 transition-transform duration-300">
                                {s.icon}
                            </span>
                            <p className="text-sm">
                                {s.name}
                            </p>

                        </div>
                    ))}

                </motion.div>
            </div>

        </section>
    )
}