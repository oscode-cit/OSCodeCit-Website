import { Link } from 'react-router-dom';
import TeamCard from '../components/TeamCard';
import './AboutUs.css';
import vivekImg from '../assets/photos/vivek.jpg';

const AboutUs = () => {
  // Leadership team members
  const leadership = [
    {
      name: "Yamini Tantuway",
      designation: "Club Lead",
      linkedin: "https://www.linkedin.com/in/yamini-tantuway-17b4872bb",
      github: "https://github.com/Yaminitantuway",
      instagram: "https://www.instagram.com/___yaami_._",
      image: ""
    },
    {
      name: "Aditya Gandhad",
      designation: "Co-Lead", 
      linkedin: "https://www.linkedin.com/in/aditya-gandhad-462322314/",
      instagram: "https://www.instagram.com/adi.iii_0?utm_source=qr&igsh=cjJlaHpkdnh0dXFz",
      github: "",
      image: ""
    },
    {
      name: "Karthik V P",
      designation: "Managing Director", 
      linkedin: "https://www.linkedin.com/in/karthik-v-p-71b27727a/",
      instagram: "",
      github: "",
      image: ""
    },
    {
      name: "Himashree Kolisetty",
      designation: "Secretary", 
      linkedin: "https://in.linkedin.com/in/himashree-kolisetty-b046a338b",
      instagram: "",
      github: "",
      image: ""
    }
  ];

  // Core team leads (vertical leads)
  const coreTeamLeads = [
    {
      name: "Vivek Upadhayay",
      designation: "Technical Lead",
      linkedin: "https://www.linkedin.com/in/vivek-upadhayay/",
      instagram: "https://www.instagram.com/notvivek12/",
      github: "https://github.com/NotVivek12",
      image: vivekImg,
      teamRoute: "/team/technical"
    },
    {
      name: "Sai Kiran J",
      designation: "Design Lead",
      linkedin: "https://www.linkedin.com/in/saikiranj02",
      instagram: "https://www.instagram.com/life.of.saikiran",
      github: "https://github.com/Sai-kiranj",
      image: "",
      teamRoute: "/team/design"
    },
    {
      name: "Bindhu Rekha",
      designation: "Event Management Lead",
      linkedin: "https://www.linkedin.com/in/bindhu-rekha-597b16376",
      instagram: "",
      github: "",
      image: "",
      teamRoute: "/team/event-management"
    },
    {
      name: "Gouri Vast",
      designation: "Social Media and Marketing Lead",
      linkedin: "https://www.linkedin.com/in/gouri-vast-16b955371/",
      instagram: "",
      github: "https://github.com/Gouriii28/",
      image: "",
      teamRoute: "/team/social-media-marketing"
    },
    {
      name: "S Nishaanth",
      designation: "R&D Team Lead",
      linkedin: "https://www.linkedin.com/in/s-nishaanth-3b70b6319",
      instagram: "https://www.instagram.com/zen0n_28",
      github: "",
      image: "",
      teamRoute: "/team/rnd"
    }
  ];

  return (
    <div className="about-us-page">
      <div className="about-us-container">
        {/* Leadership Section */}
        <section className="leadership-section">
          <h1 className="about-us-title">About OSCode CIT</h1>
          <div className="about-us-intro">
            <p>The official open source coding chapter at Cambridge Institute of Technology, driving innovation and collaboration in technology.</p>
          </div>
          
          <h2 className="section-title">Leadership Team</h2>
          <div className="leadership-grid">
            {leadership.map((member, index) => (
              <div key={index} className="leadership-card-wrapper">
                <TeamCard 
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                  linkedin={member.linkedin}
                  github={member.github}
                  instagram={member.instagram}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Core Team Section */}
        <section className="core-team-section">
          <h2 className="section-title">Core Team Leads</h2>
          <p className="section-subtitle">Click on any lead to view their team members</p>
          <div className="core-team-grid">
            {coreTeamLeads.map((lead, index) => (
              <Link key={index} to={lead.teamRoute} className="team-lead-link">
                <div className="team-lead-card">
                  <TeamCard 
                    name={lead.name}
                    designation={lead.designation}
                    image={lead.image}
                    linkedin={lead.linkedin}
                    github={lead.github}
                    instagram={lead.instagram}
                  />
                  <div className="view-team-overlay">
                    <span>View Team →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
