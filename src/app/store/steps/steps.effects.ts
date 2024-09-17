import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { SpacesService } from "src/app/core/services/spaces/spaces.service";
import { GetAllStepsAction, GetAllStepsActionSuccess, GetAllStepsActionError, StepsActionsTypes, AddStepsAction, AddStepsActionSuccess, AddStepsActionError, UpdateStepsOrderAction, UpdateStepsOrderActionSuccess } from "./steps.actions";

@Injectable()
export class StepsEffects{
    constructor(private stepsService:SpacesService,private effectActions:Actions){

    }

    getAllStepsEffect:Observable<Action>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(StepsActionsTypes.GET_ALL_STEPS),
            mergeMap((action:GetAllStepsAction)=>{
                return this.stepsService.getSteps(action.payload.id).pipe(
                    map(steps=> new GetAllStepsActionSuccess(steps)),
                    catchError((err)=>of(new GetAllStepsActionError(err.message)))
                )
            })
        )
    )
//add steps effect
    addStepsEffect:Observable<Action>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(StepsActionsTypes.ADD_STEP),
            mergeMap((action:AddStepsAction)=>{
                return this.stepsService.postSteps(action.payload).pipe(
                    map((steps:any)=> {
                        this.stepsService.createdStepsSuccess();
                        this.stepsService.closeModal();
                        return new AddStepsActionSuccess(steps)}
                    ),
                    catchError((err)=>of(new AddStepsActionError(err.message)))
                )
            })
        )
    )
//update steps orders effects
updateStepsOrderEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
        ofType(StepsActionsTypes.UPDATE_STEPS_ORDER),
        mergeMap((action:UpdateStepsOrderAction)=>{
            return this.stepsService.updateOrderSteps(action.payload).pipe(
                map((steps:any)=> {
                    return new UpdateStepsOrderActionSuccess(steps)}
                ),
                catchError((err)=>of((err.message)))
            )
        })
    )
)
}