import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ElementActionTypes {
    RESET_ELEMENT = '[Element] Reset Element',
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class ResetElement implements Action {
    readonly type = ElementActionTypes.RESET_ELEMENT;

    constructor(public payload?: any) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ElementActionsUnion = ResetElement;
