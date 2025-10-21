import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  detail: string;
}

const ProjectCard = ({ title, detail }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-detail">{detail}</p>
        <div className="project-card-image">
          {/* Placeholder for project image */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
