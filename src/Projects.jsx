import React from "react";
import "./Style.css";
import ticImg from "./assets/tic.png";
import calcImg from "./assets/calc.png";
import rnImg from "./assets/RN.png";
import w3Img from "./assets/w3.png";
import blogImg from "./assets/blogImg.png";

const projects = [
  {
    title: "RN Catering Website",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    live: "https://github.com/nainabhojvani/RN-Catering-Service",
    code: "https://github.com/nainabhojvani/RN-Catering-Service",
    image: rnImg,
  },
  {
    title: "Blog Application",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    live: "https://blog-umq6.onrender.com/",
    code: "https://github.com/nainabhojvani/blog",
    image: blogImg,
  },
  {
    title: "Basic Calculator",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://nainabhojvani.github.io/calculator/",
    code: "https://github.com/nainabhojvani/calculator",
    image: calcImg,
  },

  {
    title: "Tic Tac Toe Game",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://nainabhojvani.github.io/Tic-Tac-Toe-Game/",
    code: "https://github.com/nainabhojvani/Tic-Tac-Toe-Game",
    image: ticImg,
  },
  {
    title: "W3Schools Clone",
    tech: ["HTML", "CSS"],
    live: "https://nainabhojvani.github.io/W3School-clone/",
    code: "https://github.com/nainabhojvani/W3School-clone",
    image: w3Img,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="glass-project-section scroll-mt-24 p-5">
      <h2 className="glass-project-heading">PROJECTS</h2>

      <div className="glass-project-list">
        {projects.map((project, index) => (
          <div className="glass-project-card" key={index}>
            <div className="glass-project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="glass-project-content">
              <h3 className="glass-project-title">{project.title}</h3>
              <p className="glass-project-tech">
                Tech: {project.tech.join(", ")}
              </p>
              <div className="glass-project-buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-project-btn"
                >
                  View Project
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-project-btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
