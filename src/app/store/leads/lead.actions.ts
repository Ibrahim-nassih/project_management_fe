// lead.actions.ts

import { createAction, props } from '@ngrx/store';
import { Lead } from 'src/app/core/models/spaces/lead';

// Action to load leads
export const loadLeads = createAction(
'[Leads] Load Leads',
props<{id:number}>()
);

// Action to load leads success
export const loadLeadsSuccess = createAction(
  '[Leads] Load Leads Success',
  props<{ leads: Lead[] }>()
);
// Action to load leads error
export const loadLeadsFailure = createAction(
    '[Leads] Load Leads Failure',
    props<{ error: any}>()
  );

// Action to create a new lead
export const createLead = createAction(
  '[Leads] Create Lead',
  props<{ lead: Lead }>()
);
// Action to create a new lead success
export const createLeadSuccess = createAction(
    '[Leads] Create Lead Success',
    props<{ lead: any }>()
  );
// Action to error create a new lead
  export const createLeadFailure = createAction(
    '[Leads] Create Lead Failure',
    props<{ error: any }>()
  );

  // Action to delete a lead
export const deleteLead = createAction(
  '[Leads] delete Lead',
  props<{ lead: Lead }>()
);
// Action to create a new lead success
export const deleteLeadSuccess = createAction(
    '[Leads] delete Lead Success',
    props<{ payload: any }>()
  );
