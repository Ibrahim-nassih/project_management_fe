// spaces.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpacesState } from './spaces.reducer';

const selectSpacesState = createFeatureSelector<SpacesState>('spaces');
export const selectSpaces = createSelector(
  selectSpacesState,
  (state) => state.spaces
);

