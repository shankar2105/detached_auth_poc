import path from 'path';
import fs from 'fs-extra';
import { remote, app } from 'electron';
import pkg from '@Package';
import Enum from 'enum';

// import getPort from 'get-port';

// const { platform } = process;
// const OSX = 'darwin';
// const LINUX = 'linux';
// const WINDOWS = 'win32';

const allPassedArgs = process.argv;

let shouldRunMockNetwork = fs.existsSync(
    path.resolve(__dirname, '..', 'startAsMock')
);

let hasDebugFlag = false;

// placeholder
export const isRunningDevelopment = false;

export const isRunningSpectronTestProcess = process.env.SPECTRON_TEST;
export const isRunningPackaged =
    app ? app.isPackaged : remote.getGlobal('isRunningPackaged')

export const isRunningUnpacked = !isRunningPackaged;
export const isRunningSpectronTestProcessingPackagedApp =
    isRunningSpectronTestProcess && isRunningPackaged;

if (allPassedArgs.includes('--mock')) {
    shouldRunMockNetwork = true;
}

if (allPassedArgs.includes('--live')) {
    shouldRunMockNetwork = false;
}

// override for spectron dev mode
if (
    isRunningSpectronTestProcess &&
    !isRunningSpectronTestProcessingPackagedApp
) {
    shouldRunMockNetwork = true;
}

if (allPassedArgs.includes('--debug')) {
    hasDebugFlag = true;
}

// let forcedPort;
// if (allPassedArgs.includes('--port')) {
//   const index = allPassedArgs.indexOf('--port');
//
//   forcedPort = allPassedArgs[index + 1];
// }

export const shouldStartAsMockFromFlagsOrPackage = shouldRunMockNetwork;

export const TESTENV = process.env.NODE_ENV;

export const env = shouldStartAsMockFromFlagsOrPackage
    ? 'development'
    : process.env.NODE_ENV || 'production';
export const isCI =
    remote && remote.getGlobal ? remote.getGlobal('isCI') : process.env.CI;
export const travisOS = process.env.TRAVIS_OS_NAME || '';
// other considerations?
export const isHot = process.env.HOT || 0;

// const startAsMockNetwork = shouldStartAsMockFromFlagsOrPackage;
const startAsMockNetwork = shouldStartAsMockFromFlagsOrPackage;

// only to be used for inital store setting in main process. Not guaranteed correct for renderers.
export const startedRunningMock =
    remote && remote.getGlobal
        ? remote.getGlobal('startedRunningMock')
        : startAsMockNetwork || /^dev/.test(env);
export const startedRunningProduction = !startedRunningMock;
export const isRunningNodeEnvTest = /^test/.test(env);
export const isRunningDebug = hasDebugFlag || isRunningSpectronTestProcess;
export const inRendererProcess = typeof window !== 'undefined';
export const inMainProcess = typeof remote === 'undefined';

// Set global for tab preload.
// Adds app folder for asar packaging (space before app is important).
// const preloadLocation = isRunningUnpacked ? '' : '../';

/**
 * retrieve the safe node lib path, either as a relative path in the main process,
 * or from the main process global
 * @return {[type]} [description]
 */
const safeNodeLibPath = () => {
    // only exists in render processes
    if (remote && remote.getGlobal && !isRunningNodeEnvTest) {
        return remote.getGlobal('SAFE_NODE_LIB_PATH');
    }

    return path.resolve(
        __dirname,
        safeNodeAppPathModifier,
        'node_modules/@maidsafe/safe-node-app/src/native'
    );
};

// HACK: Prevent jest dying due to no electron globals
const safeNodeAppPath = () => {
    if (!remote || !remote.app) {
        return '';
    }

    return isRunningUnpacked
        ? [remote.process.execPath, `${remote.getGlobal('appDir')}/main.prod.js`]
        : [remote.app.getPath('exe')];
};

let safeNodeAppPathModifier = '';

if (isRunningPackaged && !isRunningNodeEnvTest) {
    safeNodeAppPathModifier = '../app.asar.unpacked/';
}

export const I18N_CONFIG = {
    locales: ['en'],
    directory: path.resolve(__dirname, 'locales'),
    objectNotation: true
};

export const PROTOCOLS = {
    SAFE: 'safe',
    SAFE_LAUNCHER: 'safe-another-auth',
    SAFE_AUTH: 'safe-auth',
    SAFE_LOGS: 'safe-logs',
    INTERNAL_PAGES: 'safe-browser'
};

export const INTERNAL_PAGES = {
    HISTORY: 'history',
    BOOKMARKS: 'bookmarks'
};

// const getRandomPort = async () =>
// {
//     let port = await getPort();
//     if ( forcedPort )
//     {
//         port = forcedPort;
//     }
//
//     global.port = port;
//
//     return port;
// };

export const CONFIG = {
    // PORT                 :  remote ? remote.getGlobal('port') : getRandomPort(),
    SAFE_PARTITION: 'persist:safe-tab',
    SAFE_NODE_LIB_PATH: safeNodeLibPath(),
    APP_HTML_PATH: path.resolve(__dirname, './app.html'),
    DATE_FORMAT: 'h:MM-mmm dd',
    NET_STATUS_CONNECTED: 'Connected',
    STATE_KEY: 'safeBrowserState',
    BROWSER_TYPE_TAG: 8467,
    PRELOADED_MOCK_VAULT_PATH: path.join(__dirname, '..', 'PreloadDevVault')
};

if (inMainProcess) {
    global.preloadFile = `file://${__dirname}/webPreload.js`;
    global.appDir = __dirname;
    global.isCI = isCI;
    global.isRunningPackaged = isRunningPackaged;
    global.startedRunningMock = startedRunningMock;
    global.shouldStartAsMockFromFlagsOrPackage = shouldStartAsMockFromFlagsOrPackage;
    global.SAFE_NODE_LIB_PATH = CONFIG.SAFE_NODE_LIB_PATH;
    global.isRunningSpectronTestProcessingPackagedApp = isRunningSpectronTestProcessingPackagedApp;
    global.SPECTRON_TEST = isRunningSpectronTestProcess;
}

// if( isRunningUnpacked )
// {
//     CONFIG.CONFIG_PATH = path.resolve( __dirname, '../resources' );
// }

const appInfo = {
    info: {
        id: pkg.identifier,
        scope: null,
        name: pkg.productName,
        vendor: pkg.author.name,
        customExecPath: safeNodeAppPath()
    },
    opts: {
        own_container: true
    },
    permissions: {
        _public: ['Read', 'Insert', 'Update', 'Delete']
        // _publicNames : ['Read', 'Insert', 'Update', 'Delete']
    }
};

// // OSX: Add bundle for electron in dev mode
// if (isRunningUnpacked && process.platform === 'darwin') {
//     appInfo.info.bundle = 'com.github.electron';
// } else if (process.platform === 'darwin') {
//
//     console.log('WHY IS THIS HAPPENING?', isRunningUnpacked )
//     appInfo.info.bundle = 'com.electron.safe-another-auth';
// }

export const APP_INFO = appInfo;

// TODO. Unify with test lib/constants browser UI?
export const CLASSES = {
    ADDRESS_BAR: 'js-address',
    ACTIVE_TAB: 'js-tabBar__active-tab',
    TAB: 'js-tab',
    ADD_TAB: 'js-tabBar__add-tab',
    CLOSE_TAB: 'js-tabBar__close-tab',
    SAFE_BROWSER_PAGE: 'js-safeBrowser__page',
    SPECTRON_AREA: 'js-spectron-area',
    SPECTRON_AREA__SPOOF_SAVE: 'js-spectron-area__spoof-save',
    SPECTRON_AREA__SPOOF_LOAD: 'js-spectron-area__spoof-read',
    NOTIFIER_TEXT: 'js-notifier__text',
    BOOKMARK_PAGE: 'js-bookmark-page',
    FORWARDS: 'js-address__forwards',
    BACKWARDS: 'js-address__backwards',
    REFRESH: 'js-address__refresh',
    ADDRESS_INPUT: 'js-address__input',
    MENU: 'js-address__menu',

    NOTIFICATION__ACCEPT: 'js-notification__accept',
    NOTIFICATION__REJECT: 'js-notification__reject',
    NOTIFICATION__IGNORE: 'js-notification__ignore',

    SETTINGS_MENU__BUTTON: 'js-settingsMenu_button'
};

const getDomClasses = () => {
    const domClasses = {};

    Object.keys(CLASSES).forEach(theClass => {
        domClasses[theClass] = `.${CLASSES[theClass]}`;
    });

    return domClasses;
};

export const GET_DOM_EL_CLASS = getDomClasses();

// let libLocaleModifier = '';
let libLocaleModifier = '../resources/dist';

let libEnvModifier = 'prod';

if (startedRunningMock || isRunningNodeEnvTest) {
    libEnvModifier = 'mock';
}

if (isRunningNodeEnvTest) {
    libLocaleModifier = '';
}
// else if ( isRunningPackaged )
// {
//     libLocaleModifier = '../';
// }

export const AUTH_CONSTANTS =  {
    NETWORK_STATUS: {
        CONNECTED: 0,
        CONNECTING: 1,
        DISCONNECTED: -1
    },
    LIB_PATH: {
        PTHREAD: path.resolve(
            __dirname,
            libLocaleModifier,
            libEnvModifier,
            'libwinpthread-1.dll'
        ),
        SAFE_AUTH: {
            win32: path.resolve(
                __dirname,
                libLocaleModifier,
                libEnvModifier,
                'safe_authenticator.dll'
            ),
            darwin: path.resolve(
                __dirname,
                libLocaleModifier,
                libEnvModifier,
                'libsafe_authenticator.dylib'
            ),
            linux: path.resolve(
                __dirname,
                libLocaleModifier,
                libEnvModifier,
                'libsafe_authenticator.so'
            )
        },
        SYSTEM_URI: {
            win32: path.resolve(
                __dirname,
                libLocaleModifier,
                libEnvModifier,
                'system_uri.dll'
            ),
            darwin: path.resolve(
                __dirname,
                libLocaleModifier,
                libEnvModifier,
                'libsystem_uri.dylib'
            ),
            linux: path.resolve(
                __dirname,
                libLocaleModifier,
                libEnvModifier,
                'libsystem_uri.so'
            )
        }
    },
    LIB_PATH_MOCK: {
        PTHREAD: path.resolve(
            __dirname,
            libLocaleModifier,
            'mock',
            'libwinpthread-1.dll'
        ),
        SAFE_AUTH: {
            win32: path.resolve(
                __dirname,
                libLocaleModifier,
                'mock',
                'safe_authenticator.dll'
            ),
            darwin: path.resolve(
                __dirname,
                libLocaleModifier,
                'mock',
                'libsafe_authenticator.dylib'
            ),
            linux: path.resolve(
                __dirname,
                libLocaleModifier,
                'mock',
                'libsafe_authenticator.so'
            )
        },
        SYSTEM_URI: {
            win32: path.resolve(
                __dirname,
                libLocaleModifier,
                'mock',
                'system_uri.dll'
            ),
            darwin: path.resolve(
                __dirname,
                libLocaleModifier,
                'mock',
                'libsystem_uri.dylib'
            ),
            linux: path.resolve(
                __dirname,
                libLocaleModifier,
                'mock',
                'libsystem_uri.so'
            )
        }
    },
    LISTENER_TYPES: new Enum([
        'APP_LIST_UPDATE',
        'AUTH_REQ',
        'CONTAINER_REQ',
        'MDATA_REQ',
        'NW_STATE_CHANGE',
        'REQUEST_ERR',
        'IS_AUTHORISED'
    ]),
    CLIENT_TYPES: {
        DESKTOP: 'DESKTOP',
        WEB: 'WEB'
    },
    CREATE_ACC_NAV: {
        WELCOME: 1,
        INVITE_CODE: 2,
        SECRET_FORM: 3,
        PASSWORD_FORM: 4
    },
    PASSPHRASE_STRENGTH: {
        VERY_WEAK: 4,
        WEAK: 8,
        SOMEWHAT_SECURE: 10,
        SECURE: 10
    },
    PASSPHRASE_STRENGTH_MSG: {
        VERY_WEAK: 'Very weak',
        WEAK: 'Weak',
        SOMEWHAT_SECURE: 'Somewhat secure',
        SECURE: 'Secure'
    },
    RE_AUTHORISE: {
        KEY: 'SAFE_LOCAL_RE_AUTHORISE_STATE',
        LOCK_MSG: 'Apps cannot re-authenticate automatically',
        UNLOCK_MSG: 'Apps can re-authenticate automatically',
        STATE: {
            LOCK: 0,
            UNLOCK: 1
        }
    }
};

export const SAFE = {
    APP_STATUS: {
        TO_AUTH: 'TO_AUTH',
        AUTHORISED: 'AUTHORISED',
        AUTHORISING: 'AUTHORISING',
        AUTHORISATION_FAILED: 'AUTHORISATION_FAILED',
        AUTHORISATION_DENIED: 'AUTHORISATION_DENIED',

        TO_LOGOUT: 'TO_LOGOUT',
        LOGGING_OUT: 'LOGGING_OUT',
        LOGGED_OUT: 'LOGGED_OUT',

        READY: 'READY'
    },
    ACCESS_CONTAINERS: {
        PUBLIC: '_public',
        PUBLIC_NAMES: '_publicNames'
    },
    NETWORK_STATE: {
        INIT: 'Init',
        CONNECTED: 'Connected',
        UNKNOWN: 'Unknown',
        DISCONNECTED: 'Disconnected',
        LOGGED_IN: 'LOGGED_IN'
    },
    READ_STATUS: {
        READING: 'READING',
        READ_SUCCESSFULLY: 'READ_SUCCESSFULLY',
        READ_BUT_NONEXISTANT: 'READ_BUT_NONEXISTANT',
        FAILED_TO_READ: 'FAILED_TO_READ',
        TO_READ: 'TO_READ'
    },
    SAVE_STATUS: {
        SAVING: 'SAVING',
        SAVED_SUCCESSFULLY: 'SAVED_SUCCESSFULLY',
        FAILED_TO_SAVE: 'FAILED_TO_SAVE',
        TO_SAVE: 'TO_SAVE'
    }
};

export const SAFE_APP_ERROR_CODES = {
    ERR_AUTH_DENIED: -200,
    ENTRY_ALREADY_EXISTS: -107,
    ERR_NO_SUCH_ENTRY: -106,
    ERR_DATA_EXISTS: -104,
    ERR_DATA_NOT_FOUND: -103,
    ERR_OPERATION_ABORTED: -14
};

export const SAFE_MESSAGES = {
    INITIALIZE: {
        AUTHORISE_APP: 'Authorising Application',
        CHECK_CONFIGURATION: 'Checking configuration'
    },
    AUTHORISATION_ERROR: 'Failed to authorise',
    AUTHORISATION_DENIED: 'The authorisation request was denied',
    CHECK_CONFIGURATION_ERROR: 'Failed to retrieve configuration'
};
