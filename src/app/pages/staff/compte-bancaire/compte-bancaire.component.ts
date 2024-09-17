import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CompteBancaire} from "../../../core/models/personnels/compte-bancaire";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CustomValidators} from "../../../core/services/validators/validators";
import {take} from "rxjs";
import {CompteBancaireService} from "../../../core/services/personnels/compte-bancaire.service";
import {TranslateService} from "@ngx-translate/core";
import {ToastService} from "../../../core/services/toastService";
const { required } = CustomValidators
@Component({
  selector: 'app-compte-bancaire',
  templateUrl: './compte-bancaire.component.html',
  styleUrls: ['./compte-bancaire.component.scss']
})
export class CompteBancaireComponent {
  @Input() comptesBancaires?: CompteBancaire[]
  compteBancaireForm!: FormGroup
  isError: boolean = false
  isLoad: boolean = false

  @Input() selectedPersonnelId?: number

  constructor(
      private formBuilder: FormBuilder,
      private compteBancaireService: CompteBancaireService,
      private translate: TranslateService,
      private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.compteBancaireForm = this.formBuilder.group({
      nomBanque: ['', [required]],
      paysBanque: ['', [required]],
      rib: ['', [required]],
    })
  }
  editState(compte: CompteBancaire) {
    this.compteBancaireService.editState(compte).subscribe(value => {
      this.compteBancaireService.clearCache()
      this.compteBancaireService.getWithQuery({
        employeeId: this.selectedPersonnelId?.toString()+'',
      })
      if (compte.state === 'ACTIVE') {
        this.translate.get('PERSONNEL.COMPTE-DESACTIVE').forEach(value1 => {
          this.toastService.show(value1,
              { classname: 'bg-success text-white', delay: 1000 });
        })
      } else {
        this.translate.get('PERSONNEL.COMPTE-ACTIVE').forEach(value1 => {
          this.toastService.show(value1,
              { classname: 'bg-success text-white', delay: 1000 });
        })
      }
    }, error => {
      if (compte.state === 'ACTIVE') {
        this.translate.get('PERSONNEL.ERROR-COMPTE-DESACTIVE').forEach(value1 => {
          this.toastService.show(value1,
              { classname: 'bg-danger text-white', delay: 1000 });
        })
      } else {
        this.translate.get('PERSONNEL.ERROR-COMPTE-ACTIVE').forEach(value1 => {
          this.toastService.show(value1,
              { classname: 'bg-danger text-white', delay: 1000 });
        })
      }
    })
  }
  onSubmitForm() {
    this.isLoad = true
    if (this.compteBancaireForm.valid) {
      const createCompteBancaireRequest = {
        ...this.compteBancaireForm.value,
        employeeId: this.selectedPersonnelId,
      }
      this.compteBancaireService.add(createCompteBancaireRequest).pipe(take(1)).subscribe(value => {
        this.compteBancaireForm.reset()
        this.isLoad = false
        this.translate.get('PERSONNEL.ADD-COMPTE').forEach(value1 => {
          this.toastService.show(value1,
              { classname: 'bg-success text-white', delay: 1000 });
        })
      }, error => {
        this.translate.get('PERSONNEL.ERROR-ADD-COMPTE').forEach(value1 => {
          this.toastService.show(value1,
              { classname: 'bg-danger text-white', delay: 1000 });
        })
      })
    } else {
      this.isError = true
    }
  }
  handelError(control: any) {
    return this.compteBancaireForm.controls[control].errors && this.isError
  }

}
