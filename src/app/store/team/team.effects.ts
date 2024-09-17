// team.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as teamActions from './team.actions';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import { Store } from '@ngrx/store';
import { selectTeam } from '../reducers';
import * as usersLeadctions from 'src/app/store/usersLeadOps/users.action'

@Injectable()
export class TeamEffects {
    idSpace!:number;
    team!:any;
    constructor(
      private actions$: Actions,
      private spacesService: SpacesService,
      private store :Store
    ) {
      this.store.select(selectTeam).subscribe((data)=>this.team=data);
    }
  loadTeam$ = createEffect(() =>
    this.actions$.pipe(
      ofType(teamActions.loadTeam),
      switchMap(({id}) =>
      this.spacesService.getTeam(id).pipe(
          map((team:any) => teamActions.loadTeamSuccess({ team }),this.idSpace=id),
          catchError((error) => of(teamActions.loadTeamFailure(error)))
        )
      )
    )
  );
//LeadActions.loadLeads(this.idSpace)
  createTeam$ = createEffect(() =>
    this.actions$.pipe(
      ofType(teamActions.createTeam),
      switchMap(({ team }) =>
        this.spacesService.postTeam(team).pipe(
          map((teamCreated) =>{
            this.idSpace=teamCreated.space;
            return teamActions.createTeamSuccess({team:teamCreated}) })
          ,
          catchError((error) => of(teamActions.createTeamFailure({ error })))
        )
      ),
      tap(() => {
        this.spacesService.closeModal();
        // Dispatch actions after a successful add members
        this.store.dispatch(usersLeadctions.loadUsersNotInTeam({ id: this.idSpace }));
      })
    )
  );

//load team users
loadTeamUsers$ = createEffect(() =>
this.actions$.pipe(
  ofType(teamActions.loadTeamUsers),
  switchMap(({id}) =>
  this.spacesService.getTeamUsers(id).pipe(
      map((users) => teamActions.loadTeamUsersSuccess({ users }),),
      catchError((error) => of(teamActions.loadTeamUsersFailure(error)))
    )
  )
)
);
//load team memberships
loadTeamMemberships$ = createEffect(() =>
this.actions$.pipe(
  ofType(teamActions.loadTeamMemberships),
  switchMap(({id}) =>
  this.spacesService.getMembershipTeam(id).pipe(
      map((memberships) => teamActions.loadTeamMembershipsSuccess({ memberships }),),
      catchError((error) => of(teamActions.loadTeamMembershipsFailure(error)))
    )
  )
)
);
// add members effects
addMembersToTeamEffect$ = createEffect(() =>
  this.actions$.pipe(
    ofType(teamActions.addMembersAction),
    switchMap(({ members }) =>
      this.spacesService.addmembers(members).pipe(
        map((membersResponse: any) => teamActions.addMembersActionsSuccess({ members: membersResponse })),
        catchError((error) => of(/* You can handle the error here if needed */))
      )
    ),
    tap(() => {
      this.spacesService.closeModal();
      // Dispatch actions after a successful add members
      this.store.dispatch(teamActions.loadTeamUsers({ id: this.team.space }));
      this.store.dispatch(usersLeadctions.loadUsersNotInTeam({ id: this.team.space }));
    })
  )
);

}
