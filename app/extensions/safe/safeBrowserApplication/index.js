import _ from 'lodash';

import {
    setCurrentStore,
    getIsAuthing,
    setIsAuthing,
    // getSafeBrowserAppObject,
    // getCurrentStore,
    // clearAppObj,
    // safeBrowserAppIsAuthing,
    safeBrowserAppIsAuthed,
    // safeBrowserAppIsConnected,
    // safeBrowserAppAuthFailed
} from '@Extensions/safe/safeBrowserApplication/theApplication';

import {
    manageReadStateActions,
    manageSaveStateActions
} from '@Extensions/safe/safeBrowserApplication/manageBrowserConfig';

import {
    isCI,
    startedRunningMock,
    isRunningSpectronTestProcessingPackagedApp
} from '@Constants';

import { SAFE } from '@Extensions/safe/constants';
import {
    setAppStatus,
    receivedAuthResponse
} from '@Extensions/safe/actions/safeBrowserApplication_actions';
import {
    addNotification,
    clearNotification
} from '@Actions/notification_actions';
import logger from 'logger';
import { initAnon } from '@Extensions/safe/safeBrowserApplication/init/initAnon';
import initAuthedApplication from '@Extensions/safe/safeBrowserApplication/init/initAuthed';

// let safeBrowserAppObject;
let tempSafeBrowserObjectUntilAuthed;

/**
 * Setup actions to be triggered in response to store state changes.
 * @param  { ReduxStore } store [description]
 */
export const handleSafeBrowserStoreChanges = store => {
    // TODO check why we need this vs passing it around
    setCurrentStore( store );

    // lets set state for all funcs to have the same reference.
    manageSaveStateActions( store );
    manageReadStateActions( store );
    manageAuthorisationActions( store );
};

/**
 * Everything we need to do to start the SafeBrowser App for fetching at least.
 * @param  {object} passedStore redux store
 */
export const initSafeBrowserApp = async ( passedStore, authorise = false ) => {
    const defaultOptions = {
        enableExperimentalApis : false,
        forceUseMock           : startedRunningMock
    };

    const safeBrowserAppState = passedStore.getState().safeBrowserApp;
    const isMock = safeBrowserAppState.isMock;
    const experimentsEnabled = safeBrowserAppState.experimentsEnabled;

    const options = {
        ...defaultOptions,
        forceUseMock           : isMock,
        enableExperimentalApis : experimentsEnabled
    };

    // TODO: here check store and what is desired from a connection!
    logger.log( 'Initialising Safe Browser App with options:', options );
    try
    {
        if ( authorise )
        {
            tempSafeBrowserObjectUntilAuthed = await initAuthedApplication(
                passedStore,
                options
            );
        }
        else
        {
            tempSafeBrowserObjectUntilAuthed = await initAnon(
                passedStore,
                options
            );
        }
    }
    catch ( e )
    {
        // denied authentication is handled in `authFromStoreResponse`

        console.error( e );
        throw new Error( 'Safe Browser init failed' );
    }
};

const urisUnderAuth = [];

const authFromStoreResponse = async ( res, store ) => {
    logger.log( 'Authing from a store-passed response.', Date.now(), res );

    if ( !res.startsWith( 'safe' ) )
    {
        // it's an error!
        logger.error( res );
        store.dispatch(
            addNotification( {
                text : `Unable to connect to the network. ${ res }`,
                type : 'error'
            } )
        );

        store.dispatch(
            setAppStatus(
                SAFE.APP_STATUS.AUTHORISATION_FAILED
            )
        );

        return;
    }

    if ( urisUnderAuth.includes( res ) )
    {
        return;
    }

    // TODO: This logic shuld be in BG process for safeBrowserState.
    try
    {
        urisUnderAuth.push( res );

        if ( tempSafeBrowserObjectUntilAuthed )
        {
            const app = tempSafeBrowserObjectUntilAuthed;
            setSafeBrowserAppObject( app );
            tempSafeBrowserObjectUntilAuthed = null;
        }

        const newApp = await safeBrowserAppObject.auth.loginFromUri(
            res
        );

        setSafeBrowserAppObject( newApp );

        if ( newApp.auth.registered )
        {
            store.dispatch(
                setAppStatus( SAFE.APP_STATUS.AUTHORISED )
            );
        }
    }
    catch ( err )
    {
        if ( store )
        {
            let message = err.message;

            if ( err.message.includes( 'AuthDenied' ) )
            {
                initSafeBrowserApp( store );
                message = 'The Safe Browser Application was denied authentication. You cannot save/read browser data from the network.';
            }

            if ( err.message.startsWith( 'Unexpected (probably a logic' ) )
            {
                message = 'Check your current IP address matches your registered address at invite.maidsafe.net';
            }

            if ( isRunningSpectronTestProcessingPackagedApp || isCI ) return;

            store.dispatch(
                addNotification( {
                    text      : message,
                    onDismiss : clearNotification
                } )
            );
        }

        logger.error( err.message || err );
        logger.error( 'authFromStoreResponse error >>>>>>>>>>>>>' );
    }
};

let debouncedPassAuthUriToStore;
let prevSafeBrowserAppAuthState;
let prevSafeBrowserAppExperimentalState;
/**
 * Handle triggering actions and related functionality for Authorising on the SAFE netowrk
 * based upon the application auth state
 * @param  {Object} state Application state (from redux)
 */
const manageAuthorisationActions = async store => {
    // TODO: Do this via aliased action.

    // const
    const safeBrowserState = store.getState().safeBrowserApp;

    debouncedPassAuthUriToStore = debouncedPassAuthUriToStore
        || _.debounce( responseUri => {
            store.dispatch( receivedAuthResponse( '' ) );
            authFromStoreResponse( responseUri, store );
            setIsAuthing( false );
        }, 500 );

    if ( safeBrowserState.appStatus === SAFE.APP_STATUS.TO_AUTH && !getIsAuthing() )
    {
        // cannot rely solely on store as can change in other ways
        // before this is updated properly. This prevents that.
        setIsAuthing( true );

        store.dispatch(
            setAppStatus( SAFE.APP_STATUS.AUTHORISING )
        );

        const authorise = true;
        initSafeBrowserApp( store, authorise );

        return;
    }

    // update check for auth state.
    if ( prevSafeBrowserAppAuthState !== safeBrowserAppIsAuthed() )
    {
        // if it was authed...
        if ( prevSafeBrowserAppAuthState )
        {
            // start an anonymous app
            initSafeBrowserApp( store );
        }

        prevSafeBrowserAppAuthState = safeBrowserAppIsAuthed();

        return;
    }

    if (
        safeBrowserState.authResponseUri
        && safeBrowserState.authResponseUri.length
    )
    {
        // TODO: This should 'clear' or somesuch....
        // OR: Only run if not authed?
        debouncedPassAuthUriToStore( safeBrowserState.authResponseUri );
    }

    const experimentsEnabled = safeBrowserState.experimentsEnabled;

    if ( experimentsEnabled !== prevSafeBrowserAppExperimentalState )
    {
        prevSafeBrowserAppExperimentalState = experimentsEnabled;
        initSafeBrowserApp( store, safeBrowserAppIsAuthed() );
    }
};
