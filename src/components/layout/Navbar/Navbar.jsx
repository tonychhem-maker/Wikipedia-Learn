import { LogoIcon } from '../../ui/Icons/Icons.jsx';

// ── Navbar partagée entre toutes les vues ──
// Props:
//   onLogoClick — callback navigation
//   right       — JSX slot pour la partie droite
//   leftExtra   — JSX slot à gauche du logo (ex: hearts-pill)
export default function Navbar({ onLogoClick, right, leftExtra }) {
  return (
    <div className="wl-navbar">
      <div className="wl-navbar__inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {leftExtra}
          <div className="wl-logo" onClick={onLogoClick}>
            <div className="wl-logo__icon">
              <LogoIcon />
            </div>
            WikiLearn
          </div>
        </div>
        <div className="wl-nav__actions">
          {right}
        </div>
      </div>
    </div>
  );
}