import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Lead } from 'src/app/core/models/spaces/lead';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import Swal from 'sweetalert2';
import * as transactionsActions from 'src/app/store/transactions/transactions.actions'
import { Transaction } from 'src/app/core/models/spaces/transaction';
import { Step } from 'src/app/core/models/spaces/step';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent  implements OnInit{
  transactionForm!:FormGroup;
  data: any[] = [];
  submTran:boolean=false;
  @Input() lead!:Lead;
  @Input() transactions!:Transaction[];
  @Input() steps!:Step[];
  constructor(private spaceService:SpacesService, private store: Store,private formBuilder:FormBuilder){}
ngOnInit(): void {
 
  this.transactionForm = this.formBuilder.group({
    workflow: [],
    from_step: ['', Validators.required],
    to_step: ['', Validators.required],
    name: ['', Validators.required]
  });
}

closeModal(){
  this.spaceService.closeModal()}
  //add transaction
  AddTransaction() {
    this.transactionForm.value.workflow = this.lead.id;
    if (this.transactionForm.valid) {
      if (this.ExistTransaction(this.transactionForm.value.from_step, this.transactionForm.value.to_step)) {
        Swal.fire('Error!', 'Transaction exist', 'warning');
      }
      else {
        this.data[0] = this.transactionForm.value;
        console.log('transaction',this.data);
        this.store.dispatch(new transactionsActions.AddTransactionsAction(this.data));
      }
    }
    this.submTran = true;
  }
  ExistTransaction(fromStep: string, toStep: string): boolean {
    // Use Array.prototype.some() to check if any transaction meets both conditions
    return this.transactions.some(transaction => {
      return transaction.from_step.toString() === fromStep && transaction.to_step.toString() === toStep;
    });
  }
}
