import { StudentProfile, AidResult } from './types';

const BOURSE_RATES: Record<string, number> = {
  'none': 0,
  '0bis': 145,
  '1': 216,
  '2': 271,
  '3': 341,
  '4': 411,
  '5': 470,
  '6': 554,
  '7': 633,
};

export class OpenAidEngine {
  public static calculate(profile: StudentProfile): AidResult[] {
    const aids: AidResult[] = [];

    // 1. CROUS Bourse
    if (profile.bourseEchelon !== 'none') {
      const montant = BOURSE_RATES[profile.bourseEchelon];
      aids.push({
        id: 'crous-bcs',
        titre: 'Bourse sur Critères Sociaux (CROUS)',
        categorie: 'Bourse',
        montantMensuelEstime: montant,
        description: 'Versement sur 10 mois, exonération des frais universitaires et de la CVEC.',
        demarche: 'Constituer le Dossier Social Étudiant (DSE).',
        lienOfficiel: 'https://messervices.etudiant.gouv.fr',
      });
    }

    // 2. APL
    if (profile.logement !== 'parents') {
      const isBoursier = profile.bourseEchelon !== 'none';
      const montant = (profile.ville === 'idf') ? (isBoursier ? 220 : 160) : (isBoursier ? 185 : 130);
      aids.push({
        id: 'caf-apl',
        titre: 'Aide Personnalisée au Logement (APL CAF)',
        categorie: 'Logement',
        montantMensuelEstime: montant,
        description: 'Prise en charge partielle de la redevance de loyer.',
        demarche: 'Demande en ligne dès la signature du bail locatif.',
        lienOfficiel: 'https://www.caf.fr',
      });
    }

    // 3. Transports
    if (profile.transportRegulier) {
      const eco = (profile.ville === 'idf') ? 50 : 30;
      aids.push({
        id: 'transport-solidaire',
        titre: 'Tarification Solidaire Transports',
        categorie: 'Transport',
        montantMensuelEstime: eco,
        description: 'Tarif réduit étudiant sur les réseaux urbains et régionaux.',
        demarche: 'Souscription via justificatif étudiant.',
        lienOfficiel: 'https://www.iledefrance-mobilites.fr',
      });
    }

    // 4. Urgence
    if (profile.urgenceFinanciere) {
      aids.push({
        id: 'crous-asap-fsdie',
        titre: "Aide Spécifique d'Urgence (ASAP) & FSDIE",
        categorie: 'Urgence',
        montantMensuelEstime: 0,
        montantPonctuelMax: 1000,
        description: "Secours ponctuel pour difficultés financières graves ou rupture familiale.",
        demarche: "Prendre rendez-vous avec le service social de l'université ou du CROUS.",
        lienOfficiel: 'https://etudiant.gouv.fr',
      });
    }

    return aids;
  }
}
