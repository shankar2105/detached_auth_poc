// @flow
import { TYPES } from '../actions/authenticator_actions';
import type { Action } from './types';

const {
    LOGIN_TO_SAFE,
    RECEIVE_AUTH_URL
    }  = TYPES;

const initialState = {
    receivedAuthUrls : []
}
export default function counter(state: object = initialState, action: Action) {
    const payload = action.payload;

    switch (action.type) {
        case LOGIN_TO_SAFE:
            return state;
        case RECEIVE_AUTH_URL: {
            const updatedState = { ...state };
            const oldAuthUrls = state.receivedAuthUrls;
            updatedState.receivedAuthUrls = [ ...oldAuthUrls, payload ];

            return updatedState;
        }
        // case DECREMENT_COUNTER:
        //     return state - 1;
        default:
            return state;
    }
}
