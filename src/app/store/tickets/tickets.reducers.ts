import { Ticket } from "src/app/core/models/spaces/ticket";
import { TicketsAction, TicketsActionsTypes } from "./tickets.actions";
import { Action } from "@ngrx/store";

export enum TicketsStateEnum{
    LOADING="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial",
    SUBMITED="Submited",
    CREATED="Created",
    UPDATED="updated",
    DELETED="deleted"
}
export interface TicketsState{
    tickets:Ticket[],
    errorMessage:string,
    dataState:TicketsStateEnum,
    currentTicket:Ticket|undefined,
}
const initState:TicketsState={
    tickets:[],
    errorMessage:"",
    dataState:TicketsStateEnum.INITIAL,
    currentTicket:undefined,
}
export function ticketsReducer(state=initState,action:Action):TicketsState{
switch(action.type){
    //get ticket
    case TicketsActionsTypes.GET_ALL_TICKETS:
        return {...state,dataState:TicketsStateEnum.LOADING,tickets:[]}
    case TicketsActionsTypes.GET_ALL_TICKETS_SUCCESS:
        return {...state,dataState:TicketsStateEnum.LOADED,tickets:(<TicketsAction>action).payload}
    case TicketsActionsTypes.GET_ALL_TICKETS_ERROR:
        return {...state ,dataState:TicketsStateEnum.ERROR,errorMessage:(<TicketsAction>action).payload}
    //add ticket
    case TicketsActionsTypes.ADD_TICKET:
        return {...state,dataState:TicketsStateEnum.SUBMITED}
    case TicketsActionsTypes.ADD_TICKET_SUCCESS:
        return {...state, dataState:TicketsStateEnum.CREATED,tickets:[...state.tickets,(<TicketsAction>action).payload],
        currentTicket:(<TicketsAction>action).payload}
    case TicketsActionsTypes.ADD_TICKET_ERROR:
        return {...state ,dataState:TicketsStateEnum.ERROR,errorMessage:(<TicketsAction>action).payload}
    // update ticket
    case TicketsActionsTypes.UPDATE_TICKET:
        console.log((<TicketsAction>action).payload);
        return {...state,dataState:TicketsStateEnum.SUBMITED,currentTicket:(<TicketsAction>action).payload}
    case TicketsActionsTypes.UPDATE_TICKET_SUCCESS:
        console.log((<TicketsAction>action).payload);
        return {...state,dataState:TicketsStateEnum.UPDATED,
            tickets:state.tickets.map((t)=>t.id===(state.currentTicket?.id)?state.currentTicket:t)}
    // update ticket status
    case TicketsActionsTypes.UPDATE_TICKET_STATUS:
        return {...state,dataState:TicketsStateEnum.SUBMITED,}
    case TicketsActionsTypes.UPDATE_TICKET_STATUS_SUCCESS:
        return {...state,dataState:TicketsStateEnum.UPDATED,
            tickets:state.tickets.map((t)=>t.id=== (<TicketsAction>action).payload.id ?(<TicketsAction>action).payload:t)}
        // Delete ticket
    case TicketsActionsTypes.DELETE_TICKET:
        return {...state,dataState:TicketsStateEnum.SUBMITED,currentTicket:(<TicketsAction>action).payload}
    case TicketsActionsTypes.DELETE_TICKET_SUCCESS:
        return {...state,dataState:TicketsStateEnum.DELETED,tickets:state.tickets.filter((t)=>t.id !== state.currentTicket?.id)}
        // add tickets to sprint
    case TicketsActionsTypes.ADD_TICKETS_TO_SPRINT:
        return {...state, dataState:TicketsStateEnum.SUBMITED}
    case TicketsActionsTypes.ADD_TICKETS_TO_SPRINT_SUCCESS:
        return {...state, dataState:TicketsStateEnum.UPDATED,tickets:(<TicketsAction>action).payload}
    default : return {...state}
}
}