import Navbar from "./components/Navbar.jsx";
import Home from "./section/Home.jsx";
import About from "./section/About.jsx";
import Skills from "./section/Skills.jsx";
import Projects from "./section/Projects.jsx";
import Journey from "./section/Journey.jsx";
import Certificates from "./section/Certificates.jsx";
import Contact from "./section/Contact.jsx";
import Footer from "./section/Footer.jsx";
import ParticlesBackground from "./components/ParticlesBackground.jsx";


export default function App(){
    return (
        <div className="relative gradient text-white">

            <ParticlesBackground />

            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Certificates />
            <Contact />
            <Footer />
        </div>
    )
}