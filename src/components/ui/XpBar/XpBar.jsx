import { COLORS, FONTS } from '../../../lib/tokens.js';

// ── Barre XP réutilisable ──
// Props: xp, xpNeeded, level, isFlashing
export default function XpBar({ xp, xpNeeded, level, isFlashing = false }) {
  const pct = Math.min((xp / xpNeeded) * 100, 100);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: COLORS.dark, fontFamily: FONTS.display }}>
          XP LEVEL {level}
        </span>
        <span style={{ fontSize: '11px', fontWeight: 700, color: COLORS.gray }}>
          {xp} / {xpNeeded}
        </span>
      </div>
      <div className="wl-xp-bar__track">
        <div
          className={`wl-xp-bar__fill${isFlashing ? ' wl-xp-bar__fill--flash' : ''}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
