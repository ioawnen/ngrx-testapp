import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PagesActionsUnion, PagesActionTypes } from '../actions/pages.actions';
import * as fromPage from './page.reducer';


export interface PagesState extends EntityState<fromPage.PageState> { }

// See https://github.com/ngrx/platform/blob/master/docs/entity/adapter.md#adapter-collection-methods
export const elementsAdapter: EntityAdapter<PagesState> = createEntityAdapter<PagesState>();

export const initialState: PagesState = {
    ids: [1],
    entities: { 1: fromPage.initialState }
};

export function reducer(state = initialState, action: PagesActionsUnion): PagesState {
    switch (action.type) {
        case PagesActionTypes.RESET_PAGES: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

export const getAllPages = (state: PagesState) => state.entities;
