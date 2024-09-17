import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import * as fromSettings from './settings/reducers'
import * as fromUsers from './user/reducers'
import * as fromSpaces from './spaces/spaces.reducer'
import { SpacesState } from './spaces/spaces.reducer';
import { leadState } from "./leads/lead.reducer";
import * as fromLeads from './leads/lead.reducer'
import * as fromTeam from './team/team.reducers';
import * as fromUsersLeadOps from './usersLeadOps/users.reducers'
import * as fromTickets from './tickets/tickets.reducers';
import * as fromSteps from './steps/steps.reducers';
import * as fromTransactions from './transactions/transactions.reducers';
import * as fromSprints from './sprints/sprints.reducers'

export const reducers: ActionReducerMap<any> = {
    //router: fromRouter.routerReducer,
    settings: fromSettings.reducer,
    users: fromUsers.reducer,
    //user: fromUser.reducer,
    spaces:fromSpaces.spacesReducer,
    //leads
    leads:fromLeads.leadReducer,
    team:fromTeam.leadReducer,
    //users
    usersSelected:fromUsersLeadOps.UsersReducer,
    tasksState:fromTickets.ticketsReducer,
    stepsState:fromSteps.stepsReducer,
    //transactions
    transactionsState:fromTransactions.transactionsReducer,
    //sprints
    sprintsState:fromSprints.sprintsReducer

}

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state: any, action: any): any => {
        const result = reducer(state, action)
        console.groupCollapsed(action.type)
        console.groupEnd()
        return result
    }
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [logger] : []

export const getSettingsState = createFeatureSelector<any>('settings')
export const getUsersState = createFeatureSelector<any>('users')
export const getSettings = createSelector(getSettingsState, fromSettings.getSettings)
export const getUsers = createSelector(getUsersState, fromUsers.getUser)
//spaces
const selectSpacesState = createFeatureSelector<SpacesState>('spaces');
export const selectSpaces = createSelector(
  selectSpacesState,
  (state) => state.spaces
);
const createSpaceState = createFeatureSelector<SpacesState>('spaceCreationSuccess');
export const createdSpace = createSelector(
    createSpaceState,
    (state) => state.spaceCreationSuccess
  );
//leads
const selectLeadsState = createFeatureSelector<leadState>('leads');
export const selectLeads = createSelector(
    selectLeadsState,
  (state) => state.leads
);
export const currentLead = createSelector(
  selectLeadsState,
(state) => state.currentLead
);
//team
const selectTeamState = createFeatureSelector<fromTeam.teamState>('team');
export const selectTeam = createSelector(
    selectTeamState,
  (state) => state.team
);
export const TeamUsers = createSelector(
  selectTeamState,
(state) => state.users
);
export const TeamMemberships = createSelector(
  selectTeamState,
(state) => state.memberships
);
//users
const selectUsersState = createFeatureSelector<fromUsersLeadOps.usersState>('usersSelected');
export const selectUsers = createSelector(
    selectUsersState,
  (state) => state.usersSelected
);
//tickets selector
const selectTicketsState = createFeatureSelector<fromTickets.TicketsState>('tasksState');
export const tickets = createSelector(
  selectTicketsState,
  (state) => state.tickets
);
//steps
const selectStepsState = createFeatureSelector<fromSteps.StepsState>('stepsState');
export const steps = createSelector(
  selectStepsState,
  (state) => state.steps
);
//transactions
const selectTransactionsState = createFeatureSelector<fromTransactions.TransactionsState>('transactionsState');
export const transactions = createSelector(
  selectTransactionsState,
  (state) => state.transactions
);
// sprints
const selectSprintsState=createFeatureSelector<fromSprints.SprintsState>('sprintsState');
export const currentSprint=createSelector(
  selectSprintsState,
  (state) => state.currentSprint
)