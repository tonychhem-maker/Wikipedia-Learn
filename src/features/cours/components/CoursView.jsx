import { useState } from 'react';
import { globalStyles } from '../../../styles/globalStyles.js';
import { COLORS } from '../../../lib/tokens.js';
import Navbar from '../../../components/layout/Navbar/Navbar.jsx';
import { IconBell, IconSettings, IconBook, IconStar, AvatarSVG } from '../../../components/ui/Icons/Icons.jsx';

const coursStyles = `
  ${globalStyles}

  /* ── cours-page ── */
  .cours-page {
    font-family: 'Montserrat', sans-serif;
    background: #dce8f0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .cours-page__main {
    flex: 1;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 32px 48px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  /* ── header ── */
  .cours-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; }
  .cours-header__title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px; font-weight: 800; color: #1a1a2e; margin-bottom: 4px;
  }
  .cours-header__sub { font-size: 13px; color: #9ca3af; font-weight: 500; }

  /* ── filter tabs ── */
  .cours-filters { display: flex; gap: 8px; flex-wrap: wrap; }
  .cours-filter {
    padding: 7px 18px; border-radius: 50px; border: 1.5px solid #e5e7eb;
    background: white; font-size: 12px; font-weight: 700; color: #6b7280;
    cursor: pointer; transition: all 0.15s; font-family: 'Space Grotesk', sans-serif;
    letter-spacing: 0.02em;
  }
  .cours-filter:hover { border-color: #1a1a2e; color: #1a1a2e; }
  .cours-filter--active { background: #1a1a2e; color: white; border-color: #1a1a2e; }

  /* ── featured banner ── */
  .cours-featured {
    background: linear-gradient(120deg, #1a1a2e 0%, #2d1b6e 60%, #1a3a5c 100%);
    border-radius: 20px; padding: 28px 32px;
    display: flex; align-items: center; justify-content: space-between; gap: 24px;
    box-shadow: 0 8px 30px rgba(26,26,46,0.2);
    position: relative; overflow: hidden;
  }
  .cours-featured::before {
    content: '';
    position: absolute; top: -40px; right: -40px;
    width: 200px; height: 200px; border-radius: 50%;
    background: rgba(96,165,250,0.08);
  }
  .cours-featured__tag {
    display: inline-block; background: rgba(240,192,96,0.2); color: #f0c060;
    font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 4px 12px; border-radius: 50px; margin-bottom: 10px;
    font-family: 'Space Grotesk', sans-serif; border: 1px solid rgba(240,192,96,0.3);
  }
  .cours-featured__title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px; font-weight: 800; color: white; margin-bottom: 6px; line-height: 1.3;
  }
  .cours-featured__desc { font-size: 13px; color: rgba(255,255,255,0.55); font-weight: 500; max-width: 420px; margin-bottom: 20px; }
  .cours-featured__meta { display: flex; gap: 20px; margin-bottom: 20px; }
  .cours-featured__meta-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: rgba(255,255,255,0.5); font-weight: 600; }
  .cours-featured__illus {
    flex-shrink: 0; width: 160px; height: 120px;
    background: rgba(255,255,255,0.05); border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.1);
    display: flex; align-items: center; justify-content: center;
  }

  /* ── cours grid ── */
  .cours-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

  /* ── cours card ── */
  .cours-card {
    background: white; border-radius: 18px;
    box-shadow: 0 2px 10px rgba(26,26,46,0.07);
    overflow: hidden; cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
    display: flex; flex-direction: column;
  }
  .cours-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(26,26,46,0.13); }
  .cours-card__img {
    height: 120px; width: 100%;
    display: flex; align-items: center; justify-content: center;
    font-size: 48px;
  }
  .cours-card__body { padding: 16px; flex: 1; display: flex; flex-direction: column; }
  .cours-card__cat {
    font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    color: #9ca3af; margin-bottom: 6px; font-family: 'Space Grotesk', sans-serif;
  }
  .cours-card__title { font-family: 'Space Grotesk', sans-serif; font-size: 14px; font-weight: 800; color: #1a1a2e; margin-bottom: 6px; line-height: 1.4; }
  .cours-card__desc { font-size: 12px; color: #6b7280; font-weight: 500; line-height: 1.5; flex: 1; margin-bottom: 14px; }
  .cours-card__footer { display: flex; align-items: center; justify-content: space-between; }
  .cours-card__meta { font-size: 11px; color: #9ca3af; font-weight: 600; display: flex; align-items: center; gap: 6px; }
  .cours-card__tag {
    font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 50px;
    font-family: 'Space Grotesk', sans-serif;
  }
  .cours-card__tag--easy   { background: #dcfce7; color: #16a34a; }
  .cours-card__tag--medium { background: #dbeafe; color: #1d4ed8; }
  .cours-card__tag--hard   { background: #fee2e2; color: #dc2626; }

  /* ── progress bar inside card ── */
  .cours-card__progress { margin-top: 10px; }
  .cours-card__progress-label { font-size: 10px; color: #9ca3af; font-weight: 600; margin-bottom: 5px; display: flex; justify-content: space-between; }

  /* ── nav links ── */
  .cours-nav__links { display: flex; align-items: center; gap: 28px; }
  .cours-nav__link {
    font-size: 13px; font-weight: 600; color: #6b7280; cursor: pointer;
    transition: color 0.15s; font-family: 'Space Grotesk', sans-serif;
  }
  .cours-nav__link:hover { color: #1a1a2e; }
  .cours-nav__link--active { color: #1a1a2e; border-bottom: 2px solid #1a1a2e; padding-bottom: 2px; }
`;

const FILTERS = ['Tous', 'Histoire', 'Sciences', 'Art', 'Géographie', 'Philo', 'Maths'];

const COURS_LIST = [
  {
    id: 1, cat: 'Histoire', title: "L'Histoire de la Renaissance",
    desc: 'De Giotto à Michel-Ange, explorez la révolution artistique et intellectuelle du XVe siècle.',
    emoji: '🏛️', bg: '#f0f4ff', chapters: 8, xp: 400, diff: 'medium', progress: 40,
  },
  {
    id: 2, cat: 'Sciences', title: 'Les Lois de la Physique',
    desc: 'Gravité, thermodynamique, relativité : les grands principes qui gouvernent l\'univers.',
    emoji: '⚛️', bg: '#f0fdf4', chapters: 6, xp: 350, diff: 'hard', progress: 0,
  },
  {
    id: 3, cat: 'Géographie', title: 'Capitales du Monde',
    desc: 'Un tour du monde des capitales, de leurs histoires et de leurs cultures.',
    emoji: '🌍', bg: '#fef9ec', chapters: 5, xp: 250, diff: 'easy', progress: 100,
  },
  {
    id: 4, cat: 'Art', title: 'L\'Impressionnisme Français',
    desc: 'Monet, Renoir, Degas : la révolution de la lumière et de la couleur au XIXe.',
    emoji: '🎨', bg: '#fdf2f8', chapters: 7, xp: 300, diff: 'medium', progress: 0,
  },
  {
    id: 5, cat: 'Philo', title: 'Les Grands Philosophes',
    desc: 'De Socrate à Nietzsche, les idées qui ont façonné notre manière de penser.',
    emoji: '🧠', bg: '#f5f3ff', chapters: 9, xp: 450, diff: 'hard', progress: 20,
  },
  {
    id: 6, cat: 'Maths', title: 'Théorèmes Célèbres',
    desc: 'Pythagore, Fermat, Euclide : les démonstrations qui ont marqué l\'histoire des maths.',
    emoji: '📐', bg: '#eff6ff', chapters: 6, xp: 380, diff: 'hard', progress: 0,
  },
];

export default function CoursView({ onGoToHome, onGoToProfile }) {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filtered = activeFilter === 'Tous'
    ? COURS_LIST
    : COURS_LIST.filter((c) => c.cat === activeFilter);

  const navRight = (
    <div className="cours-nav__links">
      <span className="cours-nav__link" onClick={onGoToHome}>Accueil</span>
      <span className="cours-nav__link cours-nav__link--active">Bibliothèque</span>
      <span className="cours-nav__link">Classement</span>
      <div className="wl-nav__icon"><IconSettings /></div>
      <div className="wl-nav__icon"><IconBell /></div>
      <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', cursor: 'pointer' }} onClick={onGoToProfile}>
        <AvatarSVG size={36} />
      </div>
    </div>
  );

  return (
    <>
      <style>{coursStyles}</style>
      <div className="cours-page">
        <Navbar onLogoClick={onGoToHome} right={navRight} />

        <div className="cours-page__main">

          {/* Header */}
          <div className="cours-header">
            <div>
              <div className="cours-header__title">Bibliothèque de Cours</div>
              <div className="cours-header__sub">{COURS_LIST.length} modules disponibles · Apprenez à votre rythme</div>
            </div>
            <button className="wl-btn--primary" onClick={onGoToHome}>← Retour à l'accueil</button>
          </div>

          {/* Featured */}
          <div className="cours-featured">
            <div>
              <div className="cours-featured__tag">★ Cours du moment</div>
              <div className="cours-featured__title">L'Histoire de la Renaissance</div>
              <div className="cours-featured__desc">
                Plongez dans la révolution culturelle qui a transformé l'Europe du XIVe au XVIe siècle.
                Art, science, politique — tout change.
              </div>
              <div className="cours-featured__meta">
                <div className="cours-featured__meta-item"><IconBook size={13} color="rgba(255,255,255,0.5)" /> 8 chapitres</div>
                <div className="cours-featured__meta-item"><IconStar size={13} color="rgba(255,255,255,0.5)" /> 400 XP</div>
              </div>
              <button className="wl-btn--primary">▶ Continuer — Chapitre 4</button>
            </div>
            <div className="cours-featured__illus">
              <svg viewBox="0 0 140 100" width="140" height="100">
                <rect x="10" y="60" width="120" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
                <rect x="20" y="30" width="100" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
                <rect x="25" y="18" width="90" height="12" rx="3" fill="rgba(255,255,255,0.1)"/>
                {[22,38,54,70,86].map((x, i) => (
                  <rect key={i} x={x} y="36" width="12" height="26" rx="3" fill="rgba(255,255,255,0.12)"/>
                ))}
                <rect x="45" y="60" width="50" height="32" fill="rgba(255,255,255,0.08)"/>
                <rect x="56" y="66" width="28" height="26" rx="2" fill="rgba(96,165,250,0.25)"/>
                <polygon points="30,18 70,2 110,18" fill="rgba(255,255,255,0.08)"/>
              </svg>
            </div>
          </div>

          {/* Filters */}
          <div className="cours-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`cours-filter${activeFilter === f ? ' cours-filter--active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="cours-grid">
            {filtered.map((cours) => (
              <div key={cours.id} className="cours-card">
                <div className="cours-card__img" style={{ background: cours.bg }}>
                  <span style={{ fontSize: 52 }}>{cours.emoji}</span>
                </div>
                <div className="cours-card__body">
                  <div className="cours-card__cat">{cours.cat}</div>
                  <div className="cours-card__title">{cours.title}</div>
                  <div className="cours-card__desc">{cours.desc}</div>
                  <div className="cours-card__footer">
                    <div className="cours-card__meta">
                      <IconBook size={12} /> {cours.chapters} chapitres
                    </div>
                    <div className={`cours-card__tag cours-card__tag--${cours.diff}`}>
                      {cours.diff === 'easy' ? 'Facile' : cours.diff === 'medium' ? 'Moyen' : 'Difficile'}
                    </div>
                  </div>
                  {cours.progress > 0 && (
                    <div className="cours-card__progress">
                      <div className="cours-card__progress-label">
                        <span>Progression</span>
                        <span>{cours.progress}%</span>
                      </div>
                      <div className="wl-xp-bar__track" style={{ height: '5px' }}>
                        <div className="wl-xp-bar__fill" style={{ width: `${cours.progress}%`, background: cours.progress === 100 ? '#22c55e' : '#1a1a2e' }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
