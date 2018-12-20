// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import authenticator from './authenticator';

export default function createRootReducer(history: History) {
    return combineReducers({
        router: history ? connectRouter(history) : null,
        authenticator,
        counter
    });
}
