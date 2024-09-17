import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Action } from "@ngrx/store";
import { Ticket } from "src/app/core/models/spaces/ticket";

export enum TicketsActionsTypes{
GET_ALL_TICKETS="[Tickets] Get All Tickets",
GET_ALL_TICKETS_SUCCESS="[Tickets] Get All Tickets success",
GET_ALL_TICKETS_ERROR="[Tickets] Get All Tickets error",
ADD_TICKET="[Tickets] Add Ticket",
ADD_TICKET_SUCCESS="[Tickets] Add Ticket Success",
ADD_TICKET_ERROR="[Tickets] Add Ticket Error",
UPDATE_TICKET="[Tickets] Update Ticket",
UPDATE_TICKET_SUCCESS="[Tickets] Update Ticket Success",
UPDATE_TICKET_STATUS="[Tickets] Update Ticket status",
UPDATE_TICKET_STATUS_SUCCESS="[Tickets] Update Ticket status Success",
DELETE_TICKET="[Tickets] Delete Ticket",
DELETE_TICKET_SUCCESS="[Tickets] Delete Ticket Success",
ADD_TICKETS_TO_SPRINT="[Tickets] Add Tickets to sprint",
ADD_TICKETS_TO_SPRINT_SUCCESS="[Tickets] Add Tickets to sprint success",
}
//load tickets
export class GetAllTicketsAction implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.GET_ALL_TICKETS;
    constructor(public payload: { id: number }){
    }
}
export class GetAllTicketsActionSuccess implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.GET_ALL_TICKETS_SUCCESS;
    constructor(public payload:any){ }
}

export class GetAllTicketsActionError implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.GET_ALL_TICKETS_ERROR;
    constructor(public payload:string){ }
}
//create ticket
export class CreateTicketAction implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.ADD_TICKET;
    modal!:NgbModalRef;
    constructor(public payload:{data:any,modal: NgbModalRef| null}){
    }
}
export class CreateTicketActionSuccess implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.ADD_TICKET_SUCCESS;
    constructor(public payload:any){ }
}

export class CreateTicketActionError implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.ADD_TICKET_ERROR;
    constructor(public payload:string){ }
}
//Update ticket
export class UpdateTicketAction implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.UPDATE_TICKET;
    constructor(public payload: any){
    }
}
export class UpdateTicketActionSuccess implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.UPDATE_TICKET_SUCCESS;
    constructor(public payload:any){ }
}
//Update ticket status
export class UpdateTicketStatusAction implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.UPDATE_TICKET_STATUS;
    constructor(public payload: any){
    }
}
export class UpdateTicketStatusActionSuccess implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.UPDATE_TICKET_STATUS_SUCCESS;
    constructor(public payload:Ticket){ }
}
//Delete ticket
export class DeleteTicketAction implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.DELETE_TICKET;
    constructor(public payload: any){
    }
}
export class DeleteTicketActionSuccess implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.DELETE_TICKET_SUCCESS;
    constructor(public payload:any){ }
}

//add tickets to sprint
export class AddTicketsSprintAction implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.ADD_TICKETS_TO_SPRINT;
    constructor(public payload:any){
    }
}
export class AddTicketsSprintActionSuccess implements Action{
    type: TicketsActionsTypes=TicketsActionsTypes.ADD_TICKETS_TO_SPRINT_SUCCESS;
    constructor(public payload:any[]){ }
}

export type TicketsAction=
  GetAllTicketsAction | GetAllTicketsActionSuccess | GetAllTicketsActionError
  |CreateTicketAction|CreateTicketActionSuccess|CreateTicketActionError | UpdateTicketAction | UpdateTicketActionSuccess
  | DeleteTicketAction | DeleteTicketActionSuccess | UpdateTicketStatusAction | UpdateTicketStatusActionSuccess
  | AddTicketsSprintAction | AddTicketsSprintActionSuccess
  ;