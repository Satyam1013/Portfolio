import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Navbar() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [navColor, setNavColor] = useState("transparent");
  const [menu, setMenu] = useState(false);
  const [navHeight, setNavHeight] = useState("py-6");

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setNavColor("#000000");
      setNavHeight("py-3 shadow-lg");
    } else {
      setNavColor("transparent");
      setNavHeight("py-6");
    }
  };

  const routes = ["home", "about", "projects", "contact"];

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  function handleClick(e: React.MouseEvent) {
    if (ref.current && ref.current.contains(e.target as Node)) {
      setMenu(false);
    }
  }

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const renderDesktopNavbar = () => (
    <div className="hidden md:flex gap-10 items-center">
      {routes.map((section) => (
        <Link
          key={section}
          to={section}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="relative text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer group"
        >
          {capitalize(section)}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-designColor transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
      <a
        href="/SatyamResume.pdf"
        download
        className="relative text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer group"
      >
        Resume
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-designColor transition-all duration-300 group-hover:w-full"></span>
      </a>
    </div>
  );

  return (
    <div className="absolute inset-0 bg-black bg-opacity-10">
      <motion.nav
        style={{ backgroundColor: navColor }}
        className={`w-full px-6 md:px-16 ${navHeight} flex justify-between items-center fixed top-0 z-40 transition-all duration-500`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl text-white font-extrabold border-2 w-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          S
        </motion.h1>

        {renderDesktopNavbar()}

        <div
          onClick={() => setMenu(true)}
          className="w-8 h-6 flex flex-col justify-between items-center cursor-pointer md:hidden"
        >
          <motion.span
            className="w-full h-[3px] bg-designColor duration-300"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
          ></motion.span>
          <motion.span className="w-full h-[3px] bg-designColor"></motion.span>
          <motion.span
            className="w-full h-[3px] bg-designColor duration-300"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
          ></motion.span>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {menu && (
        <motion.div
          ref={ref}
          onClick={handleClick}
          className="w-full h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex justify-end z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-[60%] md:w-[40%] h-full bg-[#0F1113] text-white flex items-center justify-center"
          >
            <div className="w-4/5 px-8 sm:px-12">
              <ul className="flex flex-col gap-4">
                {routes.map((section) => (
                  <Link
                    key={section}
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                    className="relative text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer group"
                  >
                    {capitalize(section)}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-designColor transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
                <a
                  href="/SatyamResume.pdf"
                  download
                  className="relative text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer group"
                >
                  Resume
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-designColor transition-all duration-300 group-hover:w-full"></span>
                </a>
              </ul>
              <div className="text-sm mt-20 text-center">
                <p>For project inquiries</p>
                <p>
                  or say 'Hello' -{" "}
                  <span className="font-semibold text-designColor">
                    satyambanwale786@gmail.com
                  </span>
                </p>
              </div>
            </div>
            <div className="w-1/5 text-center flex items-center justify-center border-l-[1px]">
              <motion.button
                onClick={() => setMenu(false)}
                className="text-3xl font-black text-designColor"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                X
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
