import React from "react";
import { FaClock, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiJavascript, SiNodedotjs } from "react-icons/si";

export default function Experience() {
  return (
    <div className="bg-[#0F1113] text-white py-20 flex items-center justify-center px-4 sm:px-8">
      <div className="w-full max-w-6xl mx-auto bg-transparent"> 
        <h1 className="text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[6px] font-semibold text-center mb-12">
          My Experience
        </h1>

        <div className="flex flex-col gap-6">
          <motion.div
            className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <SiNodedotjs className="text-designColor mr-2 text-xl sm:text-2xl" />
                <h2 className="text-lg sm:text-xl font-semibold">
                  Software Developer
                </h2>
              </div>
              <div className="text-sm sm:text-base text-right">
                <p className="font-semibold">Prodios Labs</p>
                <p className="flex items-center justify-end">
                  <FaClock className="mr-1" /> 2023 - Present
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <SiJavascript className="text-designColor mr-2 text-xl sm:text-2xl" />
                <h2 className="text-lg sm:text-xl font-semibold">
                  Full Stack Developer Trainee
                </h2>
              </div>
              <div className="text-sm sm:text-base text-right">
                <p className="font-semibold">Masai School</p>
                <p className="flex items-center justify-end">
                  <FaClock className="mr-1" /> 2022 - 2023
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[6px] font-semibold text-center mb-8 mt-16">
          My Education
        </h1>

        <div className="flex flex-col gap-6">
          <motion.div
            className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaUniversity className="text-designColor mr-2 text-xl sm:text-2xl" />
                <h2 className="text-lg sm:text-xl font-semibold">
                  Master of Science
                </h2>
              </div>
              <div className="text-sm sm:text-base text-right">
                <p className="font-semibold">
                  Maharishi Mahesh Yogi Vedic Vishwavidyalaya
                </p>
                <p className="flex items-center justify-end">
                  <FaClock className="mr-1" /> 2021 - 2023
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaUniversity className="text-designColor mr-2 text-xl sm:text-2xl" />
                <h2 className="text-lg sm:text-xl font-semibold">
                  Bachelor of Science
                </h2>
              </div>
              <div className="text-sm sm:text-base text-right">
                <p className="font-semibold">Dr. C.V. Raman University</p>
                <p className="flex items-center justify-end">
                  <FaClock className="mr-1" /> 2018 - 2021
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
