import {createAction, props} from "@ngrx/store";

export const LOGIN = createAction('[Auth] Login',props<{ payload: any }>());
export const LOGOUT = createAction('[Auth] LOGOUT');
export const LOCKSCREEN = createAction('[Auth] LockScreenAction');
export const LOGIN_UNSUCCESSFUL = createAction('[Auth] LoginUnsuccessful');
