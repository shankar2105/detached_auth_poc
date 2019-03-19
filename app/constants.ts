import path from 'path';
import fs from 'fs-extra';
import { remote } from 'electron';
// eslint-disable-next-line
import pkg from '@Package';
import getPort from 'get-port';

export const {platform} = process;
// const OSX = 'darwin';
// const LINUX = 'linux';
// const WINDOWS = 'win32';
// export

declare const document : Document;

const allPassedArgs = process.argv;

let shouldRunMockNetwork : boolean = fs.existsSync(
    path.resolve( __dirname, '../..', 'startAsMock' )
);

let hasDebugFlag = false;

export const isRunningSpectronTestProcess = !!process.env.SPECTRON_TEST || false;
export const isRunningUnpacked = process.env.IS_UNPACKED;
export const isRunningPackaged = !isRunningUnpacked;
export const isRunningSpectronTestProcessingPackagedApp =
    isRunningSpectronTestProcess && isRunningPackaged;

export const inBgProcess = !!(
    typeof document !== 'undefined' && document.title.startsWith( 'Background' )
);
// override for spectron dev mode
if (
    isRunningSpectronTestProcess &&
    !isRunningSpectronTestProcessingPackagedApp
) {
    shouldRunMockNetwork = true;
}

if ( allPassedArgs.includes( '--mock' ) ) {
    shouldRunMockNetwork = true;
}

if ( allPassedArgs.includes( '--live' ) ) {
    shouldRunMockNetwork = false;
}

if ( allPassedArgs.includes( '--debug' ) ) {
    hasDebugFlag = true;
}

let forcedPort : number;
if ( allPassedArgs.includes( '--port' ) ) {
    const index = allPassedArgs.indexOf( '--port' );

    forcedPort = Number( allPassedArgs[index + 1] );
}

export const shouldStartAsMockFromFlagsOrPackage : boolean = shouldRunMockNetwork;

export const env = shouldStartAsMockFromFlagsOrPackage
    ? 'development'
    : process.env.NODE_ENV || 'production';

export const isRunningDevelopment = env.startsWith( 'dev' );

export const isCI : boolean =
    remote && remote.getGlobal ? remote.getGlobal( 'isCI' ) : process.env.CI;
export const travisOS = process.env.TRAVIS_OS_NAME || '';
// other considerations?
export const isHot = process.env.HOT || 0;

const startAsMockNetwork = shouldStartAsMockFromFlagsOrPackage;

// only to be used for inital store setting in main process. Not guaranteed correct for renderers.
export const startedRunningMock : boolean =
    remote && remote.getGlobal
        ? remote.getGlobal( 'startedRunningMock' )
        : startAsMockNetwork || isRunningDevelopment;
export const startedRunningProduction = !startedRunningMock;
export const isRunningNodeEnvTest = env.startsWith( 'test' );
export const isRunningDebug = hasDebugFlag || isRunningSpectronTestProcess;
export const inRendererProcess = typeof window !== 'undefined';
export const inMainProcess = typeof remote === 'undefined';

export const currentWindowId =
    remote && remote.getCurrentWindow
        ? remote.getCurrentWindow().id
        : undefined;

// Set global for tab preload.
// Adds app folder for asar packaging (space before app is important).
const preloadLocation = isRunningUnpacked ? '' : '../';

let safeNodeAppPathModifier = '..';

if ( isRunningPackaged && !isRunningNodeEnvTest ) {
    safeNodeAppPathModifier = '../../app.asar.unpacked/';
}

/**
 * retrieve the safe node lib path, either as a relative path in the main process,
 * or from the main process global
 * @return {[type]} [description]
 */
const safeNodeLibPath = () => {
    // only exists in render processes
    if ( remote && remote.getGlobal && !isRunningNodeEnvTest ) {
        return remote.getGlobal( 'SAFE_NODE_LIB_PATH' );
    }

    return path.resolve(
        __dirname,
        safeNodeAppPathModifier,
        'node_modules/@maidsafe/safe-node-app/src/native'
    );
};

// HACK: Prevent jest dying due to no electron globals
const safeNodeAppPath = () => {
    if ( !remote || !remote.app ) {
        return '';
    }

    const nodeAppPath : string[] = isRunningUnpacked
        ? [
            remote.process.execPath,
            `${remote.getGlobal( 'appDir' )}/main.prod.js`
        ]
        : [remote.app.getPath( 'exe' )];

    return nodeAppPath;
};

export const I18N_CONFIG = {
    locales: ['en'],
    directory: path.resolve( __dirname, 'locales' ),
    objectNotation: true
};

export const PROTOCOLS = {
    SAFE: 'safe',
    SAFE_AUTH: 'safe-auth',
    SAFE_LOGS: 'safe-logs',
    INTERNAL_PAGES: 'safe-browser'
};

export const INTERNAL_PAGES = {
    HISTORY: 'history',
    BOOKMARKS: 'bookmarks'
};

const getRandomPort = async ( portOverride : number ) => {
    let portToUse : number;
    if ( portOverride ) {
        portToUse = portOverride;
    }
    else
    {
        portToUse = await getPort();
    }

    global.port = portToUse;

    return portToUse;
};

export const CONFIG = {
    PORT: remote ? remote.getGlobal( 'port' ) : getRandomPort( forcedPort ),
    SAFE_PARTITION: 'persist:safe-tab',
    SAFE_NODE_LIB_PATH: safeNodeLibPath(),
    APP_HTML_PATH: path.resolve( __dirname, './app.html' ),
    DATE_FORMAT: 'h:MM-mmm dd',
    NET_STATUS_CONNECTED: 'Connected',
    STATE_KEY: 'safeBrowserState',
    BROWSER_TYPE_TAG: 8467,
    PRELOADED_MOCK_VAULT_PATH: path.join( __dirname, '..', 'PreloadDevVault' )
};

if ( inMainProcess ) {
    const devPort = process.env.PORT || 1232;

    global.preloadFile = `file://${__dirname}/webPreload.prod.js`;
    global.appDir = __dirname;
    global.isCI = isCI;
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

interface AppInfo {
    info: {
        id: string;
        scope: null | string;
        name: string;
        vendor: string;
        customExecPath: string | string[];
        bundle? : string;
    };

    opts: {
        /* eslint-disable-next-line @typescript-eslint/camelcase */
        own_container: boolean;
    };
    permissions: {
        _public: string[]
    };
}
const appInfo : AppInfo = {
    info: {
        id: pkg.identifier,
        scope: null,
        name: pkg.productName,
        vendor: pkg.author.name,
        customExecPath: safeNodeAppPath()
    },
    opts: {
        /* eslint-disable-next-line @typescript-eslint/camelcase */
        own_container: true
    },
    permissions: {
        _public: ['Read', 'Insert', 'Update', 'Delete']
        // _publicNames : ['Read', 'Insert', 'Update', 'Delete']
    }
};

// OSX: Add bundle for electron in dev mode
if ( isRunningUnpacked && process.platform === 'darwin' ) {
    appInfo.info.bundle = 'com.github.electron';
} else if ( process.platform === 'darwin' ) {
    appInfo.info.bundle = 'com.electron.safe-browser';
}

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

    SETTINGS_MENU: 'js-settingsMenu',
    SETTINGS_MENU__BUTTON: 'js-settingsMenu_button',
    SETTINGS_MENU__BOOKMARKS: 'js-settingsMenu_bookmarks',
    SETTINGS_MENU__HISTORY: 'js-settingsMenu_history',
    SETTINGS_MENU__TOGGLE: 'js-settingsMenu_toggle',
    SETTINGS_MENU__TOGGLE_BUTTON: 'js-settingsMenu_toggleButton',
    SETTINGS_MENU__TOGGLE_TEXT: 'js-settingsMenu_toggleText',
    MOCK_TAG: 'js-addressBar_mockTag'
};

const getDomClasses = () => {
    const domClasses = {};

    Object.keys( CLASSES ).forEach(
        theClass => ( domClasses[theClass] = `.${CLASSES[theClass]}` )
    );

    return domClasses;
};

export const GET_DOM_EL_CLASS = getDomClasses();
