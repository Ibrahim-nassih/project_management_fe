import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { SpacesService } from "src/app/core/services/spaces/spaces.service";
import { CreateSprintAction, CreateSprintActionError, CreateSprintActionSuccess, GetAllSprintsAction, GetAllSprintsActionError, GetAllSprintsActionSuccess, SprintsActionsTypes } from "./sprints.actions";

@Injectable()
export class SprintsEffects{
    constructor(private sprintsService:SpacesService,private effectActions:Actions){

    }

    getAllSprintsEffect:Observable<Action>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(SprintsActionsTypes.GET_ALL_SPRINTS),
            mergeMap((action:GetAllSprintsAction)=>{
                return this.sprintsService.getSteps(action.payload.id).pipe(
                    map(sprints=> new GetAllSprintsActionSuccess(sprints)),
                    catchError((err)=>of(new GetAllSprintsActionError(err.message)))
                )
            })
        )
    )
    addSprintEffect:Observable<Action>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(SprintsActionsTypes.ADD_SPRINT),
            mergeMap((action:CreateSprintAction)=>{
                return this.sprintsService.postSprint(action.payload).pipe(
                    map(sprint=> {
                        //this.sprintsService.closeModal();
                        return new CreateSprintActionSuccess(sprint)}
                    ),
                    catchError((err)=>of(new CreateSprintActionError(err.message)))
                )
            })
        )
    )
}