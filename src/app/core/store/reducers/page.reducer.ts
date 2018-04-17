import { PageActionsUnion, PageActionTypes } from '../actions/page.actions';
import * as fromElements from './elements.reducer';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';


export interface PageState {
    elements: fromElements.ElementsState;
}

export const pageAdapter: EntityAdapter<PageState> = createEntityAdapter<PageState>();

export const initialState: PageState = {
    elements: fromElements.initialState
};

export function reducer(state = initialState, action: PageActionsUnion): PageState {
    switch (action.type) {
        case PageActionTypes.RESET_PAGE: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}
