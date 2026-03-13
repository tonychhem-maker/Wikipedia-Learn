// ── Carte statistique réutilisable ──
// Props: icon, label, value, isLarge
export default function StatCard({ icon, label, value, isLarge = false, style = {} }) {
  return (
    <div className="wl-stat-card" style={style}>
      <div className="wl-stat-card__label">
        {icon}
        {label}
      </div>
      <div className={`wl-stat-card__value${isLarge ? ' wl-stat-card__value--large' : ''}`}>
        {value}
      </div>
    </div>
  );
}
