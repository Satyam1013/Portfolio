import { useCallback, useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

export default function Design() {
  const [scrollY, setScrollY] = useState(0);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgTranslateY = Math.max(-scrollY / 2, -500); // Move up (change translateX to translateY)
  
  // Adjust text opacity based on scroll
  const textOpacity = Math.max(1 - scrollY / 300, 0); // Fade out as you scroll

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Section */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('assets/bg.jpg')",
          transform: `translateY(${bgTranslateY}px)`, // Move up instead of left
          transition: "transform 0.1s ease-out",
        }}
      >
        <Particles
          className="w-full h-full"
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            fullScreen: false,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: { color: "#ffffff", distance: 120, enable: true, opacity: 0.5, width: 1 },
              collisions: { enable: true },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                speed: 2,
              },
              number: {
                density: { enable: true, area: 1000 },
                value: 90,
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Text Section */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-end z-10 pr-10"
        style={{
          opacity: textOpacity, // Fade out text as you scroll
          transition: "opacity 0.3s ease-out",
        }}
      >
        {/* Main Name */}
        <motion.h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-designColor to-indigo-500 leading-tight relative animate-pulse"
          initial={{ opacity: 0, y: -100 }}  // Starting state
          animate={{ opacity: 1, y: 0 }}    // Ending state
          transition={{ duration: 1 }}
        >
          I'm Satyam Banwale
        </motion.h1>

        {/* Software Developer Text */}
        <motion.div
          className="mt-4 relative"
          initial={{ opacity: 0, y: -100 }}  // Starting state
          animate={{ opacity: 1, y: 0 }}    // Ending state
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-designColor tracking-wide animate-pulse">
            Software Developer
          </h2>
          {/* Glowing underline effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#FF6347] to-[#00BFFF] w-full h-1"
            style={{
              transform: `scaleX(${Math.max(scrollY / 500, 1)})`,
              transformOrigin: "left",
              transition: "transform 0.3s ease-out",
            }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
}
