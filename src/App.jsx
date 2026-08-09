import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Home from "./section/Home.jsx";
import About from "./section/About.jsx";
import Skills from "./section/Skills.jsx";
import Projects from "./section/Projects.jsx";
import Journey from "./section/Journey.jsx";
import Certificates from "./section/Certificates.jsx";
import Contact from "./section/Contact.jsx";
import Footer from "./section/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import AllProjects from "./section/AllProjects.jsx";

export default function App() {
    const [showAllProjects, setShowAllProjects] = useState(false);

    return (
        <div>

            {/* <ParticlesBackground /> */}

            <CustomCursor />

            <Navbar />

            <Home />
            <About />
            <Skills />

            <Projects
                onViewAllProjects={() => setShowAllProjects(true)}
            />

            <Journey />
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
