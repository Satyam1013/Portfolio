import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  date: string;
  techStack: string;
  description: string;
  responsibilities: string[];
  githubLink: string;
  liveLink: string;
  images: string[];
}
export const ProjectCard = ({
  title,
  date,
  techStack,
  description,
  responsibilities,
  githubLink,
  liveLink,
  images,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="relative w-11/12 md:w-11/12 mx-auto rounded-3xl overflow-hidden shadow-lg
                 bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500 bg-clip-border
                 animate-shadow-move
                 transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 bg-black">
          <div className="p-6 text-white">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <motion.h2
                  className="text-2xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {title}
                </motion.h2>
                <p className="text-sm text-gray-400 italic">{date}</p>
              </div>
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {description}
              </motion.p>
            </div>
          </div>

          <div className="relative w-full h-auto overflow-hidden">
            <Slider
              {...{
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: false,
              }}
            >
              {images.map((src, index) => (
                <div key={index} className="w-full h-auto">
                  <motion.img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-black p-6 flex flex-col justify-between text-white">
          <div className="space-y-6">
            {responsibilities && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-semibold text-lg text-designColor">
                  Key Responsibilities:
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-justify">
                  {responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
            <div>
              <h3 className="font-semibold text-lg text-designColor">
                Tech Stack:
              </h3>
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {techStack}
              </motion.p>
            </div>
          </div>
          <motion.div
            className="flex space-x-6 pt-6 justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                size={32}
              />
            </motion.a>
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ duration: 0.3 }}
            >
              <FaExternalLinkAlt
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                size={32}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
