// users.actions.ts

import { createAction, props } from '@ngrx/store';
import { UserLeadOps } from 'src/app/core/models/spaces/user';

// Action to load users
export const loadUsersNotInTeam = createAction(
'[Users] Load Selected Users',
props<{id:number}>()
);

// Action to load users success
export const loadUsersNotInTeamSuccess = createAction(
  '[Users] Load Selected Users Success',
  props<{ usersSelected: UserLeadOps[] }>()
);
// Action to load users error
export const loadUsersNotInTeamFailure = createAction(
    '[Leads] Load Selected Users Failure',
    props<{ error: any}>()
  );
