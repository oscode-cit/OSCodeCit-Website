import './TeamCard.css';
import { useState } from 'react';

interface TeamCardProps {
  name: string;
  designation: string;
  image?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

const TeamCard = ({ name, designation, image, linkedin, github, instagram }: TeamCardProps) => {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(image && image.trim() !== '');
  return (
    <div className="team-card">
      <div className="team-card-content">
        <h3 className="team-card-name">{name}</h3>
        <div className="team-card-image">
          {hasImage && !imgError ? (
            <img 
              src={image} 
              alt={name}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="team-card-placeholder">
              <svg 
                width="60" 
                height="60" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="person-icon"
                aria-hidden="true"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          )}
        </div>
        <p className="team-card-designation">{designation}</p>
        {(linkedin || github || instagram) && (
          <div className="team-card-social" aria-label={`Social links for ${name}`}>
            {linkedin && (
              <a
                className="social-link linkedin"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.77V24h-4V8z"/>
                </svg>
              </a>
            )}
            {github && (
              <a
                className="social-link github"
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.8-.26.8-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.38-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.83 1.1.83 2.22v3.29c0 .32.19.7.81.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
                </svg>
              </a>
            )}
            {instagram && (
              <a
                className="social-link instagram"
                href={instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.89 2.37 7.15 2.22 8.42 2.16 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 2.69.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0zM12 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 1 0 12 5.84zm0 10.16A4 4 0 1 1 12 6a4 4 0 0 1 0 10zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
