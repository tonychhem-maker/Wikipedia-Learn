// ── Bibliothèque d'icônes SVG — remplace tous les emojis

export const LogoIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <rect x="2" y="3" width="5" height="4" rx="1" fill="#60a5fa"/>
    <rect x="9" y="3" width="5" height="4" rx="1" fill="white"/>
    <rect x="2" y="9" width="5" height="4" rx="1" fill="white"/>
    <rect x="9" y="9" width="5" height="4" rx="1" fill="#60a5fa"/>
  </svg>
);

export const AvatarSVG = ({ size = 80 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} style={{ borderRadius: '50%', display: 'block' }}>
    <circle cx="40" cy="40" r="40" fill="#a8c8e8"/>
    <ellipse cx="40" cy="56" rx="20" ry="14" fill="#7eb3d4"/>
    <circle cx="40" cy="31" r="14" fill="#f5d0a9"/>
    <path d="M26 31 Q27 19 40 18 Q53 19 54 31 Q51 22 40 22 Q29 22 26 31Z" fill="#3d2c1e"/>
    <circle cx="34" cy="33" r="1.5" fill="#e8b88a"/>
    <circle cx="46" cy="33" r="1.5" fill="#e8b88a"/>
    <path d="M22 65 Q25 55 40 55 Q55 55 58 65" fill="#4a90d9"/>
  </svg>
);

export const AvatarSmall = () => (
  <svg viewBox="0 0 36 36" width="36" height="36">
    <circle cx="18" cy="18" r="18" fill="#a8c8e8"/>
    <ellipse cx="18" cy="26" rx="9" ry="6" fill="#7eb3d4"/>
    <circle cx="18" cy="14" r="7" fill="#f5d0a9"/>
    <path d="M11 14 Q12 8 18 7 Q24 8 25 14 Q23 10 18 10 Q13 10 11 14Z" fill="#3d2c1e"/>
    <path d="M10 30 Q12 25 18 25 Q24 25 26 30" fill="#4a90d9"/>
  </svg>
);

export const LockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b0b8c8" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

export const HeroCharacter = () => (
  <svg viewBox="0 0 80 130" width="80" height="130" style={{ display: 'block', filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.25))' }}>
    <ellipse cx="40" cy="127" rx="22" ry="5" fill="rgba(0,0,0,0.15)"/>
    <rect x="22" y="108" width="14" height="18" rx="6" fill="#1a1040"/>
    <rect x="44" y="108" width="14" height="18" rx="6" fill="#1a1040"/>
    <rect x="20" y="118" width="18" height="8" rx="4" fill="#120b30"/>
    <rect x="42" y="118" width="18" height="8" rx="4" fill="#120b30"/>
    <rect x="24" y="88" width="12" height="24" rx="5" fill="#2d1b6e"/>
    <rect x="44" y="88" width="12" height="24" rx="5" fill="#2d1b6e"/>
    <path d="M12 52 Q20 95 18 115 Q40 108 62 115 Q60 95 68 52Z" fill="#1a0a50" opacity="0.7"/>
    <rect x="22" y="52" width="36" height="42" rx="10" fill="#2d1b6e"/>
    <path d="M40 55 L30 65 L36 68 Z" fill="#f0c060"/>
    <path d="M40 55 L50 65 L44 68 Z" fill="#f0c060"/>
    <circle cx="40" cy="72" r="2.5" fill="#f0c060"/>
    <circle cx="40" cy="80" r="2.5" fill="#f0c060"/>
    <circle cx="40" cy="88" r="2.5" fill="#f0c060"/>
    <rect x="22" y="88" width="36" height="5" rx="2" fill="#f0c060"/>
    <rect x="36" y="87" width="8" height="7" rx="2" fill="#d4a020"/>
    <rect x="8" y="54" width="14" height="32" rx="7" fill="#2d1b6e"/>
    <rect x="58" y="54" width="14" height="32" rx="7" fill="#2d1b6e"/>
    <ellipse cx="15" cy="88" rx="7" ry="8" fill="#1a0a50"/>
    <ellipse cx="65" cy="88" rx="7" ry="8" fill="#1a0a50"/>
    <path d="M22 52 Q10 70 12 100 Q40 93 68 100 Q70 70 58 52Z" fill="#3d1fa0" opacity="0.6"/>
    <rect x="34" y="38" width="12" height="16" rx="5" fill="#fdd9a0"/>
    <ellipse cx="40" cy="28" rx="20" ry="22" fill="#fdd9a0"/>
    <path d="M20 22 Q22 4 40 2 Q58 4 60 22 Q56 10 40 9 Q24 10 20 22Z" fill="#1a0a0a"/>
    <ellipse cx="20" cy="22" rx="4" ry="9" fill="#1a0a0a"/>
    <ellipse cx="60" cy="22" rx="4" ry="9" fill="#1a0a0a"/>
    <ellipse cx="31" cy="27" rx="4" ry="4.5" fill="white"/>
    <ellipse cx="49" cy="27" rx="4" ry="4.5" fill="white"/>
    <circle cx="32" cy="28" r="2.8" fill="#1a0a50"/>
    <circle cx="50" cy="28" r="2.8" fill="#1a0a50"/>
    <circle cx="33" cy="27" r="1.2" fill="#0a0520"/>
    <circle cx="51" cy="27" r="1.2" fill="#0a0520"/>
    <circle cx="34" cy="26" r="0.8" fill="white"/>
    <circle cx="52" cy="26" r="0.8" fill="white"/>
    <path d="M27 21 Q31 19 35 21" stroke="#1a0a0a" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <path d="M45 21 Q49 19 53 21" stroke="#1a0a0a" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <ellipse cx="40" cy="33" rx="2" ry="1.5" fill="#e8b870" opacity="0.7"/>
    <path d="M34 38 Q40 43 46 38" stroke="#c07040" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <ellipse cx="20" cy="28" rx="3.5" ry="5" fill="#fdd9a0"/>
    <ellipse cx="60" cy="28" rx="3.5" ry="5" fill="#fdd9a0"/>
    <path d="M28 48 Q40 44 52 48 L50 54 Q40 50 30 54Z" fill="#f0c060"/>
  </svg>
);

export const CenterDoor = () => (
  <svg viewBox="0 0 180 250" width="180" height="250" style={{ borderRadius: '80px 80px 0 0', display: 'block' }}>
    <rect width="180" height="250" rx="80" ry="80" fill="#1e293b"/>
    <rect x="30" y="60" width="28" height="120" rx="14" fill="#1a3a5c" stroke="#60a5fa" strokeWidth="2"/>
    <rect x="122" y="60" width="28" height="120" rx="14" fill="#1a3a5c" stroke="#60a5fa" strokeWidth="2"/>
    <rect x="36" y="80" width="3" height="80" rx="2" fill="#60a5fa" opacity="0.8"/>
    <rect x="141" y="80" width="3" height="80" rx="2" fill="#60a5fa" opacity="0.8"/>
    <ellipse cx="90" cy="230" rx="50" ry="12" fill="#60a5fa" opacity="0.3"/>
    <ellipse cx="90" cy="150" rx="25" ry="60" fill="#60a5fa" opacity="0.06"/>
  </svg>
);

export const IconTrophy = ({ size = 20, color = '#f59e0b' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M8 21h8M12 17v4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 4h14v7a7 7 0 01-14 0V4z" fill={color} opacity="0.1" stroke={color} strokeWidth="1.5"/>
    <path d="M5 6H2v3a3 3 0 003 3M19 6h3v3a3 3 0 01-3 3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconController = ({ size = 16, color = '#9ca3af' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8m-4-4v4"/>
  </svg>
);

export const IconBook = ({ size = 16, color = '#9ca3af' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

export const IconStar = ({ size = 16, color = '#9ca3af' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export const IconEdit = ({ size = 10, color = 'white' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

export const IconBell = ({ size = 14, color = '#6b7280' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

export const IconSettings = ({ size = 14, color = '#6b7280' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
