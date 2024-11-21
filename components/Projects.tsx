import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  date: string;
  techStack: string;
  description: string;
  responsibilities?: string[];
  githubLink: string;
  liveLink: string;
  images: string[];
}

export default function Projects() {
  const eShopImages = [
    "/images/EShop1.png",
    "/images/EShop2.png",
    "/images/EShop3.png",
    "/images/EShop4.png",
    "/images/EShop5.png",
  ];

  const eServicesImages = [
    "/images/eServices1.png",
    "/images/eServices2.png",
    "/images/eServices3.png",
    "/images/eServices4.png",
    "/images/eServices5.png",
  ];

  const blijMartImages = [
    "/images/blij1.png",
    "/images/blij2.png",
    "/images/blij3.png",
    "/images/blij4.png",
  ];

  return (
    <section id="projects" className="w-full min-h-screen px-6 py-16 bg-black">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white text-center mb-16">
          My Projects
        </h1>
        <div className="space-y-20">
          <Project
            title="e-Services (Apuni Sarkar)"
            date="Apr 2023 - Present"
            techStack="Nest JS, React JS, TypeScript, Ant Design, MongoDB"
            description="Apuni Sarkar, by ITDA, Uttarakhand, is a unified platform for transparent, paperless, and cashless delivery of government services."
            responsibilities={[
              "Designed and implemented cron jobs for automated tasks.",
              "Collaborated with government departments for service integration.",
              "Developed interactive dashboards for officers.",
            ]}
            githubLink="https://github.com/prodioslabs/e-district-uk"
            liveLink="https://eservices.uk.gov.in/"
            images={eServicesImages}
          />
          <Project
            title="E-Shop"
            date="Apr 2023 - Apr 2023"
            techStack="React JS, TypeScript, Node.js, Express.js, Chakra UI, MongoDB"
            description="A fully functional Indian e-commerce web application allowing users to browse and purchase products."
            githubLink="https://github.com/Satyam1013/E-Shop"
            liveLink="https://eshop-vert.vercel.app/"
            images={eShopImages}
          />
          <Project
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
}

const Project = ({
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
      className="relative w-11/12 md:w-11/12 mx-auto bg-gray-800 rounded-3xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 relative h-auto overflow-hidden">
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

        <div className="w-full md:w-1/2 bg-gray-800 p-6 flex flex-col justify-between text-white h-auto">
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

            {responsibilities && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-semibold text-lg text-designColor">
                  Key Responsibilities:
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
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
