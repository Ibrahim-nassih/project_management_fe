import { Step } from "src/app/core/models/spaces/step";
import {StepsAction, StepsActionsTypes } from "./steps.actions";
import { Action } from "@ngrx/store";

export enum StepsStateEnum{
    LOADING="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial",
    SUBMITED="submited",
    CREATED="created",
    UPDATED="updated"
}
export interface StepsState{
    steps:Step[],
    errorMessage:string,
    dataState:StepsStateEnum,
    currentStep:Step|undefined,
}
const initState:StepsState={
    steps:[],
    errorMessage:"",
    dataState:StepsStateEnum.INITIAL,
    currentStep:undefined,
}
export function stepsReducer(state=initState,action:Action):StepsState{
switch(action.type){
    case StepsActionsTypes.GET_ALL_STEPS:
        return {...state,dataState:StepsStateEnum.LOADING,steps:[]}
    case StepsActionsTypes.GET_ALL_STEPS_SUCCESS:
        return {...state,dataState:StepsStateEnum.LOADED,steps:(<StepsAction>action).payload}
    case StepsActionsTypes.GET_ALL_STEPS_ERROR:
        return {...state ,dataState:StepsStateEnum.ERROR,errorMessage:(<StepsAction>action).payload}
    case StepsActionsTypes.ADD_STEP:
        return {...state,dataState:StepsStateEnum.SUBMITED}
    case StepsActionsTypes.ADD_STEP_SUCCESS:
        return {...state, dataState:StepsStateEnum.CREATED,steps:[...state.steps,...(<StepsAction>action).payload]}
    case StepsActionsTypes.ADD_STEP_ERROR:
        return  {...state ,dataState:StepsStateEnum.ERROR,errorMessage:(<StepsAction>action).payload}
    case StepsActionsTypes.UPDATE_STEPS_ORDER:
        return {...state,dataState:StepsStateEnum.SUBMITED}
    case StepsActionsTypes.UPDATE_STEPS_ORDER_SUCCESS:
        return {...state,dataState:StepsStateEnum.UPDATED,steps:(<StepsAction>action).payload}

    default : return {...state}
}
}