import { ElementActionsUnion, ElementActionTypes } from '../actions/element.actions';


export interface ElementState {
    hello: string
}

export const initialState: ElementState = {
    hello: 'world'
};

export function reducer(state = initialState, action: ElementActionsUnion): ElementState {
    switch (action.type) {
        case ElementActionTypes.RESET_ELEMENT: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}
