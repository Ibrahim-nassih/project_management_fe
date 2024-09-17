import {Component, Input} from '@angular/core';
import {Personnel} from "../../../core/models/personnels/personnel";
import {ButtonEnum, ColumnItem} from "../../../core/models/columnItem";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() selectedPersonnel!: Personnel
  columns: ColumnItem[] = [
    {
      name: 'Date de signature',
      key: 'dateSignature',
    },
    {
      name: 'Date de début de contrat',
      key: 'dateDebutValidite',
    },
    {
      name: 'Type de contrat',
      key: 'typeContrat',
    },
    {
      name: 'Durée de contrat',
      key: 'dureeContrat',
    },
    {
      name: 'Période d’essai',
      key: 'periodeEssai',
    },
    {
      name: 'Salaire brut',
      key: 'salaire',
    },
  ]
  columnstwo: ColumnItem[] = [
    {
      name: 'Banque',
      key: 'nomBanque',
    },
    {
      name: 'Pays',
      key: 'paysBanque',
    },
    {
      name: 'RIB',
      key: 'rib',
    },
    {
      name: 'Etat du compte bancaire',
      key: 'state',
    },
  ]
  handelAction($event: any) {
    switch($event.action) {
      case ButtonEnum.DELETE: {
        break;
      }
      default: {
        break;
      }
    }
  }
}
