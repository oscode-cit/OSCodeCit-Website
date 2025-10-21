import './Activities.css';
import { useNavigate } from 'react-router-dom';
import QuizBanner from '../components/activities/QuizBanner';
import PotdList from '../components/activities/PotdList';
import NewsletterForm from '../components/activities/NewsletterForm';
import PointsBadge from '../components/activities/PointsBadge';

const Activities = () => {
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate('/quiz');
  };

  return (
    <div className="activities-page">
      <div className="activities-container">
        <QuizBanner 
          title="Take the Weekly Quiz!"
          subtitle="Live every Saturday & Sunday"
          ctaText="Start Quiz"
          onClick={handleQuizClick}
        />

        <div className="activities-grid">
          <section className="activities-col">
            <h2 className="section-title">Problem of the Day</h2>
            <PotdList items={[
              { label: 'LeetCode POTD', href: 'https://leetcode.com/problemset/all/' },
              { label: 'HackerRank POTD', href: 'https://www.hackerrank.com/dashboard' },
              { label: 'GeeksforGeeks POTD', href: 'https://www.geeksforgeeks.org/problem-of-the-day' },
            ]} />
          </section>

          <section className="activities-col">
            <h2 className="section-title">Our Newsletter</h2>
            <NewsletterForm />

            <h2 className="section-title points-title">Points</h2>
            <PointsBadge label="Badge" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Activities;
