
import "./Projects.css";

import jobPortal from "../../assets/job portal.png";
import weather from "../../assets/weather.png";
import oosa from "../../assets/oosa.png";

const projects = [
  {
    id: 1,
    title: "Job Portal",
    image: jobPortal,
    description:
      "A job portal website that helps users search for jobs and explore career opportunities.",
    technologies: ["HTML", "CSS", "JavaScript", "React JS"],
  },
  {
    id: 2,
    title: "Weather Forecast App",
    image: weather,
    description:
      "A weather application that displays current weather conditions and forecasts for different cities.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    id: 3,
    title: "OOSA Project",
    image: oosa,
    description:
      "A responsive web application designed with a clean interface and user-friendly experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React JS"],
  },
];

function Project() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-heading">
        <h2>
          My <span>Projects</span>
        </h2>
        <p>
          Here are some of my recent projects and work.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <div className="project-banner">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Project;
