
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authenticator from './authenticator';

export default function createRootReducer( history ) {
    return combineReducers( {
        router: history ? connectRouter( history ) : null,
        authenticator
    } );
}
