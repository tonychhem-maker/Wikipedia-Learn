import { useState } from 'react';
import { globalStyles } from '../../../styles/globalStyles.js';
import { COLORS } from '../../../lib/tokens.js';
import { computeXpProgress, computeTotalXp } from '../../../lib/xpUtils.js';
import Navbar from '../../../components/layout/Navbar/Navbar.jsx';
import StatCard from '../../../components/ui/StatCard/StatCard.jsx';
import { AvatarSVG, LockIcon, IconTrophy, IconController, IconBook, IconStar, IconEdit, IconBell, IconSettings } from '../../../components/ui/Icons/Icons.jsx';

const profilStyles = `
  ${globalStyles}

  /* ── Block: profil-page ── */
  .profil-page {
    font-family: 'Montserrat', sans-serif;
    background: #dce8f0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .profil-page__main {
    flex: 1;
    width: 100%;
    padding: 28px 120px 48px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* ── Block: profile-card ── */
  .profile-card {
    background: white; border-radius: 20px; padding: 28px 32px;
    display: flex; align-items: center; gap: 22px;
    box-shadow: 0 2px 12px rgba(26,26,46,0.07);
  }
  .profile-card__avatar-wrapper { position: relative; flex-shrink: 0; }
  .profile-card__avatar-edit {
    position: absolute; bottom: 2px; right: 2px;
    width: 22px; height: 22px;
    background: #3b82f6; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    border: 2px solid white; cursor: pointer;
  }
  .profile-card__info   { flex: 1; }
  .profile-card__name   { font-size: 22px; font-weight: 800; color: #1a1a2e; margin-bottom: 5px; font-family: 'Space Grotesk', sans-serif; letter-spacing: -0.02em; }
  .profile-card__level  { font-size: 13px; font-weight: 600; color: #3b82f6; display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
  .profile-card__dot    { width: 7px; height: 7px; background: #3b82f6; border-radius: 50%; flex-shrink: 0; }
  .profile-card__member { font-size: 12px; color: #9ca3af; font-weight: 500; }

  /* ── Block: stats-row ── */
  .stats-row { display: grid; grid-template-columns: 1fr 340px; gap: 20px; align-items: stretch; }

  /* ── Block: xp-card ── */
  .xp-card {
    background: white; border-radius: 20px; padding: 26px 30px;
    box-shadow: 0 2px 12px rgba(26,26,46,0.07);
    display: flex; flex-direction: column; justify-content: center;
  }
  .xp-card__header  { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 18px; }
  .xp-card__title   { font-size: 14px; font-weight: 700; color: #1a1a2e; margin-bottom: 4px; font-family: 'Space Grotesk', sans-serif; }
  .xp-card__subtitle { font-size: 11px; color: #9ca3af; font-weight: 500; line-height: 1.5; }
  .xp-card__value   { font-size: 13px; font-weight: 700; color: #1a1a2e; white-space: nowrap; flex-shrink: 0; font-family: 'Space Grotesk', sans-serif; }
  .xp-card__labels  { display: flex; justify-content: space-between; align-items: center; margin-top: 10px; }
  .xp-card__label   { font-size: 11px; font-weight: 600; color: #6b7280; }
  .xp-card__promo   { font-size: 9.5px; font-weight: 700; color: #6b7280; letter-spacing: 0.02em; text-transform: uppercase; text-align: center; }

  /* ── Block: right-stats ── */
  .right-stats         { display: flex; flex-direction: column; gap: 12px; }
  .right-stats__top    { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

  /* ── Block: trophies-card ── */
  .trophies-card { background: white; border-radius: 20px; padding: 26px 30px; box-shadow: 0 2px 12px rgba(26,26,46,0.07); }
  .trophies-card__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
  .trophies-card__title  { font-size: 15px; font-weight: 800; color: #1a1a2e; display: flex; align-items: center; gap: 8px; font-family: 'Space Grotesk', sans-serif; }
  .trophies-card__link   { font-size: 12px; font-weight: 600; color: #3b82f6; cursor: pointer; text-decoration: none; }
  .trophies-card__link:hover { text-decoration: underline; }
  .trophies-card__grid   { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }

  /* ── Block: trophy-item ── */
  .trophy-item           { display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
  .trophy-item__circle   { width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; transition: transform 0.2s; }
  .trophy-item__circle:hover { transform: scale(1.06); }
  .trophy-item__circle--gold   { background: #fef3c7; border: 2.5px solid #f59e0b; }
  .trophy-item__circle--locked { background: #f3f4f6; border: 2.5px solid #e5e7eb; }
  .trophy-item__name   { font-size: 11px; font-weight: 700; color: #374151; line-height: 1.3; }
  .trophy-item__name--muted { color: #9ca3af; }
  .trophy-item__status { font-size: 9px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; font-family: 'Space Grotesk', sans-serif; }
  .trophy-item__status--completed { color: #22c55e; }
  .trophy-item__status--locked    { color: #9ca3af; }

  /* ── Block: play-banner ── */
  .play-banner {
    background: #1a1a2e; border-radius: 20px; padding: 22px 32px;
    display: flex; align-items: center; justify-content: space-between; gap: 16px;
    box-shadow: 0 4px 16px rgba(26,26,46,0.18);
  }
  .play-banner__title { color: white; font-size: 18px; font-weight: 800; font-family: 'Space Grotesk', sans-serif; letter-spacing: -0.01em; margin-bottom: 2px; }
  .play-banner__text  { color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 500; }
`;

const TROPHIES = [
  { id: 'first_steps', label: 'Premiers Pas',    isUnlocked: true  },
  { id: 'streak_7',    label: 'Série de 7 jours', isUnlocked: false },
  { id: 'quiz_genius', label: 'Génie Quizz',      isUnlocked: false },
  { id: 'historian',   label: 'Expert Histoire',  isUnlocked: false },
  { id: 'scientist',   label: 'Maître Science',   isUnlocked: false },
  { id: 'polyglot',    label: 'Polyglotte',        isUnlocked: false },
];

export default function ProfilView({ xp = 0, level = 0, gamesPlayed = 0, coursesDone = 0, onGoToGame }) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const { needed: xpNeeded, pct: xpPct } = computeXpProgress(xp, level);
  const totalXp = computeTotalXp(xp, level);

  const navRight = (
    <>
      <div className={`wl-toggle${isToggleOn ? '' : ' wl-toggle--off'}`} onClick={() => setIsToggleOn((t) => !t)} />
      <div className="wl-nav__icon"><IconBell /></div>
      <div className="wl-nav__icon" title="Paramètres"><IconSettings /></div>
    </>
  );

  return (
    <>
      <style>{profilStyles}</style>
      <div className="profil-page">

        <Navbar onLogoClick={onGoToGame} right={navRight} />

        <div className="profil-page__main">

          {/* PROFIL */}
          <div className="profile-card">
            <div className="profile-card__avatar-wrapper">
              <AvatarSVG size={80} />
              <div className="profile-card__avatar-edit">
                <IconEdit />
              </div>
            </div>
            <div className="profile-card__info">
              <div className="profile-card__name">Alexandre LeGrand</div>
              <div className="profile-card__level">
                <div className="profile-card__dot" />
                Niveau {level} — Érudit
              </div>
              <div className="profile-card__member">Membre depuis Octobre 2023</div>
            </div>
            <button className="wl-btn--dark">Modifier le Profil</button>
          </div>

          {/* STATS */}
          <div className="stats-row">
            <div className="xp-card">
              <div className="xp-card__header">
                <div>
                  <div className="xp-card__title">Progression d'Expérience</div>
                  <div className="xp-card__subtitle">Continuez à apprendre pour atteindre le niveau {level + 1} !</div>
                </div>
                <div className="xp-card__value">{xp} / {xpNeeded} XP</div>
              </div>
              <div className="wl-xp-bar__track">
                <div className="wl-xp-bar__fill" style={{ width: `${xpPct}%` }} />
              </div>
              <div className="xp-card__labels">
                <span className="xp-card__label">LVL {level}</span>
                <span className="xp-card__promo">ENCORE {xpNeeded - xp} XP AVANT LA PROMOTION</span>
                <span className="xp-card__label">LVL {level + 1}</span>
              </div>
            </div>

            <div className="right-stats">
              <div className="right-stats__top">
                <StatCard label="JEUX JOUÉS" value={gamesPlayed} icon={<IconController />} />
                <StatCard label="COURS FINIS" value={coursesDone} icon={<IconBook />} />
              </div>
              <StatCard
                label="TOTAL XP ACCUMULÉS"
                value={totalXp.toLocaleString('fr-FR')}
                isLarge
                icon={<IconStar />}
              />
            </div>
          </div>

          {/* BANNER */}
          <div className="play-banner">
            <div>
              <div className="play-banner__title">Prêt pour un nouveau quiz ?</div>
              <div className="play-banner__text">15 questions · 3 niveaux de difficulté · Gagnez de l'XP</div>
            </div>
            <button className="wl-btn--primary" onClick={onGoToGame} style={{ padding: '14px 32px', fontSize: '14px' }}>
              Jouer maintenant →
            </button>
          </div>

          {/* TROPHÉES */}
          <div className="trophies-card">
            <div className="trophies-card__header">
              <div className="trophies-card__title">
                <IconTrophy size={18} /> Trophées & Succès
              </div>
              <a className="trophies-card__link">Voir tous</a>
            </div>
            <div className="trophies-card__grid">
              {TROPHIES.map((trophy) => (
                <div className="trophy-item" key={trophy.id}>
                  <div className={`trophy-item__circle trophy-item__circle--${trophy.isUnlocked ? 'gold' : 'locked'}`}>
                    {trophy.isUnlocked ? <IconTrophy size={28} /> : <LockIcon />}
                  </div>
                  <div className={`trophy-item__name${trophy.isUnlocked ? '' : ' trophy-item__name--muted'}`}>
                    {trophy.label}
                  </div>
                  <div className={`trophy-item__status trophy-item__status--${trophy.isUnlocked ? 'completed' : 'locked'}`}>
                    {trophy.isUnlocked ? 'COMPLÉTÉ' : 'VERROUILLÉ'}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
