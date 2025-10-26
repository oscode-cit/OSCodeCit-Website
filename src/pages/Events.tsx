import './Events.css';
import UpcomingEvent from '../components/events/UpcomingEvent';
import PastEventCard from '../components/events/PastEventCard';
import inaugurationImg from '../assets/eventsImages/Inauguration.jpg';

const Events = () => {
  const upcomingDesc = `Will be released soon.....`;

  return (
    <div className="events-page">
      <div className="events-container">
        <h1 className="events-heading">Upcoming Events</h1>

        <UpcomingEvent 
          title="Event Details"
          description={upcomingDesc}
          imageUrl="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
          registerUrl="#"
        />

        <h2 className="events-subheading">Past Events</h2>
        <div className="past-grid">
          <PastEventCard 
            imageUrl = {inaugurationImg}
            title="Inauguration" 
            detail={'The Inauguration Ceremony of the OSCode CIT Chapter marked an inspiring milestone for Cambridge Institute of Technology. The event celebrated innovation, collaboration, and the beginning of an exciting journey into the world of open-source coding and technology. The session featured two distinguished guest speakers — Ms. Komal Pal, Senior Software Development Engineer known for her open-source contributions and recognition at Times Square, and Mr. Harsh Singh, Co-founder of OSCode and Software Development Engineer at Amazon. Their session on “Problem Solving with Code: From Real-World Challenges to Meaningful Tech” offered students a deeper understanding of how coding can be used to create impactful real-world solutions. Both speakers shared their professional journeys, experiences, and valuable insights on growth, teamwork, and the importance of community-driven learning in technology.The event, held on 25th September 2025 , witnessed enthusiastic participation from students, faculty members, and tech enthusiasts. The speakers’ words not only motivated aspiring developers to explore open-source contributions but also highlighted the endless possibilities that come with curiosity and consistent learning. The ceremony concluded with an engaging Q&A session. Coordinated by Bharath Kumar S, the event truly reflected OSCode’s vision of bridging the gap between academic learning and real-world coding experience — a promising start to many more impactful events ahead.'} 
          />
          <PastEventCard 
            title="coming soon" 
            detail={`comimg soon`} 
          />
        	<PastEventCard 
            title="coming soon" 
            detail={`coming soon`} 
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
