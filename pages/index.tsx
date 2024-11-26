import type { NextPage } from "next";
import "slick-carousel/slick/slick.css";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import ProjectCard from "../components/Projects/Projects";
import Contact from "../components/Contact";
import ScrollBtn from "../components/ScrollBtn";
import Home from "../components/Home";

const Main: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Satyam's Portfolio</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="font-bodyFont bg-black">
        <Navbar />
        <Home />
        <AboutMe />
        <Experience />
        <ProjectCard />
        <Contact />
      </div>
      <ScrollBtn />
    </div>
  );
};

export default Main;
