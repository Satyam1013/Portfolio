import { useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  date: string;
  techStack: string;
  description: string;
  githubLink: string;
  liveLink: string;
  images: string[];
}

const ProjectCard = ({
  title,
  date,
  techStack,
  description,
  githubLink,
  liveLink,
  images,
}: ProjectCardProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <motion.div
      className="flex flex-col bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full sm:w-[32rem]"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Carousel */}
      <div className="relative aspect-[16/9]">
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {images.map((src, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                style={{ filter: "brightness(90%)" }}
              />
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-0 rounded-full p-2 shadow-md hover:bg-opacity-75"
        >
          <FaChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-0 rounded-full p-2 shadow-md hover:bg-opacity-75"
        >
          <FaChevronRight size={32} />
        </button>
      </div>

      {/* Project Information */}
      <div className="p-8 flex flex-col justify-between bg-gradient-to-r from-gray-800 to-gray-900"> {/* Increased padding */}
        <div>
          <div className="flex justify-between items-center space-x-4">
            <h2 className="text-xl md:text-2xl font-bold mb-1 hover:underline">{title}</h2>
            <p className="text-gray-400 mb-1 text-sm">{date}</p>
          </div>

          <p className="text-gray-300 mb-2 text-sm">{description}</p>
          <h3 className="font-semibold">Tech Stack:</h3>
          <p className="text-gray-300 mb-2 text-sm">{techStack}</p>
        </div>
        <div className="flex space-x-3 mt-2">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub
              className="text-gray-300 hover:text-designColor transition-colors duration-200"
              size={24}
            />
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt
              className="text-gray-300 hover:text-designColor transition-colors duration-200"
              size={24}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};


export default function Projects() {
  const eShopImages = [
    "/images/EShop1.png",
    "/images/EShop2.png",
    "/images/EShop3.png",
    "/images/EShop4.png",
    "/images/EShop5.png",
  ];

  const blijMartImages = [
    "/images/blij1.png",
    "/images/blij2.png",
    "/images/blij3.png",
    "/images/blij4.png",
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-black text-white px-4 relative"
    >
      <div className="bg-black min-h-screen py-16 px-4 md:px-12">
        <h1 className="text-3xl text-white uppercase tracking-[6px] font-semibold text-center mb-12">
          My Projects
        </h1>
        <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 flex justify-center min-w-[250px]">
            <ProjectCard
              title="E-Shop"
              date="Apr 2023 - Apr 2023"
              techStack="React JS, TypeScript, Node.js, Express.js, Chakra UI, MongoDB, REST APIs"
              description="E-Shop is a fully functional Indian e-commerce web application that allows users to browse and purchase a variety of products."
              githubLink="https://github.com/Satyam1013/E-Shop"
              liveLink="https://eshop-vert.vercel.app/"
              images={eShopImages}
            />
          </div>
          <div className="flex-1 flex justify-center min-w-[250px]">
            <ProjectCard
              title="Blij-Mart"
              date="Jan 2023 - Feb 2023"
              techStack="JavaScript, HTML, CSS, Bootstrap"
              description="Blij-Mart is an e-commerce website where you can purchase a variety of products."
              githubLink="https://github.com/Satyam1013/BlijMart"
              liveLink="http://www.blijmart.com/"
              images={blijMartImages}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
