import { useCallback, useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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

  const scale = Math.max(1 - scrollY / 500, 0);

  const bgStyle = {
    backgroundImage: "url('assets/bg.jpg')",
    backgroundSize: "cover", // Ensures no stretching
    backgroundPosition: "top center", // Aligns the image to the top
    backgroundRepeat: "no-repeat", // Prevents tiling
    aspectRatio: "16 / 9", // Maintain 16:9 ratio
    height: `${scale * 100}vh`, // Dynamically adjust height on scroll
    transition: "background-size 0.3s ease-in-out, height 0.3s ease-in-out",
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
}
