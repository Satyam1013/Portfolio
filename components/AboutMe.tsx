import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiPrisma,
  SiAntdesign,
  SiJavascript,
  SiChakraui,
  SiReact,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-designColor" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-designColor" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-designColor" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-designColor" /> },
  { name: "React JS", icon: <FaReact className="text-designColor" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-designColor" /> },
  { name: "Nest JS", icon: <SiNestjs className="text-designColor" /> },
  { name: "Node JS", icon: <FaNodeJs className="text-designColor" /> },
  { name: "Express JS", icon: <SiExpress className="text-designColor" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-designColor" /> },
  { name: "Prisma", icon: <SiPrisma className="text-designColor" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-designColor" />,
  },
  { name: "Ant Design", icon: <SiAntdesign className="text-designColor" /> },
  { name: "ShadCN UI", icon: <FaDatabase className="text-designColor" /> },
  { name: "Chakra UI", icon: <SiChakraui className="text-designColor" /> },
  { name: "React Native", icon: <SiReact className="text-designColor" /> },
  { name: "Redux", icon: <SiRedux className="text-designColor" /> },
  { name: "RPC", icon: <FaNetworkWired className="text-designColor" /> },
  { name: "REST API", icon: <FaDatabase className="text-designColor" /> },
];

const directionStyles = [
  { x: -100, y: 0 }, // from left
  { x: 100, y: 0 }, // from right
  { x: 0, y: -100 }, // from top
  { x: 0, y: 100 }, // from bottom
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full h-full bg-black text-white py-28 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
        <h1 className="text-3xl uppercase font-semibold text-center">
          A Story about me.
        </h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-textColor">
          Hi, I'm a{" "}
          <span className="font-bold text-white">Software Developer</span> with 
          <span className="font-bold text-white"> 1.5 years</span> of experience in building dynamic websites and robust
          applications. My expertise includes a strong foundation in data
          structures and algorithms, which enables me to solve complex problems
          efficiently. Currently, I work at Prodios Labs, where I contribute to
          critical projects for the Uttarakhand government, focusing on scalable
          and impactful solutions.
        </p>

        <h2 className="text-3xl uppercase font-semibold text-center mt-16">
          My Skills
        </h2>

        {/* Skills Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {skills.map((skill, index) => {
            const direction = directionStyles[index % directionStyles.length];
            return (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-200 ease-in-out"
                initial={{ opacity: 0, x: direction.x, y: direction.y }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }} 
              >
                <div className="text-5xl">{skill.icon}</div>
                <h2 className="text-lg font-semibold">{skill.name}</h2>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
