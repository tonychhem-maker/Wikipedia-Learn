// ── Fonctions XP pures — sans effet de bord

export const XP_GAIN = { easy: 50, medium: 100, hard: 150 };

export function xpForLevel(level) {
  return (level + 1) * 100;
}

export function computeXpProgress(xp, level) {
  const needed = xpForLevel(level);
  const pct    = Math.min((xp / needed) * 100, 100);
  return { needed, pct };
}

export function computeTotalXp(xp, level) {
  return (
    Array.from({ length: level }, (_, i) => (i + 1) * 100).reduce((a, b) => a + b, 0) + xp
  );
}

// Applique le gain XP et gère les level-ups
export function applyXpGain(currentXp, currentLevel, gain) {
  let newXp    = currentXp + gain;
  let newLevel = currentLevel;
  let needed   = xpForLevel(newLevel);

  while (newXp >= needed) {
    newXp  -= needed;
    newLevel++;
    needed  = xpForLevel(newLevel);
  }

  return { newXp, newLevel };
}
