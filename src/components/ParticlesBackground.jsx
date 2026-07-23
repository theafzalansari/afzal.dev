import {useEffect, useRef} from "react";
import {color} from "framer-motion";


export default function ParticlesBackground(){
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let particles = [];
        const particlesCount = 50;
        const colors=['rgba(255,255,255,0.7)']

        class particle{
            construtor(){
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 2+1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.speedX = (Math.random() - 0.5)*0.5;
                this.speedY = (Math.random() - 0.5)*0.5;
            }
        }
    })

    return(
        <canvas  ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">

        </canvas>
    )
}
