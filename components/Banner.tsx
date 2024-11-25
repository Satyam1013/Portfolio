import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Design from "./Design";

export default function Banner() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [navColor, setNavColor] = useState("transparent");
  const [menu, setMenu] = useState(false);

  const listenScrollEvent = () => {
    setNavColor(window.scrollY > 10 ? "#000000" : "transparent");
  };

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
      {["home", "about", "projects", "contact"].map((section) => (
        <Link
          key={section}
          to={section}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer"
        >
          {capitalize(section)}
        </Link>
      ))}
      <a
        href="/SatyamResume.pdf"
        download
        className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer"
      >
        Resume
      </a>
    </div>
  );

  return (
    <div id="home" className="w-full h-screen relative bg-black">
      <Design />
      <div className="absolute inset-0 bg-black bg-opacity-10">
        <nav
          style={{ backgroundColor: navColor, transition: "all 0.5s ease" }}
          className="w-full px-6 md:px-16 py-6 flex justify-between items-center fixed top-0 z-40"
        >
          <h1 className="text-4xl text-white font-extrabold border-2 w-12 text-center">
            S
          </h1>

          {renderDesktopNavbar()}

          <div
            onClick={() => setMenu(true)}
            className="w-8 h-6 flex flex-col justify-between items-center cursor-pointer md:hidden"
          >
            <span className="w-full h-[3px] bg-designColor duration-300"></span>
            <span className="w-full h-[3px] bg-designColor"></span>
            <span className="w-full h-[3px] bg-designColor duration-300"></span>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div
          ref={ref}
          onClick={handleClick}
          className="w-full h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex justify-end z-50"
        >
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-[60%] md:w-[40%] h-full bg-[#0F1113] text-white flex items-center justify-center"
          >
            <div className="w-4/5 px-8 sm:px-12">
              <ul className="flex flex-col gap-4">
                {["home", "about", "projects", "contact"].map((section) => (
                  <Link
                    key={section}
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                    className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer"
                  >
                    {capitalize(section)}
                  </Link>
                ))}
                <a
                  href="/SatyamResume.pdf"
                  download
                  className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer"
                >
                  Resume
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
              <button
                onClick={() => setMenu(false)}
                className="text-3xl font-black text-designColor"
              >
                X
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
