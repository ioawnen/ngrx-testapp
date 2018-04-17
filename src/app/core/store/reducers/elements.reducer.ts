import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { ElementsActionsUnion, ElementsActionTypes } from '../actions/elements.actions';
import * as fromElement from './element.reducer';


export interface ElementsState extends EntityState<fromElement.ElementState> { }

// See https://github.com/ngrx/platform/blob/master/docs/entity/adapter.md#adapter-collection-methods
export const elementsAdapter: EntityAdapter<ElementsState> = createEntityAdapter<ElementsState>();

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

export const getAllElements = (state: ElementsState) => state.entities;
