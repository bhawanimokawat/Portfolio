import ProjectCard from "./ProjectCard";
//import ProjectCard1 from "./ProjectCard1";
import projects from "../data/projects";

import portfolio from "../assets/project1.png";

function Projects() {

  

  return (


    <section
      className=" max-w-7xl mx-auto px-6 lg:px-16 py-24">

      <h2
        className="text-5xl font-bold text-center"
      >

        Featured

        <span className="text-orange-500">

          {" "}Projects

        </span>

      </h2>

      <p
        className="text-center text-gray-400 mt-4"
      >

        Some projects I have built.

      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >

        {projects.map((project) => (

 
          <ProjectCard

            key={project.id}

            {...project}

          />

        ))}
         

       

      </div>
      

    </section>

  );
}

export default Projects;