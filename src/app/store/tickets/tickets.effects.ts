import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { SpacesService } from "src/app/core/services/spaces/spaces.service";
import { AddTicketsSprintAction, AddTicketsSprintActionSuccess, CreateTicketAction, CreateTicketActionError, CreateTicketActionSuccess, DeleteTicketAction, DeleteTicketActionSuccess, GetAllTicketsAction, GetAllTicketsActionError, GetAllTicketsActionSuccess, TicketsActionsTypes, UpdateTicketAction, UpdateTicketActionSuccess, UpdateTicketStatusAction, UpdateTicketStatusActionSuccess } from "./tickets.actions";
import Swal from "sweetalert2";

@Injectable()
export class TicketsEffects{
    constructor(private ticketService:SpacesService,private effectActions:Actions){

    }
// get all tickets
    getAllTicketsEffect:Observable<Action>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(TicketsActionsTypes.GET_ALL_TICKETS),
            mergeMap((action:GetAllTicketsAction)=>{
                return this.ticketService.getTickets(action.payload.id).pipe(
                    map(tickets=> new GetAllTicketsActionSuccess(tickets)),
                    catchError((err)=>of(new GetAllTicketsActionError(err.message)))
                )
            })
        )
    )
// add ticket
AddTicketsEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
        ofType(TicketsActionsTypes.ADD_TICKET),
        mergeMap((action: CreateTicketAction) => {
            return this.ticketService.postTicket(action.payload.data).pipe(
                map(currentTicket => {
                    this.ticketService.closeModal(); // Close the modal
                    return new CreateTicketActionSuccess(currentTicket);
                }),
                catchError((err) => of(new CreateTicketActionError(err.message)))
            );
        })
        
    )
)
// update ticket
UpdateTicketsEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
        ofType(TicketsActionsTypes.UPDATE_TICKET),
        mergeMap((action:UpdateTicketAction)=>{
            return this.ticketService.putTicket(action.payload,action.payload.id).pipe(
                map(currentTicket=> {
                    console.log('effect',currentTicket)
                    this.ticketService.closeModal();
                    return new UpdateTicketActionSuccess(currentTicket)}),
                catchError((err)=>of())
            )
        })
           )
)
//update ticket status
UpdateTicketStatusEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
        ofType(TicketsActionsTypes.UPDATE_TICKET_STATUS),
        mergeMap((action:UpdateTicketStatusAction)=>{
            return this.ticketService.updateTicket(action.payload).pipe(
                map(currentTicket=> new UpdateTicketStatusActionSuccess(currentTicket)),
                catchError((err)=>of())
            )
        })
           )
)
// Delete ticket
DeleteTicketsEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
        ofType(TicketsActionsTypes.DELETE_TICKET),
        mergeMap((action:DeleteTicketAction)=>{
            return this.ticketService.deleteTicket(action.payload).pipe(
                map(currentTicket=> new DeleteTicketActionSuccess({}),Swal.fire('Deleted!', 'Ticket has been deleted.', 'success')),
                catchError((err)=>of())
            )
        })
           )
)
//add tickets to sprint
AddTicketToSprintEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
        ofType(TicketsActionsTypes.ADD_TICKETS_TO_SPRINT),
        mergeMap((action:AddTicketsSprintAction)=>{
            return this.ticketService.putTicketSprint(action.payload).pipe(
                map((tickets:any)=> {
                    this.ticketService.closeModal();
                    return new AddTicketsSprintActionSuccess(tickets)}),
                catchError((err)=>of())
            )
        })
           )
)
}