import './PointsBadge.css';

interface PointsBadgeProps { label: string }

const PointsBadge = ({ label }: PointsBadgeProps) => {
  return (
    <div className="points-badge">
      <div className="badge-box">{label}</div>
    </div>
  );
};

export default PointsBadge;
