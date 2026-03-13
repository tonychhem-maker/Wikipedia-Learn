// ── Banque de questions ── source unique de vérité

export const QUESTIONS = [
  { category: 'Histoire',      difficulty: 'easy',   text: 'Quelle civilisation a construit les Grandes Pyramides de Gizeh ?',       answers: ['Romains', 'Égyptiens', 'Aztèques'],            correct: 1, wikiTopic: 'Great_Pyramid_of_Giza'   },
  { category: 'Géographie',    difficulty: 'easy',   text: 'Quel est le plus grand océan du monde ?',                                  answers: ['Atlantique', 'Arctique', 'Pacifique'],          correct: 2, wikiTopic: 'Pacific_Ocean'            },
  { category: 'Sciences',      difficulty: 'easy',   text: 'Combien de planètes compte notre système solaire ?',                      answers: ['8', '9', '10'],                                 correct: 0, wikiTopic: 'Solar_System'             },
  { category: 'Biologie',      difficulty: 'easy',   text: 'Quel organe pompe le sang dans le corps humain ?',                        answers: ['Le foie', 'Le cœur', 'Les poumons'],            correct: 1, wikiTopic: 'Heart'                    },
  { category: 'Histoire',      difficulty: 'easy',   text: 'Qui a peint la Joconde ?',                                                answers: ['Raphaël', 'Michel-Ange', 'Léonard de Vinci'],   correct: 2, wikiTopic: 'Mona_Lisa'                },
  { category: 'Géographie',    difficulty: 'medium', text: "Quelle est la capitale de l'Australie ?",                                 answers: ['Sydney', 'Canberra', 'Melbourne'],              correct: 1, wikiTopic: 'Canberra'                 },
  { category: 'Sciences',      difficulty: 'medium', text: "Quel est le symbole chimique de l'or ?",                                  answers: ['Ag', 'Fe', 'Au'],                               correct: 2, wikiTopic: 'Gold'                     },
  { category: 'Histoire',      difficulty: 'medium', text: 'En quelle année la Première Guerre mondiale a-t-elle commencé ?',         answers: ['1912', '1914', '1918'],                         correct: 1, wikiTopic: 'World_War_I'              },
  { category: 'Biologie',      difficulty: 'medium', text: 'Combien d os contient le corps humain adulte ?',                         answers: ['186', '206', '226'],                            correct: 1, wikiTopic: 'Human_skeleton'           },
  { category: 'Astronomie',    difficulty: 'medium', text: "Quelle planète est surnommée la 'planète rouge' ?",                       answers: ['Vénus', 'Jupiter', 'Mars'],                     correct: 2, wikiTopic: 'Mars'                     },
  { category: 'Physique',      difficulty: 'hard',   text: 'Quelle est la vitesse de la lumière dans le vide ?',                      answers: ['300 000 km/s', '150 000 km/s', '450 000 km/s'], correct: 0, wikiTopic: 'Speed_of_light'           },
  { category: 'Histoire',      difficulty: 'hard',   text: 'Quel empire était gouverné par Gengis Khan au XIIIe siècle ?',            answers: ["Empire Ottoman", "Empire Mongol", "Empire Perse"], correct: 1, wikiTopic: 'Mongol_Empire'          },
  { category: 'Chimie',        difficulty: 'hard',   text: 'Quel est le numéro atomique du carbone ?',                                answers: ['6', '8', '12'],                                 correct: 0, wikiTopic: 'Carbon'                   },
  { category: 'Philosophie',   difficulty: 'hard',   text: "Qui a écrit 'La République', traité sur la justice et la cité idéale ?", answers: ['Aristote', 'Socrate', 'Platon'],                correct: 2, wikiTopic: 'Republic_(Plato)'        },
  { category: 'Mathématiques', difficulty: 'hard',   text: 'Qui a démontré le dernier théorème de Fermat en 1995 ?',                 answers: ['Andrew Wiles', 'Carl Gauss', 'Leonhard Euler'], correct: 0, wikiTopic: "Fermat%27s_Last_Theorem" },
];

export const DIFF_CONFIG = {
  easy:   { label: 'FACILE',        color: '#22c55e', pct: 33  },
  medium: { label: 'INTERMÉDIAIRE', color: '#3b82f6', pct: 66  },
  hard:   { label: 'DIFFICILE',     color: '#ef4444', pct: 100 },
};
