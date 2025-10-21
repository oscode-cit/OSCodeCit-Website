import TeamCard from './TeamCard';
import './Team.css';
import vivekImg from '../assets/photos/vivek.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: "Yamini Tantuway",
      designation: "Lead",
      linkedin : "https://www.linkedin.com/in/yamini-tantuway-17b4872bb",
      github: "https://github.com/Yaminitantuway",
      instagram : "https://www.instagram.com/___yaami_._",
      image: ""
    },
    {
      name :"Aditya Gandhad",
      designation :"Co-lead", 
      linkedin: "https://www.linkedin.com/in/aditya-gandhad-462322314/",
      instagram: "https://www.instagram.com/adi.iii_0?utm_source=qr&igsh=cjJlaHpkdnh0dXFz",
      github:"",
      image: ""
    },
    {
      name :"Karthik V P",
      designation :"Managing Director", 
      linkedin: "https://www.linkedin.com/in/karthik-v-p-71b27727a/",
      instagram: "",
      github:"",
      image: ""
    },
    {
      name :"Himashree Kolisetty",
      designation :"Secretary", 
      linkedin: "https://in.linkedin.com/in/himashree-kolisetty-b046a338b",
      instagram: "",
      github:"",
      image: ""
    },
    {
      name: "Vivek Upadhayay",
      designation: "Technical Lead",
      linkedin: "https://www.linkedin.com/in/vivek-upadhayay/",
      instagram: "https://www.instagram.com/notvivek12/",
      github: "https://github.com/NotVivek12",
      image: vivekImg
    },
    {
      name: "Sai Kiran J",
      designation: "Design Lead",
      linkedin: "https://www.linkedin.com/in/saikiranj02",
      instagram: "https://www.instagram.com/life.of.saikiran",
      github: "https://github.com/Sai-kiranj",
      image: ""
    },
    {
      name: "Bindhu Rekha",
      designation: "Event Management Lead",
      linkedin: "https://www.linkedin.com/in/bindhu-rekha-597b16376",
      instagram: "",
      github: "",
      image: ""
    },
    {
      name: "Gouri Vast",
      designation: "Social Media and Marketing Lead",
      linkedin: "https://www.linkedin.com/in/gouri-vast-16b955371/",
      instagram: "",
      github: "https://github.com/Gouriii28/",
      image: ""
    },
    {
      name: "S Nishaanth",
      designation: "RnD Team Lead",
      linkedin: "https://www.linkedin.com/in/s-nishaanth-3b70b6319",
      instagram: "https://www.instagram.com/zen0n_28",
      github: "",
      image: ""
    },
    {
      name: "Kirthi Jc",
      designation: "Technical Team",
      linkedin: "https://www.linkedin.com/in/kirthi-jc-5390b8310",
      instagram: "",
      github: "https://github.com/jc-kirthi",
      image: ""
    },
    {
      name: "Britto Akash",
      designation: "Social media and marketing",
      linkedin: "https://www.linkedin.com/in/britto-akash-2a280a23a",
      instagram: "https://www.instagram.com/_.britts.04",
      github: "",
      image: ""
    },
    {
      name: "Riddhima Utreja",
      designation: "Social Media and Marketing",
      linkedin: "https://www.linkedin.com/in/riddhima-utreja-898260334/",
      instagram: "https://www.instagram.com/ridd_hima._.29/",
      github: "",
      image: ""
    },
    {
      name: "Anup Kumar Jena",
      designation: "Social Media and Marketing",
      linkedin: " https://www.linkedin.com/in/anup-kumar-jena-4419b2333/",
      instagram: "https://www.instagram.com/_akjena_",
      github: "https://github.com/AKJenaX ",
      image: ""
    },
    {
      name: "K Lipika Shree",
      designation: "Event management team",
      linkedin: "https://www.linkedin.com/in/lipika-shree-98009b386",
      instagram: "https://www.instagram.com/lipika_shree28",
      github: "",
      image: ""
    },
    {
      name: "Punith S",
      designation: "RnD Team",
      linkedin: " https://www.linkedin.com/in/punith-s-484b37323",
      instagram: "",
      github: "",
      image: ""
    },
    {
      name: "Chaganti Santosh",
      designation: "RnD Team",
      linkedin: "https://www.linkedin.com/in/santosh-chaganti-334551343",
      instagram: "",
      github: "",
      image: ""
    },
    {
      name: "Pushkar Kulkarni",
      designation: "RnD Team",
      linkedin: "https://www.linkedin.com/in/pushkar-kulkarni-118324341",
      instagram: "https://www.instagram.com/pushkar_7777",
      github: "",
      image: ""
    },
    {
      name: "Nevin R Philip",
      designation: "RnD Team",
      linkedin: "https://www.linkedin.com/in/nevin-r-philip-932530311",
      instagram: "https://www.instagram.com/nev19_10",
      github: "",
      image: ""
    },
  ];

  return (
    <section className="team">
      <div className="team-container">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-subtitle">
          <p>The minds and makers behind OS Code - shaping technology, creativity</p>
          <p>and innovation together.</p>
          <p className="team-description">
            The passionate developers, designers, and leaders driving open source on our campus
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
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
      </div>
    </section>
  );
};

export default Team;
