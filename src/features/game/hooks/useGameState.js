import { useState, useEffect } from 'react';
import { QUESTIONS } from '../constants/questions.js';
import { XP_GAIN, applyXpGain } from '../../../lib/xpUtils.js';

// ── Hook custom — isole la logique de jeu du rendu ──
export function useGameState({ initialXp, initialLevel, onXpChange, onGameOver }) {
  const [hoveredDoor, setHoveredDoor] = useState(1);
  const [hearts,      setHearts]      = useState(3);
  const [xp,          setXp]          = useState(initialXp);
  const [level,       setLevel]       = useState(initialLevel);
  const [feedback,    setFeedback]    = useState(null);
  const [isGameOver,  setIsGameOver]  = useState(false);
  const [isGameWon,   setIsGameWon]   = useState(false);
  const [isXpFlash,   setIsXpFlash]   = useState(false);
  const [currentQ,    setCurrentQ]    = useState(0);
  const [wikiImage,   setWikiImage]   = useState(null);

  const question = QUESTIONS[currentQ];

  // Fetch image Wikipedia à chaque changement de question
  useEffect(() => {
    setWikiImage(null);
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${question.wikiTopic}`)
      .then((r) => r.json())
      .then((d) => { if (d.thumbnail?.source) setWikiImage(d.thumbnail.source); })
      .catch(() => {});
  }, [currentQ]);

  const handleAnswer = (doorId) => {
    if (isGameOver || isGameWon || feedback) return;

    if (doorId === question.correct) {
      const gain = XP_GAIN[question.difficulty];
      const { newXp, newLevel } = applyXpGain(xp, level, gain);

      setXp(newXp);
      setLevel(newLevel);
      if (onXpChange) onXpChange(newXp, newLevel);

      setIsXpFlash(true);
      setTimeout(() => setIsXpFlash(false), 500);

      setFeedback({ type: 'correct', msg: `Correct ! +${gain} XP` });
      setTimeout(() => {
        setFeedback(null);
        if (currentQ + 1 >= QUESTIONS.length) {
          setIsGameWon(true);
          if (onGameOver) onGameOver();
        } else {
          setCurrentQ((i) => i + 1);
          setHoveredDoor(1);
        }
      }, 1400);
    } else {
      const newHearts = hearts - 1;
      setHearts(newHearts);
      setFeedback({ type: 'wrong', msg: 'Mauvaise réponse !' });
      if (newHearts <= 0) {
        setTimeout(() => {
          setIsGameOver(true);
          if (onGameOver) onGameOver();
        }, 900);
      }
      setTimeout(() => setFeedback(null), 1400);
    }
  };

  const restart = () => {
    setHearts(3);
    setXp(initialXp);
    setLevel(initialLevel);
    setIsGameOver(false);
    setIsGameWon(false);
    setFeedback(null);
    setHoveredDoor(1);
    setCurrentQ(0);
  };

  return {
    question,
    hoveredDoor, setHoveredDoor,
    hearts,
    xp, level,
    feedback,
    isGameOver, isGameWon,
    isXpFlash,
    wikiImage,
    currentQ,
    handleAnswer,
    restart,
  };
}
