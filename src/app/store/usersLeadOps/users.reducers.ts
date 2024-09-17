// team.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { UserLeadOps } from 'src/app/core/models/spaces/user';
import * as usersActions from './users.action';

export interface usersState {
    usersSelected: UserLeadOps[];
}

export const initialState: usersState = {
    usersSelected:[],
};

export const UsersReducer = createReducer(
  initialState,
  on(usersActions.loadUsersNotInTeam, (state, {  }) => ({
    ...state,
    usersSelected:[],
  })),
  on(usersActions.loadUsersNotInTeamSuccess, (state, { usersSelected }) => ({
    ...state,
    usersSelected,
  })),
  on(usersActions.loadUsersNotInTeamFailure, (state, { error }) => ({
    ...state,
  })),
  
);
