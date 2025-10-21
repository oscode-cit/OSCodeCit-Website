import './QuizBanner.css';

interface QuizBannerProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  onClick?: () => void;
}

const QuizBanner = ({ title, subtitle, ctaText, onClick }: QuizBannerProps) => {
  return (
    <section className="quiz-banner">
      <div className="quiz-banner-inner">
        <h2 className="quiz-title">{title}</h2>
        {subtitle && <p className="quiz-subtitle">{subtitle}</p>}
        <button className="quiz-cta" onClick={onClick}>{ctaText}</button>
      </div>
    </section>
  );
};

export default QuizBanner;
