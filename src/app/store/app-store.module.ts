import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {reducers , metaReducers} from "./reducers";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./user/effects";
import {EntityCollectionReducerMethodsFactory, EntityDataModule, PersistenceResultHandler} from "@ngrx/data";
import {entityConfig} from "./entity-metadata";
import {AdditionalEntityCollectionReducerMethodsFactory} from "./entity/additional-entity-collection-reducer-methodsfactory";
import {AdditionalPersistenceResultHandler} from "./entity/additional-persistence-result-handler";
import { SpacesEffects } from "./spaces/spaces.effects";
import { LeadsEffects } from "./leads/lead.effects";
import { TeamEffects } from "./team/team.effects";
import {UsersLeadEffects} from './usersLeadOps/users.effects'
import { TicketsEffects } from "./tickets/tickets.effects";
import { StepsEffects } from "./steps/steps.effects";
import { TransactionsEffects } from "./transactions/transactions.effects";
import { SprintsEffects } from "./sprints/sprints.effects";


@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([UserEffects,SpacesEffects,LeadsEffects,
        TeamEffects,UsersLeadEffects,TicketsEffects,StepsEffects,TransactionsEffects,SprintsEffects]),
        EntityDataModule.forRoot(entityConfig),
    ],
    providers: [
        {
            provide: EntityCollectionReducerMethodsFactory,
            useClass: AdditionalEntityCollectionReducerMethodsFactory,
        },
        { provide: PersistenceResultHandler, useClass: AdditionalPersistenceResultHandler },
    ],
})
export class AppStoreModule {
    constructor() {

    }
}
