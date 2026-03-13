import { useState } from 'react';
import ProfilView from './features/profil/components/ProfilView.jsx';
import GameView   from './features/game/components/GameView.jsx';

// État global centralisé — partagé entre les deux vues
export default function App() {
  const [page,        setPage]        = useState('profil'); // 'profil' | 'game'
  const [xp,          setXp]          = useState(0);
  const [level,       setLevel]       = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [coursesDone, setCoursesDone] = useState(0);

  const handleXpChange = (newXp, newLevel) => {
    setXp(newXp);
    setLevel(newLevel);
  };

  const handleGameOver = () => {
    setGamesPlayed((g) => g + 1);
  };

  return page === 'profil' ? (
    <ProfilView
      xp={xp}
      level={level}
      gamesPlayed={gamesPlayed}
      coursesDone={coursesDone}
      onGoToGame={() => setPage('game')}
    />
  ) : (
    <GameView
      xp={xp}
      level={level}
      onXpChange={handleXpChange}
      onGameOver={handleGameOver}
      onGoToProfile={() => setPage('profil')}
    />
  );
}
