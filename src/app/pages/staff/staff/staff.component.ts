import {
  Component,
  OnInit, TemplateRef, ViewChild,
} from '@angular/core'
import {ButtonEnum, ButtonItem, ColumnItem} from "../../../core/models/columnItem";
import {PersonnelService} from "../../../core/services/personnels/personnel.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CompteBancaireService} from "../../../core/services/personnels/compte-bancaire.service";
import {CompteBancaire} from "../../../core/models/personnels/compte-bancaire";
import {Observable} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {ToastService} from "../../../core/services/toastService";
import {Personnel} from "../../../core/models/personnels/personnel";
import {ContratPersonnel} from "../../../core/models/personnels/contrat-personnel";
import {ContratPersonnelService} from "../../../core/services/personnels/contrat-personnel-service";
import {Poste} from "../../../core/models/personnels/poste";
import {PosteService} from "../../../core/services/personnels/poste.service";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  providers: [],
})
export class StaffComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  buttons: ButtonItem[] = [
    {
      action: ButtonEnum.SHOW,
      role: '',
      tooltip: 'BUTTONS.PROFIL',
      icon: 'mdi mdi-eye-outline',
      color: 'link-primary'
    },
    {
      action: ButtonEnum.SERVICES_VISUALISER,
      role: '',
      tooltip: 'BUTTONS.SERVICES-VISUALISER',
      icon: 'mdi mdi-format-list-bulleted',
      color: 'link-primary'
    },
    {
      action: ButtonEnum.LABORATOIRES_VISUALISER,
      role: '',
      tooltip: 'BUTTONS.LABORATOIRES-VISUALISER',
      icon: 'mdi mdi-format-list-bulleted',
      color: 'link-primary'
    },
    {
      action: ButtonEnum.COMPTE_BANCAIRE,
      role: '',
      tooltip: 'BUTTONS.COMPTE-BANCAIRE',
      icon: 'mdi mdi-bank',
      color: 'link-primary'
    },
    {
      action: ButtonEnum.CONTRAT,
      role: '',
      tooltip: 'BUTTONS.CONTRAT',
      icon: 'mdi mdi-file-edit-outline',
      color: 'link-primary'
    },
    {
      action: ButtonEnum.EDIT,
      role: '',
      tooltip: 'BUTTONS.EDIT',
      icon: 'bx bxs-edit',
      color: 'link-warning'
    },
    {
      action: ButtonEnum.DELETE,
      role: '',
      tooltip: 'BUTTONS.DELETE',
      icon: 'ri-delete-bin-5-line',
      color: 'link-danger'
    },
  ]
  comptesBancaires$!: Observable<CompteBancaire[]>
  contratPeronnel$!: Observable<ContratPersonnel[]>
  selectedPersonnelId?: number
  selectedPersonnel!: Personnel
  isDrawerOpen = false
  activePostes$!: Observable<Poste[]>
  @ViewChild('bank') bankTemplate?: TemplateRef<any>;
  @ViewChild('contrat') contratTemplate?: TemplateRef<any>;



  constructor(
      private personnelService: PersonnelService,
      private modalService: NgbModal,
      private compteBancaireService: CompteBancaireService,
      private translate: TranslateService,
      private toastService: ToastService,
      private contratService: ContratPersonnelService,
      private posteService: PosteService
  ) {
  }
  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Test' },
      { label: 'Test', active: true }
    ];
    this.comptesBancaires$ = this.compteBancaireService.entities$
    this.contratPeronnel$ = this.contratService.entities$
    this.initPostes()
  }
  initPostes() {
    this.activePostes$ = this.posteService.entities$
    this.posteService.getAll()
    //this.fetchPostesInPersonnel()
  }
  extraLarge(content: any) {
    this.modalService.open(content);
  }
  handelAction($event: any) {
    switch($event.action) {
      case ButtonEnum.DELETE: {
        break;
      }
      case ButtonEnum.COMPTE_BANCAIRE: {
        this.selectedPersonnelId = $event.item[0]
        this.compteBancaireService.clearCache()
        this.compteBancaireService.getWithQuery({
          employeeId: $event.item[0].toString(),
        })
        this.modalService.open(this.bankTemplate,{ size: 'xl' });
        break;
      }
      case ButtonEnum.SHOW: {
        this.personnelService.getByKey($event.item[0]).subscribe(value => {
          this.selectedPersonnel = value
          this.isDrawerOpen = true
        })
        break;
      }
      case ButtonEnum.CONTRAT: {
        this.selectedPersonnelId = $event.item[0]
        this.contratService.clearCache()
        this.contratService.getWithQuery({ personnelId: $event.item[0].toString() })
        this.modalService.open(this.contratTemplate,{ size: 'xl' });
        break;
      }
      default: {
        break;
      }
    }
  }
  closeDrawer() {
    this.isDrawerOpen = false;
  }
  openModalPostPersonnel(content: any) {
    this.modalService.open(content);
  }
}
