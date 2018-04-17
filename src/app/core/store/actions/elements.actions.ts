import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ElementsActionTypes {
    RESET_ELEMENTS = '[Elements] Reset Elements',
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class ResetElements implements Action {
    readonly type = ElementsActionTypes.RESET_ELEMENTS;

    constructor(public payload?: any) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ElementsActionsUnion = ResetElements;
