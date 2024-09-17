import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: ' ri-function-line',
    role: 'TABLEAU_BOARD',
    subItems: [
      {
        id: 3,
        label: 'MENUITEMS.DASHBOARD.CHILD.BILAN-ACTIVITE',
        link: '/reporting/Bilan-Activite',
        role: 'REPORTING_MENU_BILAN_ACTIVITE',
        parentId: 2
      },
      {
        id: 4,
        label: 'MENUITEMS.DASHBOARD.CHILD.PRODUCTIVITE-BAF',
        link: '/reporting/Productivite-baf',
        role: 'REPORTING_MENU_PRODUCTIVITE_BAF',
        parentId: 2
      },
      {
        id: 5,
        label: 'MENUITEMS.DASHBOARD.CHILD.ETABLISSEMENT',
        link: '/reporting/dashboard-etablissement',
        role: 'ETABLISSEMENT_MENU_TABLEAU_BORD',
        parentId: 2
      },
      {
        id: 6,
        label: 'MENUITEMS.DASHBOARD.CHILD.ADMISSIONS',
        link: '/reporting/kpi-admission',
        role: 'ADMISSION_MENU_INDICATEURS_PERFORMANCE',
        parentId: 2
      },
      {
        id: 7,
        label: 'MENUITEMS.DASHBOARD.CHILD.CHIFFRE-AFFAIRES',
        link: '/reporting/dashboard',
        role: 'FACTURATION_MENUE_TABLEAU_DE_BORD',
        parentId: 2
      },
      {
        id: 8,
        label: 'MENUITEMS.DASHBOARD.CHILD.ENCAISSEMENT',
        link: '/reporting/encaissement-dashboard',
        role: 'ENCAISSEMENT_MENU_DASHBOARD',
        parentId: 2
      },
      {
        id: 9,
        label: 'MENUITEMS.DASHBOARD.CHILD.PEC',
        link: '/reporting/indicateurs-de-performance',
        role: 'PEC_MENU_INDICATEURS_PERFORMANCE',
        parentId: 2
      },
      {
        id: 10,
        label: 'MENUITEMS.DASHBOARD.CHILD.RECAPITULATIF-HONORAIRES',
        link: '/reporting/honoraires-medecin',
        role: 'HONORAIRESMEDECINS_MENU_MEDECIN',
        parentId: 2
      },
      {
        id: 11,
        label: 'MENUITEMS.DASHBOARD.CHILD.SITUATION-CHAMBRES',
        link: '/reporting/situation_des_chambres',
        role: 'SERVICE_SOINS_MENU_SITUATION_CHAMBRES',
        parentId: 2
      },
      {
        id: 12,
        label: 'MENUITEMS.DASHBOARD.CHILD.TAUX-OCCUPATION',
        link: '/reporting/indicateurs-de-performances',
        role: 'SERVICE_SOINS_MENU_INDICATEURS_PERFORMANCE',
        parentId: 2
      },
      {
        id: 13,
        label: 'MENUITEMS.DASHBOARD.CHILD.RECAP-CONSOMMATION-PHARMACIE',
        link: '/reporting/KPI_consommation_pharmacie',
        role: 'PHARMACIE_MENU_KPI_CONSOMMATION_PHARMACIE',
        parentId: 2
      },
      {
        id: 14,
        label: 'MENUITEMS.DASHBOARD.CHILD.RECAP-ACHAT-PHARMACIE',
        link: '/reporting/pharmacie-kpi',
        role: 'PHARMACIE_MENU_INDICATEUR_PERFORMANCE',
        parentId: 2
      },
    ]
  },
  {
    id: 54,
    label: '',
    isTitle: true
  },
  {
    id: 15,
    label: 'MENUITEMS.ALERTES.TEXT',
    icon: 'bx bx-bell',
    role: 'RIS',
    subItems: [
      {
        id: 16,
        label: 'MENUITEMS.ALERTES.CHILD.ACCORDS-RISQUE-EXPIRATION',
        link: '/reporting/Alerte-pec/Alerte-pec-accordees',
        role: 'PEC_MENU_ALERTE_PEC',
        parentId: 15
      },
      {
        id: 17,
        label: 'MENUITEMS.ALERTES.CHILD.PEC-NON-EXPEDIEES',
        link: '/reporting/Alerte-pec/Alerte-pec-Eligible',
        role: 'PEC_MENU_ALERTE_PEC',
        parentId: 15
      },
      {
        id: 18,
        label: 'MENUITEMS.ALERTES.CHILD.PEC-IMPAYEES-RECLAMER',
        link: '/reporting/Alerte-pec/Alerte-pec-reclamation',
        role: 'PEC_MENU_ALERTE_PEC',
        parentId: 15
      },
      {
        id: 19,
        label: 'MENUITEMS.ALERTES.CHILD.ALERTES-HONORAIRES',
        link: '/reporting/honoraire-medecin-non-regle',
        role: 'HONORAIRESMEDECINS_MENU_MEDECIN_NON_REGLE',
        parentId: 15
      },
      {
        id: 20,
        label: 'MENUITEMS.ALERTES.CHILD.ALERTES-BC-ECHUS',
        link: '/reporting/alertes-bc',
        role: 'PHARMACIE_MENU_ALERTE_BC',
        parentId: 15
      },
      {
        id: 21,
        label: 'MENUITEMS.ALERTES.CHILD.ALERTES-STOCK',
        link: '/pharmacie/Alert-de-stock',
        role: 'PHARMACIE_MENU_ALERT_STOCK',
        parentId: 15
      },
    ]
  },
  {
    id: 54,
    label: '',
    isTitle: true
  },
  {
    id: 22,
    label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.TEXT',
    icon: 'ri-file-excel-2-line',
    role: 'EXTRACTIONS_STATISTIQUES',
    subItems: [
      {
        id: 23,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.EXTRACTION-ADMISSIONS',
        link: '/Extractions-statistiques/extractions-admission',
        role: 'ADMISSION_MENU_STATISTIQUES',
        parentId: 22
      },
      {
        id: 24,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.EXTRACTION-CHIFFRE-AFFAIRES',
        link: '/Extractions-statistiques/chiffre-affaires-dispatche',
        role: 'FACTURATION-STATISTIQUE-CA-BUTTON-CHIFFRE-AFFAIRE-DIPATCHE',
        parentId: 22
      },
      {
        id: 25,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.CA-GENERE-PAR-MEDECIN',
        link: '/Extractions-statistiques/analyse-ca-medecin',
        role: 'FACTURATION-STATISTIQUE-CA-BUTTON-ANALYSE-CA-MEDECIN',
        parentId: 22
      },
      {
        id: 26,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.CA-PAR-MEDECIN-PRESTATION',
        link: '/Extractions-statistiques/extraction-ca-medecin-prestation',
        role: 'FACTURATION-STATISTIQUE-CA-BUTTON-EXTRACT-MEDCIN&PRESTATION',
        parentId: 22
      },
      {
        id: 27,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.LIGNES-DES-FACTURES',
        link: '/Extractions-statistiques/detail-lignes-factures',
        role: 'FACTURATION-STATISTIQUE-CA-BUTTON-DETAIL-LIGNE-FACTURES',
        parentId: 22
      },
      {
        id: 28,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.EXTRACTION-DES-HONORAIRES',
        link: '/Extractions-statistiques/Analyse-honoraires-Avances',
        role: 'FACTURATION-STATISTIQUE-CA-BUTTON-ANALYSE-HONORAIRES-MEDECINS',
        parentId: 22
      },
      {
        id: 29,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.PAIEMENT-DES-PRESTATAIRES',
        link: '/Extractions-statistiques/Analyse-honoraires-prestataires-Avances',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_ANALYSE_HONORAIRES_PRESTATAIRES',
        parentId: 22
      },
      {
        id: 30,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.SITUATION-DES-LABORATOIRES',
        link: '/Extractions-statistiques/biologie-lignes',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_BIOLOGIE_LIGNES',
        parentId: 22
      },
      {
        id: 31,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.SITUATION-DES-PRESTATAIRES',
        link: '/Extractions-statistiques/prestataire-lignes',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_PRESTATAIRES_LIGNES',
        parentId: 22
      },
      {
        id: 32,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.RECAPITULATIFS-ENCAISSEMENTS-FACTURES',
        link: '/Extractions-statistiques/recapitulatifs-encaissement-facture',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_RECAPITULATIFS_ENCAISSEMENT_FACTURE',
        parentId: 22
      },
      {
        id: 33,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.EXTRACTION-DES-ENCAISSEMENTS',
        link: '/Extractions-statistiques/extractions-encaissements',
        role: 'ENCAISSEMENT_MENU_EXTRACTIONS_ENCAISSEMENT',
        parentId: 22
      },
      {
        id: 34,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.EXTRACTION-DES-PEC',
        link: '/Extractions-statistiques/statistiques',
        role: 'PEC_MENU_STATISTIQUES',
        parentId: 22
      },
      {
        id: 45,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.EXTRACTION-DES-BC-PHARMACIE',
        link: '/Extractions-statistiques/extraction-pharmacie-bc',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_EXTRACTION_BC',
        parentId: 22
      },
      {
        id: 46,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.ACHATS-LIVRAISONS-PHARMACIE',
        link: '/Extractions-statistiques/extraction-pharmacie-achat-livraison',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_EXTRACTION_ACHAT_LIVRAISON',
        parentId: 22
      },
      {
        id: 47,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.EXTRACTION-STOCK-PHARMACIE',
        link: '/Extractions-statistiques/extraction-stock-produit-pharmaceutique',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_STOCK_PRODUIT_PHARMACEUTIQUE',
        parentId: 22
      },
      {
        id: 48,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.HISTORIQUE-SEJOURS-PATIENTS',
        link: '/Extractions-statistiques/Historique-sejours-patient',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_HISTORIQUE_SEJOURS_PATIENT',
        parentId: 22
      },
      {
        id: 49,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.HISTORIQUE-DOTATIONS',
        link: '/Extractions-statistiques/Historique-dotations',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_HISTORIQUE_DOTATIONS',
        parentId: 22
      },
      {
        id: 50,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.RESRESSEMENTS-INVENTAIRE',
        link: '/Extractions-statistiques/Redressements-inventaires',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_REDRESSEMENTS_INVENTAIRES',
        parentId: 22
      },
      {
        id: 51,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.HISTORIQUE-DEPOTS',
        link: '/Extractions-statistiques/Historique-depots',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_HISTORIQUE_DEPOTS',
        parentId: 22
      },
      {
        id: 52,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-1.CHILD.CONSOMMATION-PATIENTS',
        link: '/Extractions-statistiques/consommation-patients',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_CONSOMMATION_PATIENT',
        parentId: 22
      },
    ]
  },
  {
    id: 54,
    label: '',
    isTitle: true
  },
  {
    id: 22.0,
    label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.TEXT',
    icon: 'ri-file-excel-2-line',
    role: 'EXTRACTIONS_STATISTIQUES_NOTCUBE',
    subItems: [
      {
        id: 23.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.EXTRACTION-DES-ADMISSIONS',
        link: '/Extractions-statistiques-notcube/extractions-admission',
        role: 'ADMISSION_MENU_STATISTIQUES',
        parentId: 22.0
      },
      {
        id: 24.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.EXTRACTION-CHIFFRE-AFFAIRES',
        link: '/Extractions-statistiques-notcube/chiffre-affaires-dispatche',
        role: 'FACTURATION-STATISTIQUE-CA-BUTTON-CHIFFRE-AFFAIRE-DIPATCHE',
        parentId: 22.0
      },
      {
        id: 25.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.CA-GENERE-MEDECIN',
        link: '/Extractions-statistiques-notcube/analyse-ca-medecin',
        role: 'FACTURATION-STATISTIQUE-CA-BUTTON-ANALYSE-CA-MEDECIN',
        parentId: 22.0
      },
      {
        id: 26.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.CA-MEDECIN-PRESTATION',
        link: '/Extractions-statistiques-notcube/extraction-ca-medecin-prestation',
        role: 'FACTURATION-STATISTIQUE-CA-BUTTON-EXTRACT-MEDCIN&PRESTATION',
        parentId: 22.0
      },
      {
        id: 27.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.LIGNES-FACTURES',
        link: '/Extractions-statistiques-notcube/detail-lignes-factures',
        role: 'FACTURATION-STATISTIQUE-CA-BUTTON-DETAIL-LIGNE-FACTURES',
        parentId: 22.0
      },
      {
        id: 28.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.EXTRACTION-DES-HONORAIRES',
        link: '/Extractions-statistiques-notcube/Analyse-honoraires-Avances',
        role: 'FACTURATION-STATISTIQUE-CA-BUTTON-ANALYSE-HONORAIRES-MEDECINS',
        parentId: 22.0
      },
      {
        id: 29.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.EXTRACTION-DES-HONORAIRES-TEST',
        link: '/Extractions-statistiques-notcube/Analyse-honoraires-prestataires-Avances-test',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_ANALYSE_HONORAIRES_PRESTATAIRES_test',
        parentId: 22.0
      },
      {
        id: 30.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.PAIEMENT-DES-PRESTATAIRES',
        link: '/Extractions-statistiques-notcube/Analyse-honoraires-prestataires-Avances',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_ANALYSE_HONORAIRES_PRESTATAIRES',
        parentId: 22.0
      },
      {
        id: 31.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.SITUATION-DES-LABORATOIRES',
        link: '/Extractions-statistiques-notcube/biologie-lignes',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_BIOLOGIE_LIGNES',
        parentId: 22.0
      },
      {
        id: 32.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.SITUATION-DES-PRESTATAIRES',
        link: '/Extractions-statistiques-notcube/prestataire-lignes',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_PRESTATAIRES_LIGNES',
        parentId: 22.0
      },
      {
        id: 33.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.RECAPITULATIFS-DES-ENCAISSEMENTS-DES-FACTURES',
        link: '/Extractions-statistiques-notcube/recapitulatifs-encaissement-facture',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_RECAPITULATIFS_ENCAISSEMENT_FACTURE',
        parentId: 22.0
      },
      {
        id: 34.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.EXTRACTION-DES-ENCAISSEMENTS',
        link: '/Extractions-statistiques-notcube/extractions-encaissements',
        role: 'ENCAISSEMENT_MENU_EXTRACTIONS_ENCAISSEMENT',
        parentId: 22.0
      },
      {
        id: 35.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.EXTRACTION-DES-PEC',
        link: '/Extractions-statistiques-notcube/statistiques',
        role: 'PEC_MENU_STATISTIQUES',
        parentId: 22.0
      },
      {
        id: 36.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.EXTRACTION-DES-PHARMACIE',
        link: '/Extractions-statistiques-notcube/extraction-pharmacie-bc',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_EXTRACTION_BC',
        parentId: 22.0
      },
      {
        id: 37.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.ACHATS-LIVRAISONS-DE-PHARMACIE',
        link: '/Extractions-statistiques-notcube/extraction-pharmacie-achat-livraison',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_EXTRACTION_ACHAT_LIVRAISON',
        parentId: 22.0
      },
      {
        id: 38.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.EXTRACTION-DE-STOCK-PHARMACIE',
        link: '/Extractions-statistiques-notcube/extraction-stock-produit-pharmaceutique',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_STOCK_PRODUIT_PHARMACEUTIQUE',
        parentId: 22.0
      },
      {
        id: 39.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.HISTORIQUE-DES-SEJOURS-DES-PATIENTS',
        link: '/Extractions-statistiques-notcube/Historique-sejours-patient',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_HISTORIQUE_SEJOURS_PATIENT',
        parentId: 22.0
      },
      {
        id: 40.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.HISTORIQUE-DE-DOTATION',
        link: '/Extractions-statistiques-notcube/Historique-dotations',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_HISTORIQUE_DOTATIONS',
        parentId: 22.0
      },
      {
        id: 41.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.REDRESSEMENTS-AND-INVENTAIRES',
        link: '/Extractions-statistiques-notcube/Redressements-inventaires',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_REDRESSEMENTS_INVENTAIRES',
        parentId: 22.0
      },
      {
        id: 42.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.HISTORIQUE-DES-DEPOTS',
        link: '/Extractions-statistiques-notcube/Historique-depots',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_HISTORIQUE_DEPOTS',
        parentId: 22.0
      },
      {
        id: 43.0,
        label: 'MENUITEMS.EXTRACTION-STATISTIQUE-2.CHILD.CONSOMMATION-DES-PATIENTS',
        link: '/Extractions-statistiques-notcube/consommation-patients',
        role: 'EXTRACTIONS_STATISTIQUES_MENU_CONSOMMATION_PATIENT',
        parentId: 22.0
      },
    ]
  },
  {
    id: 54,
    label: '',
    isTitle: true
  },
  {
    id: 53,
    label: 'MENUITEMS.CONFIGURATION.TEXT',
    icon: 'ri-hospital-line',
    role: 'ETABLISSEMENT',
    subItems: [
      {
        id: 54,
        label: 'MENUITEMS.CONFIGURATION.CHILD.FICHE-HOPITAL',
        link: '/infrastructure/hopital',
        role: 'ETABLISSEMENT_MENU_FICHE_HOPITAL',
        parentId: 53
      },
      {
        id: 55,
        label: 'MENUITEMS.CONFIGURATION.CHILD.ARCHITECTURE',
        link: '/infrastructure/architecture',
        role: 'ETABLISSEMENT_MENU_ARCHITECTURE',
        parentId: 53
      },
      {
        id: 56,
        label: 'MENUITEMS.CONFIGURATION.CHILD.PERSONNEL',
        link: '/personnel',
        role: 'ETABLISSEMENT_MENU_PERSONNEL',
        parentId: 53
      },
      {
        id: 57,
        label: 'MENUITEMS.CONFIGURATION.CHILD.MEDECINS',
        link: '/medecin',
        role: 'ETABLISSEMENT_MENU_MEDECIN',
        parentId: 53
      },
      {
        id: 58,
        label: 'MENUITEMS.CONFIGURATION.CHILD.GESTION-UTILISATEURS',
        link: '/compte',
        role: 'ETABLISSEMENT_MENU_GERER_COMPTE',
        parentId: 53
      },
      {
        id: 59,
        label: 'MENUITEMS.CONFIGURATION.CHILD.ASSURANCES',
        link: '/assurance',
        role: 'ETABLISSEMENT_MENU_ASSURANCE',
        parentId: 53
      },
      {
        id: 60,
        label: 'MENUITEMS.CONFIGURATION.CHILD.CONVENTIONS',
        link: '/convention',
        role: 'ETABLISSEMENT_MENU_CONVENTION',
        parentId: 53
      },
      {
        id: 61,
        label: 'MENUITEMS.CONFIGURATION.CHILD.PRESTATIONS',
        link: '/prestation',
        role: 'ETABLISSEMENT_MENU_PRESTATION',
        parentId: 53
      },
      {
        id: 62,
        label: 'MENUITEMS.CONFIGURATION.CHILD.NOUVELLE-TARIFICATION-INTERN',
        link: '/tarification',
        role: 'ETABLISSEMENT_MENU_NOUVELLE_TARIFICATION',
        parentId: 53
      },
      {
        id: 63,
        label: 'MENUITEMS.CONFIGURATION.CHILD.LISTE-TARIFICATION',
        link: '/tarification/liste',
        role: 'ETABLISSEMENT_MENU_LIST_TARIFICATION',
        parentId: 53
      },
      {
        id: 64,
        label: 'MENUITEMS.CONFIGURATION.CHILD.TARIFICATION-SEJOUR',
        link: '/tarification/sejour',
        role: 'ETABLISSEMENT_MENU_TARIFICATION_SEJOUR',
        parentId: 53
      },
      {
        id: 65,
        label: 'MENUITEMS.CONFIGURATION.CHILD.PRESTATAIRES-EXTERNES',
        link: '/prestataire-externe',
        role: 'ETABLISSEMENT_MENU_PRESTATAIRE_EXTERNES',
        parentId: 53
      },
      {
        id: 66,
        label: 'MENUITEMS.CONFIGURATION.CHILD.COMPTES-ACTIVITE',
        link: '/comptes-activite',
        role: 'ETABLISSEMENT_MENU_COMPTE_ACTIVITE',
        parentId: 53
      },
    ]
  },
  {
    id: 54,
    label: '',
    isTitle: true
  },
  {
    id: 97,
    label: 'MENUITEMS.MORE',
    icon: 'ri-briefcase-2-line',
    subItems: [
      {
        id: 67,
        label: 'MENUITEMS.ACHATS-EQUIPEMENTS.TEXT',
        icon: 'ri-shopping-cart-line',
        role: 'ACHATS',
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
        subItems: [
          {
            id: 68,
            label: 'MENUITEMS.ACHATS-EQUIPEMENTS.CHILD.VALIDATION-BC',
            link: '/achat/validation-BC',
            role: 'ACHAT_MENU_VALIDATION_BC',
            parentId: 67
          },
          {
            id: 69,
            label: 'MENUITEMS.ACHATS-EQUIPEMENTS.CHILD.MATERIELS-PRODUITS',
            link: '/achat/produits-pharmaceutiques',
            role: 'ACHAT_MENU_MATERIELS_PRODUITS',
            parentId: 67
          },
          {
            id: 70,
            label: 'MENUITEMS.ACHATS-EQUIPEMENTS.CHILD.FOURNISSEUR',
            link: '/achat/fournisseur',
            role: 'ACHAT-FOURNISSEUR-MENU',
            parentId: 67
          },
          {
            id: 71,
            label: 'MENUITEMS.ACHATS-EQUIPEMENTS.CHILD.TARIFICATION-PRODUITS',
            link: '/achat/tarification-articles',
            role: 'ACHAT_MENU_TARIFICATION_PRODUITS',
            parentId: 67
          },
          {
            id: 72,
            label: 'MENUITEMS.ACHATS-EQUIPEMENTS.CHILD.CREATION-BC-SUIVI-ACHAT',
            link: '/achat/achats-pharmacie',
            role: 'ACHAT_MENU_CREATION_BC_SUIVI_ACHATS',
            parentId: 67
          },
          {
            id: 73,
            label: 'MENUITEMS.ACHATS-EQUIPEMENTS.CHILD.RECEPTION-COMMANDES',
            link: '/achat/reception-commandes',
            role: 'ACHAT_MENU_RECEPTION_COMMANDES',
            parentId: 67
          },
          {
            id: 74,
            label: 'MENUITEMS.ACHATS-EQUIPEMENTS.CHILD.GESTION-STOCK',
            link: '/achat/stock-pharmacie',
            role: 'ACHAT_MENU_GESTION_STOCK',
            parentId: 67
          },
          {
            id: 75,
            label: 'MENUITEMS.ACHATS-EQUIPEMENTS.CHILD.TRANSFERTS-INTER-SERVICES',
            link: '/achat/dotation-service',
            role: 'ACHAT_MENU_TRANSFERTS_INTER_SERVICES',
            parentId: 67
          },
        ]
      },
      {
        id: 76,
        label: 'MENUITEMS.PHARMACIE.TEXT',
        icon: 'lab las la-tablets',
        role: 'PHARMACIE',
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
        subItems: [
          {
            id: 77,
            label: 'MENUITEMS.PHARMACIE.CHILD.VALIDATION-BC',
            link: '/pharmacie/dashboard',
            role: 'PHARMACIE_MENU_TABLEAU_BORD',
            parentId: 76
          },
          {
            id: 78,
            label: 'MENUITEMS.PHARMACIE.CHILD.POINTS-STOCKAGE',
            link: '/stock',
            role: 'PHARMACIE_MENU_POINT_STOCKAGE',
            parentId: 76
          },
          {
            id: 79,
            label: 'MENUITEMS.PHARMACIE.CHILD.PRODUITS-PHARMACEUTIQUES',
            link: '/article',
            role: 'PHARMACIE_MENU_ARTICLE',
            parentId: 76
          },
          {
            id: 80,
            label: 'MENUITEMS.PHARMACIE.CHILD.FOURNISSEUR',
            link: '/fournisseur',
            role: 'PHARMACIE_MENU_FOURNISSEUR',
            parentId: 76
          },
          {
            id: 81,
            label: 'MENUITEMS.PHARMACIE.CHILD.TARIFICATION-ARTICLES',
            link: '/tarification-article',
            role: 'PHARMACIE_MENU_TARIF_ARTICLE',
            parentId: 76
          },
          {
            id: 82,
            label: 'MENUITEMS.PHARMACIE.CHILD.ACHATS-PHARMACIE',
            link: '/approvisioment',
            role: 'PHARMACIE_MENU_ACHAT',
            parentId: 76
          },
          {
            id: 83,
            label: 'MENUITEMS.PHARMACIE.CHILD.RECEPTION-COMMANDES',
            link: '/bon-livraison',
            role: 'PHARMACIE_MENU_BON_LIVRAISON',
            parentId: 76
          },
          {
            id: 84,
            label: 'MENUITEMS.PHARMACIE.CHILD.GESTION-KITS',
            link: '/pharmacie/kits-ordonnance',
            role: 'PHARMACIE_MENU_KITS_ORDONNANCE',
            parentId: 76
          },
          {
            id: 85,
            label: 'MENUITEMS.PHARMACIE.CHILD.STOCK-PHARMACIE',
            link: '/stock-pharmacie',
            role: 'PHARMACIE_MENU_STOCK_PHARMACIE',
            parentId: 76
          },
          {
            id: 86,
            label: 'MENUITEMS.PHARMACIE.CHILD.DOTATION-SERVICE',
            link: '/pharmacie/dotation-service',
            role: 'PHARMACIE_MENU_DOTATION_SERVICE',
            parentId: 76
          },
          {
            id: 87,
            label: 'MENUITEMS.PHARMACIE.CHILD.ORDONNANCES-PATIENTS',
            link: '/pharmacie/ordonnance-patient',
            role: 'PHARMACIE_MENU_ORDONNANCE',
            parentId: 76
          },
        ]
      },
      {
        id: 88,
        label: 'MENUITEMS.PRE-ADMISSION.TEXT',
        icon: 'ri-calendar-2-line',
        role: 'PREADMISSION',
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
        subItems: [
          {
            id: 89,
            label: 'MENUITEMS.PRE-ADMISSION.CHILD.LISTE-RENDEZ-VOUS',
            link: '/baf/pre-admissions/rdv',
            role: 'ADMISSION_MENU_TABLEAU_BORD',
            parentId: 88
          },
          {
            id: 90,
            label: 'MENUITEMS.PRE-ADMISSION.CHILD.RDV-CONSULTATION',
            link: '/admission/rdv-consultation',
            role: 'ADMISSION_MENU_RDV_CONSULTATION',
            parentId: 88
          },
          {
            id: 91,
            label: 'MENUITEMS.PRE-ADMISSION.CHILD.CHIRURGIE-PROGRAMMEE',
            link: '/admission/pre-admission-chirurgie-cards',
            role: 'ADMISSION_MENU_CHIRURGIE_PROGRAMMEE_CARDS',
            parentId: 88
          },
          {
            id: 92,
            label: 'MENUITEMS.PRE-ADMISSION.CHILD.PRE-HOSPITALISATION',
            link: '/admission/pre-hospitalisation',
            role: 'ADMISSION_MENU_PRE_HOSPITALISATION',
            parentId: 88
          },
          {
            id: 93,
            label: 'MENUITEMS.PRE-ADMISSION.CHILD.PLANNING-AMBULATOIRE',
            link: '/admission/planning-ambulatoire',
            role: 'ADMISSION_MENU_PLANNING_AMBULATOIRE',
            parentId: 88
          },
          {
            id: 94,
            label: 'MENUITEMS.PRE-ADMISSION.CHILD.RDV-BIOLOGIE',
            link: '/admission/rdv-biologie',
            role: 'ADMISSION_MENU_RDV_BIOLOGIE',
            parentId: 88
          },
          {
            id: 95,
            label: 'MENUITEMS.PRE-ADMISSION.CHILD.RDV-RADIOLOGIE',
            link: '/admission/rdv-radiologie',
            role: 'ADMISSION_MENU_RDV_RADIOLOGIE',
            parentId: 88
          },
        ]
      },
      {
        id: 96,
        label: 'MENUITEMS.ADMISSION.TEXT',
        icon: 'las las la-user-injured',
        role: 'ADMISSION',
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
        subItems: [
          {
            id: 97,
            label: 'MENUITEMS.ADMISSION.CHILD.PATIENTS',
            link: '/baf/patients',
            role: 'ADMISSION_MENU_TABLEAU_BORD',
            parentId: 96
          },
          {
            id: 98,
            label: 'MENUITEMS.ADMISSION.CHILD.LISTES-ADMISSIONS',
            link: '/baf/admissionsList',
            role: 'ADMISSION_MENU_TABLEAU_BORD',
            parentId: 96
          },
          {
            id: 99,
            label: 'MENUITEMS.ADMISSION.CHILD.CONSULTATION-URGENCE',
            link: '/admission/consultation-urgence',
            role: 'ADMISSION_MENU_CONSULTATION_URGENCE',
            parentId: 96
          },
          {
            id: 100,
            label: 'MENUITEMS.ADMISSION.CHILD.CONSULTATION-EXTERNE',
            link: '/admission/consultation-externe',
            role: 'ADMISSION_MENU_CONSULTATION_EXTERNE',
            parentId: 96
          },
          {
            id: 101,
            label: 'MENUITEMS.ADMISSION.CHILD.HOSPITALISATION-MEDICALE',
            link: '/admission/hospitalisation-medicale',
            role: 'ADMISSION_MENU_HOSPITALISATION_MEDICALE',
            parentId: 96
          },
          {
            id: 102,
            label: 'MENUITEMS.ADMISSION.CHILD.HOSPITALISATION-CHIRURGICALE',
            link: '/admission/hospitalisation-chirurgicale',
            role: 'ADMISSION_MENU_HOSPITALISATION_CHIRURGICALE',
            parentId: 96
          },
          {
            id: 103,
            label: 'MENUITEMS.ADMISSION.CHILD.AMBULATOIRE',
            link: '/admission/ambulatoire',
            role: 'ADMISSION_MENU_AMBULATOIRE',
            parentId: 96
          },
          {
            id: 104,
            label: 'MENUITEMS.ADMISSION.CHILD.RADIOLOGIE',
            link: '/admission/radiologie',
            role: 'ADMISSION_MENU_RADIOLOGIE',
            parentId: 96
          },
          {
            id: 105,
            label: 'MENUITEMS.ADMISSION.CHILD.BIOLOGIE',
            link: '/admission/biologie',
            role: 'ADMISSION_MENU_BIOLOGIE',
            parentId: 96
          },
        ]
      },
      {
        id: 106,
        label: 'MENUITEMS.SERVICE-SOINS.TEXT',
        icon: 'lab las la-stethoscope',
        role: 'SERVICE_SOINS',
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
        subItems: [
          {
            id: 107,
            label: 'MENUITEMS.SERVICE-SOINS.CHILD.GESTION-HOSPITALIERE',
            link: '/service-des-soins/dashboard',
            role: 'SERVICE_SOINS_MENU_GESTION_HOSPITALIÈRE',
            parentId: 106
          },
          {
            id: 108,
            label: 'MENUITEMS.SERVICE-SOINS.CHILD.COMPTES-RENDUS-MEDICAUX',
            link: '/service-des-soins/compte-rendue',
            role: 'SERVICE_SOINS_MENU_COMPTES_RENDUS_MÉDICAUX',
            parentId: 106
          },
          {
            id: 109,
            label: 'MENUITEMS.SERVICE-SOINS.CHILD.MODELES-COMPTE-RENDUS',
            link: '/crModels',
            role: 'CRMODEL_LIST',
            parentId: 106
          },
          {
            id: 109,
            label: 'MENUITEMS.SERVICE-SOINS.CHILD.DOSSIERS-MEDICAUX',
            link: '/medical',
            role: 'SERVICE_SOINS_MENU_DOSSIERS_MÉDICAUX',
            parentId: 106
          },
          {
            id: 110,
            label: 'MENUITEMS.SERVICE-SOINS.CHILD.PLANNING-BLOC',
            link: '/service-des-soins/planning_du_bloc',
            role: 'SERVICE_SOINS_MENU_PLANNING_BLOC',
            parentId: 106
          },
        ]
      },
      {
        id: 111,
        label: 'MENUITEMS.CENTER-RADIOLOGIE.TEXT',
        icon: 'mdi mdi-radiology-box-outline',
        role: 'RIS',
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
        subItems: [
          {
            id: 112,
            label: 'MENUITEMS.CENTER-RADIOLOGIE.CHILD.SUIVI-EXAMENS',
            link: '/worklist',
            role: 'RIS_WORKLIST',
            parentId: 111
          },
        ]
      },
      {
        id: 113,
        label: 'MENUITEMS.LABORATOIRE.TEXT',
        icon: 'ri-flask-line',
        role: 'LABORATOIRE',
        subItems: [
          {
            id: 112,
            label: 'MENUITEMS.CENTER-RADIOLOGIE.CHILD.SUIVI-EXAMENS',
            link: '/worklist',
            role: 'RIS_WORKLIST',
            parentId: 111
          },
        ],
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
      },
      {
        id: 115,
        label: 'MENUITEMS.FACTURATION.TEXT',
        icon: 'ri-file-list-2-line',
        role: 'FACTURATION',
        subItems: [
          {
            id: 116,
            label: 'MENUITEMS.FACTURATION.CHILD.SITUATION-FINANCIER',
            link: '/facturation/facture/patient/admission',
            role: 'FACTURATION_MENUE_SITUATION_FINANCIÈRE',
            parentId: 115
          },
          {
            id: 117,
            label: 'MENUITEMS.FACTURATION.CHILD.NOUVEAU-DEVIS',
            link: '/facturation/devis/new',
            role: 'FACTURATION_MENU_NOUVEAU_DEVIS',
            parentId: 115
          },
          {
            id: 118,
            label: 'MENUITEMS.FACTURATION.CHILD.GESTION-DEVIS',
            link: '/facturation/gestion-devis',
            role: 'FACTURATION_MENUE_GESTION_DES_DEVIS',
            parentId: 115
          },
          {
            id: 119,
            label: 'MENUITEMS.FACTURATION.CHILD.DOSSIER-ADMINISTRATIF',
            link: '/facturation/dossier-administratif',
            role: 'FACTURATION_MENU_DOSSIER_ADMINISTRATIF',
            parentId: 115
          },
          {
            id: 120,
            label: 'MENUITEMS.FACTURATION.CHILD.LISTE-GLOBALE-FACTURES',
            link: '/facturation/facture/factures-globale',
            role: 'FACTURATION_MENUE_FACTURES_GLOBALE',
            parentId: 115
          },
          {
            id: 121,
            label: 'MENUITEMS.FACTURATION.CHILD.FACTURE-ENCOURS',
            link: '/facturation/facture/factures-encours',
            role: 'FACTURATION_MENUE_FACTURES_ENCOURS',
            parentId: 115
          },
          {
            id: 122,
            label: 'MENUITEMS.FACTURATION.CHILD.FACTURES-DISPATCHEES',
            link: '/facturation/facture/factures-dispatchees',
            role: 'FACTURATION_MENUE_FACTURES_DISPATCHÉES',
            parentId: 115
          },
          {
            id: 123,
            label: 'MENUITEMS.FACTURATION.CHILD.FACTURES-VALIDEES',
            link: '/facturation/facture/factures-valider',
            role: 'FACTURATION_MENUE_FACTURES_VALIDER',
            parentId: 115
          },
          {
            id: 124,
            label: 'MENUITEMS.FACTURATION.CHILD.FACTURES-CONTROLEES',
            link: '/facturation/facture/factures-controlees',
            role: 'FACTURATION_MENUE_FACTURES_CONTRÔLÉES',
            parentId: 115
          },
          {
            id: 125,
            label: 'MENUITEMS.FACTURATION.CHILD.FACTURES-COMPTABILISEES',
            link: '/facturation/facture/factures-comptabilisees',
            role: 'FACTURATION_MENUE_FACTURES_COMPTABILISÉES',
            parentId: 115
          },
          {
            id: 126,
            label: 'MENUITEMS.FACTURATION.CHILD.DOSSIERS-DE-REMBOURSEMENT',
            link: '/facturation/facture-mutuelle',
            role: 'FACTURATION_MENU_GESTION_MUTUELLES',
            parentId: 115
          },
          {
            id: 127,
            label: 'MENUITEMS.FACTURATION.CHILD.NOTE-HONORAIRES',
            link: '/facturation/note-honoraire',
            role: 'FACTURATION_MENU_NOTE_HONORAIRE',
            parentId: 115
          },
          {
            id: 128,
            label: 'MENUITEMS.FACTURATION.CHILD.ACTIVITE-FACTURATION',
            link: '/facturation/activite-facturation',
            role: 'FACTURATION_MENU_ACTIVITE_FACTURATION',
            parentId: 115
          },
        ],
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
      },
      {
        id: 129,
        label: 'MENUITEMS.PEC.TEXT',
        icon: 'las las la-hand-holding-usd',
        role: 'PEC',
        subItems: [
          {
            id: 130,
            label: 'MENUITEMS.PEC.CHILD.CHERCHER-PEC',
            link: '/prise-en-charge/recherche',
            role: 'PEC_MENU_CHERCHER_PEC',
            parentId: 129
          },
          {
            id: 131,
            label: 'MENUITEMS.PEC.CHILD.ADMISSIONS-SANS-DEMANDE',
            link: '/prise-en-charge/admission-sans-pec',
            role: 'PEC_TABLEAU_BORD__SANS_DEMANDE',
            parentId: 129
          },
          {
            id: 132,
            label: 'MENUITEMS.PEC.CHILD.PEC-ENCOURS',
            link: '/prise-en-charge/encours',
            role: 'PEC_TABLEAU_BORD__EN_COURS',
            parentId: 129
          },
          {
            id: 133,
            label: 'MENUITEMS.PEC.CHILD.PEC-REJETEES-POUR-COMLEMENTS',
            link: '/prise-en-charge/rejet-complement',
            role: 'PEC_TABLEAU_BORD__REJETEES_COMPLEMENTS',
            parentId: 129
          },
          {
            id: 134,
            label: 'MENUITEMS.PEC.CHILD.PEC-ACCOREES',
            link: '/prise-en-charge/accord',
            role: 'PEC_TABLEAU_BORD__ACCORDEES',
            parentId: 129
          },
          {
            id: 135,
            label: 'MENUITEMS.PEC.CHILD.PEC-ELIGIBLES-EXPEDITION',
            link: '/prise-en-charge/eligible-expedition',
            role: 'PEC_TABLEAU_BORD__ELIGIBLES_EXPEDITION',
            parentId: 129
          },
          {
            id: 136,
            label: 'MENUITEMS.PEC.CHILD.PEC-PRETS-POUR-EXPEDITION',
            link: '/prise-en-charge/pret-expedition',
            role: 'PEC_TABLEAU_BORD__PRETS_EXPEDITION',
            parentId: 129
          },
          {
            id: 137,
            label: 'MENUITEMS.PEC.CHILD.BORDEREAU-EXPEDITION',
            link: '/prise-en-charge/bordereau',
            role: 'PEC_MENU_BORDEREAU_EXPEDITION',
            parentId: 129
          },
          {
            id: 138,
            label: 'MENUITEMS.PEC.CHILD.PEC-EXPEDIEES-IMPAYEES',
            link: '/prise-en-charge/expedition',
            role: 'PEC_TABLEAU_BORD__EXPEDIES_IMPAYEES',
            parentId: 129
          },
          {
            id: 139,
            label: 'MENUITEMS.PEC.CHILD.PEC-ENCAISSES-PARTIELLEMENT',
            link: '/prise-en-charge/encaisse',
            role: 'PEC_TABLEAU_BORD__ENCAISSES_PARTIELLEMENT',
            parentId: 129
          },
          {
            id: 140,
            label: 'MENUITEMS.PEC.CHILD.PEC-SOLDES',
            link: '/prise-en-charge/solde',
            role: 'PEC_TABLEAU_BORD__SOLDES',
            parentId: 129
          },
          {
            id: 141,
            label: 'MENUITEMS.PEC.CHILD.PEC-REJETS-DEFINITIFS',
            link: '/prise-en-charge/rejet',
            role: 'PEC_TABLEAU_BORD__REJETS_DEFINITIFS',
            parentId: 129
          },
          {
            id: 142,
            label: 'MENUITEMS.PEC.CHILD.PEC-ANNULEES',
            link: '/prise-en-charge/annule',
            role: 'PEC_TABLEAU_BORD__ANNULEES',
            parentId: 129
          },
        ],
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
      },
      {
        id: 143,
        label: 'MENUITEMS.ENCAISSEMENTS.TEXT',
        icon: 'ri-bank-card-2-line',
        role: 'ENCAISSEMENT',
        subItems: [
          {
            id: 144,
            label: 'MENUITEMS.ENCAISSEMENTS.CHILD.REGIE-RECETTES',
            link: '/encaissement/regie-recette',
            role: 'ENCAISSEMENT_MENU_REGIE_RECETTES',
            parentId: 143
          },
          {
            id: 145,
            label: 'MENUITEMS.ENCAISSEMENTS.CHILD.ORDRE-ENCAISSEMENT',
            link: '/encaissement',
            role: 'ENCAISSEMENT_MENU_ORDRE_ENCAISSEMENT',
            parentId: 143
          },
          {
            id: 146,
            label: 'MENUITEMS.ENCAISSEMENTS.CHILD.CAISSE',
            link: '/encaissement/caisse',
            role: 'ENCAISSEMENT_MENU_CAISSE',
            parentId: 143
          },
          {
            id: 147,
            label: 'MENUITEMS.ENCAISSEMENTS.CHILD.ENCAISSEMENTS-VALIDES',
            link: '/encaissement/encaissement-valides',
            role: 'ENCAISSEMENT_MENU_ENCAISSEMENTS_VALIDES',
            parentId: 143
          },
          {
            id: 148,
            label: 'MENUITEMS.ENCAISSEMENTS.CHILD.CHEQUE-A-DATE',
            link: '/encaissement/cheque-a-date',
            role: 'ENCAISSEMENT_MENU_CHEQUE_A_DATE',
            parentId: 143
          },
          {
            id: 149,
            label: 'MENUITEMS.ENCAISSEMENTS.CHILD.ENCAISSEMENTS-ORGANISMES',
            link: '/encaissement-organisme',
            role: 'ENCAISSEMENT_MENU_ENCAISSEMENTS_ORGANISMES',
            parentId: 143
          },
          {
            id: 150,
            label: 'MENUITEMS.ENCAISSEMENTS.CHILD.REMISE-CHEQUE',
            link: '/encaissement/remis-cheque-bank',
            role: 'ENCAISSEMENT_MENU_REMISE_CHEQUE',
            parentId: 143
          },
        ],
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
      },
      {
        id: 151,
        label: 'MENUITEMS.HONORAIRES-MEDECINS.TEXT',
        icon: 'ri-coins-line',
        role: 'HONORAIRESMEDECINS',
        subItems: [
          {
            id: 152,
            label: 'MENUITEMS.HONORAIRES-MEDECINS.CHILD.HONORAIRES-NON-REGLEES',
            link: '/honoraires-medecin/honoraires-non-regle',
            role: 'HONORAIRESMEDECINS_MENU_NON_REGLES',
            parentId: 151
          },
          {
            id: 153,
            label: 'MENUITEMS.HONORAIRES-MEDECINS.CHILD.HONORAIRES-ELIGIBLES',
            link: '/honoraires-medecin/honoraires-eligible',
            role: 'HONORAIRESMEDECINS_MENU_ELEGIBLES',
            parentId: 151
          },
          {
            id: 154,
            label: 'MENUITEMS.HONORAIRES-MEDECINS.CHILD.ENCOURS-VALIDATION',
            link: '/honoraires-medecin/honoraires-encours',
            role: 'HONORAIRESMEDECINS_MENU_VALIDATION',
            parentId: 151
          },
          {
            id: 155,
            label: 'MENUITEMS.HONORAIRES-MEDECINS.CHILD.HONORAIRES-VALIDES',
            link: '/honoraires-medecin/honoraires-valide',
            role: 'HONORAIRESMEDECINS_MENU_VALIDES',
            parentId: 151
          },
          {
            id: 156,
            label: 'MENUITEMS.HONORAIRES-MEDECINS.CHILD.HONORAIRES-REGLEES',
            link: '/honoraires-medecin/honoraires-regle',
            role: 'HONORAIRESMEDECINS_MENU_REGLES',
            parentId: 151
          },
        ],
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
      },
      {
        id: 157,
        label: 'MENUITEMS.PAIEMENT-PRESTATAIRES.TEXT',
        icon: 'ri-currency-line',
        role: 'HONORAIRESPRESTATAIRES',
        subItems: [
          {
            id: 158,
            label: 'MENUITEMS.PAIEMENT-PRESTATAIRES.CHILD.LIGNES-NON-REGLEES',
            link: '/honoraires-prestataires/honoraires-non-regle',
            role: 'HONORAIRESPRESTATAIRES_MENU_NON_REGLES',
            parentId: 157
          },
          {
            id: 159,
            label: 'MENUITEMS.PAIEMENT-PRESTATAIRES.CHILD.LIGNES-ELIGIBLES',
            link: '/honoraires-prestataires/honoraires-eligible',
            role: 'HONORAIRESPRESTATAIRES_MENU_ELEGIBLES',
            parentId: 157
          },
          {
            id: 160,
            label: 'MENUITEMS.PAIEMENT-PRESTATAIRES.CHILD.ENCOURS-VALIDATION',
            link: '/honoraires-prestataires/honoraires-encours',
            role: 'HONORAIRESPRESTATAIRES_MENU_VALIDATION',
            parentId: 157
          },
          {
            id: 161,
            label: 'MENUITEMS.PAIEMENT-PRESTATAIRES.CHILD.REGLEMENTS-VALIDES',
            link: '/honoraires-prestataires/honoraires-valide',
            role: 'HONORAIRESPRESTATAIRES_MENU_VALIDES',
            parentId: 157
          },
          {
            id: 162,
            label: 'MENUITEMS.PAIEMENT-PRESTATAIRES.CHILD.FACTURES-REGLEES',
            link: '/honoraires-prestataires/honoraires-regle',
            role: 'HONORAIRESPRESTATAIRES_MENU_REGLES',
            parentId: 157
          },
        ],
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
      },
      {
        id: 163,
        label: 'MENUITEMS.GESTION-DECAISSEMENTS.TEXT',
        icon: 'bx bx-money',
        role: 'GESTION_DECAISSEMENT',
        subItems: [
          {
            id: 164,
            label: 'MENUITEMS.GESTION-DECAISSEMENTS.CHILD.ACHATS-EQUIPEMENTS',
            link: '/gestion-decaissement/achats-equipements',
            role: 'GESTION_DECAISSEMENT_MENU_ACHATS_EQUIPEMENTS',
            parentId: 163
          },
          {
            id: 165,
            label: 'MENUITEMS.GESTION-DECAISSEMENTS.CHILD.FOURNISSEURS-PHARMACIE',
            link: '/gestion-decaissement/fournisseurs-pharmacie',
            role: 'GESTION_DECAISSEMENT_MENU_FOURNISSEURS_PHARMACIE',
            parentId: 163
          },
          {
            id: 166,
            label: 'MENUITEMS.GESTION-DECAISSEMENTS.CHILD.CHARGES-DIVERS',
            link: '/gestion-decaissement/charges-divers',
            role: 'GESTION_DECAISSEMENT_MENU_CHARGES_DIVERS',
            parentId: 163
          },
        ],
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.ADVANCEUI.BADGE',
        },
      },
    ]
  },

];
