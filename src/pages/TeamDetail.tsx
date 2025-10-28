import { useParams, Link } from 'react-router-dom';
import TeamCard from '../components/TeamCard';
import './TeamDetail.css';
import vivekImg from '../assets/photos/vivek.jpg';

interface TeamMember {
  name: string;
  designation: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  image?: string;
}

interface TeamData {
  [key: string]: {
    title: string;
    lead: TeamMember;
    members: TeamMember[];
  };
}

const TeamDetail = () => {
  const { teamId } = useParams<{ teamId: string }>();

  const teamData: TeamData = {
    'technical': {
      title: 'Technical Team',
      lead: {
        name: "Vivek Upadhayay",
        designation: "Technical Lead",
        linkedin: "https://www.linkedin.com/in/vivek-upadhayay/",
        instagram: "https://www.instagram.com/notvivek12/",
        github: "https://github.com/NotVivek12",
        image: vivekImg
      },
      members: [
        {
          name: "Kirthi Jc",
          designation: "Technical Team Member",
          linkedin: "https://www.linkedin.com/in/kirthi-jc-5390b8310",
          instagram: "",
          github: "https://github.com/jc-kirthi",
          image: ""
        }
      ]
    },
    'design': {
      title: 'Design Team',
      lead: {
        name: "Sai Kiran J",
        designation: "Design Lead",
        linkedin: "https://www.linkedin.com/in/saikiranj02",
        instagram: "https://www.instagram.com/life.of.saikiran",
        github: "https://github.com/Sai-kiranj",
        image: ""
      },
      members: []
    },
    'event-management': {
      title: 'Event Management Team',
      lead: {
        name: "Bindhu Rekha",
        designation: "Event Management Lead",
        linkedin: "https://www.linkedin.com/in/bindhu-rekha-597b16376",
        instagram: "",
        github: "",
        image: ""
      },
      members: [
        {
          name: "K Lipika Shree",
          designation: "Event Management Team Member",
          linkedin: "https://www.linkedin.com/in/lipika-shree-98009b386",
          instagram: "https://www.instagram.com/lipika_shree28",
          github: "",
          image: ""
        },
        {
          name: "Aishwarya Gadela",
          designation: "Event Management Team Member",
          linkedin: " https://www.linkedin.com/in/aishwarya-gadela-4772b2261",
          instagram: "https://www.instagram.com/aishwarya_gadela",
          github: "",
          image: ""
        },
        {
          name: "Anubhab Ray",
          designation: "Event Management Team Member",
          linkedin: "https://www.linkedin.com/in/anubhab-ray-058126318",
          instagram: "https://www.instagram.com/_anubhabray",
          github: "",
          image: ""
        }
      ]
    },
    'social-media-marketing': {
      title: 'Social Media & Marketing Team',
      lead: {
        name: "Gouri Vast",
        designation: "Social Media and Marketing Lead",
        linkedin: "https://www.linkedin.com/in/gouri-vast-16b955371/",
        instagram: "",
        github: "https://github.com/Gouriii28/",
        image: ""
      },
      members: [
        {
          name: "Britto Akash",
          designation: "Social Media & Marketing Team Member",
          linkedin: "https://www.linkedin.com/in/britto-akash-2a280a23a",
          instagram: "https://www.instagram.com/_.britts.04",
          github: "",
          image: ""
        },
        {
          name: "Riddhima Utreja",
          designation: "Social Media & Marketing Team Member",
          linkedin: "https://www.linkedin.com/in/riddhima-utreja-898260334/",
          instagram: "https://www.instagram.com/ridd_hima._.29/",
          github: "",
          image: ""
        },
        {
          name: "Anup Kumar Jena",
          designation: "Social Media & Marketing Team Member",
          linkedin: " https://www.linkedin.com/in/anup-kumar-jena-4419b2333/",
          instagram: "https://www.instagram.com/_akjena_",
          github: "https://github.com/AKJenaX ",
          image: ""
        }
      ]
    },
    'rnd': {
      title: 'Research & Development Team',
      lead: {
        name: "S Nishaanth",
        designation: "R&D Team Lead",
        linkedin: "https://www.linkedin.com/in/s-nishaanth-3b70b6319",
        instagram: "https://www.instagram.com/zen0n_28",
        github: "",
        image: ""
      },
      members: [
        {
          name: "Punith S",
          designation: "R&D Team Member",
          linkedin: " https://www.linkedin.com/in/punith-s-484b37323",
          instagram: "",
          github: "",
          image: ""
        },
        {
          name: "Chaganti Santosh",
          designation: "R&D Team Member",
          linkedin: "https://www.linkedin.com/in/santosh-chaganti-334551343",
          instagram: "",
          github: "",
          image: ""
        },
        {
          name: "Pushkar Kulkarni",
          designation: "R&D Team Member",
          linkedin: "https://www.linkedin.com/in/pushkar-kulkarni-118324341",
          instagram: "https://www.instagram.com/pushkar_7777",
          github: "",
          image: ""
        },
        {
          name: "Nevin R Philip",
          designation: "R&D Team Member",
          linkedin: "https://www.linkedin.com/in/nevin-r-philip-932530311",
          instagram: "https://www.instagram.com/nev19_10",
          github: "",
          image: ""
        }
      ]
    }
  };

  const currentTeam = teamId ? teamData[teamId] : null;

  if (!currentTeam) {
    return (
      <div className="team-detail-page">
        <div className="team-detail-container">
          <h1>Team Not Found</h1>
          <Link to="/about" className="back-link">← Back to About Us</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="team-detail-page">
      <div className="team-detail-container">
        <div className="team-header">
          <Link to="/about" className="back-link">← Back to About Us</Link>
          <h1 className="team-title">{currentTeam.title}</h1>
        </div>

        {/* Team Lead Section */}
        <section className="team-lead-section">
          <h2 className="section-title">Team Lead</h2>
          <div className="team-lead-card-wrapper">
            <TeamCard 
              name={currentTeam.lead.name}
              designation={currentTeam.lead.designation}
              image={currentTeam.lead.image}
              linkedin={currentTeam.lead.linkedin}
              github={currentTeam.lead.github}
              instagram={currentTeam.lead.instagram}
            />
          </div>
        </section>

        {/* Team Members Section */}
        {currentTeam.members.length > 0 && (
          <section className="team-members-section">
            <h2 className="section-title">Team Members</h2>
            <div className="team-members-grid">
              {currentTeam.members.map((member, index) => (
                <TeamCard 
                  key={index}
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                  linkedin={member.linkedin}
                  github={member.github}
                  instagram={member.instagram}
                />
              ))}
            </div>
          </section>
        )}

        {currentTeam.members.length === 0 && (
          <section className="no-members-section">
            <p className="no-members-text">No additional team members yet. Stay tuned for updates!</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default TeamDetail;