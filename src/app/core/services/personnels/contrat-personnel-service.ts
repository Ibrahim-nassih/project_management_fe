import { Injectable } from '@angular/core'
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data'
import {ContratPersonnel} from "../../models/personnels/contrat-personnel";

@Injectable({
  providedIn: 'root',
})
export class ContratPersonnelService extends EntityCollectionServiceBase<ContratPersonnel> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('ContratPersonnel', serviceElementsFactory)
  }
}
