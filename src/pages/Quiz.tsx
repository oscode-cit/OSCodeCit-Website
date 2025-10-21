import './Quiz.css';
import NewsletterForm from '../components/activities/NewsletterForm';

const Quiz = () => {
  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-content">
          <div className="quiz-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          
          <h1 className="quiz-heading">Weekly Quiz Coming Soon!</h1>
          
          <p className="quiz-description">
            Our exciting weekly quiz will be launching soon! Stay updated and be the first to know when we go live.
          </p>
          
          <div className="quiz-schedule">
            <div className="schedule-item">
              <span className="schedule-icon">📅</span>
              <div>
                <h3>Quiz Schedule</h3>
                <p>Every Saturday & Sunday</p>
              </div>
            </div>
            <div className="schedule-item">
              <span className="schedule-icon">🏆</span>
              <div>
                <h3>Win Points</h3>
                <p>Earn rewards for participation</p>
              </div>
            </div>
          </div>

          <div className="newsletter-section">
            <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
            <p className="newsletter-subtitle">Stay tuned for the weekly quiz and other exciting updates!</p>
            <NewsletterForm />
          </div>

          <div className="quiz-note">
            <p>💡 We'll notify you as soon as the quiz goes live!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
