import { Action } from "@ngrx/store";
export enum TransactionsActionsTypes{
GET_ALL_TRANSACTIONS="[Transactions] Get All Transactions",
GET_ALL_TRANSACTIONS_SUCCESS="[Transactions] Get All Transactions success",
GET_ALL_TRANSACTIONS_ERROR="[Transactions] Get All Transactions error",
ADD_TRANSACTIONS="[Transactions] Add Transaction",
ADD_TRANSACTIONS_SUCCESS="[Transactions] Add Transaction Success",
ADD_TRANSACTIONS_ERROR="[Transactions] Add Transaction Error",
UPDATE_TRANSACTION="[Transactions] Update Transaction",
UPDATE_TRANSACTION_SUCCESS="[Transactions] Update Transaction Success",
DELETE_TRANSACTION="[Transactions] Delete Transaction",
DELETE_TRANSACTION_SUCCESS="[Transactions] Delete Transaction Success",
}
//load tickets
export class GetAllTransactionsAction implements Action{
    type: TransactionsActionsTypes=TransactionsActionsTypes.GET_ALL_TRANSACTIONS;
    constructor(public payload: { id: number }){
    }
}
export class GetAllTransactionsActionSuccess implements Action{
    type: TransactionsActionsTypes=TransactionsActionsTypes.GET_ALL_TRANSACTIONS_SUCCESS;
    constructor(public payload:any){ }
}

export class GetAllTransactionsActionError implements Action{
    type: TransactionsActionsTypes=TransactionsActionsTypes.GET_ALL_TRANSACTIONS_ERROR;
    constructor(public payload:string){ }
}
//create transactions
export class AddTransactionsAction implements Action {
    type: TransactionsActionsTypes = TransactionsActionsTypes.ADD_TRANSACTIONS;
    constructor(public payload: any[]) {}
  }
  
  export class AddTransactionsActionSuccess implements Action {
    type: TransactionsActionsTypes = TransactionsActionsTypes.ADD_TRANSACTIONS_SUCCESS;
    constructor(public payload: any[]) {}
  }
export class AddTransactionsActionError implements Action{
    type: TransactionsActionsTypes=TransactionsActionsTypes.ADD_TRANSACTIONS_ERROR;
    constructor(public payload:string){ }
}
//Update ticket
export class UpdateTransactionsAction implements Action{
    type: TransactionsActionsTypes=TransactionsActionsTypes.UPDATE_TRANSACTION;
    constructor(public payload: any){
    }
}
export class UpdateTransactionActionSuccess implements Action{
    type: TransactionsActionsTypes=TransactionsActionsTypes.UPDATE_TRANSACTION_SUCCESS;
    constructor(public payload:any){ }
}
//Delete ticket
export class DeleteTransactionAction implements Action{
    type: TransactionsActionsTypes=TransactionsActionsTypes.DELETE_TRANSACTION;
    constructor(public payload: any){
    }
}
export class DeleteTransactionActionSuccess implements Action{
    type: TransactionsActionsTypes=TransactionsActionsTypes.DELETE_TRANSACTION_SUCCESS;
    constructor(public payload:any){ }
}

export type TransactionsAction=
GetAllTransactionsAction | GetAllTransactionsActionSuccess | GetAllTransactionsActionError
  | AddTransactionsAction| AddTransactionsActionSuccess| AddTransactionsActionError | UpdateTransactionsAction | UpdateTransactionActionSuccess
  | DeleteTransactionAction | DeleteTransactionActionSuccess
  ;