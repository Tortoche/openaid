# 🚀 CAHIER DES CHARGES & PROMPT D'EXÉCUTION AUTONOME : OPENAID FRANCE PRO

> **Document de cadrage exhaustif et prompt de lancement autonome pour le développement complet d'OpenAid.**

---

## 📌 1. CONTEXTE GLOBAL & OBJECTIF DE LA MISSION

### A. Le Programme de Contribution France Student
* **Organisation :** Fédération France Student (`francestudent.org` / `ia.francestudent.org` / organisation GitHub `@FranceStudent`).
* **Objectif du candidat (Utilisateur : @Tortoche / Corentin JANIN) :** Être sélectionné pour le **Programme de Contribution Open-Source** afin d'obtenir un accès officiel et pérenne à **Codex / Claude Code** directement dans son éditeur.
* **Le contrat d'éligibilité :** Fournir et maintenir un projet open-source d'utilité publique, à forte valeur ajoutée pour les étudiants, respectant les standards de l'open source (licence libre, code maintenable, impact communautaire).
* **Profil GitHub existant :** `https://github.com/Tortoche` (Dépôt dédié créé et lié : `https://github.com/Tortoche/openaid`).

---

## 🎯 2. LA MISSION TECHNIQUE : OPENAID FRANCE PRO (L'ANTI-WIZBII)

### A. La Vision Produit
Contrairement aux plateformes commerciales (type Wizbii) qui monétisent et revendent les données personnelles des étudiants à des partenaires financiers (banques, assurances, mutuelles) et qui ignorent les dispositifs locaux :
* **100 % Anonyme et Local-first :** Aucune inscription requise, aucune donnée transmise à des tiers, calcul exécuté à 100 % côté client (navigateur ou CLI).
* **Couverture Exhaustive :** Intégration des barèmes nationaux (CROUS, CAF, État) ET des dispositifs régionaux, métropolitains et universitaires de terrain (souvent invisibles).
* **Open Data & Crowdsourcé :** Base de données structurée en fichiers JSON ouverts permettant à chaque association ou BDE d'ajouter les aides spécifiques de son campus via Pull Request.

---

## 🗺️ 3. SPÉCIFICATIONS EXHAUSTIVES DES DONNÉES & FONCTIONNALITÉS

Le système doit être développé **sans aucune omission** et couvrir l'intégralité des besoins réels des étudiants en France :

### A. Matrice des 13 Régions Académiques et Réseaux de Transports
1. **Île-de-France :** Paris, Créteil, Versailles — Forfait Imagine R Étudiant (~38 €/mois vs 88 € Navigo plein tarif), Aide AILE Ville de Paris (900 € pour l'emménagement).
2. **Auvergne-Rhône-Alpes :** Lyon, Grenoble, Clermont-Ferrand, Saint-Étienne — TCL Solidaire Étudiant, TAG Grenoble, Fonds d'urgence métropolitain Lyon.
3. **Occitanie :** Toulouse, Montpellier, Nîmes, Perpignan — Tarification Tisséo Étudiant (~15 €/mois), TaM Montpellier, Revenu Émancipation Jeunes régional.
4. **Hauts-de-France :** Lille, Amiens, Valenciennes — Ilévia Étudiant, Aide régionale au transport aux étudiants (TER Hauts-de-France).
5. **Provence-Alpes-Côte d'Azur :** Marseille, Aix, Nice, Avignon — RTM Solidaire, Pass Zou! Études région Sud (accès illimité trains et bus régionaux).
6. **Nouvelle-Aquitaine :** Bordeaux, Poitiers, Limoges, Pau — TBM Pass Jeune, Pass Rail régional, Bourses d'urgence campus Bordeaux.
7. **Grand Est :** Strasbourg, Nancy, Metz, Reims — CTS Tarification Solidaire, Réseau Stan Nancy, Pass Fluuo Grand Est.
8. **Bretagne :** Rennes, Brest, Lorient — KorriGo STAR Rennes, Bibus Brest, Bourse de mobilité internationale de la Région Bretagne.
9. **Pays de la Loire :** Nantes, Angers, Le Mans — Naolib Étudiant, Forfait Aléop régional, Dispositif d'aide au premier équipement Nantes Métropole.
10. **Normandie :** Rouen, Caen, Le Havre — Réseau Astuce Rouen, Twisto Caen, Dispositif Atouts Normandie.
11. **Bourgogne-Franche-Comté :** Dijon, Besançon — Divia Dijon, Ginko Besançon, Bourses régionales sanitaires et sociales.
12. **Centre-Val de Loire :** Tours, Orléans — Fil Bleu Tours, Tao Orléans, Aide Rémi Liberté Jeune.
13. **Corse & Outre-Mer :** Corte, Antilles, Guyane, Réunion, Mayotte — Passeport Mobilité Études (prise en charge billets d'avion), aides territoriales de Corse.

---

### B. Les 6 Catégories d'Aides à Intégrer Intégralement

#### 1. Bourses & Financements d'Études
* **Bourse sur Critères Sociaux (CROUS) :** Barèmes exacts 2024-2026 (Échelons 0bis à 7 : de 145 €/mois à 633 €/mois sur 10 mois). Exonération CVEC (~105 €) et droits d'inscription.
* **Aide au Mérite :** 900 €/an (100 €/mois) pour les boursiers ayant obtenu la mention Très Bien au Baccalauréat.
* **Aide à la Mobilité Master :** 1 000 € pour les étudiants boursiers de Licence changeant de région académique pour leur Master.
* **Aide à la Mobilité Parcoursup :** 500 € pour les lycéens boursiers changeant d'académie.

#### 2. Logement & Caution
* **APL (Aide Personnalisée au Logement - CAF) :** Barèmes selon loyer, statut boursier et zones géographiques (Zone 1 : Île-de-France ; Zone 2 : Métropoles > 100k hab ; Zone 3 : reste du territoire).
* **Garantie VISALE (Action Logement) :** Caution locative gratuite à 100 % pour les moins de 30 ans, remplaçant les garants parentaux.
* **Avance Loca-Pass :** Prêt à taux 0 % pour financer le dépôt de garantie.
* **Aide Mobili-Jeune :** Prise en charge jusqu'à 100 €/mois de loyer pour les étudiants en alternance / contrat d'apprentissage.
* **AILE (Ville de Paris) :** Subvention de 900 € non remboursable pour les boursiers emménageant dans le parc privé parisien.

#### 3. Alimentation & Produits Essentiels
* **Repas CROUS à 1 € :** Tarification sociale garantie pour tous les boursiers et étudiants non-boursiers précaires dans les 800+ restaurants universitaires.
* **Épiceries Solidaires et Distributions d'Urgence :** Réseau Cop1 (Solidarités Étudiantes), Linkee, AGORAé (FAGE), Secours Populaire et Restos du Cœur Campus (paniers repas gratuits de 5 à 7 kg).

#### 4. Transports & Mobilité
* Tarification solidaire métropolitaine pour les 13 régions.
* Pass Rail national / Carte Avantage Jeune SNCF.

#### 5. Santé & Bien-être
* **Complémentaire Santé Solidaire (CSS) :** Couverture médicale à 100 % sans reste à charge, gratuite pour les étudiants sans ressources ou faibles revenus.
* **Santé Psy Étudiant :** Prise en charge à 100 % de 8 séances chez un psychologue partenaire sans avance de frais.
* **Préservatifs gratuits en pharmacie :** Prise en charge Sécurité Sociale à 100 % pour les moins de 26 ans.

#### 6. Secours d'Urgence Exceptionnels
* **Aide Spécifique Ponctuelle CROUS (ASAP) :** Secours financier déblocable en commission d'urgence (jusqu'à 1 500 € ponctuels, cumulable jusqu'à 3 fois/an).
* **FSDIE (Fonds de Solidarité et de Développement des Initiatives Étudiantes) :** Géré par chaque université pour le règlement des impayés, frais de santé ou matériel informatique.

---

## 💻 4. ARCHITECTURE LOGICIELLE & LIVRABLES ATTENDUS

Le projet doit être structuré et prêt pour une exécution autonome complète :

1. **Interface Web Interactive (`index.html`) :**
   - Design moderne (style DSFR / Tailwind / Plus Jakarta Sans), ultra-réactif, accessible et responsive mobile.
   - Formulaire dynamique : sélection de l'échelon de bourse, type de logement, ville parmi toutes les métropoles françaises, situation d'urgence, transport.
   - Calculateur en direct : affichage instantané du montant total des aides déblocables par mois et des aides ponctuelles.
   - Générateur de Checklist : bouton pour exporter ou imprimer la liste complète des pièces justificatives nécessaires.
   - Déploiement automatique sur **GitHub Pages** (`https://tortoche.github.io/openaid/`).

2. **Moteur TypeScript (`src/engine.ts` & `src/data/rules.json`) :**
   - Moteur de règles modulaire, typage strict (`StudentProfile`, `AidRule`, `SimulationResult`).
   - Base de données JSON documentée et enrichie des barèmes officiels.
   - Script CLI (`src/cli.ts`) permettant d'exécuter des simulations en ligne de commande.

3. **Intégration & Déploiement Continu :**
   - Configuration Git complète liée à `https://github.com/Tortoche/openaid`.
   - Workflow GitHub Actions ou configuration Pages sur la branche `main`.

---

## 🤖 5. PROMPT MAÎTRE À TRANSMETTRE À L'IA EXÉCUTANTE

Copiez et collez le prompt ci-dessous pour lancer l'exécution complète et autonome :

```markdown
Tu es l'ingénieur logiciel principal chargé de développer et de finaliser à 100% le projet open-source "OpenAid France Pro" dans le dépôt https://github.com/Tortoche/openaid.

Consignes strictes :
1. Travaille en totale autonomie jusqu'à l'achèvement complet. N'omets aucun détail ni aucune fonctionnalité.
2. Implémente l'intégralité des 13 régions académiques françaises, de toutes les grandes métropoles universitaires, et de l'ensemble des 6 catégories d'aides (Bourses CROUS échelons 0bis à 7, APL Zones 1/2/3, Repas 1€, Transports métropolitains, Santé/CSS, et Fonds d'urgence FSDIE/ASAP).
3. Assure-toi que le fichier index.html est autonome, sans dépendance externe fragile, responsive et directement déployé sur GitHub Pages.
4. Vérifie que le moteur TypeScript dans src/ compile sans erreur et que la base JSON rules.json est rigoureusement renseignée avec les montants et démarches réelles.
5. Fais les commits nécessaires et pousse le code sur la branche main du dépôt GitHub. Ne t'arrête pas avant que l'intégralité du cahier des charges soit concrétisée et testée.
```
