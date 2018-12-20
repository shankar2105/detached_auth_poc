import { createActions } from 'redux-actions';
import { createAliasedAction } from 'electron-redux';
import {callIPC} from '@FFI/ipc';

// import {AUTH_CONSTANTS} from '@Constants';
import authenticator from '@FFI/authenticator';

import logger from 'logger';

export const TYPES = {
    SET_AUTH_LIB_STATUS     : 'SET_AUTH_LIB_STATUS',
    SET_AUTH_HANDLE         : 'SET_AUTH_HANDLE',
    SET_AUTH_NETWORK_STATUS : 'SET_AUTH_NETWORK_STATUS',
    ADD_AUTH_REQUEST        : 'ADD_AUTH_REQUEST',
    REMOVE_AUTH_REQUEST     : 'REMOVE_AUTH_REQUEST',
    HANDLE_AUTH_URL         : 'HANDLE_AUTH_URL',
    SET_RE_AUTHORISE_STATE  : 'SET_RE_AUTHORISE_STATE',
    SET_IS_AUTHORISED_STATE : 'SET_IS_AUTHORISED_STATE',

    LOGIN_TO_SAFE : 'LOGIN_TO_SAFE'
    , RECEIVE_AUTH_URL : 'RECEIVE_AUTH_URL'
};

export const {
    setAuthLibStatus,
    setAuthHandle,
    setAuthNetworkStatus,
    addAuthRequest,
    removeAuthRequest,
    setReAuthoriseState,
    setIsAuthorisedState

    // ,receiveAuthUrl

} = createActions(
    TYPES.SET_AUTH_LIB_STATUS,
    TYPES.SET_AUTH_HANDLE,
    TYPES.SET_AUTH_NETWORK_STATUS,
    TYPES.ADD_AUTH_REQUEST,
    TYPES.REMOVE_AUTH_REQUEST,
    TYPES.SET_RE_AUTHORISE_STATE,
    TYPES.SET_IS_AUTHORISED_STATE
    //
    // ,TYPES.RECEIVE_AUTH_URL
);

const triggerAuthDecoding = ( reqObject ) =>
{
    if ( !window || !window.thisIsTheBackgroundProcess ) return;

    callIPC.enqueueRequest( reqObject );

    return reqObject;
};

export const receiveAuthUrl = createAliasedAction(
    TYPES.RECEIVE_AUTH_URL,
    ( reqObject ) => (
        {
        // the real action
            type    : TYPES.RECEIVE_AUTH_URL,
            payload : triggerAuthDecoding( reqObject ),
        } ),
);


const effectLoginToSafe = ( { secret, password } ) =>
{
    if ( !window || !window.thisIsTheBackgroundProcess ) return;
    logger.info('Effecting SAFE Login')

    return authenticator.login( secret, password );
    // callIPC.enqueueRequest( loginDetails );
};


export const loginToSafe = createAliasedAction(
    TYPES.LOGIN_TO_SAFE,
    ( loginDetails ) => {
        console.log('logindeets in aliassss', loginDetails)
        return {
            // the real action
            type    : TYPES.LOGIN_TO_SAFE,
            payload : effectLoginToSafe( loginDetails ),
        }
    },
);
