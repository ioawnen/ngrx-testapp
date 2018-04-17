import { EntityState } from '@ngrx/entity';

import { ElementsActionsUnion, ElementsActionTypes } from '../actions/elements.actions';
import * as fromElement from './element.reducer';


export interface ElementsState extends EntityState<fromElement.ElementState> { }

export const initialState: ElementsState = {
    ids: [1, 2],
    entities: { 1: fromElement.initialState, 2: fromElement.initialState }
};

export function reducer(state = initialState, action: ElementsActionsUnion): ElementsState {
    switch (action.type) {
        case ElementsActionTypes.RESET_ELEMENTS: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}
