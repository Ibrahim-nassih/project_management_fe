// lead.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as LeadActions from './lead.actions';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';

@Injectable()
export class LeadsEffects {
    idSpace!:number;
    constructor(
      private actions$: Actions,
      private spacesService: SpacesService
    ) {}
  loadLead$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeadActions.loadLeads),
      switchMap(({id}) =>
      this.spacesService.getLeads(id).pipe(
          map((leads) => LeadActions.loadLeadsSuccess({ leads })),
          catchError((error) => of(/* Handle error here */LeadActions.loadLeadsFailure(error)))
        )
      )
    )
  );

  createLead$ = createEffect(() =>
  this.actions$.pipe(
    ofType(LeadActions.createLead),
    switchMap(({ lead }) =>
      this.spacesService.postLead(lead).pipe(
        map((leadCreated: any) => {
          // You should dispatch the createLeadSuccess action here
          this.spacesService.loadingCreateSteps();
          return LeadActions.createLeadSuccess({ lead: leadCreated });
        }),
        catchError((error) => of(LeadActions.createLeadFailure({ error })))
      )
    )
  )
);

//delete lead effect
deleteLead$ = createEffect(() =>
this.actions$.pipe(
  ofType(LeadActions.deleteLead),
  switchMap(({ lead }) =>
    this.spacesService.deleteLead(lead).pipe(
      map((payload) => {
        // You should dispatch the createLeadSuccess action here
        return LeadActions.deleteLeadSuccess({payload});
      }),
      catchError((error) => of())
    )
  )
)
);
/*
createLead$ = createEffect(() =>
  this.actions$.pipe(
    ofType(LeadActions.createLead),
    switchMap(({ lead }) =>
      this.spacesService.postLead(lead).pipe(
        map((leadCreated: any) => LeadActions.createLeadSuccess({ lead: leadCreated })),
        catchError((error) => of(LeadActions.createLeadFailure({ error })))
      )
    ),
    tap(() => {
      // Dispatch the loadLeads action after a successful lead creation
      this.actions$.dispatch(LeadActions.loadLeads({ idSpace: this.idSpace }));
    })
  )
);
 */

}
