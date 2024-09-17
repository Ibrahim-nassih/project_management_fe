import {createReducer, createSelector, on} from "@ngrx/store";
import * as SettingsActions from '../settings/actions';

export const initialState: object = {
    authProvider: 'jwt', // firebase, jwt
    logo: 'ClinOps',
}


export const reducer = createReducer(
    initialState,
    on(SettingsActions.changeSetting, (state, { name }) => ({ logo: name }))
);
export const getSettings = (state: any) => state
