import { COLORS } from '../lib/tokens.js';

// CSS global partagé — injecté une seule fois via App.jsx
export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body {
    font-family: 'Montserrat', sans-serif;
    background: ${COLORS.bg};
    min-height: 100vh;
  }

  /* ── Block: wl-card ── */
  .wl-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 2px 12px rgba(26,26,46,0.07);
  }

  /* ── Block: wl-navbar ── */
  .wl-navbar {
    background: white;
    width: 100%;
    box-shadow: 0 1px 6px rgba(26,26,46,0.07);
    position: relative;
    z-index: 20;
    flex-shrink: 0;
  }
  .wl-navbar__inner {
    width: 100%;
    padding: 14px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* ── Block: wl-logo ── */
  .wl-logo {
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: 16px;
    font-weight: 800;
    color: ${COLORS.dark};
    cursor: pointer;
    transition: opacity 0.15s;
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: -0.02em;
    text-decoration: none;
  }
  .wl-logo:hover { opacity: 0.75; }
  .wl-logo__icon {
    width: 30px;
    height: 30px;
    background: ${COLORS.dark};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* ── Block: wl-nav ── */
  .wl-nav__actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .wl-nav__icon {
    width: 34px;
    height: 34px;
    background: ${COLORS.grayLight};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1.5px solid ${COLORS.grayBorder};
    transition: background 0.15s;
  }
  .wl-nav__icon:hover { background: ${COLORS.blueLight}; }

  /* ── Block: wl-xp-bar ── */
  .wl-xp-bar__track {
    height: 8px;
    background: ${COLORS.grayBorder};
    border-radius: 4px;
    overflow: hidden;
  }
  .wl-xp-bar__fill {
    height: 100%;
    background: ${COLORS.dark};
    border-radius: 4px;
    transition: width 0.5s ease;
  }
  .wl-xp-bar__fill--flash {
    animation: xpFlash 0.4s ease;
  }
  @keyframes xpFlash {
    0%   { filter: brightness(1); }
    50%  { filter: brightness(2); background: ${COLORS.blue}; }
    100% { filter: brightness(1); }
  }

  /* ── Block: wl-stat-card ── */
  .wl-stat-card {
    background: white;
    border-radius: 16px;
    padding: 18px 20px;
    box-shadow: 0 2px 8px rgba(26,26,46,0.06);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .wl-stat-card__label {
    font-size: 10px;
    font-weight: 700;
    color: ${COLORS.gray};
    text-transform: uppercase;
    letter-spacing: 0.06em;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
    font-family: 'Montserrat', sans-serif;
  }
  .wl-stat-card__value {
    font-size: 30px;
    font-weight: 800;
    color: ${COLORS.dark};
    line-height: 1;
    font-family: 'Space Grotesk', sans-serif;
  }
  .wl-stat-card__value--large { font-size: 34px; }

  /* ── Block: wl-btn ── */
  .wl-btn--primary {
    background: ${COLORS.blue};
    color: white;
    border: none;
    border-radius: 12px;
    padding: 12px 28px;
    font-size: 13px;
    font-weight: 700;
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
    box-shadow: 0 4px 14px rgba(59,130,246,0.3);
  }
  .wl-btn--primary:hover { background: ${COLORS.blueDark}; transform: translateY(-1px); }

  .wl-btn--dark {
    background: ${COLORS.dark};
    color: white;
    border: none;
    border-radius: 12px;
    padding: 12px 26px;
    font-size: 13px;
    font-weight: 700;
    font-family: 'Space Grotesk', sans-serif;
    cursor: pointer;
    transition: background 0.2s;
  }
  .wl-btn--dark:hover { background: #2d2d4e; }

  /* ── Block: wl-toggle ── */
  .wl-toggle {
    width: 44px;
    height: 24px;
    background: ${COLORS.blue};
    border-radius: 12px;
    position: relative;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.2s;
  }
  .wl-toggle::after {
    content: '';
    position: absolute;
    right: 3px; top: 3px;
    width: 18px; height: 18px;
    background: white;
    border-radius: 50%;
    transition: right 0.2s;
  }
  .wl-toggle--off { background: ${COLORS.grayBorder}; }
  .wl-toggle--off::after { right: auto; left: 3px; }

  /* ── Block: wl-badge ── */
  .wl-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-family: 'Space Grotesk', sans-serif;
  }
  .wl-badge--orange { background: ${COLORS.orange}; color: white; }
  .wl-badge--blue   { background: ${COLORS.blueLight}; color: ${COLORS.blue}; }
  .wl-badge--dark   { background: ${COLORS.dark}; color: white; }
`;
