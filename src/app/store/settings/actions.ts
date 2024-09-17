import {createAction, props} from "@ngrx/store";

export const changeSetting = createAction('[Settings] Change Setting', props<{name: any}>());
