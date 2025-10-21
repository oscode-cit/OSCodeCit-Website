import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "Project Name",
      detail: "Detail"
    },
    {
      title: "Project Name",
      detail: "Detail"
    },
    {
      title: "Project Name",
      detail: "Detail"
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Our Project</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              detail={project.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
