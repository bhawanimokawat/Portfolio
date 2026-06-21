import ProjectCard1 from "./ProjectCard1";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="project"    className="max-w-7xl mx-auto px-6 lg:px-16 py-24 bg-[var(--bg)] text-[var(--text)]">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center">
        Featured <span className="text-[var(--accent)]">Projects</span>
      </h2>

      <p className="text-center text-[var(--text)]/70 mt-4 text-base sm:text-lg">
        Some projects I have built.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
        {projects.map((project) => (
          <ProjectCard1 key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
