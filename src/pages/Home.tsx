import Hero from '../components/Hero';
import Projects from '../components/Projects';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
