import {Poste} from "./poste";
import {Departement} from "./departement";
import {Service} from "./service";
import {Profil} from "./profil";
import {CompteBancaire} from "./compte-bancaire";
import {ContratPersonnel} from "./contrat-personnel";

export class Personnel {
    id?: number
    enabled?: boolean = true
    username?: string
    email?: string
    password?: string
    prenom?: string
    nom?: string
    cin?: string
    adresse?: string
    ville?: string
    telephone?: string
    poste?: Poste
    departement?: Departement
    service?: Service
    profil?: Profil
    compteBancaires?: CompteBancaire[]
    contrats?: ContratPersonnel[]
    isCompteBancaireMissing?: boolean = true
    missingInfoMessage?: string
    isContratMissing?: boolean = true
}
