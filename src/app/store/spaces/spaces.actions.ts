// spaces.actions.ts

import { createAction, props } from '@ngrx/store';
import { Space } from 'src/app/core/models/spaces/space';

// Action to load spaces
export const loadSpaces = createAction('[Spaces] Load Spaces');

// Action to load spaces success
export const loadSpacesSuccess = createAction(
  '[Spaces] Load Spaces Success',
  props<{ spaces: Space[] }>()
);

// Action to create a new space
export const createSpace = createAction(
  '[Spaces] Create Space',
  props<{ space: Space }>()
);
// Action to create a new space success
export const createSpaceSuccess = createAction(
    '[Spaces] Create Space Success',
    props<{ space: any }>()
  );
// Action to error create a new space
  export const createSpaceFailure = createAction(
    '[Spaces] Create Space Failure',
    props<{ error: any }>()
  );
