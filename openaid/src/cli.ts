import { OpenAidEngine } from './engine';
import { StudentProfile } from './types';

console.log('=====================================================');
console.log('   🎓 OpenAid — Simulateur Libre des Aides Étudiantes');
console.log('   100% Local • Zero Tracking • Licence MIT');
console.log('=====================================================\n');

// Profil exemple type : Étudiant boursier échelon 7 en studio à Paris
const sampleProfile: StudentProfile = {
  bourseEchelon: '7',
  logement: 'locataire_seul',
  ville: 'idf',
  transportRegulier: true,
  urgenceFinanciere: false,
};

console.log('Exécution de la simulation pour le profil test :');
console.log(JSON.stringify(sampleProfile, null, 2));
console.log('\n--- Calcul des droits en cours ---\n');

const results = OpenAidEngine.calculate(sampleProfile);
let totalMonthly = 0;

results.forEach((aid, idx) => {
  totalMonthly += aid.montantMensuelEstime;
  console.log(`[${idx + 1}] ${aid.titre} (${aid.categorie})`);
  console.log(`    Montant estimé : ${aid.montantMensuelEstime} € / mois`);
  console.log(`    Description    : ${aid.description}`);
  console.log(`    Démarche       : ${aid.demarche}`);
  console.log(`    Lien officiel  : ${aid.lienOfficiel}\n`);
});

console.log('=====================================================');
console.log(`💰 TOTAL ESTIMÉ DES AIDES MENSUELLES : ~${totalMonthly} € / mois`);
console.log('=====================================================');
