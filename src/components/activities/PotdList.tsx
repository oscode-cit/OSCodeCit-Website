import './PotdList.css';

interface PotdItem { label: string; href: string; }

interface PotdListProps { items: PotdItem[] }

const PotdList = ({ items }: PotdListProps) => {
  return (
    <div className="potd-list">
      {items.map((item, idx) => (
        <a key={idx} className="potd-btn" href={item.href} target="_blank" rel="noreferrer">
          <span className="potd-icon" aria-hidden>➜</span>
          <span className="potd-label">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default PotdList;
