import type { NextPage } from "next";
import "slick-carousel/slick/slick.css";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Experience from "../components/Experience";
import ProjectCard from "../components/Projects";
import Contact from "../components/Contact";
import ScrollBtn from "../components/ScrollBtn";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Satyam Portfolio</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="font-bodyFont">
        <Banner />
        <AboutMe />
        <Experience />
        <ProjectCard />
        <Contact />
      </div>
      <ScrollBtn />
    </div>
  );
};

export default Home;
