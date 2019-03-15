import { TYPES } from '../actions/authenticator_actions';


const initialState = {
    receivedAuthUrls : []
}
export default function counter(state = initialState, action) {
    const payload = action.payload;

    switch (action.type) {
        case TYPES.LOGIN_TO_SAFE:
            return state;
        case TYPES.RECEIVE_AUTH_URL: {
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
