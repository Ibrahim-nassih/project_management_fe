import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { SpacesService } from "src/app/core/services/spaces/spaces.service";
import Swal from "sweetalert2";
import { AddTransactionsAction, AddTransactionsActionError, AddTransactionsActionSuccess, DeleteTransactionAction, DeleteTransactionActionSuccess, GetAllTransactionsAction, GetAllTransactionsActionError, GetAllTransactionsActionSuccess, TransactionsActionsTypes, UpdateTransactionActionSuccess, UpdateTransactionsAction } from "./transactions.actions";

@Injectable()
export class TransactionsEffects{
    constructor(private transactionService:SpacesService,private effectActions:Actions){

    }
// get all Transactions
    getAllTransactionsEffect:Observable<Action>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(TransactionsActionsTypes.GET_ALL_TRANSACTIONS),
            mergeMap((action:GetAllTransactionsAction)=>{
                return this.transactionService.getTransactions(action.payload.id).pipe(
                    map(Transactions=> new GetAllTransactionsActionSuccess(Transactions)),
                    catchError((err)=>of(new GetAllTransactionsActionError(err.message)))
                )
            })
        )
    )
// Add Transactions Effect
addTransactionsEffect: Observable<Action> = createEffect(() =>
  this.effectActions.pipe(
    ofType(TransactionsActionsTypes.ADD_TRANSACTIONS),
    mergeMap((action: AddTransactionsAction) => {
      return this.transactionService.postTransactions(action.payload).pipe(
        map((transactions:any)=> {
          this.transactionService.closeModal();
          return new AddTransactionsActionSuccess(transactions);
        }),
        catchError(err => of(new AddTransactionsActionError(err.message)))
      );
    })
  )
);

// update Transaction
UpdateTransactionEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
        ofType(TransactionsActionsTypes.UPDATE_TRANSACTION),
        mergeMap((action:UpdateTransactionsAction)=>{
            return this.transactionService.putTicket(action.payload,action.payload.id).pipe(
                map(currentTransaction=> new UpdateTransactionActionSuccess(currentTransaction)),
                catchError((err)=>of())
            )
        })
           )
)
// Delete Transaction
DeleteTransactionEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
        ofType(TransactionsActionsTypes.DELETE_TRANSACTION),
        mergeMap((action:DeleteTransactionAction)=>{
            return this.transactionService.deleteTicket(action.payload).pipe(
                map(currentTransaction=> new DeleteTransactionActionSuccess({}),Swal.fire('Deleted!', 'Ticket has been deleted.', 'success')),
                catchError((err)=>of())
            )
        })
           )
)
}