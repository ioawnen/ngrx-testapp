import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from "@ngrx/store";
import * as fromApp from "./application.reducer";
import * as fromPages from "./pages.reducer";
import * as fromElements from "./elements.reducer";

export interface State {
  app: fromApp.ApplicationState;
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer
};

// ##### ENTITY SELECTORS #####

// PAGES
export const selectPagesState = createFeatureSelector<fromPages.PagesState>('pages');
export const selectAllPages = createSelector(selectPagesState, fromPages.getAllPages);

// ELEMENTS
export const selectElementsState = createFeatureSelector<fromElements.ElementsState>('elements');
export const selectAllElements = createSelector(selectElementsState, fromElements.getAllElements);

// ##### ################ #####
