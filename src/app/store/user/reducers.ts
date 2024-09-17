import {User} from "../../core/models/user";
import {createReducer, on} from "@ngrx/store";
import * as UserActions from '../user/actions';

export const initialState: User = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    authorized: false,
    screenLocked: false,
}


export const reducer = createReducer(
    initialState,
    on(UserActions.LOGIN, state => ({}))

);
export const getUser = (state: any) => state
