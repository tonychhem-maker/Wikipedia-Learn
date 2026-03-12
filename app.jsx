import React from 'react';

export default function App() {
  return (
    <>
      <style>{`
        /* Importation de la police Montserrat depuis Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

        .container {
          background-color: #d99a9a; /* Couleur de fond de ta maquette */
          min-height: 100vh;
          padding: 40px;
          font-family: 'Montserrat', sans-serif; /* Application de la police */
          color: #1a202c;
        }

        .app-card {
          max-width: 900px;
          margin: 0 auto;
          background: #f7fafc;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .navbar {
          background: white;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #edf2f7;
        }

        .logo-text {
          font-weight: 700;
          font-size: 1.2rem;
          color: #002d58;
        }

        .profile-header {
          background: white;
          margin: 20px;
          padding: 25px;
          border-radius: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .user-name {
          font-weight: 700;
          margin: 0;
          font-size: 1.5rem;
        }

        .xp-section {
          background: white;
          margin: 0 20px 20px;
          padding: 25px;
          border-radius: 15px;
        }

        .xp-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .progress-track {
          background: #edf2f7;
          height: 12px;
          border-radius: 10px;
          margin: 10px 0;
          overflow: hidden;
        }

        .progress-fill {
          background: #002d58; /* Couleur liée à Wikipedia Learn */
          height: 100%;
          width: 65%;
          border-radius: 10px;
          transition: width 1s ease-in-out;
        }

        .promotion-text {
          font-size: 0.75rem;
          font-weight: 600;
          color: #718096;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .badges-grid {
          display: flex;
          gap: 15px;
          padding: 25px;
          background: white;
          margin: 20px;
          border-radius: 15px;
          justify-content: space-around;
        }

        .badge { 
          text-align: center;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .badge-icon {
          font-size: 2rem;
          margin-bottom: 5px;
          display: block;
        }

        .locked { opacity: 0.3; filter: grayscale(1); }

        .btn-edit {
          background: #002d58;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 10px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>

      <div className="container">
        <div className="app-card">
          {/* Barre de Navigation [cite: 18] */}
          <nav className="navbar">
            <div className="logo-text">WikiLearn</div>
            <div style={{fontSize: '1.2rem'}}>🔔 ⚙️</div>
          </nav>

          {/* En-tête Profil - Gamification [cite: 101, 102] */}
          <div className="profile-header">
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <div style={{width: '80px', height: '80px', borderRadius: '50%', background: '#cbd5e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem'}}>👤</div>
              <div>
                <h2 className="user-name">Alexandre LeGrand</h2>
                <p style={{margin: 0, color: '#4a5568', fontWeight: 600}}>Niveau 14 — Érudit</p>
                <small style={{color: '#a0aec0'}}>Membre depuis Octobre 2023</small>
              </div>
            </div>
            <button className="btn-edit">Modifier le Profil</button>
          </div>

          {/* Section Score d'Expérience (XP)  */}
          <div className="xp-section">
            <div className="xp-header">
              <span>Progression d'Expérience</span>
              <span style={{color: '#002d58'}}>650 / 1000 XP</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>
            <div className="promotion-text">Encore 350 XP avant la promotion</div>
          </div>

          {/* Liste des Badges  */}
          <div className="badges-grid">
            <div className="badge"><span className="badge-icon">🥇</span><p>Premiers Pas</p></div>
            <div className="badge"><span className="badge-icon">🔥</span><p>Série 7j</p></div>
            <div className="badge"><span className="badge-icon">🧠</span><p>Génie Quiz</p></div>
            <div className="badge locked"><span className="badge-icon">🔒</span><p>Expert Histoire</p></div>
            <div className="badge locked"><span className="badge-icon">🔒</span><p>Maître Science</p></div>
          </div>
        </div>
      </div>
    </>
  );
}