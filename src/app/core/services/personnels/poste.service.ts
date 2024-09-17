import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data'
import { Observable } from 'rxjs'
import {Poste} from "../../models/personnels/poste";

@Injectable({
  providedIn: 'root',
})
export class PosteService extends EntityCollectionServiceBase<Poste> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient,
  ) {
    super('Poste', serviceElementsFactory)
  }
  private allPostesUrl = 'api/postes/all'
  getAllPostes(): Observable<Poste[]> {
    return this.http.get<Poste[]>(this.allPostesUrl)
  }
}
