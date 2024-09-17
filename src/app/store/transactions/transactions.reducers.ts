import { Action } from "@ngrx/store";
import { TransactionsAction, TransactionsActionsTypes } from "./transactions.actions";
import { Transaction } from "src/app/core/models/spaces/transaction";

export enum TransactionsStateEnum{
    LOADING="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial",
    SUBMITED="Submited",
    CREATED="Created",
    UPDATED="updated",
    DELETED="deleted"
}
export interface TransactionsState{
    transactions:Transaction[],
    errorMessage:string,
    dataState:TransactionsStateEnum,
    currentTransaction:Transaction|undefined,
}
const initState:TransactionsState={
    transactions:[],
    errorMessage:"",
    dataState:TransactionsStateEnum.INITIAL,
    currentTransaction:undefined,
}
export function transactionsReducer(state=initState,action:Action):TransactionsState{
switch(action.type){
    //get Transactions
    case TransactionsActionsTypes.GET_ALL_TRANSACTIONS:
        return {...state,dataState:TransactionsStateEnum.LOADING,transactions:[]}
    case TransactionsActionsTypes.GET_ALL_TRANSACTIONS_SUCCESS:
        return {...state,dataState:TransactionsStateEnum.LOADED,transactions:(<TransactionsAction>action).payload}
    case TransactionsActionsTypes.GET_ALL_TRANSACTIONS_ERROR:
        return {...state ,dataState:TransactionsStateEnum.ERROR,errorMessage:(<TransactionsAction>action).payload}
    //add Transactions
    case TransactionsActionsTypes.ADD_TRANSACTIONS:
        return { ...state, dataState: TransactionsStateEnum.SUBMITED };
      
    case TransactionsActionsTypes.ADD_TRANSACTIONS_SUCCESS:
        return {
          ...state,
          dataState: TransactionsStateEnum.CREATED,
          transactions: [...state.transactions, ...(<TransactionsAction>action).payload],
        };
      
    case TransactionsActionsTypes.ADD_TRANSACTIONS_ERROR:
        return { ...state, dataState: TransactionsStateEnum.ERROR, errorMessage: (<TransactionsAction>action).payload };
      
    // update Transaction
    case TransactionsActionsTypes.UPDATE_TRANSACTION:
        return {...state,dataState:TransactionsStateEnum.SUBMITED,currentTransaction:(<TransactionsAction>action).payload}
    case TransactionsActionsTypes.UPDATE_TRANSACTION_SUCCESS:
        console.log((<TransactionsAction>action).payload);
        return {...state,dataState:TransactionsStateEnum.UPDATED,
            transactions:state.transactions.map((t)=>t.id===(state.currentTransaction?.id)?state.currentTransaction:t)}
    // Delete Transactions
    case TransactionsActionsTypes.DELETE_TRANSACTION:
        return {...state,dataState:TransactionsStateEnum.SUBMITED,currentTransaction:(<TransactionsAction>action).payload}
    case TransactionsActionsTypes.DELETE_TRANSACTION_SUCCESS:
        return {...state,dataState:TransactionsStateEnum.DELETED,transactions:state.transactions.filter((t)=>t.id !== state.currentTransaction?.id)}
    default : return {...state}
}
}