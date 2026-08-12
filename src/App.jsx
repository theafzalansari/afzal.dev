import { useEffect, useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Home from "./section/Home.jsx";
import About from "./section/About.jsx";
import Skills from "./section/Skills.jsx";
import Projects from "./section/Projects.jsx";
import Certificates from "./section/Certificates.jsx";
import Contact from "./section/Contact.jsx";
import Footer from "./section/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import AllProjects from "./section/AllProjects.jsx";
import Experience from "./section/Experience.jsx";
import Education from "./section/Education.jsx";

export default function App() {
    const [showAllProjects, setShowAllProjects] = useState(false);

    useEffect(() => {
        if (showAllProjects) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [showAllProjects]);

    return (
        <div>
            <CustomCursor />

            <Navbar />

            <Home />
            <About />
            <Skills />

            <Projects
                onViewAllProjects={() => setShowAllProjects(true)}
            />

            <Experience />
            <Education />
            <Certificates />
            <Contact />
            <Footer />

            <AllProjects
                isOpen={showAllProjects}
                onClose={() => setShowAllProjects(false)}
            />
        </div>
    );
}
