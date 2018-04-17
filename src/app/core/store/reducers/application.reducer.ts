import { AppActionsUnion, AppActionTypes } from '../actions/application.actions';
import * as fromPages from './pages.reducer';

export interface ApplicationState {
    pages: fromPages.PagesState;
    applicationName: string;
};

const initialState: ApplicationState = {
    pages: fromPages.initialState,
    applicationName: 'example_application_name'
};

export function reducer(state = initialState, action: AppActionsUnion): ApplicationState {
    switch (action.type) {
        case AppActionTypes.RESET_APP: {
            return initialState
        }

        default: {
            return state;
        }
    }
}
