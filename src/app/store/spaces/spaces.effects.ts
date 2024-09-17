// spaces.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as SpacesActions from './spaces.actions';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import { Space } from 'src/app/core/models/spaces/space';

@Injectable()
export class SpacesEffects {
  loadSpaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpacesActions.loadSpaces),
      switchMap(() =>
        this.spacesService.getSpaces().pipe(
          map((spaces) => SpacesActions.loadSpacesSuccess({ spaces })),
          catchError((error) => of(/* Handle error here */))
        )
      )
    )
  );

  createSpace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpacesActions.createSpace),
      switchMap((space) =>
        this.spacesService.postspace(space.space).pipe(
          map((spaceCreated:any) =>{
            this.spacesService.closeModal();
            return SpacesActions.createSpaceSuccess( {space:spaceCreated} )
          }
            ),
          catchError((error) => of(SpacesActions.createSpaceFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private spacesService: SpacesService
  ) {}
}
