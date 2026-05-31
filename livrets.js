const livretData = {

stjean: {
livret: `═══════════════════════════════════════
LIVRET DE LIGNE — X76671
Lézan → Saint-Jean-du-Gard
Mission Cévenol · AGC 3V
═══════════════════════════════════════

▶ NOTES CONDUITE
───────────────────────────────────────
• Par temps de pluie : VL réduite de 10 km/h sur viaducs
• Été (juil-août) : affluence touristique, annonces sonores
• Traction : surveiller température moteur en rampe 12‰
• Retour : depuis v2 → v1, manœuvre arrière 200m
• Attention à tous les passages à niveau : sifflet obligatoire en amont des PN signalés
• À l'abord des gares et haltes : vitesse limitée à 30 km/h jusqu'à l'arrêt ou reprise de la vitesse autorisée`
},

lyon: {
livret: `═══════════════════════════════════════
LIVRET DE LIGNE — 82522
Lyon Part-Dieu H → Part-Dieu A
Mission Lyon Jour · AGC 5V
═══════════════════════════════════════

▶ NOTES CONDUITE
───────────────────────────────────────
• Traversée Lyon : klaxon uniquement aux PN signalés
• Boucle retournement : manœuvre lente — agent sol obligatoire
• Heure de pointe (12h-14h) : quais encombrés à Part-Dieu
• Retour depuis Saint-Priest 2 : VL 90 possible PK 9.2→7.0
• Part-Dieu A : voie A (hall sud) — annonces automatiques
• Passage en mode diesel après Saint-Priest pour la boucle de retournement
• Retour en mode électrique après le retournement et le changement de cabine`
},

lyon_nuit: {
livret: `═══════════════════════════════════════
LIVRET DE LIGNE — 82522
Lyon Part-Dieu H → Part-Dieu A
Mission Lyon Nuit · AGC 5V
═══════════════════════════════════════

▶ NOTES CONDUITE
───────────────────────────────────────
• Service nuit : régulateur Lyon disponible sur canal 5
• Signaler tout piéton sur voie immédiatement
• Boucle retournement : agent sol OBLIGATOIRE même la nuit
• Retour Part-Dieu A : voie A — quai vide à cette heure
• En cas d'anomalie : arrêt immédiat + contact régulateur
• Passage en mode diesel après Saint-Priest pour la boucle de retournement
• Retour en mode électrique après le retournement et le changement de cabine`
},

beziers_long: {
livret: `═══════════════════════════════════════
LIVRET DE LIGNE — AGC Long
Port-la-Nouvelle → Narbonne C
Service AGC Jour · Long
═══════════════════════════════════════

▶ NOTES CONDUITE
───────────────────────────────────────
• Tramontane : vent dominant — VL automatiquement réduite si alerte
• Été : fréquentation maximale Narbonne ↔ Béziers
• PN 7 : le plus dangereux de la section — vigilance absolue
• Viaduc Aude : inspection hebdomadaire — consulter fiche travaux
• Retour Narbonne C : voie C différente de voie D à l'aller
• Rappel VMax : 160 km/h
• Prendre garde aux courbes et aux profils de la ligne
• Respecter en permanence les vitesses limites indiquées au livret`
},

beziers_court: {
livret: `═══════════════════════════════════════
LIVRET DE LIGNE — AGC Court
Port-la-Nouvelle → Béziers A
Service AGC Jour · Court
═══════════════════════════════════════

▶ NOTES CONDUITE
───────────────────────────────────────
• Service court : terminus Béziers A (voie A), pas de retour
• Informer les voyageurs à Narbonne : pas d'arrêt intermédiaire
• Temps de parcours optimisé — pas de marge à Coursan/Colombiers
• Consulter livret long pour détails PN et viaducs
• Rappel VMax : 160 km/h
• Prendre garde aux courbes et aux profils de la ligne
• Respecter en permanence les vitesses limites indiquées au livret`
},

beziers_long_nuit: {
livret: `═══════════════════════════════════════
LIVRET DE LIGNE — AGC Long Nuit
Port-la-Nouvelle → Narbonne C
Service AGC Nuit · Long
═══════════════════════════════════════

▶ NOTES CONDUITE
───────────────────────────────────────
• Service nuit : canal radio 5 Narbonne + canal 7 Béziers
• Pont tournant Robine : appel obligatoire si > 22h
• Brouillard étang : réduction automatique à VL-20
• Tout incident sur voie : arrêt immédiat + balisage
• Retour Narbonne C : dernier train — vérifier fermeture gare
• Rappel VMax : 160 km/h
• Prendre garde aux courbes et aux profils de la ligne
• Respecter en permanence les vitesses limites indiquées au livret`
}

};

/* Expose globalement pour le site principal */
if (typeof window !== 'undefined') {
window.livretData = livretData;
}
