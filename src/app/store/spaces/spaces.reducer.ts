// spaces.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { Space } from 'src/app/core/models/spaces/space';
import * as SpacesActions from './spaces.actions';
export enum SpacesStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial",
}
export interface SpacesState {
  spaces: Space[];
  dataState:SpacesStateEnum,
  spaceCreationSuccess: boolean;
}

export const initialState: SpacesState = {
  spaces: [],
  dataState:SpacesStateEnum.INITIAL,
  spaceCreationSuccess: false,
};

export const selectSpaceCreationSuccess = (state: SpacesState) => state.spaceCreationSuccess;
export const spacesReducer = createReducer(
  initialState,
  on(SpacesActions.loadSpaces, (state, { }) => ({
    ...state,
    spaces:[],
    dataState:SpacesStateEnum.LOADING,
  })),
  on(SpacesActions.loadSpacesSuccess, (state, { spaces }) => ({
    ...state,
    spaces,
    dataState:SpacesStateEnum.LOADED,
  })),
  /*on(SpacesActions.createSpace, (state, { space }) => ({
    ...state,
    spaces: [...state.spaces, space],
  })),*/
  on(SpacesActions.createSpaceSuccess, (state, { space }) => ({
    ...state,
    spaces: [...state.spaces, space],
    spaceCreationSuccess: true,
  })),
  on(SpacesActions.createSpaceFailure, (state, { error }) => ({
    ...state,
    spaceCreationSuccess: false, // Set to false on failure
  }))
);
