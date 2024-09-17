import {Component, Input} from '@angular/core';
import {ContratPersonnel} from "../../../core/models/personnels/contrat-personnel";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {ToastService} from "../../../core/services/toastService";
import {CustomValidators} from "../../../core/services/validators/validators";
import flatpickr from "flatpickr";
import { French } from 'flatpickr/dist/l10n/fr';
import { english } from 'flatpickr/dist/l10n/default';
import {take} from "rxjs";
import {ContratPersonnelService} from "../../../core/services/personnels/contrat-personnel-service";
import {ButtonEnum, ButtonItem, ColumnItem} from "../../../core/models/columnItem";
const { required } = CustomValidators
@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent {
  @Input() contratPeronnel!: ContratPersonnel[]
  @Input() selectedPersonnelId?: number
  contratForm!: FormGroup
  isError: boolean = false
  editMode: boolean = false
  selectedContrat!: ContratPersonnel
  columns: ColumnItem[] = [
    {
      name: 'Date Signature',
      key: 'dateSignature',
    },
    {
      name: 'Date début validité',
      key: 'dateDebutValidite',
    },
    {
      name: 'Type Contrat',
      key: 'typeContrat',
    },
    {
      name: 'Période d\'essai',
      key: 'periodeEssai',
    },
    {
      name: 'Salaire net',
      key: 'salaire',
    },
  ]
  buttons: ButtonItem[] = [
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
  constructor(
      private formBuilder: FormBuilder,
      private translate: TranslateService,
      private toastService: ToastService,
      private contratService: ContratPersonnelService
  ) {}

  ngAfterViewInit(): void {
    const locale = this.translate.currentLang === 'fr' ? French : english;
    flatpickr('#dateSignature', {
      locale: locale,
      dateFormat: 'Y-m-d',
      onChange: (selectedDates, dateStr, instance) => {
        const dateDebutValiditeInput = document.getElementById('dateDebutValidite') as HTMLInputElement
        dateDebutValiditeInput.value = ''
        this.initSecondDatePicker(selectedDates[0], locale);
      },
    });
    this.initSecondDatePicker(new Date(1900, 0, 1), locale);
  }

  ngOnInit(): void {
    this.contratForm = this.formBuilder.group({
      dateSignature: ['', [required]],
      dateDebutValidite: ['', [required]],
      typeContrat: ['', [required]],
      dureeContrat: [{ value: '', disabled: false }, required],
      periodeEssai: ['', [required]],
      salaire: ['', [required]],
    })

  }
  onSubmitForm() {
    if (this.contratForm.valid) {
      const dureeContrat =
          this.contratForm.controls['typeContrat'].value === 'cdi' ? '0' : this.contratForm.controls['dureeContrat'].value
      const contrat = {
        ...this.contratForm.value,
        dureeContrat: dureeContrat,
        personnelId: this.selectedPersonnelId,
      }
      this.contratService
          .add(contrat)
          .pipe(take(1))
          .subscribe(
              contrat => {
                this.contratForm.reset()
              },
              error => {
              },
          )
      /*
      * if (this.editMode) {
        const contrat = {
          ...this.contratForm.value,
          id: this.selectedContrat.id,
        }
        this.editContratEmitter.emit(contrat)
      } else {

      }
      * */
    } else {
      this.isError = true
    }
  }
  handelError(control: any) {
    return this.contratForm.controls[control].errors && this.isError
  }
  private initSecondDatePicker(minDate: Date, locale: any) {
    flatpickr('#dateDebutValidite', {
      locale: locale,
      dateFormat: 'Y-m-d',
      minDate: minDate,
    });
  }
  enableContractDuration() {
    this.contratForm.controls['typeContrat'].valueChanges.subscribe(
        selectTypeofContract => {
          if (selectTypeofContract === 'cdi') {
            this.contratForm.controls['dureeContrat'].disable()
          } else {
            this.contratForm.controls['dureeContrat'].reset()
            this.contratForm.controls['dureeContrat'].enable()
          }
        },
    )
  }
  handelAction($event: any) {
    switch($event.action) {
      case ButtonEnum.DELETE: {
        this.contratService
            .delete($event.item[0] as ContratPersonnel)
            .pipe(take(1))
            .subscribe(
                result => {
                  this.toastService.show("Le contrat a été supprimé avec succès.",{ classname: 'bg-success text-white', delay: 1000 })
                },
                error => {
                  this.toastService.show("Error",{ classname: 'bg-danger text-white', delay: 1000 })
                },
            )
        break;
      }
      case ButtonEnum.EDIT: {
        //this.editMode = true
        //this.selectedContrat = $event.item[0]
        break
      }
      default: {
        break;
      }
    }
  }
}
