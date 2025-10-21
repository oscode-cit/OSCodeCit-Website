import './NewsletterForm.css';

interface NewsletterFormProps {
  onSubmit?: (email: string) => void;
}

const NewsletterForm = ({ onSubmit }: NewsletterFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get('email') || '');
    onSubmit?.(email);
  };

  return (
    <form className="newsletter" onSubmit={handleSubmit}>
      <input
        className="newsletter-input"
        type="email"
        name="email"
        placeholder="your.email@example.com"
        required
      />
      <button className="newsletter-btn" type="submit">Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
