import './Events.css';
import { Link } from 'react-router-dom';
import UpcomingEvent from '../components/events/UpcomingEvent';
import inaugurationImg from '../assets/eventsImages/Inauguration.jpg';

const Events = () => {
  const upcomingDesc = `Will be released soon.....`;

  const pastEvents = [
    {
      id: 'inauguration',
      title: 'Inauguration Ceremony',
      thumbnail: inaugurationImg,
      isUpcoming: false
    },
    {
      id: 'coming-soon-1',
      title: 'Coming Soon',
      thumbnail: '',
      isUpcoming: false
    },
    {
      id: 'coming-soon-2', 
      title: 'Coming Soon',
      thumbnail: '',
      isUpcoming: false
    }
  ];

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
        <div className="events-grid">
          {pastEvents.map((event) => (
            <Link key={event.id} to={`/event/${event.id}`} className="event-card-link">
              <div className="event-card past">
                <div className="event-thumbnail">
                  {event.thumbnail ? (
                    <img src={event.thumbnail} alt={event.title} />
                  ) : (
                    <div className="event-placeholder">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="event-title">{event.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;