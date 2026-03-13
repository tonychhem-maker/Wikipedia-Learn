import { globalStyles } from '../../../styles/globalStyles.js';
import { COLORS } from '../../../lib/tokens.js';
import { computeTotalXp } from '../../../lib/xpUtils.js';
import Navbar from '../../../components/layout/Navbar/Navbar.jsx';
import {
  IconBell, IconSettings, IconTrophy, IconBook, IconController, AvatarSVG,
} from '../../../components/ui/Icons/Icons.jsx';

const homeStyles = `
  ${globalStyles}

  /* ── home-page ── */
  .home-page {
    font-family: 'Montserrat', sans-serif;
    background: #dce8f0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .home-page__main {
    flex: 1;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 32px 48px;
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 24px;
    align-items: start;
  }

  /* ── left column ── */
  .home-left { display: flex; flex-direction: column; gap: 24px; }

  /* ── hero ── */
  .home-hero { }
  .home-hero__title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 32px; font-weight: 800;
    color: #1a1a2e; line-height: 1.2; margin-bottom: 8px;
  }
  .home-hero__sub {
    font-size: 14px; color: #6b7280; font-weight: 500;
  }

  /* ── resume-card ── */
  .resume-card {
    background: white; border-radius: 20px;
    padding: 22px 24px;
    box-shadow: 0 2px 12px rgba(26,26,46,0.07);
    display: flex; align-items: center; gap: 20px;
  }
  .resume-card__img {
    width: 100px; height: 80px; border-radius: 12px;
    object-fit: cover; flex-shrink: 0;
    background: linear-gradient(135deg, #c7d8e8 0%, #a8c5d8 100%);
    display: flex; align-items: center; justify-content: center; overflow: hidden;
  }
  .resume-card__body { flex: 1; }
  .resume-card__badge {
    display: inline-block;
    background: #f3f4f6; color: #374151;
    font-size: 10px; font-weight: 700; letter-spacing: 0.06em;
    text-transform: uppercase; padding: 3px 10px; border-radius: 50px;
    margin-bottom: 8px; font-family: 'Space Grotesk', sans-serif;
  }
  .resume-card__title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 17px; font-weight: 800; color: #1a1a2e; margin-bottom: 4px;
  }
  .resume-card__sub { font-size: 12px; color: #9ca3af; font-weight: 500; margin-bottom: 12px; }
  .resume-card__progress { margin-bottom: 4px; }
  .resume-card__progress-label { font-size: 10px; color: #9ca3af; font-weight: 600; margin-bottom: 6px; }

  /* ── difficulty cards ── */
  .diff-section__title {
    display: flex; align-items: center; gap: 8px;
    font-size: 14px; font-weight: 700; color: #1a1a2e;
    margin-bottom: 14px; font-family: 'Space Grotesk', sans-serif;
  }
  .diff-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .diff-card {
    background: white; border-radius: 16px; padding: 18px 16px;
    border: 2px solid transparent; cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
    box-shadow: 0 2px 8px rgba(26,26,46,0.06);
    text-align: center;
  }
  .diff-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(26,26,46,0.12); }
  .diff-card--easy   { border-color: #bfdbfe; }
  .diff-card--medium { border-color: #fed7aa; }
  .diff-card--hard   { border-color: #fecaca; }
  .diff-card__icon { font-size: 28px; margin-bottom: 8px; }
  .diff-card__label {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px; font-weight: 800; margin-bottom: 4px;
  }
  .diff-card__label--easy   { color: #3b82f6; }
  .diff-card__label--medium { color: #f97316; }
  .diff-card__label--hard   { color: #ef4444; }
  .diff-card__desc { font-size: 11px; color: #9ca3af; font-weight: 500; }

  /* ── categories ── */
  .cat-section__title {
    font-size: 14px; font-weight: 700; color: #1a1a2e;
    margin-bottom: 14px; font-family: 'Space Grotesk', sans-serif;
  }
  .cat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .cat-card {
    background: white; border-radius: 16px; padding: 20px 12px;
    text-align: center; cursor: pointer;
    box-shadow: 0 2px 8px rgba(26,26,46,0.06);
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .cat-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(26,26,46,0.12); }
  .cat-card__icon { font-size: 28px; margin-bottom: 8px; }
  .cat-card__label { font-size: 12px; font-weight: 700; color: #374151; font-family: 'Space Grotesk', sans-serif; }

  /* ── right column ── */
  .home-right { display: flex; flex-direction: column; gap: 16px; }

  /* ── level card ── */
  .level-card {
    background: #1a1a2e; border-radius: 20px; padding: 22px 22px;
    color: white; box-shadow: 0 4px 20px rgba(26,26,46,0.2);
  }
  .level-card__top { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
  .level-card__avatar {
    width: 44px; height: 44px; border-radius: 50%;
    overflow: hidden; flex-shrink: 0; border: 2px solid rgba(255,255,255,0.15);
  }
  .level-card__name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px; font-weight: 800; margin-bottom: 2px;
  }
  .level-card__rank { font-size: 11px; color: rgba(255,255,255,0.5); font-weight: 500; }
  .level-card__stats { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0; margin-bottom: 16px; }
  .level-card__stat { text-align: center; }
  .level-card__stat-label { font-size: 9px; color: rgba(255,255,255,0.4); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 4px; }
  .level-card__stat-value { font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 800; color: white; }
  .level-card__stat-value--orange { color: #f97316; }
  .level-card__divider { height: 1px; background: rgba(255,255,255,0.08); margin-bottom: 16px; }

  /* ── leaderboard card ── */
  .lb-card {
    background: white; border-radius: 20px; padding: 20px 20px;
    box-shadow: 0 2px 12px rgba(26,26,46,0.07);
  }
  .lb-card__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .lb-card__title { font-family: 'Space Grotesk', sans-serif; font-size: 14px; font-weight: 800; color: #1a1a2e; }
  .lb-card__link { font-size: 11px; font-weight: 600; color: #3b82f6; cursor: pointer; }
  .lb-card__link:hover { text-decoration: underline; }
  .lb-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
  .lb-row:last-child { border-bottom: none; }
  .lb-row__rank { font-size: 13px; font-weight: 800; color: #9ca3af; width: 16px; flex-shrink: 0; font-family: 'Space Grotesk', sans-serif; }
  .lb-row__rank--1 { color: #f59e0b; }
  .lb-row__avatar { width: 30px; height: 30px; border-radius: 50%; background: #e5e7eb; flex-shrink: 0; overflow: hidden; }
  .lb-row__name { flex: 1; font-size: 13px; font-weight: 600; color: #1a1a2e; }
  .lb-row__name--you { color: #3b82f6; font-weight: 700; }
  .lb-row__score { font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 800; color: #1a1a2e; }

  /* ── trophies row ── */
  .trophies-mini { background: white; border-radius: 16px; padding: 16px 20px; box-shadow: 0 2px 8px rgba(26,26,46,0.06); }
  .trophies-mini__title { font-size: 10px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 12px; font-family: 'Space Grotesk', sans-serif; }
  .trophies-mini__row { display: flex; gap: 10px; }
  .trophy-badge {
    width: 40px; height: 40px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center; font-size: 18px;
  }
  .trophy-badge--orange { background: #fef3c7; }
  .trophy-badge--blue   { background: #dbeafe; }
  .trophy-badge--purple { background: #ede9fe; }

  /* ── nav links ── */
  .home-nav__links { display: flex; align-items: center; gap: 28px; }
  .home-nav__link {
    font-size: 13px; font-weight: 600; color: #6b7280; cursor: pointer;
    transition: color 0.15s; font-family: 'Space Grotesk', sans-serif;
    text-decoration: none;
  }
  .home-nav__link:hover { color: #1a1a2e; }
`;

const LEADERBOARD = [
  { rank: 1, name: 'Jean D. (Vous)', you: true,  score: 2400 },
  { rank: 2, name: 'Sophie L.',      you: false, score: 2350 },
  { rank: 3, name: 'Thomas B.',      you: false, score: 2100 },
  { rank: 4, name: 'Clara R.',       you: false, score: 1980 },
];

const DIFF_CARDS = [
  { key: 'easy',   label: 'Facile',        desc: 'Idéal pour débuter sans pression',   icon: '😊', mod: 'easy'   },
  { key: 'medium', label: 'Intermédiaire', desc: 'Pour ceux qui aiment les défis',     icon: '💪', mod: 'medium' },
  { key: 'hard',   label: 'Difficile',     desc: "Le savoir à l'état brut",            icon: '💀', mod: 'hard'   },
];

const CAT_CARDS = [
  { icon: '🔬', label: 'Sciences'  },
  { icon: '🌍', label: 'Géo'       },
  { icon: '🎨', label: 'Art'       },
  { icon: '🧠', label: 'Philo'     },
];

export default function HomeView({ xp = 0, level = 0, gamesPlayed = 0, onGoToGame, onGoToProfile, onGoToCours }) {
  const totalXp = computeTotalXp(xp, level);

  const navRight = (
    <div className="home-nav__links">
      <span className="home-nav__link" onClick={onGoToCours}>Aventures</span>
      <span className="home-nav__link" onClick={onGoToCours}>Bibliothèque</span>
      <span className="home-nav__link">Classement</span>
      <div className="wl-nav__icon"><IconSettings /></div>
      <div className="wl-nav__icon"><IconBell /></div>
      <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', cursor: 'pointer' }} onClick={onGoToProfile}>
        <AvatarSVG size={36} />
      </div>
    </div>
  );

  return (
    <>
      <style>{homeStyles}</style>
      <div className="home-page">
        <Navbar onLogoClick={() => {}} right={navRight} />

        <div className="home-page__main">

          {/* ── LEFT ── */}
          <div className="home-left">

            {/* Hero */}
            <div className="home-hero">
              <div className="home-hero__title">Prêt pour l'aventure ?</div>
              <div className="home-hero__sub">Continuez votre quête de savoir ou relevez un nouveau défi.</div>
            </div>

            {/* Reprendre le cours */}
            <div className="resume-card">
              <div className="resume-card__img">
                {/* Temple SVG illustration */}
                <svg viewBox="0 0 100 80" width="100" height="80">
                  <rect width="100" height="80" fill="#c7d8e8"/>
                  <rect x="10" y="50" width="80" height="6" rx="2" fill="#8aabbc"/>
                  <rect x="15" y="25" width="70" height="6" rx="2" fill="#8aabbc"/>
                  <rect x="20" y="18" width="60" height="8" rx="2" fill="#7a9dae"/>
                  {[20,32,44,56,68].map((x, i) => (
                    <rect key={i} x={x} y="30" width="9" height="22" rx="2" fill="#9ab8c8"/>
                  ))}
                  <rect x="30" y="50" width="40" height="22" fill="#8aabbc"/>
                  <rect x="40" y="55" width="20" height="17" rx="2" fill="#6a8fa0"/>
                  <polygon points="25,18 50,4 75,18" fill="#7a9dae"/>
                </svg>
              </div>
              <div className="resume-card__body">
                <div className="resume-card__badge">Reprendre</div>
                <div className="resume-card__title">L'Histoire de la Renaissance</div>
                <div className="resume-card__sub">Chapitre 4 : Les Maîtres Italiens</div>
                <div className="resume-card__progress">
                  <div className="resume-card__progress-label">40% du module complété</div>
                  <div className="wl-xp-bar__track">
                    <div className="wl-xp-bar__fill" style={{ width: '40%', background: '#1a1a2e' }} />
                  </div>
                </div>
              </div>
              <button className="wl-btn--dark" onClick={onGoToCours} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                ▶ Continuer maintenant
              </button>
            </div>

            {/* Nouvelle Partie */}
            <div>
              <div className="diff-section__title">
                <IconController size={16} color="#1a1a2e" />
                Nouvelle Partie
              </div>
              <div className="diff-grid">
                {DIFF_CARDS.map((d) => (
                  <div key={d.key} className={`diff-card diff-card--${d.mod}`} onClick={onGoToGame}>
                    <div className="diff-card__icon">{d.icon}</div>
                    <div className={`diff-card__label diff-card__label--${d.mod}`}>{d.label}</div>
                    <div className="diff-card__desc">{d.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Catégories suggérées */}
            <div>
              <div className="cat-section__title">Catégories suggérées</div>
              <div className="cat-grid">
                {CAT_CARDS.map((c) => (
                  <div key={c.label} className="cat-card" onClick={onGoToCours}>
                    <div className="cat-card__icon">{c.icon}</div>
                    <div className="cat-card__label">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT ── */}
          <div className="home-right">

            {/* Level card */}
            <div className="level-card">
              <div className="level-card__top">
                <div className="level-card__avatar"><AvatarSVG size={44} /></div>
                <div>
                  <div className="level-card__name">Niveau {level}</div>
                  <div className="level-card__rank">Érudit du Savoir</div>
                </div>
              </div>
              <div className="level-card__divider" />
              <div className="level-card__stats">
                <div className="level-card__stat">
                  <div className="level-card__stat-label">EXP Totale</div>
                  <div className="level-card__stat-value">{totalXp.toLocaleString('fr-FR')}</div>
                </div>
                <div className="level-card__stat">
                  <div className="level-card__stat-label" style={{ opacity: 0 }}>-</div>
                  <div className="level-card__stat-value">{gamesPlayed}</div>
                  <div className="level-card__stat-label">pts</div>
                </div>
                <div className="level-card__stat">
                  <div className="level-card__stat-label">Série actuelle</div>
                  <div className="level-card__stat-value level-card__stat-value--orange">⚡ 7 Jours</div>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="lb-card">
              <div className="lb-card__header">
                <div className="lb-card__title">Leaderboard</div>
                <span className="lb-card__link">Voir tout</span>
              </div>
              {LEADERBOARD.map((row) => (
                <div key={row.rank} className="lb-row">
                  <div className={`lb-row__rank${row.rank === 1 ? ' lb-row__rank--1' : ''}`}>{row.rank}</div>
                  <div className="lb-row__avatar"><AvatarSVG size={30} /></div>
                  <div className={`lb-row__name${row.you ? ' lb-row__name--you' : ''}`}>{row.name}</div>
                  <div className="lb-row__score">{row.score.toLocaleString('fr-FR')}</div>
                </div>
              ))}
            </div>

            {/* Derniers trophées */}
            <div className="trophies-mini">
              <div className="trophies-mini__title">Derniers Trophées</div>
              <div className="trophies-mini__row">
                <div className="trophy-badge trophy-badge--orange"><IconTrophy size={20} /></div>
                <div className="trophy-badge trophy-badge--blue"><IconBook size={20} color="#3b82f6" /></div>
                <div className="trophy-badge trophy-badge--purple"><IconStar size={20} color="#7c3aed" /></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

// Import manquant — ajout local
function IconStar({ size = 16, color = '#9ca3af' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
