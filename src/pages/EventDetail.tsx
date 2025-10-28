import { useParams, Link } from 'react-router-dom';
import './EventDetail.css';
import inaugurationImg from '../assets/eventsImages/Inauguration.jpg';

interface EventData {
  id: string;
  title: string;
  date?: string;
  description: string;
  images: string[];
  isUpcoming: boolean;
  registerUrl?: string;
}

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();

  const eventData: { [key: string]: EventData } = {
    'upcoming-1': {
      id: 'upcoming-1',
      title: 'Event Details',
      date: 'Coming Soon',
      description: 'Will be released soon.....',
      images: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
      ],
      isUpcoming: true,
      registerUrl: '#coming-soon'
    },
    'inauguration': {
      id: 'inauguration',
      title: 'Inauguration Ceremony',
      date: 'September 25, 2025',
      description: 'The Inauguration Ceremony of the OSCode CIT Chapter marked an inspiring milestone for Cambridge Institute of Technology. The event celebrated innovation, collaboration, and the beginning of an exciting journey into the world of open-source coding and technology. The session featured two distinguished guest speakers — Ms. Komal Pal, Senior Software Development Engineer known for her open-source contributions and recognition at Times Square, and Mr. Harsh Singh, Co-founder of OSCode and Software Development Engineer at Amazon. Their session on "Problem Solving with Code: From Real-World Challenges to Meaningful Tech" offered students a deeper understanding of how coding can be used to create impactful real-world solutions. Both speakers shared their professional journeys, experiences, and valuable insights on growth, teamwork, and the importance of community-driven learning in technology. The event, held on 25th September 2025, witnessed enthusiastic participation from students, faculty members, and tech enthusiasts. The speakers\' words not only motivated aspiring developers to explore open-source contributions but also highlighted the endless possibilities that come with curiosity and consistent learning. The ceremony concluded with an engaging Q&A session. Coordinated by Bharath Kumar S, the event truly reflected OSCode\'s vision of bridging the gap between academic learning and real-world coding experience — a promising start to many more impactful events ahead.',
      images: [
        inaugurationImg,
        // Add more images here when available
      ],
      isUpcoming: false
    },
    'coming-soon-1': {
      id: 'coming-soon-1',
      title: 'Coming Soon',
      description: 'Exciting events are being planned! Stay tuned for more details.',
      images: [],
      isUpcoming: false
    },
    'coming-soon-2': {
      id: 'coming-soon-2',
      title: 'Coming Soon',
      description: 'More amazing events are on the way! Keep checking back for updates.',
      images: [],
      isUpcoming: false
    }
  };

  const event = eventId ? eventData[eventId] : null;

  if (!event) {
    return (
      <div className="event-detail-page">
        <div className="event-detail-container">
          <h1>Event Not Found</h1>
          <Link to="/events" className="back-link">← Back to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="event-detail-page">
      <div className="event-detail-container">
        <div className="event-header">
          <Link to="/events" className="back-link">← Back to Events</Link>
          <h1 className="event-detail-title">{event.title}</h1>
          {event.date && (
            <p className="event-date">{event.date}</p>
          )}
        </div>

        <div className="event-content">
          {/* Main Image */}
          {event.images.length > 0 && (
            <div className="event-main-image">
              <img src={event.images[0]} alt={event.title} />
            </div>
          )}

          {/* Event Description */}
          <div className="event-description">
            <h2>About This Event</h2>
            <p>{event.description}</p>
          </div>

          {/* Registration Button for Upcoming Events */}
          {event.isUpcoming && event.registerUrl && (
            <div className="event-actions">
              <a
                href={event.registerUrl}
                className={`btn-register ${event.registerUrl === '#coming-soon' ? 'disabled' : ''}`}
                aria-disabled={event.registerUrl === '#coming-soon'}
                onClick={event.registerUrl === '#coming-soon' ? (e) => e.preventDefault() : undefined}
              >
                {event.registerUrl === '#coming-soon' ? 'Registration Opens Soon' : 'Register Now'}
              </a>
            </div>
          )}

          {/* Additional Images Gallery */}
          {event.images.length > 1 && (
            <div className="event-gallery">
              <h2>Event Gallery</h2>
              <div className="gallery-grid">
                {event.images.slice(1).map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img src={image} alt={`${event.title} - Image ${index + 2}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder for events without images */}
          {event.images.length === 0 && (
            <div className="no-images">
              <div className="no-images-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <p>Event images coming soon!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;