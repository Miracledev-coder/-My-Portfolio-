import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "EC Portfolio Website",
    year: "April 2024",
    align: "right",
    image: "../../public/images/EC website - Copy.png",
    link: "#",
  },
  {
    name: "FIOS Website",
    year: "May 2024",
    align: "left",
    image: "../../public/images/FIOS WEBSITE - Copy.png",
    link: "#",
  },
  {
    name: "FIOS Branding",
    year: "April 2024",
    align: "right",
    image: "../../public/images/FIOS Branding mockup.png",
    link: "#",
  },
  {
    name: "Keysight Website",
    year: "May 2024",
    align: "left",
    image: "../../public/images/keysight website.png",
    link: "#",
  },
  {
    name: "MA Website",
    year: "Nov 2023",
    align: "right",
    image: "../../public/images/MA website.png",
    link: "#",
  },
  {
    name: "MC Website",
    year: "May 2024",
    align: "left",
    image: "../../public/images/Mc website.png",
    link: "#",
  },
  {
    name: "Perez Apparels Branding",
    year: "Jan 2025",
    align: "right",
    image: "../../public/images/Perez Branding mockup.png",
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectMain;
