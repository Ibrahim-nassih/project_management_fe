import { Action } from "@ngrx/store";
export enum SprintsActionsTypes{
GET_ALL_SPRINTS="[Sprints] Get All Sprints",
GET_ALL_SPRINTS_SUCCESS="[Sprints] Get All Sprints success",
GET_ALL_SPRINTS_ERROR="[Sprints] Get All Sprints error",
ADD_SPRINT="[Sprints] Add Sprint",
ADD_SPRINT_SUCCESS="[Sprints] Add Sprint Success",
ADD_SPRINT_ERROR="[Sprints] Add Sprint Error",
}
//load sprint
export class GetAllSprintsAction implements Action{
    type: SprintsActionsTypes=SprintsActionsTypes.GET_ALL_SPRINTS;
    constructor(public payload: { id: number }){
    }
}
export class GetAllSprintsActionSuccess implements Action{
    type: SprintsActionsTypes=SprintsActionsTypes.GET_ALL_SPRINTS_SUCCESS;
    constructor(public payload:any){ }
}

export class GetAllSprintsActionError implements Action{
    type: SprintsActionsTypes= SprintsActionsTypes.GET_ALL_SPRINTS_ERROR;
    constructor(public payload:string){ }
}
//create sprint
export class CreateSprintAction implements Action{
    type: SprintsActionsTypes=SprintsActionsTypes.ADD_SPRINT;
    constructor(public payload: any){
    }
}
export class CreateSprintActionSuccess implements Action{
    type: SprintsActionsTypes=SprintsActionsTypes.ADD_SPRINT_SUCCESS;
    constructor(public payload:any){ }
}

export class CreateSprintActionError implements Action{
    type: SprintsActionsTypes=SprintsActionsTypes.ADD_SPRINT_ERROR;
    constructor(public payload:string){ }
}


export type SprintsAction=
GetAllSprintsAction | GetAllSprintsActionSuccess | GetAllSprintsActionError
  |CreateSprintAction|CreateSprintActionSuccess|CreateSprintActionError 
  ;