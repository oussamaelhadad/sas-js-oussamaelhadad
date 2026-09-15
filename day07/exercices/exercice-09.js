/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const tableau = [
   { nom: "reda",
    score: 16,
   }
    ,{ nom: "nasser",
      score: 9.5,
    }
]
function valide (score){
let beyondavrage = 10
let reussi = {}
if(tableau[0].score >= beyondavrage )
{
    reussi = tableau[0]
}
return reussi
}
console.log(valide(tableau));
