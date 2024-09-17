// team.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { Team } from 'src/app/core/models/spaces/team';
import * as teamActions from './team.actions';
import { UserLeadOps } from 'src/app/core/models/spaces/user';
import { Membership } from 'src/app/core/models/spaces/membership';

export interface teamState {
  users:UserLeadOps[];
  team: Team|undefined;
  TeamCreationSuccess: boolean;
  memberships:Membership[]
}

export const initialState: teamState = {
  team:undefined,
  TeamCreationSuccess: false,
  users:[],
  memberships:[]
};

export const selectTeamCreationSuccess = (state: teamState) => state.TeamCreationSuccess;
export const leadReducer = createReducer(
  initialState,
  on(teamActions.loadTeam, (state, {  }) => ({
    ...state,
    team:undefined,
  })),
  on(teamActions.loadTeamSuccess, (state, { team }) => ({
    ...state,
    team:team
  })),
  on(teamActions.loadTeamFailure, (state, { error }) => ({
    ...state,
    team:undefined,
  })),
  on(teamActions.createTeamSuccess, (state, { team }) => ({
    ...state,
    team: team,
    leadCreationSuccess: true,
  })),
  on(teamActions.createTeamFailure, (state, { error }) => ({
    ...state,
    leadCreationSuccess: false, // Set to false on failure
  })),
  on(teamActions.loadTeamUsers,(state,{})=>
  ({...state,users:[]})),
  on(teamActions.loadTeamUsersSuccess,(state,{ users })=>({
    ...state,users
  })),
  on(teamActions.loadTeamUsersFailure,(state,{error})=>({
    ...state,users:[]
  })),
  //load memberships
  on(teamActions.loadTeamMemberships,(state,{})=>({
    ...state,memberships:[]
  })),
  on(teamActions.loadTeamMembershipsSuccess,(state,{memberships})=>({
    ...state,memberships
  })),
  on(teamActions.loadTeamMembershipsFailure,(state,{error})=>({
    ...state,memberships:[]
  })),
  on(teamActions.addMembersAction, (state, { members }) => ({
    ...state,
  })),

  on(teamActions.addMembersActionsSuccess, (state, { members }) => ({
    ...state,
    memberships: [...state.memberships, ...members], // Add the new members to the existing list.
  })
  )
);
