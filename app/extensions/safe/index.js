import logger from 'logger';
import * as authenticatorActions from '@Extensions/safe/actions/authenticator_actions';
import { app } from 'electron';
import * as safeBrowserAppActions from '@Extensions/safe/actions/safeBrowserApplication_actions';
import { initSafeBrowserApp } from '@Extensions/safe/safeBrowserApplication';
import { getLibStatus } from '@Extensions/safe/auth-api/authFuncs';

import { parse as parseURL } from 'url';

import { setIsMock } from '@Extensions/safe/actions/safeBrowserApplication_actions';
import {
    startedRunningMock,
    isRunningSpectronTestProcess,
    isRunningUnpacked
} from '@Constants';
import { getSafeBrowserUnauthedReqUri } from '@Extensions/safe/safeBrowserApplication/init/initAnon';

import sysUri from '@Extensions/safe/ffi/sys_uri';
import { APP_INFO, PROTOCOLS } from '@Constants';
import { addTab } from '@Actions/tabs_actions';

import safeReducers from '@Extensions/safe/reducers';
import webviewPreload from '@Extensions/safe/webviewPreload';
import {
    handleRemoteCalls,
    remoteCallApis
} from '@Extensions/safe/handleRemoteCalls';

import { addFileMenus } from '@Extensions/safe/menus';
import { urlIsAllowedBySafe as urlIsValid } from '@Extensions/safe/utils/safeHelpers';
import { handleSafeBrowserStoreChanges } from './safeBrowserApplication';
import blockNonSAFERequests from './blockNonSafeReqs';
import registerSafeAuthProtocol from './protocols/safe-auth';
import registerSafeProtocol from './protocols/safe';
import setupRoutes from './server-routes';
import * as ffiLoader from './auth-api/ffiLoader';

import * as SafeBrowserActions from '@Extensions/safe/actions/safeBrowserApplication_actions';
const onWebviewPreload = store => webviewPreload( store );

const preAppLoad = () =>
{
    if ( isRunningUnpacked && process.platform === 'win32' ) return;
    app.setAsDefaultProtocolClient( 'safe-auth' );
    app.setAsDefaultProtocolClient( 'safe' );
    const isDefaultAuth = app.isDefaultProtocolClient( 'safe-auth' );
    const isDefaultSafe = app.isDefaultProtocolClient( 'safe' );
    logger.log( 'Registered to handle safe: urls ? ', isDefaultSafe );
    logger.log( 'registered to handle safe-auth: urls ?', isDefaultAuth );
};

/**
 * Adds menu items to the main peruse menus.
 * @param  {Object} store redux store
 * @param {Array} menusArray Array of menu objects to be parsed by electron.
 */
const addExtensionMenuItems = ( store, menusArray ) =>
{
    logger.log( 'Adding SAFE menus to browser' );

    const newMenuArray = [];

    menusArray.forEach( menu =>
{
        const label = menu.label;
        let newMenu = menu;

        if ( label.includes( 'File' ) )
        {
            newMenu = addFileMenus( store, newMenu );
        }

        newMenuArray.push( newMenu );
    } );

    return newMenuArray;
};

const addReducersToPeruse = () => safeReducers;

/**
 * Triggered when a remote call is received in the main process
 * @param  {Object} store redux store
 * @param  {Object} allAPICalls object containing all api calls available in main (for use via store remoteCalls)
 * @param  {[type]} theCall     call object with id, and info
 */
const onRemoteCallInBgProcess = ( store, allAPICalls, theCall ) => handleRemoteCalls( store, allAPICalls, theCall );

const getRemoteCallApis = () => remoteCallApis;

/**
 * add actions to the peruse browser container
 * @type {Object}
 */
const actionsForBrowser = {
    ...SafeBrowserActions
};

let theSafeBgProcessStore;

export const getSafeBackgroundProcessStore = () =>
{
    if ( !theSafeBgProcessStore )
    {
        throw new Error(
            `No background process store defined. ${
                process.mainModule.filename
            }'`
        );
    }

    return theSafeBgProcessStore;
};

const onInitBgProcess = async store =>
{
    logger.log( 'Registering SAFE Network Protocols' );
    try
    {
        theSafeBgProcessStore = store;

        registerSafeProtocol( store );
        registerSafeAuthProtocol( store );
        blockNonSAFERequests();
    }
    catch ( e )
    {
        logger.error( 'Load extensions error: ', e );
    }

    // load the auth/safe libs
    const theLibs = await ffiLoader.loadLibrary( startedRunningMock );

    let prevAuthLibStatus;

    store.subscribe( () =>
{
        const authLibStatus = getLibStatus();

        if ( authLibStatus && authLibStatus !== prevAuthLibStatus )
        {
            logger.log( 'Authenticator lib status: ', authLibStatus );
            prevAuthLibStatus = authLibStatus;
            store.dispatch(
                authenticatorActions.setAuthLibStatus( authLibStatus )
            );

            initSafeBrowserApp( store );
        }

        handleSafeBrowserStoreChanges( store );
    } );

    const mainAppInfo = APP_INFO.info;
    const authAppInfo = {
        ...mainAppInfo,
        id   : 'net.maidsafe.app.browser.authenticator',
        name : 'SAFE Browser Authenticator',
        icon : 'iconPath'
    };

    logger.log( 'Auth application info', authAppInfo );
    sysUri.registerUriScheme( authAppInfo, PROTOCOLS.SAFE_AUTH );
};

/**
 * on open of peruse application
 * @param  {Object} store redux store
 */
const onOpen = store =>
{
    logger.log( 'OnOpen: Setting mock in store. ', startedRunningMock );
    store.dispatch( setIsMock( startedRunningMock ) );
};

/**
 * on open of peruse application
 * @param  {Object} store redux store
 */
const onAppReady = store =>
{
    logger.log( 'OnAppReady: Setting mock in store. ', startedRunningMock );
    store.dispatch( setIsMock( startedRunningMock ) );
};

/**
 * Add middleware to Peruse redux store
 * @param  {Object} store redux store
 */
const middleware = store => next => action =>
{
    if ( isRunningSpectronTestProcess )
    {
        logger.log( 'ACTION:', action );
    }

    return next( action );
};

const parseSafeUri = function ( uri )
{
    logger.log( 'Parsing safe uri', uri );
    return uri.replace( '//', '' ).replace( '==/', '==' );
};

const waitForBasicConnection = ( theStore, timeout = 15000 ) => new Promise( resolve =>
{
    let timeLeft = timeout;
    const check = () =>
{
        timeLeft -= 500;
        const netState = theStore.getState().safeBrowserApp.networkStatus;
        logger.log( 'Waiting for basic connection...', netState );

        if ( netState !== null )
        {
            resolve();
        }
        else if ( timeLeft < 0 )
        {
            resolve();
        }
        else
        {
            setTimeout( check, 500 );
        }
    };

    setTimeout( check, 500 );
} );

/**
 * Trigger when receiving a URL param in the browser.
 *
 * Occurring in the main process.
 * @param  {Object} store redux store
 * @param  {String} url   url param
 */
const onReceiveUrl = async ( store, url ) =>
{
    const preParseUrl = parseSafeUri( url );
    const parsedUrl = parseURL( preParseUrl );

    logger.log( 'Did get a parsed url on the go', parsedUrl );

    if ( parsedUrl.protocol === 'safe-auth:' )
    {
        logger.log( 'this is a parsed url for auth', url );
        if ( url !== getSafeBrowserUnauthedReqUri() )
        {
            // otherwise EVERYTHING waits for basic connection...
            // so we know the libs are ready/ loaded
            // (and we assume, _that_ happens at the correc time due to browser hooks)
            await waitForBasicConnection( store );
        }
        store.dispatch( authenticatorActions.handleAuthUrl( url ) );
    }
    if ( parsedUrl.protocol === 'safe:' )
    {
        await waitForBasicConnection( store );

        logger.log( 'Handling safe: url', url );
        store.dispatch( addTab( { url, isActiveTab: true } ) );
    }
    // 20 is arbitrarily looong right now...
    else if (
        parsedUrl.protocol
        && parsedUrl.protocol.startsWith( 'safe-' )
        && parsedUrl.protocol.length > 20
    )
    {
        logger.log( 'Handling safe-???? url' );
        store.dispatch( safeBrowserAppActions.receivedAuthResponse( url ) );
    }

    if ( process.platform === 'darwin' && global.macAllWindowsClosed )
    {
        if ( url.startsWith( 'safe-' ) )
        {
            openWindow( store );
        }
    }
};

export default {
    addExtensionMenuItems,
    getRemoteCallApis,
    actionsForBrowser,
    addReducersToPeruse,
    onInitBgProcess,
    onReceiveUrl,
    onRemoteCallInBgProcess,
    onOpen,
    onAppReady,
    onWebviewPreload,
    preAppLoad,
    setupRoutes,
    middleware,
    urlIsValid
};
