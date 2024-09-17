import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import { StorageService } from 'src/app/core/services/storageService';
import * as leadActions from 'src/app/store/leads/lead.actions';
import * as stepsActions from 'src/app/store/steps/steps.actions';
import * as transactionsActions from 'src/app/store/transactions/transactions.actions';
import * as teamActions from 'src/app/store/team/team.actions';
import { Store } from '@ngrx/store';
import { currentLead, steps } from 'src/app/store/reducers';
import { GetAllTicketsAction } from 'src/app/store/tickets/tickets.actions';
import { Lead } from 'src/app/core/models/spaces/lead';
import { Step } from 'src/app/core/models/spaces/step';

@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.scss']
})
export class CreateLeadComponent implements OnInit {
  space: any;
  breadCrumbItems!: Array<{}>;
  leadForm!: UntypedFormGroup;
  firstStepForm!: UntypedFormGroup;
  lastStepForm!: UntypedFormGroup;
  StepForm!: UntypedFormGroup;
  submitted = false;
  submStp: boolean = false;
  submTran = false;
  numSteps!: number;
  statusFormGroups: FormGroup[] = [];
  transactionForm!: FormGroup;
  transactionsFormArray: FormGroup[] = [];
  createdLead?: Lead;
  creatLeadSuccess:boolean=false;
  steps!: Step[];
  creatStepSuccess:boolean=false;
  transactions: any[] = [];
  saveTrans: boolean = false;
  success:boolean=false;
  lead$ = this.store.select(currentLead);
  constructor(private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private SpacesSer: SpacesService,
    private router: Router, private storage: StorageService, private store: Store) { }
  ngOnInit(): void {
    this.SpacesSer.success$.subscribe((data)=>{this.success=data;
    if(this.success){
      
    }});
    this.lead$.subscribe((data) => {
      this.creatLeadSuccess=true;
      this.createdLead = data;
      if (this.createdLead) {
        console.log('lead', this.createdLead);
        this.store.dispatch(new stepsActions.GetAllStepsAction({ id: this.createdLead.id }));
        this.store.select(steps).subscribe((data) => {
          this.steps = data;
          if (
            this.steps && this.transactions.length < 2 && this.createdLead) {
            this.creatStepSuccess=true;
            const firstTransaction = {
              workflow: this.createdLead.id,
              from_step: this.steps[0].id,
              to_step: this.steps[1].id,
              name: 'Start work',
            }
            this.transactions.push(firstTransaction);
            const lastTransaction = {
              workflow: this.createdLead.id,
              from_step: this.steps[this.steps.length - 2].id,
              to_step: this.steps[this.steps.length - 1].id,
              name: 'End work'
            }
            this.transactions.push(lastTransaction);
            console.log('transactions', this.transactions);
          }
        });
      }
    });
    this.route.queryParams.subscribe(params => {
      if (params['space']) {
        const spaceParam = decodeURIComponent(params['space']);
        this.space = JSON.parse(spaceParam);
        this.breadCrumbItems = [
          { label: this.space.name },
          { label: 'Creat Lead', active: true }
        ];
      }
    })

    this.leadForm = this.formBuilder.group({
      space: [this.space.id],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }
  get form() {
    return this.leadForm.controls;
  }
  ValidLead(): boolean {
    return this.leadForm.valid;
  }
  newLead() {
    this.submitted = true
    if (this.leadForm.valid) {
      //generate default steps
      this.store.dispatch(leadActions.createLead({ lead: this.leadForm.value }));
      this.defaultSteps();
      //this.SpacesSer.postLead(this.leadForm.value).subscribe((data:any)=>{this.createdLead=data;this.defaultSteps();console.log('data',data);console.log('lead',this.createdLead)},(error)=>{})
    }
  }
  //generate the dfeault steps Backlog and Done
  defaultSteps() {
    const firstStepForm = {
      name: 'Backlog',
      order: 0,
    }
    this.statuses.push(firstStepForm);
    const lastStepForm = {
      name: 'Done',
      order: 1,
    }
    this.statuses.push(lastStepForm);
  }

  statuses: any[] = [];//list of lead steps
  //ordering the steps
  finIndexDone(): number {
    return this.statuses.findIndex((step) => step.name === 'Done' && step.order === 1)
  }
  firstDefStep(step: any): boolean {
    return step === this.statuses[0];
  }
  lastDefStep(step: any): boolean {
    return step === this.statuses[this.statuses.length - 1];
  }
  saveStp: boolean = false;
  //generate new step
  generateNewStep() {
    this.saveStp = true;
    this.submStp = false;
    this.StepForm = this.formBuilder.group({
      name: ['', Validators.required],
      order: [this.statuses.length - 1],
    });
  }
  //save step in list statuses
  saveStep() {
    if (this.StepForm.valid) {
      this.statuses.splice(this.finIndexDone(), 0, this.StepForm.value);
      this.StepForm.reset();
      this.saveStp = false;
    }
  }
  get formTransaction() {
    return this.transactionForm.controls;
  }
  validSteps() {
    return this.StepForm.valid;
  }
  deleteStep(index: number) {
    this.statuses.splice(index, 1);
  }

  addSteps() {

    this.statuses[this.statuses.length - 1].order = this.statuses.length - 1
    if (this.statuses && this.createdLead) {
      const stepsLead = this.statuses.map((item) => ({ ...item, ['workflow']: this.createdLead?.id, }));
      console.log('stepsLead', stepsLead)
      this.store.dispatch(new stepsActions.AddStepsAction(stepsLead));
    }
    this.submStp = true;
  }
  saveTransaction() {
    if (this.transactionForm.valid) {
      this.transactionForm.value.from_step = parseInt(this.transactionForm.value.from_step, 10);
      this.transactionForm.value.to_step = parseInt(this.transactionForm.value.to_step, 10)
      this.transactions.push(this.transactionForm.value);
      this.transactionForm.reset();
      this.saveTrans = false
    }
  }
  addTransactionForm(): void {
    this.saveTrans = true;
    this.transactionForm = this.formBuilder.group({
      workflow: [this.createdLead?.id],//this.createdLead.id
      from_step: ['', Validators.required],
      to_step: [, Validators.required],
      name: [, Validators.required]
    });

  }
  deleteTransaction(i: number) {
    this.transactions.splice(i, 1);
    console.log(this.transactions)
  }
  validTransactions() {
    return this.transactionForm.valid;
  }
  submitTransactions() {
    if (this.transactions) {
      this.store.dispatch(new transactionsActions.AddTransactionsAction(this.transactions))
    }
    this.submTran=true;
  }
  findStep(status: number): Step | undefined {
    return this.steps?.find((step: any) => step.id === status);
  }
  loadtasks() {
    if (this.createdLead) {
      const payload = { id: this.createdLead.id };
      this.store.dispatch(new GetAllTicketsAction(payload));
      this.store.dispatch(new stepsActions.GetAllStepsAction(payload));
      this.store.dispatch(new transactionsActions.GetAllTransactionsAction(payload));
      this.store.dispatch(teamActions.loadTeamUsers({ id: this.createdLead.space }));
      this.store.dispatch(teamActions.loadTeamMemberships({ id: this.createdLead.space }));
    }
    this.storage.saveValue('defaultUrl', '/#/spaces/tasks')
    this.router.navigate(['/spaces/tasks'], {
      queryParams: { lead: encodeURIComponent(JSON.stringify(this.createdLead)) },
    })
  }
}
