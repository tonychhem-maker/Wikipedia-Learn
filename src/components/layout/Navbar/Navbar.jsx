import { LogoIcon } from '../../ui/Icons/Icons.jsx';

// ── Navbar partagée entre ProfilView et GameView ──
// Props:
//   onLogoClick — callback navigation
//   right       — JSX slot pour la partie droite
export default function Navbar({ onLogoClick, right }) {
  return (
    <div className="wl-navbar">
      <div className="wl-navbar__inner">
        <div className="wl-logo" onClick={onLogoClick}>
          <div className="wl-logo__icon">
            <LogoIcon />
          </div>
          WikiLearn
        </div>
        <div className="wl-nav__actions">
          {right}
        </div>
      </div>
    </div>
  );
}
