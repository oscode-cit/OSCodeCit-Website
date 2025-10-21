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
            detail={'The OSCode CIT Chapter was inaugurated on the 25th of September, 2025. The event was graced by Mr. Harsh Singh, Co-founder of the OSCode Community, and Ms. Komal Pal. They delivered an inspiring speech highlighting the vision and goals of the community. The inauguration took place in the esteemed presence of our Principal Sir, Vice Principal / ECE HOD, CSE HOD, CSE (IoT) HOD, and ISE HOD.'} 
          />
          <PastEventCard 
            title="Details" 
            detail={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Duis aute irure dolor in reprehenderit in voluptate velit esse.`} 
          />
        	<PastEventCard 
            title="Details" 
            detail={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Duis aute irure dolor in reprehenderit in voluptate velit esse.`} 
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
