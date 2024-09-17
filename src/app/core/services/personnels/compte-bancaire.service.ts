import { Injectable } from '@angular/core'
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import {CompteBancaire} from "../../models/personnels/compte-bancaire";

@Injectable({
  providedIn: 'root',
})
export class CompteBancaireService extends EntityCollectionServiceBase<CompteBancaire> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private _http: HttpClient,
  ) {
    super('CompteBancaire', serviceElementsFactory)
  }

  public editState(compte: CompteBancaire): Observable<CompteBancaire> {
    return this._http.post<CompteBancaire>('/api/comptebancaire/editState', compte)
  }
}
