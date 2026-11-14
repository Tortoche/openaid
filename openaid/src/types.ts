export interface StudentProfile {
  bourseEchelon: 'none' | '0bis' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
  logement: 'crous' | 'locataire_seul' | 'coloc' | 'parents';
  ville: 'idf' | 'lyon' | 'marseille' | 'lille' | 'toulouse' | 'autre';
  transportRegulier: boolean;
  urgenceFinanciere: boolean;
}

export interface AidResult {
  id: string;
  titre: string;
  categorie: 'Bourse' | 'Logement' | 'Alimentation' | 'Transport' | 'Urgence';
  montantMensuelEstime: number;
  montantPonctuelMax?: number;
  description: string;
  demarche: string;
  lienOfficiel: string;
}
