import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lead } from 'src/app/core/models/spaces/lead';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import { Store } from '@ngrx/store';
import * as stepsActions from 'src/app/store/steps/steps.actions'
import { Step } from 'src/app/core/models/spaces/step';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss']
})
export class StepFormComponent implements OnInit{
  stepForm!:FormGroup;
  data: any[] = [];
  subColumn:boolean=false;
  @Input() lead!:Lead;
  @Input() steps!:Step[];
  constructor(private formBuilder:FormBuilder,private Service: SpacesService,private store :Store){}
ngOnInit(): void {
  this.stepForm = this.formBuilder.group({
    order: [''],
    workflow: [''],
    name: ['', Validators.required],
  });
}

  AddCulumn() {
    this.stepForm.value.order = Object.keys(this.steps).length;
    this.stepForm.value.workflow = this.lead.id;
    if (this.stepForm.valid) {
      this.data[0] = this.stepForm.value;
      console.log('step', this.data);
      this.store.dispatch(new stepsActions.AddStepsAction(this.data));
    }
    this.subColumn = true;
  }
  closeModal(){
   this.Service.closeModal();
  }
}
