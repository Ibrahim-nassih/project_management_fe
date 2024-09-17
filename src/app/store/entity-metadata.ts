import {EntityMetadataMap} from "@ngrx/data";


const entityMetadata: EntityMetadataMap = {
    article: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Personnel: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    CompteBancaire: {},


    TypePrestation: {},
    Prestation: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Specialite: {},
    Medecin: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Service: {},
    Convention: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Assurance: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Admission: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    SousAdmission: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    LigneSoinIntern: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    ServiceHospitalisationChirurgie: {},
    ServicesSoins: {},
    PatientPreAdmission: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    StandardPreAdmission: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    ServiceAdmission: {},
    Departement: {},
    Baf: {},
    AdministrationFinance: {},
    Hebergement: {},
    Pharmacie: {},
    Technique: {},
    Room: {},
    ContratMedecin: {},
    ContratPersonnel: {},
    Profil: {},
    Profile: {},
    Poste: {},
    Employee: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    RegimePaiement: {},
    Tarification: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    PrestationExterne: {},
    PrestationInterne: {},
    Prestataire: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    ConventionPrestataire: {},
    TarifPrestationExterne: {},
    PriseEnCharge: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    PriseEnChargeAdmission: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    PreAdmission: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    PriseEnChargePreadmission: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Devis: {},
    Fournisseur: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    PointStockage: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Famille: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    SousFamille: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Gamme: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    SousGamme: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Composant: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Article: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    DispositifMedical: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Medicament: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    TarificationArticle: {
        additionalCollectionState: {
            totalElements: 0,
        },
        selectId: tarif => tarif.id.fournisseurId + '' + tarif.id.articleId,
    },
    BonCommande: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    ArticlesComposant: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Dotation: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    BonLivraison: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Facture: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Encaissement: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    EncaissementLigne: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    LignesCommande: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    BonCommandeEtat: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    PriseEnchargesExpidie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    EncaissementOrganisme: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    PecMontantRequest: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Ordonnance: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    MedicamentOuvert: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    JournalValidation: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    RetourPharmacie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    AdmissionsService: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    CompteMedecin: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    GroupeMedecin: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    AdmissionsInactiveService: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    HistoriquePrestation: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    CompteHopital: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    ComptePrestataire: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    CompteFournisseur: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    ResponsablePointStockage: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    OrdonnanceBiologie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    LigneOrdonnanceBiologie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturesSoinIntern: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturesBiologie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturesSoinExterne: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturesMedecin: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    RegleDispatcheGroupeHonoraire: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    CompteHonoraire: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Reglement: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    LineNonReglee: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturesAutre: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    CheckRestPharmacie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturesPharmacie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturesBloc: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturesAnesthesiste: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturePart: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    LigneTotalSejour: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturesSejour: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturesCliniquePrestation: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FacturesPharmaciesPart: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    LignesFacturesAll: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    TarifSejour: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    LignesFacturesAllsParent: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Quantite: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    LigneFacture: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    PanierPosologiePharmacie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    JournalAdministrationPosologie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    ChatRoom: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    PatientsAdmission: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    PersonnelServices: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    ArticleConsommer: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    FeuillePatient: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    feuillePatient: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Bloc: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Champ: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    DataSoins: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    SoinsDataCheck: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    SoinsDataValue: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    GetRoles: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    WorklistRadiologie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    ActiviteFacturation: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    dossierPatient: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    OrdonnanceExterne: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    LigneOrdonnanceExterne: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    OrdonnanceRadiologie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    EtatExamensBiologie: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    AchatFournisseur: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    ProtocolesSoins: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    facturefournisseur: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    PlanningBlocs: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    inventaire: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    Assure: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    depot: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    CrModel: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    EncaissementsCheque: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    ChargesDivers: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
    KitOrdonnances: {
        additionalCollectionState: {
            totalElements: 0,
        },
    },
};

const pluralNames = {};


export const entityConfig = {
    entityMetadata,
    pluralNames
};
