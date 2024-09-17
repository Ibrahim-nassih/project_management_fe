import { Action } from "@ngrx/store";

export enum StepsActionsTypes{
GET_ALL_STEPS="[Steps] Get All Steps",
GET_ALL_STEPS_SUCCESS="[Steps] Get All Steps success",
GET_ALL_STEPS_ERROR="[Steps] Get All Steps error",
ADD_STEP="[Steps] Add Step",
ADD_STEP_SUCCESS="[Steps] Add Step success",
ADD_STEP_ERROR="[Steps] Add Step error",
UPDATE_STEPS_ORDER="[Steps] update Steps order",
UPDATE_STEPS_ORDER_SUCCESS="[Steps] update Steps order success",
}

export class GetAllStepsAction implements Action{
    type: StepsActionsTypes=StepsActionsTypes.GET_ALL_STEPS;
    constructor(public payload: { id: number }){

    }
}
export class GetAllStepsActionSuccess implements Action{
    type: StepsActionsTypes=StepsActionsTypes.GET_ALL_STEPS_SUCCESS;
    constructor(public payload:any){ }
}

export class GetAllStepsActionError implements Action{
    type: StepsActionsTypes=StepsActionsTypes.GET_ALL_STEPS_ERROR;
    constructor(public payload:string){ }
}
//create steps
export class AddStepsAction implements Action{
    type: StepsActionsTypes=StepsActionsTypes.ADD_STEP;
    constructor(public payload: any[]){
    }
}
export class AddStepsActionSuccess implements Action{
    type: StepsActionsTypes=StepsActionsTypes.ADD_STEP_SUCCESS;
    constructor(public payload:any[]){ }
}

export class AddStepsActionError implements Action{
    type: StepsActionsTypes=StepsActionsTypes.ADD_STEP_ERROR;
    constructor(public payload:string){ }
}
//update steps order
export class UpdateStepsOrderAction implements Action{
    type: StepsActionsTypes=StepsActionsTypes.UPDATE_STEPS_ORDER;
    constructor(public payload: any){
    }
}
export class UpdateStepsOrderActionSuccess implements Action{
    type: StepsActionsTypes=StepsActionsTypes.UPDATE_STEPS_ORDER_SUCCESS;
    constructor(public payload:any[]){ }
}

export type StepsAction=
GetAllStepsAction | GetAllStepsActionSuccess | GetAllStepsActionError | AddStepsAction | AddStepsActionSuccess |
AddStepsActionError | UpdateStepsOrderAction | UpdateStepsOrderActionSuccess
  ;