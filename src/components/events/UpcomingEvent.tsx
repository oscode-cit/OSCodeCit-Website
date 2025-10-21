import './UpcomingEvent.css';

interface UpcomingEventProps {
  title: string;
  description: string;
  imageUrl?: string;
  registerUrl?: string;
}

const UpcomingEvent = ({ title, description, imageUrl, registerUrl }: UpcomingEventProps) => {
  return (
    <div className="upcoming-card">
      <div className="upcoming-card-inner">
        <div className="upcoming-image">
          {imageUrl ? (
            <img src={imageUrl} alt={title} />
          ) : (
            <div className="upcoming-image-placeholder" />
          )}
        </div>
        <div className="upcoming-content">
          <h3 className="upcoming-title">{title}</h3>
          <p className="upcoming-desc">{description}</p>
          <div className="upcoming-actions">
            <a
              href={registerUrl ?? '#coming-soon'}
              className="btn-register disabled"
              aria-disabled="true"
              tabIndex={-1}
              onClick={(e) => e.preventDefault()}
              role="button"
              title="Registration opens soon"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
