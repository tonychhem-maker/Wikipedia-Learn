import { globalStyles } from '../../../styles/globalStyles.js';
import { COLORS } from '../../../lib/tokens.js';
import { computeXpProgress, computeTotalXp, xpForLevel } from '../../../lib/xpUtils.js';
import { QUESTIONS, DIFF_CONFIG } from '../constants/questions.js';
import { useGameState } from '../hooks/useGameState.js';
import Navbar from '../../../components/layout/Navbar/Navbar.jsx';
import { AvatarSmall, HeroCharacter, CenterDoor, IconSettings } from '../../../components/ui/Icons/Icons.jsx';

const gameStyles = `
  ${globalStyles}

  /* ── Block: game-page ── */
  .game-page {
    font-family: 'Montserrat', sans-serif;
    width: 100vw; height: 100vh;
    background: #dce8f0;
    display: flex; flex-direction: column;
    position: relative; overflow: hidden;
  }

  /* ── Block: game-nav ── */
  .game-nav__right {
    background: white; border-radius: 50px;
    padding: 8px 16px 8px 12px;
    display: flex; align-items: center; gap: 12px;
    box-shadow: 0 2px 8px rgba(26,26,46,0.1); min-width: 220px;
  }
  .game-nav__xp-info { display: flex; flex-direction: column; gap: 4px; flex: 1; }
  .game-nav__xp-top  { display: flex; justify-content: space-between; align-items: center; }
  .game-nav__xp-label { font-size: 10px; font-weight: 700; color: #1a1a2e; letter-spacing: 0.05em; font-family: 'Space Grotesk', sans-serif; }
  .game-nav__xp-count { font-size: 10px; font-weight: 700; color: #9ca3af; }
  .game-nav__avatar   { width: 36px; height: 36px; border-radius: 50%; overflow: hidden; flex-shrink: 0; border: 2px solid #e5e7eb; }

  /* ── Block: hearts-pill ── */
  .hearts-pill {
    background: white; border-radius: 50px; padding: 8px 16px;
    display: flex; align-items: center; gap: 6px;
    box-shadow: 0 2px 8px rgba(26,26,46,0.1);
  }
  .hearts-pill__heart       { font-size: 18px; color: #ff6b6b; }
  .hearts-pill__heart--empty { font-size: 18px; color: #ffc0c0; }

  /* ── Block: quest-area ── */
  .quest-area {
    display: flex; flex-direction: column; align-items: center;
    padding: 10px 20px 0; flex-shrink: 0; position: relative; z-index: 5;
  }
  .quest-area__badge {
    background: #1a1a2e; color: white; font-size: 10px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase;
    padding: 5px 16px; border-radius: 50px; margin-bottom: 12px;
    font-family: 'Space Grotesk', sans-serif; box-shadow: 0 2px 8px rgba(26,26,46,0.18);
  }
  .quest-area__card {
    background: white; border-radius: 20px; padding: 20px 36px; text-align: center;
    box-shadow: 0 4px 20px rgba(26,26,46,0.09); max-width: 540px; width: 100%;
  }
  .quest-area__category {
    font-size: 11px; font-weight: 700; color: #9ca3af;
    letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;
    font-family: 'Space Grotesk', sans-serif;
  }
  .quest-area__text {
    font-size: 20px; font-weight: 800; color: #1a1a2e; line-height: 1.3;
    font-family: 'Space Grotesk', sans-serif;
  }

  /* ── Block: game-scene ── */
  .game-scene { flex: 1; position: relative; display: flex; align-items: flex-end; justify-content: center; }
  .game-scene__ground {
    position: absolute; bottom: 0; left: 0; right: 0; height: 42%;
    background: rgba(163,210,196,0.4); border-radius: 60% 60% 0 0 / 20px 20px 0 0;
  }
  .game-scene__character {
    position: absolute; bottom: 40px; z-index: 5;
    transition: left 0.5s cubic-bezier(0.34,1.56,0.64,1);
    transform: translateX(-50%); pointer-events: none;
  }
  .game-scene__character--facing-left svg { transform: scaleX(-1); }
  .game-scene__doors {
    position: relative; z-index: 3;
    display: flex; align-items: flex-end; justify-content: center;
    gap: 48px; padding-bottom: 40px; width: 100%;
  }

  /* ── Block: door ── */
  .door { width: 160px; height: 220px; border-radius: 80px 80px 0 0; position: relative; overflow: hidden; transition: transform 0.2s; }
  .door:hover { transform: translateY(-4px); }
  .door--left  { background: linear-gradient(180deg, #bfdbfe 0%, #93c5fd 50%, #60a5fa 100%); border: 2px solid rgba(255,255,255,0.5); }
  .door--right { background: linear-gradient(180deg, #dbeafe 0%, #93c5fd 50%, #3b82f6 100%); border: 2px solid rgba(255,255,255,0.5); }
  .door--center { width: 180px; height: 250px; background: linear-gradient(180deg, #94a3b8 0%, #64748b 40%, #1e293b 100%); border: 3px solid #94a3b8; box-shadow: 0 0 30px rgba(59,130,246,0.35); }
  .door__icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); opacity: 0.3; }
  .door__badge {
    position: absolute; top: -8px; right: -8px;
    width: 32px; height: 32px; background: white; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 2px 6px rgba(26,26,46,0.15);
  }

  /* ── Block: answer-label ── */
  .answer-label {
    padding: 8px 20px; border-radius: 12px; font-size: 13px; font-weight: 700;
    font-family: 'Space Grotesk', sans-serif; margin-bottom: 16px; white-space: nowrap;
    box-shadow: 0 2px 8px rgba(26,26,46,0.12); transition: transform 0.15s;
  }
  .answer-label--left     { transform: rotate(-6deg); }
  .answer-label--right    { transform: rotate(6deg); }
  .answer-label--default  { background: white; color: #1a1a2e; border: 2px solid #e5e7eb; }
  .answer-label--selected { background: #1a1a2e; color: white; border: 2px solid #1a1a2e; }

  /* ── Block: door-wrapper ── */
  .door-wrapper { display: flex; flex-direction: column; align-items: center; position: relative; cursor: pointer; }

  /* ── Block: feedback-toast ── */
  .feedback-toast {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%,-50%) scale(0.8);
    padding: 16px 32px; border-radius: 16px;
    font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700;
    z-index: 20; pointer-events: none; white-space: nowrap;
    animation: toastPop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  }
  .feedback-toast--correct { background: #22c55e; color: white; }
  .feedback-toast--wrong   { background: #ef4444; color: white; }
  @keyframes toastPop {
    from { opacity:0; transform:translate(-50%,-60%) scale(0.7); }
    60%  { opacity:1; transform:translate(-50%,-50%) scale(1.05); }
    to   { opacity:1; transform:translate(-50%,-50%) scale(1); }
  }

  /* ── Block: bottom-bar ── */
  .bottom-bar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 28px 20px; position: relative; z-index: 10; flex-shrink: 0;
  }
  .bottom-bar__left  { display: flex; align-items: center; gap: 10px; }
  .bottom-bar__right { display: flex; align-items: center; gap: 10px; }
  .bottom-bar__icon-btn {
    width: 42px; height: 42px; background: rgba(255,255,255,0.85);
    border-radius: 12px; display: flex; align-items: center; justify-content: center;
    cursor: pointer; border: 1.5px solid rgba(255,255,255,0.9); backdrop-filter: blur(4px);
    transition: background 0.15s;
  }
  .bottom-bar__icon-btn:hover { background: white; }

  /* ── Block: difficulty-pill ── */
  .difficulty-pill {
    background: #1a1a2e; border-radius: 12px; padding: 10px 20px;
    display: flex; align-items: center; gap: 12px; border: 2px solid #3b82f6; transition: border-color 0.5s;
  }
  .difficulty-pill__label { font-size: 11px; font-weight: 700; font-family: 'Space Grotesk', sans-serif; color: white; letter-spacing: 0.08em; text-transform: uppercase; }
  .difficulty-pill__bar   { width: 60px; height: 4px; background: #374151; border-radius: 2px; overflow: hidden; }
  .difficulty-pill__fill  { height: 100%; border-radius: 2px; transition: width 0.5s ease, background 0.5s ease; }
  .difficulty-pill__rank  { font-size: 11px; font-weight: 700; font-family: 'Space Grotesk', sans-serif; color: white; letter-spacing: 0.08em; }

  /* ── Block: gameover-overlay ── */
  .gameover-overlay {
    position: absolute; inset: 0; background: rgba(10,5,30,0.88);
    backdrop-filter: blur(8px); z-index: 30;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;
    animation: fadeIn 0.5s ease forwards;
  }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  .gameover-overlay__title { font-family:'Space Grotesk',sans-serif; font-size:64px; font-weight:800; color:#ef4444; text-shadow:0 0 40px rgba(239,68,68,0.8); letter-spacing:0.04em; }
  .gameover-overlay__sub   { font-family:'Montserrat',sans-serif; font-size:18px; color:rgba(255,255,255,0.65); font-weight:500; }
  .gameover-overlay__btn {
    background: #3b82f6; color: white; border: none; border-radius: 12px;
    padding: 14px 36px; font-size: 15px; font-weight: 700;
    font-family: 'Space Grotesk', sans-serif; letter-spacing: 0.06em; text-transform: uppercase;
    cursor: pointer; margin-top: 8px; box-shadow: 0 4px 20px rgba(59,130,246,0.4);
    transition: background 0.2s, transform 0.1s;
  }
  .gameover-overlay__btn:hover { background: #2563eb; transform: translateY(-2px); }

  /* ── Block: score-card ── */
  .score-card { border-radius: 18px; padding: 22px 32px; text-align: center; min-width: 130px; }
  .score-card__label { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:8px; font-family:'Space Grotesk',sans-serif; }
  .score-card__value { font-size:42px; font-weight:800; line-height:1; font-family:'Space Grotesk',sans-serif; }
`;

export default function GameView({ xp: initialXp = 0, level: initialLevel = 0, onXpChange, onGoToProfile, onGameOver }) {
  const {
    question, hoveredDoor, setHoveredDoor,
    hearts, xp, level,
    feedback, isGameOver, isGameWon,
    isXpFlash, wikiImage, currentQ,
    handleAnswer, restart,
  } = useGameState({ initialXp, initialLevel, onXpChange, onGameOver });

  const { needed: xpNeeded, pct: xpPct } = computeXpProgress(xp, level);
  const totalXp  = computeTotalXp(xp, level);
  const diff     = DIFF_CONFIG[question.difficulty];

  const doors = [
    { id: 0, label: `A) ${question.answers[0]}`, modifier: 'left',   labelModifier: 'left'  },
    { id: 1, label: `B) ${question.answers[1]}`, modifier: 'center', labelModifier: ''      },
    { id: 2, label: `C) ${question.answers[2]}`, modifier: 'right',  labelModifier: 'right' },
  ];
  const charLeft = ({ 0: 28, 1: 50, 2: 72 })[hoveredDoor] ?? 50;

  const navRight = (
    <div className="game-nav__right">
      <div className="game-nav__xp-info">
        <div className="game-nav__xp-top">
          <span className="game-nav__xp-label">XP LEVEL {level}</span>
          <span className="game-nav__xp-count">{xp} / {xpNeeded}</span>
        </div>
        <div className="wl-xp-bar__track" style={{ height: '5px' }}>
          <div
            className={`wl-xp-bar__fill${isXpFlash ? ' wl-xp-bar__fill--flash' : ''}`}
            style={{ width: `${xpPct}%`, transition: 'width 0.5s ease' }}
          />
        </div>
      </div>
      <div className="game-nav__avatar"><AvatarSmall /></div>
    </div>
  );

  return (
    <>
      <style>{gameStyles}</style>
      <div className="game-page">

        {/* GAME OVER */}
        {isGameOver && (
          <div className="gameover-overlay">
            <div className="gameover-overlay__title">GAME OVER</div>
            <div className="gameover-overlay__sub">Tu as épuisé tous tes cœurs !</div>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', fontFamily: 'Montserrat' }}>
              Niveau <strong style={{ color: 'white' }}>{level}</strong> — XP total : <strong style={{ color: '#f0c060' }}>{totalXp} XP</strong>
            </div>
            <button className="gameover-overlay__btn" onClick={restart}>↺ Recommencer</button>
          </div>
        )}

        {/* VICTOIRE */}
        {isGameWon && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 30, background: 'linear-gradient(160deg,#0f172a 0%,#1e1b4b 50%,#0f172a 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0, animation: 'fadeIn 0.6s ease forwards', fontFamily: 'Montserrat', padding: '32px 24px' }}>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '52px', fontWeight: 800, color: '#f0c060', textShadow: '0 0 40px rgba(240,192,96,0.8)', letterSpacing: '0.04em', marginBottom: '4px' }}>VICTOIRE !</div>
            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', fontWeight: 500, marginBottom: '36px' }}>Tu as complété les {QUESTIONS.length} questions !</div>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '36px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div className="score-card" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="score-card__label" style={{ color: 'rgba(255,255,255,0.4)' }}>NIVEAU</div>
                <div className="score-card__value" style={{ color: 'white' }}>{level}</div>
              </div>
              <div className="score-card" style={{ background: 'rgba(240,192,96,0.1)', border: '1px solid rgba(240,192,96,0.25)' }}>
                <div className="score-card__label" style={{ color: 'rgba(240,192,96,0.6)' }}>XP TOTAL</div>
                <div className="score-card__value" style={{ color: '#f0c060' }}>{totalXp.toLocaleString('fr-FR')}</div>
              </div>
              <div className="score-card" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.22)' }}>
                <div className="score-card__label" style={{ color: 'rgba(34,197,94,0.6)' }}>QUESTIONS</div>
                <div className="score-card__value" style={{ color: '#22c55e' }}>{QUESTIONS.length}/{QUESTIONS.length}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button className="gameover-overlay__btn" style={{ background: 'rgba(255,255,255,0.1)', boxShadow: 'none', border: '2px solid rgba(255,255,255,0.2)' }} onClick={restart}>↺ Rejouer</button>
              <button className="gameover-overlay__btn" onClick={onGoToProfile}>Retour au profil</button>
            </div>
          </div>
        )}

        {/* NAVBAR */}
        <Navbar
          onLogoClick={onGoToProfile}
          right={navRight}
          leftExtra={
            <div className="hearts-pill">
              {[0, 1, 2].map((i) => (
                <span key={i} className={i >= hearts ? 'hearts-pill__heart--empty' : 'hearts-pill__heart'}>♥</span>
              ))}
            </div>
          }
        />

        {/* QUESTION */}
        <div className="quest-area">
          <div className="quest-area__badge">Question {currentQ + 1} / {QUESTIONS.length}</div>
          <div className="quest-area__card">
            <div className="quest-area__category">{question.category}</div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', justifyContent: 'center' }}>
              <div className="quest-area__text">{question.text}</div>
              {wikiImage && (
                <img src={wikiImage} alt="wiki" style={{ width: '56px', height: '56px', borderRadius: '10px', objectFit: 'cover', flexShrink: 0, border: '2px solid #e5e7eb' }} />
              )}
            </div>
          </div>
        </div>

        {/* SCÈNE */}
        <div className="game-scene">
          <div className="game-scene__ground" />
          {feedback && (
            <div className={`feedback-toast feedback-toast--${feedback.type}`}>{feedback.msg}</div>
          )}
          <div className={`game-scene__character${hoveredDoor === 0 ? ' game-scene__character--facing-left' : ''}`} style={{ left: `${charLeft}%` }}>
            <HeroCharacter />
          </div>
          <div className="game-scene__doors">
            {doors.map((door) => (
              <div
                key={door.id}
                className="door-wrapper"
                onClick={() => handleAnswer(door.id)}
                onMouseEnter={() => setHoveredDoor(door.id)}
              >
                <div className={`answer-label answer-label--${door.modifier === 'center' ? 'selected' : 'default'}${door.labelModifier ? ` answer-label--${door.labelModifier}` : ''}`}>
                  {door.label}
                </div>
                <div style={{ position: 'relative' }}>
                  {door.modifier === 'center' ? (
                    <div className="door door--center"><CenterDoor /></div>
                  ) : (
                    <div className={`door door--${door.modifier}`}>
                      <div className="door__icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4">
                          {door.modifier === 'left'
                            ? <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>
                            : <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>
                          }
                        </svg>
                      </div>
                    </div>
                  )}
                  {door.modifier !== 'center' && (
                    <div className="door__badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                        {door.modifier === 'left'
                          ? <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>
                          : <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></>
                        }
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BARRE BAS */}
        <div className="bottom-bar">
          <div className="bottom-bar__left">
            <div className="bottom-bar__icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
            </div>
            <div className="bottom-bar__icon-btn" onClick={onGoToProfile} title="Retour au profil">
              <IconSettings size={18} color="#374151" />
            </div>
          </div>
          <div className="bottom-bar__right">
            <div className="difficulty-pill" style={{ borderColor: diff.color }}>
              <span className="difficulty-pill__label">{diff.label}</span>
              <div className="difficulty-pill__bar">
                <div className="difficulty-pill__fill" style={{ width: `${diff.pct}%`, background: diff.color }} />
              </div>
              <span className="difficulty-pill__rank">RANKS</span>
            </div>
            <button className="wl-btn--primary" onClick={() => handleAnswer(hoveredDoor)}>Enter Gate</button>
          </div>
        </div>

      </div>
    </>
  );
}
