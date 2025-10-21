import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-brand">OSCode</span>: Building the Future of Open Source
        </h1>
        <p className="hero-subtitle">
          OS Code – Cambridge Institute of Technology is a student-led community dedicated to fostering innovation, collaboration, and learning in the fields of Open Source, Coding, and Emerging Technologies.<br /><br />
          The community serves as a platform for students to engage in workshops, hackathons, and real-world projects while building technical and leadership skills.<br /><br />
          Our goal is to create an environment where like-minded individuals can share knowledge, collaborate on ideas, and contribute to the open-source ecosystem, preparing students for both academic and professional excellence.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => window.open("https://github.com/oscode-cit", "_blank")}>Our Github</button>
          <Link to = "/about">
            <button className="btn btn-secondary">About Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
