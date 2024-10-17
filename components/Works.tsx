import React from 'react';
import { motion } from 'framer-motion';
import contactImage from '../public/assets/contact.jpg'; // Adjust the path as needed
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Using react-icons for GitHub and Live links

interface ProjectCardProps {
  title: string;
  date: string;
  techStack: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard = ({
  title,
  date,
  techStack,
  description,
  githubLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${contactImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 mb-2">{date}</p>
      <h3 className="font-semibold">Description:</h3>
      <p className="text-gray-700">{description}</p>
      <h3 className="font-semibold">Tech Stack:</h3>
      <p className="text-gray-700 mb-4">{techStack}</p>
      <div className="flex justify-between items-center">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-700 hover:text-designColor" size={24} />
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt className="text-gray-700 hover:text-designColor" size={24} />
        </a>
      </div>
    </motion.div>
  );
};

const Works: React.FC = () => {
  return (
    <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard
        title="E-Shop"
        date="Apr 2023 - Apr 2023"
        techStack="React JS, TypeScript, Node.js, Express.js, Chakra UI, MongoDB, REST APIs"
        description="E-Shop is a fully functional Indian e-commerce web application that allows users to browse and purchase a variety of products."
        githubLink="https://github.com/Satyam1013/E-Shop" 
        liveLink="https://eshop-vert.vercel.app/"
      />
      <ProjectCard
        title="Blij-Mart"
        date="Jan 2023 - Feb 2023"
        techStack="JavaScript, HTML, CSS, Bootstrap"
        description="Blij-Mart is an e-commerce website where you can purchase a variety of products."
        githubLink="https://github.com/Satyam1013/BlijMart" 
        liveLink="http://www.blijmart.com/"
      />
    </div>
  );
};

export default Works;
