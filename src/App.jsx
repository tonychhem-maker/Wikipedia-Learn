import { useState } from 'react';
import HomeView   from './features/home/components/HomeView.jsx';
import ProfilView from './features/profil/components/ProfilView.jsx';
import GameView   from './features/game/components/GameView.jsx';
import CoursView  from './features/cours/components/CoursView.jsx';

// État global centralisé — partagé entre toutes les vues
// pages: 'home' | 'profil' | 'game' | 'cours'
export default function App() {
  const [page,        setPage]        = useState('home');
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

  if (page === 'home') {
    return (
      <HomeView
        xp={xp}
        level={level}
        gamesPlayed={gamesPlayed}
        onGoToGame={() => setPage('game')}
        onGoToProfile={() => setPage('profil')}
        onGoToCours={() => setPage('cours')}
      />
    );
  }

  if (page === 'profil') {
    return (
      <ProfilView
        xp={xp}
        level={level}
        gamesPlayed={gamesPlayed}
        coursesDone={coursesDone}
        onGoToGame={() => setPage('game')}
        onGoToHome={() => setPage('home')}
      />
    );
  }

  if (page === 'game') {
    return (
      <GameView
        xp={xp}
        level={level}
        onXpChange={handleXpChange}
        onGameOver={handleGameOver}
        onGoToProfile={() => setPage('home')}
      />
    );
  }

  if (page === 'cours') {
    return (
      <CoursView
        onGoToHome={() => setPage('home')}
        onGoToProfile={() => setPage('profil')}
      />
    );
  }
}