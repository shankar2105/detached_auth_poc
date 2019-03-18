// import { AUTH_TYPES } from '../actions/authenticator_actions';

const initialState = {
    receivedAuthUrls: []
};
export default function counter( state = initialState, action ) {
    const payload = action.payload;

    switch ( action.type ) {

        default:
            return state;
    }
}
