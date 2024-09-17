// team.actions.ts

import { createAction, props } from '@ngrx/store';
import { Membership } from 'src/app/core/models/spaces/membership';
import { Team } from 'src/app/core/models/spaces/team';
import { UserLeadOps } from 'src/app/core/models/spaces/user';

// Action to load team
export const loadTeam = createAction(
'[Team] Load Team',
props<{id:number}>()
);

// Action to load team success
export const loadTeamSuccess = createAction(
  '[Team] Load Team Success',
  props<{ team: Team }>()
);
// Action to error to load team
export const loadTeamFailure = createAction(
    '[Team] Load team Failure',
    props<{ error: any }>()
  );
// Action to create a new team
export const createTeam = createAction(
  '[Team] Create Team',
  props<{ team: Team }>()
);
// Action to create a new team success
export const createTeamSuccess = createAction(
    '[Team] Create Lead Success',
    props<{ team: Team }>()
  );
// Action to error create a new team
  export const createTeamFailure = createAction(
    '[Team] Create team Failure',
    props<{ error: any }>()
  );

//load team users
export const loadTeamUsers = createAction(
  '[Team] Load Team Users',
  props<{id:number}>()
  );
  
  // Action to load team users success
  export const loadTeamUsersSuccess = createAction(
    '[Team] Load Team Users Success',
    props<{ users: UserLeadOps[] }>()
  );
  // Action to error to load team users
  export const loadTeamUsersFailure = createAction(
      '[Team] Load Team Users Failure',
      props<{ error: any }>()
    );
  //load team memberships
export const loadTeamMemberships = createAction(
  '[Team] Load Team Memberships',
  props<{id:number}>()
  );
  
  // Action to load team users success
  export const loadTeamMembershipsSuccess = createAction(
    '[Team] Load Team Memberships Success',
    props<{ memberships: Membership[] }>()
  );
  // Action to error to load team users
  export const loadTeamMembershipsFailure = createAction(
      '[Team] Load Team Memberships Failure',
      props<{ error: any }>()
    );

  // add members to team
  export const addMembersAction=createAction('[Team] add Members to Team', props< { members: any[] }>())
  export const addMembersActionsSuccess=createAction('[Team] add members success',props<{ members:Membership[]}>())
