/* eslint global-require: 1, flowtype-errors/show-errors: 0 */
import logger from 'logger';
import { configureStore } from '@Store/configureStore';
import {
    isRunningDevelopment,
    startedRunningMock,
    APP_INFO,
    PROTOCOLS
} from '@Constants';

// setup of auth APIs
import lib from './ffi/lib';
import authenticator from './ffi/authenticator';
import sysUri from './ffi/sys_uri';

const loadLibrary = (isMock = false, libPath) => lib.load(isMock, libPath);
const getLibStatus = () => authenticator.getLibStatus() && sysUri.isLibLoaded;

// import i18n from 'i18n';
// import { startedRunningMock } from '@Constants';
// import { I18N_CONFIG, startedRunningMock } from '@Constants';
const PID = process.pid;

logger.info("Welcome to the BG process it's ID is: ", PID);
// import manageRemoteCalls from './background.manageRemoteCalls';
// import { onInitBgProcess, getExtensionReduxMiddleware }  from './extensions';
// import setupServer from './server';
// import { remote } from 'electron';

window.thisIsTheBackgroundProcess = true;
//
// const initSafeServer = ( store ) =>
// {
//     // const server = setupServer();
//     // onInitBgProcess( server, store );
// };

const initBgProcess = async () => {
    // Add middleware from extensions here. TODO: this should be be unified somewhere.
    // const loadMiddlewarePackages = getExtensionReduxMiddleware() || [];
    const thisIsTheBackgroundProcess = true;
    const store = configureStore(undefined, thisIsTheBackgroundProcess);

    console.log('HERE I AMMMM', isRunningDevelopment, store.getState());

    store.subscribe(() => {
        logger.info('chchchchchaaaanges');
        // manageRemoteCalls( store );
    });

    // / STARTING AUTH:

    // load the auth/safe libs
    await loadLibrary(startedRunningMock);

    logger.info('THOSE LIBS ARE LOAAADDEDDDDDD');
    let prevAuthLibStatus;

    store.subscribe(() => {
        const authLibStatus = getLibStatus();

        if (authLibStatus && authLibStatus !== prevAuthLibStatus) {
            logger.verbose('Authenticator lib status: ', authLibStatus);
            prevAuthLibStatus = authLibStatus;
            // store.dispatch(
            //     authenticatorActions.setAuthLibStatus(authLibStatus)
            // );

            // initSafeBro§wserApp(store);
        }

        // handleSafeBrowserStoreChanges(store);
    });

    const mainAppInfo = APP_INFO.info;
    const authAppInfo = {
        ...mainAppInfo,
        id: 'net.maidsafe.app.browser.authenticator',
        name: 'SAFE Browser Authenticator',
        icon: 'iconPath'
    };

    logger.verbose('Auth application info', authAppInfo);
    //
    // try{
    //
    //     // sysUri.registerUriScheme(authAppInfo, PROTOCOLS.SAFE_LAUNCHER);
    // }
    // catch( e )
    // {
    //     logger.error('issues with sysuri')
    //     throw new Error(e)
    // }
};

initBgProcess();

window.onerror = function windowErrors(error) {
    logger.error('errorInBackgroundWindow', error);
};
