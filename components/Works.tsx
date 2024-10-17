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
      className="flex flex-col lg:flex-row bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Carousel */}
      <div className="relative w-full lg:w-1/2">
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {images.map((src, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ filter: "brightness(90%)" }}
              />
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 shadow-md hover:bg-opacity-75"
        >
          <FaChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 shadow-md hover:bg-opacity-75"
        >
          <FaChevronRight size={32} />
        </button>
      </div>

      {/* Project Information */}
      <div className="p-6 flex flex-col justify-between w-full lg:w-1/2">
        <div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 mb-2 text-sm">{date}</p>
          <h3 className="font-semibold mt-2">Description:</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <h3 className="font-semibold">Tech Stack:</h3>
          <p className="text-gray-300 mb-6">{techStack}</p>
        </div>
        <div className="flex space-x-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub
              className="text-gray-300 hover:text-designColor"
              size={32}
            />
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt
              className="text-gray-300 hover:text-designColor"
              size={32}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
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
      className="w-full min-h-screen bg-contact-image bg-no-repeat bg-cover bg-fixed text-white px-4 relative"
    >
      <div className="bg-gray-800 min-h-screen py-16 px-4 md:px-12">
        <h1 className="text-3xl text-white uppercase tracking-[6px] font-semibold text-center mb-12">
          My Projects
        </h1>
        <div className="flex flex-col space-y-12">
          <ProjectCard
            title="E-Shop"
            date="Apr 2023 - Apr 2023"
            techStack="React JS, TypeScript, Node.js, Express.js, Chakra UI, MongoDB, REST APIs"
            description="E-Shop is a fully functional Indian e-commerce web application that allows users to browse and purchase a variety of products."
            githubLink="https://github.com/Satyam1013/E-Shop"
            liveLink="https://eshop-vert.vercel.app/"
            images={eShopImages}
          />
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
    </section>
  );
};

export default Works;
