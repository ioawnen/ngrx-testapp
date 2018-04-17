import { EntityState } from '@ngrx/entity';

import { PagesActionsUnion, PagesActionTypes } from '../actions/pages.actions';
import * as fromPage from './page.reducer';


export interface PagesState extends EntityState<fromPage.PageState> { }

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
