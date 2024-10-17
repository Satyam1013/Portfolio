import { useCallback, useEffect, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Design = () => {
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

  // Calculate the scaling factor based on scroll position
  const scale = Math.max(1 - scrollY / 500, 0); // Adjust the divisor to control scale speed and limit scaling to 0

  // Determine background color based on scale
  const bgColor = scale <= 0 ? "black" : "transparent"; // Change to black when scale is 0

  const bgStyle = {
    backgroundImage: "url('assets/bg.jpg')", // Replace with your image URL
    backgroundSize: `${scale * 100}vw ${scale * 100}vh`, // Scale the image based on the calculated factor
    backgroundPosition: "center",
    transition: "background-size 0.3s ease-in-out, background-color 0.3s ease-in-out", // Smooth transition for both properties
    backgroundColor: bgColor, // Set background color
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div style={bgStyle} className="absolute inset-0 z-0">
        <Particles
          className="w-full h-full"
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            fullScreen: false,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 120,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                speed: 2,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 90,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </div>
  );
};

export default Design;
