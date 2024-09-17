import { Action } from "@ngrx/store";
import { SprintsAction, SprintsActionsTypes } from "./sprints.actions";
import { Sprint } from "src/app/core/models/spaces/sprint";

export enum SprintsStateEnum{
    LOADING="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial",
    SUBMITED="submited",
    CREATED="created",
}
export interface SprintsState{
    sprints:Sprint[],
    errorMessage:string,
    dataState:SprintsStateEnum,
    currentSprint:Sprint|undefined,
}
const initState:SprintsState={
    sprints:[],
    errorMessage:"",
    dataState:SprintsStateEnum.INITIAL,
    currentSprint:undefined,
}
export function sprintsReducer(state=initState,action:Action):SprintsState{
switch(action.type){
    //get all sprints
    case SprintsActionsTypes.GET_ALL_SPRINTS:
        return {...state,dataState:SprintsStateEnum.LOADING,sprints:[]}
    case SprintsActionsTypes.GET_ALL_SPRINTS_SUCCESS:
        return {...state,dataState:SprintsStateEnum.LOADED,sprints:(<SprintsAction>action).payload}
    case SprintsActionsTypes.GET_ALL_SPRINTS_ERROR:
        return {...state ,dataState:SprintsStateEnum.ERROR,sprints:(<SprintsAction>action).payload}
    //add sprint
    case SprintsActionsTypes.ADD_SPRINT:
        return {...state,dataState:SprintsStateEnum.SUBMITED,}
    case SprintsActionsTypes.ADD_SPRINT_SUCCESS:
        return {...state, dataState:SprintsStateEnum.CREATED,currentSprint:(<SprintsAction>action).payload,sprints:[...state.sprints,(<SprintsAction>action).payload]}
    case SprintsActionsTypes.ADD_SPRINT_ERROR:
        return  {...state ,dataState:SprintsStateEnum.ERROR,errorMessage:(<SprintsAction>action).payload}
    default : return {...state}
}
}