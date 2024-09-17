// leads.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { Lead } from 'src/app/core/models/spaces/lead';
import * as LeadsActions from './lead.actions';

export interface leadState {
  leads: Lead[];
  leadCreationSuccess: boolean;
  currentLead:Lead|undefined;
}

export const initialState: leadState = {
  leads: [],
  leadCreationSuccess: false,
  currentLead:undefined,
};

export const selectLeadCreationSuccess = (state: leadState) => state.leadCreationSuccess;
export const leadReducer = createReducer(
  initialState,
  on(LeadsActions.loadLeads, (state, {  }) => ({
    ...state,
    leads:[],
  })),
  on(LeadsActions.loadLeadsSuccess, (state, { leads }) => ({
    ...state,
    leads,
  })),
  on(LeadsActions.loadLeadsFailure, (state, { error }) => ({
    ...state,
    leads:[],
  })),
  on(LeadsActions.createLeadSuccess, (state, { lead }) => ({
    ...state,
    leads: [...state.leads, lead],
    currentLead:lead,
    leadCreationSuccess: true,
  })),
  on(LeadsActions.createLeadFailure, (state, { error }) => ({
    ...state,
    leadCreationSuccess: false, // Set to false on failure
  })),
  on(LeadsActions.deleteLead,(state,{lead})=>({
    ...state,
    currentLead:lead,
  })),
  on(LeadsActions.deleteLeadSuccess,(state,{})=>({
    ...state,
    leads:state.leads.filter((t)=>t.id !== state.currentLead?.id)
  }))
);
