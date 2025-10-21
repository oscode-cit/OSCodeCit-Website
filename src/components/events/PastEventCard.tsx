import './PastEventCard.css';

interface PastEventCardProps {
  title: string;
  detail: string;
  imageUrl?: string;
}

const PastEventCard = ({ title, detail, imageUrl }: PastEventCardProps) => {
  return (
    <div className="past-card">
      <div className="past-card-inner">
        <div className="past-image">
          {imageUrl ? (
            <img src={imageUrl} alt={title} />
          ) : (
            <div className="past-image-placeholder" />
          )}
        </div>
        <div className="past-content">
          <h4 className="past-title">{title}</h4>
          <p className="past-detail">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
