import { ProjectCard } from "./ProjectCard";
import projects from "./project-data.json";

export default function Projects() {
  return (
    <section id="projects" className="w-full min-h-screen px-6 py-16 bg-black">
      <div className="max-w-screen-xl mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl uppercase text-white tracking-[6px] font-semibold text-center mb-12">
          My Projects
        </h1>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
