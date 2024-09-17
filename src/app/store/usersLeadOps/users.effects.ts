// users.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as UsersActions from './users.action';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';

@Injectable()
export class UsersLeadEffects {
  loadLead$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsersNotInTeam),
      switchMap(({id}) =>
      this.spacesService.getUsersNotInTeam(id).pipe(
          map((usersSelected) => UsersActions.loadUsersNotInTeamSuccess({ usersSelected })),
          catchError((error) => of(/* Handle error here */UsersActions.loadUsersNotInTeamFailure(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private spacesService: SpacesService
  ) {}
}
