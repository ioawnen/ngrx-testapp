import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from "@ngrx/store";
import * as fromApp from "./application.reducer";

export interface State {
  app: fromApp.ApplicationState;
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer
};
