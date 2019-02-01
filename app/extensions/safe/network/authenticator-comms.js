import logger from 'logger';
import { handleAuthUrl } from '@Extensions/safe/actions/authenticator_actions';
import { updateRemoteCall } from '@Actions/remoteCall_actions';
import { parseSafeAuthUrl } from '@Extensions/safe/utils/safeHelpers';
import { getCurrentStore } from '@Extensions/safe/safeBrowserApplication';
import { PROTOCOLS } from '@Constants';
import { SAFE } from '@Extensions/safe/constants';

import { parse as parseURL } from 'url';

export const handleAuthentication = (passedStore, uriOrReqObject) => {
    if (
        typeof uriOrReqObject !== 'string' &&
        typeof uriOrReqObject.uri !== 'string'
    ) {
        throw new Error('Auth URI should be provided as a string');
    }

    passedStore.dispatch(handleAuthUrl(uriOrReqObject));
};

export const attemptReconnect = (passedStore, appObj) => {
    setTimeout(() => {
        logger.log('Attempting reconnect...');
        appObj.reconnect();

        if (
            passedStore.getState().safeBrowserApp.networkStatus ===
            SAFE.NETWORK_STATE.DISCONNECTED
        ) {
            attemptReconnect(passedStore);
        }
    }, 5000);
};

export const handleSafeAuthUrlReception = async res => {
    if (typeof res !== 'string') {
        throw new Error('Response url should be a string');
    }

    let authUrl = null;
    logger.log('Received URL response', res);

    if (parseURL(res).protocol === `${PROTOCOLS.SAFE_AUTH}:`) {
        authUrl = parseSafeAuthUrl(res);

        if (authUrl.action === 'auth') {
            return handleAuthentication(res);
        }
    }
};

/**
 * Reconnect the application with SAFE Network when disconnected
 */
export const reconnect = app => {
    if (!app) {
        return Promise.reject(new Error('Application not initialised'));
    }
    return app.reconnect();
};

/**
 * Reply to a remoteCall requeting auth from a webview DOM API.
 * (ClientType === 'WEB' )
 * @param  {Object} request request object from ipc.js
 */
export const replyToRemoteCallFromAuth = request => {
    logger.log('Replying to RemoteCall From Auth');
    const store = getCurrentStore();
    const state = store.getState();
    const remoteCalls = state.remoteCalls;

    const remoteCallToReply = remoteCalls.find(theCall => {
        if (theCall.name !== 'authenticateFromUriObject') return;

        const theRequestFromCall = theCall.args[0].uri;

        return theRequestFromCall === request.uri;
    });

    store.dispatch(
        updateRemoteCall({
            ...remoteCallToReply,
            done: true,
            inProgress: true,
            response: request.res
        })
    );
};
