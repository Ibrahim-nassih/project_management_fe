import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory,
} from '@ngrx/data'
import {Personnel} from "../../models/personnels/personnel";
import {Observable} from "rxjs";
import {Profil} from "../../models/personnels/profil";
import {Service} from "../../models/personnels/service";
import {Departement} from "../../models/personnels/departement";


@Injectable({
    providedIn: 'root',
})
export class PersonnelService extends EntityCollectionServiceBase<Personnel> {
    constructor(
        serviceElementsFactory: EntityCollectionServiceElementsFactory,
        private http: HttpClient,
    ) {
        super('Personnel', serviceElementsFactory)
    }
    personneUrl = 'api/personnels/'

    getAllProfilsInPersonnel(): Observable<Profil[]> {
        return this.http.get<Profil[]>(this.personneUrl + 'profils')
    }
    getAllServiceInPersonnel(): Observable<Service[]> {
        return this.http.get<Service[]>(this.personneUrl + 'services')
    }
    getAllDepartementInPersonnel(): Observable<Departement[]> {
        return this.http.get<Departement[]>(this.personneUrl + 'departements')
    }
}
