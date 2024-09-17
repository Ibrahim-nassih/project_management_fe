import {Component, Input} from '@angular/core';
import {ButtonEnum, ButtonItem, ColumnItem} from "../../../core/models/columnItem";
import {Poste} from "../../../core/models/personnels/poste";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {ToastService} from "../../../core/services/toastService";
import {ContratPersonnelService} from "../../../core/services/personnels/contrat-personnel-service";
import {CustomValidators} from "../../../core/services/validators/validators";
import {take} from "rxjs";
import {PosteService} from "../../../core/services/personnels/poste.service";
const { required } = CustomValidators

@Component({
  selector: 'app-poste-personnel',
  templateUrl: './poste-personnel.component.html',
  styleUrls: ['./poste-personnel.component.scss']
})
export class PostePersonnelComponent {
  @Input() activePostes!: Poste[]
  columnsPostPersonnel: ColumnItem[] = [
    {
      name: 'Désignation du poste',
      key: 'libelle',
    },
  ]
  buttonsPostPersonnel: ButtonItem[] = [
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
  posteForm!: FormGroup
  isError: boolean = false
  isLoad: boolean = false
  constructor(
      private formBuilder: FormBuilder,
      private translate: TranslateService,
      private toastService: ToastService,
      private contratService: ContratPersonnelService,
      private posteService: PosteService
  ) {}

  ngOnInit(): void {
    this.posteForm = this.formBuilder.group({
      libelle: ['', [required]],
    })
  }
  handelError(control: any) {
    return this.posteForm.controls[control].errors && this.isError
  }
  onSubmitForm() {
    this.isLoad = true
    if (this.posteForm.valid) {
      const poste = {
        ...this.posteForm.value,
      } as Poste
      this.posteService
          .add(poste)
          .pipe(take(1))
          .subscribe(
              poste => {
                this.posteForm.reset()
                this.translate.get("PERSONNEL.ADD-POSTE").subscribe(value => {
                  this.toastService.show(value,{ classname: 'bg-success text-white', delay: 1000 })
                })
                this.isLoad = false
                //this.allPostes = [...this.allPostes, poste]
              },
              error => {
                this.translate.get("PERSONNEL.ERROR-ADD-POSTE").subscribe(value => {
                  this.toastService.show(value,{ classname: 'bg-danger text-white', delay: 1000 })
                })
                this.isLoad = false
              },
          )
    } else {
      this.isError = true
    }
  }
  handelAction($event: any) {
    switch($event.action) {
      case ButtonEnum.DELETE: {
        console.log('Test')
        console.log($event)
        /*confirm() {
          Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#364574',
            cancelButtonColor: 'rgb(243, 78, 78)',
            confirmButtonText: 'Yes, delete it!'
          }).then(result => {
            if (result.value) {
              Swal.fire({title: 'Deleted!', text:'Your file has been deleted.', confirmButtonColor: '#364574', icon: 'success',});
            }
          });
        }*/
        break;
      }
      case ButtonEnum.EDIT: {

        break
      }
      default: {
        break;
      }
    }
  }
}
