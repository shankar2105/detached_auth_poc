module.exports =
/** *** */ ( function( modules ) { // webpackBootstrap
        /** *** */ 	// The module cache
        /** *** */ 	let installedModules = {};
        /** *** */
        /** *** */ 	// The require function
        /** *** */ 	function __webpack_require__( moduleId ) {
            /** *** */
            /** *** */ 		// Check if module is in cache
            /** *** */ 		if( installedModules[moduleId] ) {
                /** *** */ 			return installedModules[moduleId].exports;
                /** *** */ 		}
            /** *** */ 		// Create a new module (and put it into the cache)
            /** *** */ 		let module = installedModules[moduleId] = {
                /** *** */ 			i: moduleId,
                /** *** */ 			l: false,
                /** *** */ 			exports: {}
                /** *** */ 		};
            /** *** */
            /** *** */ 		// Execute the module function
            /** *** */ 		modules[moduleId].call( module.exports, module, module.exports, __webpack_require__ );
            /** *** */
            /** *** */ 		// Flag the module as loaded
            /** *** */ 		module.l = true;
            /** *** */
            /** *** */ 		// Return the exports of the module
            /** *** */ 		return module.exports;
            /** *** */ 	}
        /** *** */
        /** *** */
        /** *** */ 	// expose the modules object (__webpack_modules__)
        /** *** */ 	__webpack_require__.m = modules;
        /** *** */
        /** *** */ 	// expose the module cache
        /** *** */ 	__webpack_require__.c = installedModules;
        /** *** */
        /** *** */ 	// define getter function for harmony exports
        /** *** */ 	__webpack_require__.d = function( exports, name, getter ) {
            /** *** */ 		if( !__webpack_require__.o( exports, name ) ) {
                /** *** */ 			Object.defineProperty( exports, name, { enumerable: true, get: getter } );
                /** *** */ 		}
            /** *** */ 	};
        /** *** */
        /** *** */ 	// define __esModule on exports
        /** *** */ 	__webpack_require__.r = function( exports ) {
            /** *** */ 		if( typeof Symbol !== 'undefined' && Symbol.toStringTag ) {
                /** *** */ 			Object.defineProperty( exports, Symbol.toStringTag, { value: 'Module' } );
                /** *** */ 		}
            /** *** */ 		Object.defineProperty( exports, '__esModule', { value: true } );
            /** *** */ 	};
        /** *** */
        /** *** */ 	// create a fake namespace object
        /** *** */ 	// mode & 1: value is a module id, require it
        /** *** */ 	// mode & 2: merge all properties of value into the ns
        /** *** */ 	// mode & 4: return value when already ns object
        /** *** */ 	// mode & 8|1: behave like require
        /** *** */ 	__webpack_require__.t = function( value, mode ) {
            /** *** */ 		if( mode & 1 ) value = __webpack_require__( value );
            /** *** */ 		if( mode & 8 ) return value;
            /** *** */ 		if( ( mode & 4 ) && typeof value === 'object' && value && value.__esModule ) return value;
            /** *** */ 		let ns = Object.create( null );
            /** *** */ 		__webpack_require__.r( ns );
            /** *** */ 		Object.defineProperty( ns, 'default', { enumerable: true, value } );
            /** *** */ 		if( mode & 2 && typeof value !== 'string' ) for( var key in value ) __webpack_require__.d( ns, key, function( key ) { return value[key]; }.bind( null, key ) );
            /** *** */ 		return ns;
            /** *** */ 	};
        /** *** */
        /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
        /** *** */ 	__webpack_require__.n = function( module ) {
            /** *** */ 		let getter = module && module.__esModule ?
            /** *** */ 			function getDefault() { return module.default; } :
            /** *** */ 			function getModuleExports() { return module; };
            /** *** */ 		__webpack_require__.d( getter, 'a', getter );
            /** *** */ 		return getter;
            /** *** */ 	};
        /** *** */
        /** *** */ 	// Object.prototype.hasOwnProperty.call
        /** *** */ 	__webpack_require__.o = function( object, property ) { return Object.prototype.hasOwnProperty.call( object, property ); };
        /** *** */
        /** *** */ 	// __webpack_public_path__
        /** *** */ 	__webpack_require__.p = "";
        /** *** */
        /** *** */
        /** *** */ 	// Load entry module and return exports
        /** *** */ 	return __webpack_require__( __webpack_require__.s = "./app/background.js" );
        /** *** */ } )
    /** ********************************************************************* */
    /** *** */ ( {

        /** */ "./app/background.js":
        /*! ***************************!*\
  !*** ./app/background.js ***!
  \************************** */
        /*! no exports provided */
        /** */ ( function( module, __webpack_exports__, __webpack_require__ ) {

            "use strict";

            __webpack_require__.r( __webpack_exports__ );
            /* harmony import */ let core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js" );
            /* harmony import */ let core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n( core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ );
            /* harmony import */ let _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./logger.js */ "./app/logger.js" );
            /* harmony import */ let _store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./store/configureStore */ "./app/store/configureStore.js" );
            /* harmony import */ let _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./constants.js */ "./app/constants.js" );


            function _objectSpread( target ) { for ( var i = 1; i < arguments.length; i++ ) { var source = arguments[i] != null ? arguments[i] : {}; let ownKeys = Object.keys( source ); if ( typeof Object.getOwnPropertySymbols === 'function' ) { ownKeys = ownKeys.concat( Object.getOwnPropertySymbols( source ).filter( function ( sym ) { return Object.getOwnPropertyDescriptor( source, sym ).enumerable; } ) ); } ownKeys.forEach( function ( key ) { _defineProperty( target, key, source[key] ); } ); } return target; }

            function _defineProperty( obj, key, value ) { if ( key in obj ) { Object.defineProperty( obj, key, { value, enumerable: true, configurable: true, writable: true } ); } else { obj[key] = value; } return obj; }

            /* eslint global-require: 1, flowtype-errors/show-errors: 0 */


            // setup of auth APIs
            // import lib from './ffi/lib';
            // import authenticator from './ffi/authenticator';
            // import sysUri from './ffi/sys_uri';
            // const loadLibrary = (isMock = false, libPath) => lib.load(isMock, libPath);
            // const getLibStatus = () => authenticator.getLibStatus() && sysUri.isLibLoaded;
            // import i18n from 'i18n';
            // import { startedRunningMock } from '@Constants';
            // import { I18N_CONFIG, startedRunningMock } from '@Constants';

            const PID = process.pid;
            _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.info( "Welcome to the BG process it's ID is: ", PID ); // import manageRemoteCalls from './background.manageRemoteCalls';
            // import { onInitBgProcess, getExtensionReduxMiddleware }  from './extensions';
            // import setupServer from './server';
            // import { remote } from 'electron';
            // window.thisIsTheBackgroundProcess = true;
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
                const store = Object( _store_configureStore__WEBPACK_IMPORTED_MODULE_2__.configureStore)( undefined, thisIsTheBackgroundProcess );
                console.log( 'HERE I AMMMM', _constants_js__WEBPACK_IMPORTED_MODULE_3__.isRunningDevelopment, store.getState() );
                store.subscribe( () => {
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.info( 'chchchchchaaaanges' ); // manageRemoteCalls( store );
                } ); // / STARTING AUTH:
                // load the auth/safe libs
                // await loadLibrary(startedRunningMock);

                _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.info( 'THOSE LIBS ARE LOAAADDEDDDDDD' ); // let prevAuthLibStatus;
                // store.subscribe(() => {
                //     const authLibStatus = getLibStatus();
                //
                //     if (authLibStatus && authLibStatus !== prevAuthLibStatus) {
                //         logger.verbose('Authenticator lib status: ', authLibStatus);
                //         prevAuthLibStatus = authLibStatus;
                //         // store.dispatch(
                //         //     authenticatorActions.setAuthLibStatus(authLibStatus)
                //         // );
                //
                //         // initSafeBro§wserApp(store);
                //     }
                //
                //     // handleSafeBrowserStoreChanges(store);
                // });

                const mainAppInfo = _constants_js__WEBPACK_IMPORTED_MODULE_3__.APP_INFO.info;

                const authAppInfo = _objectSpread( {}, mainAppInfo, {
                    id: 'net.maidsafe.app.browser.authenticator',
                    name: 'SAFE Browser Authenticator',
                    icon: 'iconPath'
                } );

                _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.verbose( 'Auth application info', authAppInfo ); //
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

            window.onerror = function windowErrors( error ) {
                _logger_js__WEBPACK_IMPORTED_MODULE_1__.default.error( 'errorInBackgroundWindow', error );
            };

            /** */ } ),

        /** */ "./app/constants.js":
        /*! **************************!*\
  !*** ./app/constants.js ***!
  \************************* */
        /*! exports provided: platform, isRunningSpectronTestProcess, isRunningUnpacked, isRunningPackaged, isRunningSpectronTestProcessingPackagedApp, inBgProcess, shouldStartAsMockFromFlagsOrPackage, env, isRunningDevelopment, isCI, travisOS, isHot, startedRunningMock, startedRunningProduction, isRunningNodeEnvTest, isRunningDebug, inRendererProcess, inMainProcess, currentWindowId, I18N_CONFIG, PROTOCOLS, INTERNAL_PAGES, CONFIG, APP_INFO, CLASSES, GET_DOM_EL_CLASS */
        /** */ ( function( module, __webpack_exports__, __webpack_require__ ) {

            "use strict";

            __webpack_require__.r( __webpack_exports__ );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "platform", function() { return platform; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "isRunningSpectronTestProcess", function() { return isRunningSpectronTestProcess; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "isRunningUnpacked", function() { return isRunningUnpacked; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "isRunningPackaged", function() { return isRunningPackaged; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "isRunningSpectronTestProcessingPackagedApp", function() { return isRunningSpectronTestProcessingPackagedApp; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "inBgProcess", function() { return inBgProcess; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "shouldStartAsMockFromFlagsOrPackage", function() { return shouldStartAsMockFromFlagsOrPackage; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "env", function() { return env; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "isRunningDevelopment", function() { return isRunningDevelopment; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "isCI", function() { return isCI; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "travisOS", function() { return travisOS; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "isHot", function() { return isHot; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "startedRunningMock", function() { return startedRunningMock; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "startedRunningProduction", function() { return startedRunningProduction; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "isRunningNodeEnvTest", function() { return isRunningNodeEnvTest; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "isRunningDebug", function() { return isRunningDebug; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "inRendererProcess", function() { return inRendererProcess; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "inMainProcess", function() { return inMainProcess; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "currentWindowId", function() { return currentWindowId; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "I18N_CONFIG", function() { return I18N_CONFIG; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "PROTOCOLS", function() { return PROTOCOLS; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "INTERNAL_PAGES", function() { return INTERNAL_PAGES; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "CONFIG", function() { return CONFIG; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "APP_INFO", function() { return APP_INFO; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "CLASSES", function() { return CLASSES; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "GET_DOM_EL_CLASS", function() { return GET_DOM_EL_CLASS; } );
            /* harmony import */ let core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js" );
            /* harmony import */ let core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n( core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ );
            /* harmony import */ let path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! path */ "path" );
            /* harmony import */ let path__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n( path__WEBPACK_IMPORTED_MODULE_1__ );
            /* harmony import */ let fs_extra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! fs-extra */ "fs-extra" );
            /* harmony import */ let fs_extra__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n( fs_extra__WEBPACK_IMPORTED_MODULE_2__ );
            /* harmony import */ let electron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! electron */ "electron" );
            /* harmony import */ let electron__WEBPACK_IMPORTED_MODULE_3___default = /* #__PURE__ */__webpack_require__.n( electron__WEBPACK_IMPORTED_MODULE_3__ );
            /* harmony import */ let _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../package.json */ "./package.json" );
            var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /* #__PURE__ */__webpack_require__.t( /*! ../package.json */ "./package.json", 1 );
            /* harmony import */ let get_port__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! get-port */ "get-port" );
            /* harmony import */ let get_port__WEBPACK_IMPORTED_MODULE_5___default = /* #__PURE__ */__webpack_require__.n( get_port__WEBPACK_IMPORTED_MODULE_5__ );






            const platform = process.platform;
            const OSX = 'darwin';
            const LINUX = 'linux';
            const WINDOWS = 'win32';
            const allPassedArgs = process.argv;
            let shouldRunMockNetwork = fs_extra__WEBPACK_IMPORTED_MODULE_2___default.a.existsSync( path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve( __dirname, '../..', 'startAsMock' ) );
            let hasDebugFlag = false;
            const isRunningSpectronTestProcess = process.env.SPECTRON_TEST || false;
            const isRunningUnpacked = process.env.IS_UNPACKED;
            const isRunningPackaged = !isRunningUnpacked;
            const isRunningSpectronTestProcessingPackagedApp = isRunningSpectronTestProcess && isRunningPackaged;
            const inBgProcess = !!( typeof document !== 'undefined' && document.title.startsWith( 'Background' ) ); // override for spectron dev mode

            if ( isRunningSpectronTestProcess && !isRunningSpectronTestProcessingPackagedApp ) {
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

            let forcedPort;

            if ( allPassedArgs.includes( '--port' ) ) {
                const index = allPassedArgs.indexOf( '--port' );
                forcedPort = allPassedArgs[index + 1];
            }

            const shouldStartAsMockFromFlagsOrPackage = shouldRunMockNetwork;
            const env = shouldStartAsMockFromFlagsOrPackage ? 'development' : "production" || false;
            const isRunningDevelopment = /^dev/.test( env );
            const isCI = electron__WEBPACK_IMPORTED_MODULE_3__.remote && electron__WEBPACK_IMPORTED_MODULE_3__.remote.getGlobal ? electron__WEBPACK_IMPORTED_MODULE_3__.remote.getGlobal( 'isCI' ) : process.env.CI;
            const travisOS = process.env.TRAVIS_OS_NAME || ''; // other considerations?

            const isHot = process.env.HOT || 0; // const startAsMockNetwork = shouldStartAsMockFromFlagsOrPackage;

            const startAsMockNetwork = shouldStartAsMockFromFlagsOrPackage; // only to be used for inital store setting in main process. Not guaranteed correct for renderers.

            const startedRunningMock = electron__WEBPACK_IMPORTED_MODULE_3__.remote && electron__WEBPACK_IMPORTED_MODULE_3__.remote.getGlobal ? electron__WEBPACK_IMPORTED_MODULE_3__.remote.getGlobal( 'startedRunningMock' ) : startAsMockNetwork || /^dev/.test( env );
            const startedRunningProduction = !startedRunningMock;
            const isRunningNodeEnvTest = /^test/.test( env );
            const isRunningDebug = hasDebugFlag || isRunningSpectronTestProcess;
            const inRendererProcess = typeof window !== 'undefined';
            const inMainProcess = typeof electron__WEBPACK_IMPORTED_MODULE_3__.remote === 'undefined';
            const currentWindowId = electron__WEBPACK_IMPORTED_MODULE_3__.remote && electron__WEBPACK_IMPORTED_MODULE_3__.remote.getCurrentWindow ? electron__WEBPACK_IMPORTED_MODULE_3__.remote.getCurrentWindow().id : undefined; // Set global for tab preload.
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
                if ( electron__WEBPACK_IMPORTED_MODULE_3__.remote && electron__WEBPACK_IMPORTED_MODULE_3__.remote.getGlobal && !isRunningNodeEnvTest ) {
                    return electron__WEBPACK_IMPORTED_MODULE_3__.remote.getGlobal( 'SAFE_NODE_LIB_PATH' );
                }

                return path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve( __dirname, safeNodeAppPathModifier, 'node_modules/@maidsafe/safe-node-app/src/native' );
            }; // HACK: Prevent jest dying due to no electron globals


            const safeNodeAppPath = () => {
                if ( !electron__WEBPACK_IMPORTED_MODULE_3__.remote || !electron__WEBPACK_IMPORTED_MODULE_3__.remote.app ) {
                    return '';
                }

                return isRunningUnpacked ? [electron__WEBPACK_IMPORTED_MODULE_3__.remote.process.execPath, `${electron__WEBPACK_IMPORTED_MODULE_3__.remote.getGlobal( 'appDir' )}/main.prod.js`] : [electron__WEBPACK_IMPORTED_MODULE_3__.remote.app.getPath( 'exe' )];
            };

            const I18N_CONFIG = {
                locales: ['en'],
                directory: path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve( __dirname, 'locales' ),
                objectNotation: true
            };
            const PROTOCOLS = {
                SAFE: 'safe',
                SAFE_AUTH: 'safe-auth',
                SAFE_LOGS: 'safe-logs',
                INTERNAL_PAGES: 'safe-browser'
            };
            const INTERNAL_PAGES = {
                HISTORY: 'history',
                BOOKMARKS: 'bookmarks'
            };

            const getRandomPort = async () => {
                let port = await get_port__WEBPACK_IMPORTED_MODULE_5___default()();

                if ( forcedPort ) {
                    port = forcedPort;
                }

                global.port = port;
                return port;
            };

            const CONFIG = {
                PORT: electron__WEBPACK_IMPORTED_MODULE_3__.remote ? electron__WEBPACK_IMPORTED_MODULE_3__.remote.getGlobal( 'port' ) : getRandomPort(),
                SAFE_PARTITION: 'persist:safe-tab',
                SAFE_NODE_LIB_PATH: safeNodeLibPath(),
                APP_HTML_PATH: path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve( __dirname, './app.html' ),
                DATE_FORMAT: 'h:MM-mmm dd',
                NET_STATUS_CONNECTED: 'Connected',
                STATE_KEY: 'safeBrowserState',
                BROWSER_TYPE_TAG: 8467,
                PRELOADED_MOCK_VAULT_PATH: path__WEBPACK_IMPORTED_MODULE_1___default.a.join( __dirname, '..', 'PreloadDevVault' )
            };

            if ( inMainProcess ) {
                const devPort = process.env.PORT || 1212;
                global.preloadFile = `file://${__dirname}/webPreload.prod.js`;
                global.appDir = __dirname;
                global.isCI = isCI;
                global.startedRunningMock = startedRunningMock;
                global.shouldStartAsMockFromFlagsOrPackage = shouldStartAsMockFromFlagsOrPackage;
                global.SAFE_NODE_LIB_PATH = CONFIG.SAFE_NODE_LIB_PATH;
                global.isRunningSpectronTestProcessingPackagedApp = isRunningSpectronTestProcessingPackagedApp;
                global.SPECTRON_TEST = isRunningSpectronTestProcess;
            } // if( isRunningUnpacked )
            // {
            //     CONFIG.CONFIG_PATH = path.resolve( __dirname, '../resources' );
            // }


            const appInfo = {
                info: {
                    id: _package_json__WEBPACK_IMPORTED_MODULE_4__.identifier,
                    scope: null,
                    name: _package_json__WEBPACK_IMPORTED_MODULE_4__.productName,
                    vendor: _package_json__WEBPACK_IMPORTED_MODULE_4__.author.name,
                    customExecPath: safeNodeAppPath()
                },
                opts: {
                    own_container: true
                },
                permissions: {
                    _public: ['Read', 'Insert', 'Update', 'Delete'] // _publicNames : ['Read', 'Insert', 'Update', 'Delete']

                }
            }; // OSX: Add bundle for electron in dev mode

            if ( isRunningUnpacked && process.platform === 'darwin' ) {
                appInfo.info.bundle = 'com.github.electron';
            } else if ( process.platform === 'darwin' ) {
                appInfo.info.bundle = 'com.electron.safe-browser';
            }

            const APP_INFO = appInfo; // TODO. Unify with test lib/constants browser UI?

            const CLASSES = {
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
                Object.keys( CLASSES ).forEach( theClass => domClasses[theClass] = `.${CLASSES[theClass]}` );
                return domClasses;
            };

            const GET_DOM_EL_CLASS = getDomClasses();

            /** */ } ),

        /** */ "./app/logger.js":
        /*! ***********************!*\
  !*** ./app/logger.js ***!
  \********************** */
        /*! exports provided: default */
        /** */ ( function( module, __webpack_exports__, __webpack_require__ ) {

            "use strict";

            __webpack_require__.r( __webpack_exports__ );
            /* harmony import */ let path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! path */ "path" );
            /* harmony import */ let path__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n( path__WEBPACK_IMPORTED_MODULE_0__ );
            /* harmony import */ let os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! os */ "os" );
            /* harmony import */ let os__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n( os__WEBPACK_IMPORTED_MODULE_1__ );
            /* harmony import */ let _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./constants.js */ "./app/constants.js" );




            const log = __webpack_require__( /*! electron-log */ "electron-log" );

            if ( log.transports ) {
                // Log level
                // error, warn, info, verbose, debug, silly
                log.transports.console.level = 'silly';
                log.transports.file.level = 'silly';

                if ( !_constants_js__WEBPACK_IMPORTED_MODULE_2__.isRunningDebug && _constants_js__WEBPACK_IMPORTED_MODULE_2__.isRunningPackaged) {
                    log.transports.console.level = 'warn';
                    log.transports.file.level = 'warn';
                }

                log.transports.file.file = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve( os__WEBPACK_IMPORTED_MODULE_1___default.a.tmpdir(), 'safe-browser.log' );
                /**
   * Set output format template. Available variables:
   * Main: {level}, {text}
   * Date: {y},{m},{d},{h},{i},{s},{ms}
   */

                log.transports.console.format = '{h}:{i}:{s}:{ms} {text}'; // Set a function which formats output
                // log.transports.console.format = ( msg ) => util.format( ...msg.data );

                log.transports.file.format = '{h}:{i}:{s}:{ms} {text}'; // Set approximate maximum log size in bytes. When it exceeds,
                // the archived log will be saved as the log.old.log file

                log.transports.file.maxSize = 5 * 1024 * 1024;
            } // HACK: for jest


            if ( log.info && log.verbose && _constants_js__WEBPACK_IMPORTED_MODULE_2__.inMainProcess) {
                // TODO: add buld ID if prod. Incase you're opening up, NOT THIS BUILD.
                log.verbose( '' );
                log.verbose( '' );
                log.verbose( '' );
                log.info( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
                log.info( `      Started with node env: ${_constants_js__WEBPACK_IMPORTED_MODULE_2__.env}` );
                log.info( '       Log location:', log.transports.file.file );
                log.info( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
                log.verbose( 'Running with derived constants:' );
                log.verbose( '' );
                log.verbose( 'isCI?', _constants_js__WEBPACK_IMPORTED_MODULE_2__.isCI);
                log.verbose( 'TESTENV?', _constants_js__WEBPACK_IMPORTED_MODULE_2__.TESTENV);
                log.verbose( 'isRunningDebug?', _constants_js__WEBPACK_IMPORTED_MODULE_2__.isRunningDebug);
                log.verbose( 'isRunningUnpacked?', _constants_js__WEBPACK_IMPORTED_MODULE_2__.isRunningUnpacked);
                log.verbose( 'isRunningPackaged?', _constants_js__WEBPACK_IMPORTED_MODULE_2__.isRunningPackaged);
                log.verbose( 'inMainProcess?', _constants_js__WEBPACK_IMPORTED_MODULE_2__.inMainProcess);
                log.verbose( 'startedRunningProduction?', _constants_js__WEBPACK_IMPORTED_MODULE_2__.startedRunningProduction);
                log.verbose( 'startedRunningMock?', _constants_js__WEBPACK_IMPORTED_MODULE_2__.startedRunningMock);
                log.verbose( 'isRunningSpectronTestProcess?', _constants_js__WEBPACK_IMPORTED_MODULE_2__.isRunningSpectronTestProcess);
                log.verbose( 'isRunningSpectronTestProcessingPackagedApp?', _constants_js__WEBPACK_IMPORTED_MODULE_2__.isRunningSpectronTestProcessingPackagedApp);
                log.verbose( '' );
                log.verbose( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
                log.verbose( '' );
                process.on( 'uncaughtTypeError', err => {
                    log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
                    log.error( 'whoops! there was an uncaught type error:' );
                    log.error( err );
                    log.error( err.file );
                    log.error( err.line );
                    log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
                } );
                process.on( 'uncaughtException', err => {
                    log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
                    log.error( 'whoops! there was an uncaught error:' );
                    log.error( err );
                    log.error( err.file );
                    log.error( err.line );
                    log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
                } );
                process.on( 'unhandledRejection', ( reason, p ) => {
                    log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
                    log.error( 'Unhandled Rejection. Reason:', reason.message || reason );
                    log.error( 'At:', p );
                    log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
                } );
            }

            /* harmony default export */ __webpack_exports__.default = ( log );

            /** */ } ),

        /** */ "./app/reducers/authenticator.js":
        /*! ***************************************!*\
  !*** ./app/reducers/authenticator.js ***!
  \************************************** */
        /*! exports provided: default */
        /** */ ( function( module, __webpack_exports__, __webpack_require__ ) {

            "use strict";

            __webpack_require__.r( __webpack_exports__ );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "default", function() { return counter; } );
            /* harmony import */ let core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js" );
            /* harmony import */ let core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n( core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ );


            function _objectSpread( target ) { for ( var i = 1; i < arguments.length; i++ ) { var source = arguments[i] != null ? arguments[i] : {}; let ownKeys = Object.keys( source ); if ( typeof Object.getOwnPropertySymbols === 'function' ) { ownKeys = ownKeys.concat( Object.getOwnPropertySymbols( source ).filter( function ( sym ) { return Object.getOwnPropertyDescriptor( source, sym ).enumerable; } ) ); } ownKeys.forEach( function ( key ) { _defineProperty( target, key, source[key] ); } ); } return target; }

            function _defineProperty( obj, key, value ) { if ( key in obj ) { Object.defineProperty( obj, key, { value, enumerable: true, configurable: true, writable: true } ); } else { obj[key] = value; } return obj; }

            // import { TYPES } from '../actions/authenticator_actions';
            const initialState = {
                receivedAuthUrls: []
            };
            function counter( state = initialState, action ) {
                const payload = action.payload;

                switch ( action.type ) {
                    case LOGIN_TO_SAFE:
                        return state;

                    case RECEIVE_AUTH_URL:
                    {
                        const updatedState = _objectSpread( {}, state );

                        const oldAuthUrls = state.receivedAuthUrls;
                        updatedState.receivedAuthUrls = [...oldAuthUrls, payload];
                        return updatedState;
                    }
                    // case DECREMENT_COUNTER:
                    //     return state - 1;

                    default:
                        return state;
                }
            }

            /** */ } ),

        /** */ "./app/reducers/index.tsx":
        /*! ********************************!*\
  !*** ./app/reducers/index.tsx ***!
  \******************************* */
        /*! exports provided: default */
        /** */ ( function( module, __webpack_exports__, __webpack_require__ ) {

            "use strict";

            __webpack_require__.r( __webpack_exports__ );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "default", function() { return createRootReducer; } );
            /* harmony import */ let redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! redux */ "redux" );
            /* harmony import */ let redux__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n( redux__WEBPACK_IMPORTED_MODULE_0__ );
            /* harmony import */ let connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js" );
            /* harmony import */ let connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n( connected_react_router__WEBPACK_IMPORTED_MODULE_1__ );
            /* harmony import */ let _authenticator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./authenticator */ "./app/reducers/authenticator.js" );
            // @flow



            function createRootReducer( history ) {
                return Object( redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)( {
                    router: history ? Object( connected_react_router__WEBPACK_IMPORTED_MODULE_1__.connectRouter)( history ) : null,
                    authenticator: _authenticator__WEBPACK_IMPORTED_MODULE_2__.default
                } );
            }

            /** */ } ),

        /** */ "./app/store/addMiddlewares.js":
        /*! *************************************!*\
  !*** ./app/store/addMiddlewares.js ***!
  \************************************ */
        /*! exports provided: default */
        /** */ ( function( module, __webpack_exports__, __webpack_require__ ) {

            "use strict";

            __webpack_require__.r( __webpack_exports__ );
            /* harmony import */ let redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! redux-thunk */ "redux-thunk" );
            /* harmony import */ let redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n( redux_thunk__WEBPACK_IMPORTED_MODULE_0__ );
            /* harmony import */ let _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../constants.js */ "./app/constants.js" );
            /* harmony import */ let redux_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! redux-promise */ "redux-promise" );
            /* harmony import */ let redux_promise__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n( redux_promise__WEBPACK_IMPORTED_MODULE_2__ );
            /* harmony import */ let electron_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! electron-redux */ "electron-redux" );
            /* harmony import */ let electron_redux__WEBPACK_IMPORTED_MODULE_3___default = /* #__PURE__ */__webpack_require__.n( electron_redux__WEBPACK_IMPORTED_MODULE_3__ );





            const addMiddlewares = middleware => {
                middleware.push( redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a );
                middleware.unshift( redux_promise__WEBPACK_IMPORTED_MODULE_2___default.a );

                if ( _constants_js__WEBPACK_IMPORTED_MODULE_1__.inBgProcess) {
                    middleware.push( electron_redux__WEBPACK_IMPORTED_MODULE_3__.triggerAlias);
                }

                if ( _constants_js__WEBPACK_IMPORTED_MODULE_1__.inRendererProcess) {
                    // must be first
                    middleware.unshift( electron_redux__WEBPACK_IMPORTED_MODULE_3__.forwardToMain);
                }

                if ( !_constants_js__WEBPACK_IMPORTED_MODULE_1__.inRendererProcess) {
                    // must be last
                    middleware.push( electron_redux__WEBPACK_IMPORTED_MODULE_3__.forwardToRenderer);
                }
            };

            /* harmony default export */ __webpack_exports__.default = ( addMiddlewares );

            /** */ } ),

        /** */ "./app/store/configureStore.dev.js":
        /*! *****************************************!*\
  !*** ./app/store/configureStore.dev.js ***!
  \**************************************** */
        /*! exports provided: default */
        /** */ ( function( module, __webpack_exports__, __webpack_require__ ) {

            "use strict";

            __webpack_require__.r( __webpack_exports__ );
            /* harmony import */ let core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js" );
            /* harmony import */ let core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n( core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ );
            /* harmony import */ let redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! redux */ "redux" );
            /* harmony import */ let redux__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n( redux__WEBPACK_IMPORTED_MODULE_1__ );
            /* harmony import */ let redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! redux-thunk */ "redux-thunk" );
            /* harmony import */ let redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n( redux_thunk__WEBPACK_IMPORTED_MODULE_2__ );
            /* harmony import */ let history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! history */ "history" );
            /* harmony import */ let history__WEBPACK_IMPORTED_MODULE_3___default = /* #__PURE__ */__webpack_require__.n( history__WEBPACK_IMPORTED_MODULE_3__ );
            /* harmony import */ let connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js" );
            /* harmony import */ let connected_react_router__WEBPACK_IMPORTED_MODULE_4___default = /* #__PURE__ */__webpack_require__.n( connected_react_router__WEBPACK_IMPORTED_MODULE_4__ );
            /* harmony import */ let redux_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js" );
            /* harmony import */ let redux_logger__WEBPACK_IMPORTED_MODULE_5___default = /* #__PURE__ */__webpack_require__.n( redux_logger__WEBPACK_IMPORTED_MODULE_5__ );
            /* harmony import */ let _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../constants.js */ "./app/constants.js" );
            /* harmony import */ let _addMiddlewares__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./addMiddlewares */ "./app/store/addMiddlewares.js" );
            /* harmony import */ let electron_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! electron-redux */ "electron-redux" );
            /* harmony import */ let electron_redux__WEBPACK_IMPORTED_MODULE_8___default = /* #__PURE__ */__webpack_require__.n( electron_redux__WEBPACK_IMPORTED_MODULE_8__ );
            /* harmony import */ let _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../reducers */ "./app/reducers/index.tsx" );


            function _objectSpread( target ) { for ( var i = 1; i < arguments.length; i++ ) { var source = arguments[i] != null ? arguments[i] : {}; let ownKeys = Object.keys( source ); if ( typeof Object.getOwnPropertySymbols === 'function' ) { ownKeys = ownKeys.concat( Object.getOwnPropertySymbols( source ).filter( function ( sym ) { return Object.getOwnPropertyDescriptor( source, sym ).enumerable; } ) ); } ownKeys.forEach( function ( key ) { _defineProperty( target, key, source[key] ); } ); } return target; }

            function _defineProperty( obj, key, value ) { if ( key in obj ) { Object.defineProperty( obj, key, { value, enumerable: true, configurable: true, writable: true } ); } else { obj[key] = value; } return obj; }









            // import * as counterActions from '../actions/counter';
            // import type { counterStateType } from '../reducers/types';

            const initialStateFromMain = _constants_js__WEBPACK_IMPORTED_MODULE_6__.inRendererProcess ? Object( electron_redux__WEBPACK_IMPORTED_MODULE_8__.getInitialStateRenderer)() : {};
            let history;

            if ( _constants_js__WEBPACK_IMPORTED_MODULE_6__.inRendererProcess) {
                history = Object( history__WEBPACK_IMPORTED_MODULE_3__.createHashHistory)();
            }

            const rootReducer = Object( _reducers__WEBPACK_IMPORTED_MODULE_9__.default)( history ); // const configureStore = (initialState?: counterStateType) => {

            const configureStore = ( initialState = initialStateFromMain, thisIsTheBackgroundProcess = false ) => {
                // Redux Configuration
                const middleware = [];
                const enhancers = []; // Router Middleware

                if ( history ) {
                    const router = Object( connected_react_router__WEBPACK_IMPORTED_MODULE_4__.routerMiddleware)( history );
                    middleware.push( router );
                }

                Object( _addMiddlewares__WEBPACK_IMPORTED_MODULE_7__.default)( middleware, thisIsTheBackgroundProcess ); // Logging Middleware

                const logger = Object( redux_logger__WEBPACK_IMPORTED_MODULE_5__.createLogger)( {
                    level: 'info',
                    collapsed: true
                } ); // Skip redux logs in console during the tests

                if ( true ) {
                    middleware.push( logger );
                } // Redux DevTools Configuration


                const actionCreators = _objectSpread( {}, connected_react_router__WEBPACK_IMPORTED_MODULE_4__.routerActions);

                let composeEnhancers;

                if ( !_constants_js__WEBPACK_IMPORTED_MODULE_6__.isRunningSpectronTestProcess && _constants_js__WEBPACK_IMPORTED_MODULE_6__.inRendererProcess) {
                    // If Redux DevTools Extension is installed use it, otherwise use Redux compose

                    /* eslint-disable no-underscore-dangle */
                    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__( {
                        // Options: http://extension.remotedev.io/docs/API/Arguments.html
                        actionCreators
                    } ) : redux__WEBPACK_IMPORTED_MODULE_1__.compose;
                    /* eslint-enable no-underscore-dangle */
                } else {
                    composeEnhancers = redux__WEBPACK_IMPORTED_MODULE_1__.compose;
                } // Apply Middleware & Compose Enhancers


                enhancers.push( Object( redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)( ...middleware ) );
                const enhancer = composeEnhancers( ...enhancers ); // Create Store

                const store = Object( redux__WEBPACK_IMPORTED_MODULE_1__.createStore)( rootReducer, initialState, enhancer );

                if ( false ) {}

                if ( _constants_js__WEBPACK_IMPORTED_MODULE_6__.inRendererProcess) {
                    Object( electron_redux__WEBPACK_IMPORTED_MODULE_8__.replayActionRenderer)( store );
                } else {
                    Object( electron_redux__WEBPACK_IMPORTED_MODULE_8__.replayActionMain)( store );
                }

                return store;
            };

            /* harmony default export */ __webpack_exports__.default = ( {
                configureStore,
                history
            } );

            /** */ } ),

        /** */ "./app/store/configureStore.js":
        /*! *************************************!*\
  !*** ./app/store/configureStore.js ***!
  \************************************ */
        /*! exports provided: configureStore, history */
        /** */ ( function( module, __webpack_exports__, __webpack_require__ ) {

            "use strict";

            __webpack_require__.r( __webpack_exports__ );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "configureStore", function() { return configureStore; } );
            /* harmony export (binding) */ __webpack_require__.d( __webpack_exports__, "history", function() { return history; } );
            /* harmony import */ let _configureStore_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./configureStore.dev */ "./app/store/configureStore.dev.js" );
            /* harmony import */ let _configureStore_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./configureStore.prod */ "./app/store/configureStore.prod.js" );
            // @flow


            const selectedConfigureStore =  true ? _configureStore_prod__WEBPACK_IMPORTED_MODULE_1__.default : undefined;
            const {
                configureStore
            } = selectedConfigureStore;
            const {
                history
            } = selectedConfigureStore;

            /** */ } ),

        /** */ "./app/store/configureStore.prod.js":
        /*! ******************************************!*\
  !*** ./app/store/configureStore.prod.js ***!
  \***************************************** */
        /*! exports provided: default */
        /** */ ( function( module, __webpack_exports__, __webpack_require__ ) {

            "use strict";

            __webpack_require__.r( __webpack_exports__ );
            /* harmony import */ let core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js" );
            /* harmony import */ let core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n( core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ );
            /* harmony import */ let redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! redux */ "redux" );
            /* harmony import */ let redux__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n( redux__WEBPACK_IMPORTED_MODULE_1__ );
            /* harmony import */ let redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! redux-thunk */ "redux-thunk" );
            /* harmony import */ let redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n( redux_thunk__WEBPACK_IMPORTED_MODULE_2__ );
            /* harmony import */ let history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! history */ "history" );
            /* harmony import */ let history__WEBPACK_IMPORTED_MODULE_3___default = /* #__PURE__ */__webpack_require__.n( history__WEBPACK_IMPORTED_MODULE_3__ );
            /* harmony import */ let connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js" );
            /* harmony import */ let connected_react_router__WEBPACK_IMPORTED_MODULE_4___default = /* #__PURE__ */__webpack_require__.n( connected_react_router__WEBPACK_IMPORTED_MODULE_4__ );
            /* harmony import */ let redux_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js" );
            /* harmony import */ let redux_logger__WEBPACK_IMPORTED_MODULE_5___default = /* #__PURE__ */__webpack_require__.n( redux_logger__WEBPACK_IMPORTED_MODULE_5__ );
            /* harmony import */ let _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../constants.js */ "./app/constants.js" );
            /* harmony import */ let _addMiddlewares__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./addMiddlewares */ "./app/store/addMiddlewares.js" );
            /* harmony import */ let electron_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! electron-redux */ "electron-redux" );
            /* harmony import */ let electron_redux__WEBPACK_IMPORTED_MODULE_8___default = /* #__PURE__ */__webpack_require__.n( electron_redux__WEBPACK_IMPORTED_MODULE_8__ );
            /* harmony import */ let _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../reducers */ "./app/reducers/index.tsx" );


            function _objectSpread( target ) { for ( var i = 1; i < arguments.length; i++ ) { var source = arguments[i] != null ? arguments[i] : {}; let ownKeys = Object.keys( source ); if ( typeof Object.getOwnPropertySymbols === 'function' ) { ownKeys = ownKeys.concat( Object.getOwnPropertySymbols( source ).filter( function ( sym ) { return Object.getOwnPropertyDescriptor( source, sym ).enumerable; } ) ); } ownKeys.forEach( function ( key ) { _defineProperty( target, key, source[key] ); } ); } return target; }

            function _defineProperty( obj, key, value ) { if ( key in obj ) { Object.defineProperty( obj, key, { value, enumerable: true, configurable: true, writable: true } ); } else { obj[key] = value; } return obj; }










            const initialStateFromMain = _constants_js__WEBPACK_IMPORTED_MODULE_6__.inRendererProcess ? Object( electron_redux__WEBPACK_IMPORTED_MODULE_8__.getInitialStateRenderer)() : {};
            let history;

            if ( _constants_js__WEBPACK_IMPORTED_MODULE_6__.inRendererProcess) {
                history = Object( history__WEBPACK_IMPORTED_MODULE_3__.createHashHistory)();
            }

            const rootReducer = Object( _reducers__WEBPACK_IMPORTED_MODULE_9__.default)( history ); // const configureStore = (initialState?: counterStateType) => {

            const configureStore = ( initialState = initialStateFromMain, thisIsTheBackgroundProcess = false ) => {
                // Redux Configuration
                const middleware = [];
                const enhancers = []; // Router Middleware

                if ( history ) {
                    const router = Object( connected_react_router__WEBPACK_IMPORTED_MODULE_4__.routerMiddleware)( history );
                    middleware.push( router );
                }

                Object( _addMiddlewares__WEBPACK_IMPORTED_MODULE_7__.default)( middleware, thisIsTheBackgroundProcess ); // Logging Middleware

                const logger = Object( redux_logger__WEBPACK_IMPORTED_MODULE_5__.createLogger)( {
                    level: 'info',
                    collapsed: true
                } ); // Skip redux logs in console during the tests

                if ( true ) {
                    middleware.push( logger );
                } // Redux DevTools Configuration


                const actionCreators = _objectSpread( {}, counterActions, connected_react_router__WEBPACK_IMPORTED_MODULE_4__.routerActions);

                let composeEnhancers;

                if ( !_constants_js__WEBPACK_IMPORTED_MODULE_6__.isRunningSpectronTestProcess && _constants_js__WEBPACK_IMPORTED_MODULE_6__.inRendererProcess) {
                    // If Redux DevTools Extension is installed use it, otherwise use Redux compose

                    /* eslint-disable no-underscore-dangle */
                    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__( {
                        // Options: http://extension.remotedev.io/docs/API/Arguments.html
                        actionCreators
                    } ) : redux__WEBPACK_IMPORTED_MODULE_1__.compose;
                    /* eslint-enable no-underscore-dangle */
                } else {
                    composeEnhancers = redux__WEBPACK_IMPORTED_MODULE_1__.compose;
                } // Apply Middleware & Compose Enhancers


                enhancers.push( Object( redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)( ...middleware ) );
                const enhancer = composeEnhancers( ...enhancers ); // Create Store

                const store = Object( redux__WEBPACK_IMPORTED_MODULE_1__.createStore)( rootReducer, initialState, enhancer );

                if ( false ) {}

                if ( _constants_js__WEBPACK_IMPORTED_MODULE_6__.inRendererProcess) {
                    Object( electron_redux__WEBPACK_IMPORTED_MODULE_8__.replayActionRenderer)( store );
                } else {
                    Object( electron_redux__WEBPACK_IMPORTED_MODULE_8__.replayActionMain)( store );
                }

                return store;
            };

            /* harmony default export */ __webpack_exports__.default = ( {
                configureStore,
                history
            } );

            /** */ } ),

        /** */ "./node_modules/connected-react-router/lib/ConnectedRouter.js":
        /*! ********************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/ConnectedRouter.js ***!
  \******************************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";


            Object.defineProperty( exports, "__esModule", {
                value: true
            } );
            exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function ( obj ) { return typeof obj; } : function ( obj ) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            var _createClass = function () { function defineProperties( target, props ) { for ( var i = 0; i < props.length; i++ ) { let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ( "value" in descriptor ) descriptor.writable = true; Object.defineProperty( target, descriptor.key, descriptor ); } } return function ( Constructor, protoProps, staticProps ) { if ( protoProps ) defineProperties( Constructor.prototype, protoProps ); if ( staticProps ) defineProperties( Constructor, staticProps ); return Constructor; }; }();

            var _react = __webpack_require__( /*! react */ "react" );

            var _react2 = _interopRequireDefault( _react );

            var _propTypes = __webpack_require__( /*! prop-types */ "./node_modules/prop-types/index.js" );

            var _propTypes2 = _interopRequireDefault( _propTypes );

            var _reactRedux = __webpack_require__( /*! react-redux */ "react-redux" );

            var _reactRouter = __webpack_require__( /*! react-router */ "react-router" );

            var _actions = __webpack_require__( /*! ./actions */ "./node_modules/connected-react-router/lib/actions.js" );

            function _interopRequireDefault( obj ) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _classCallCheck( instance, Constructor ) { if ( !( instance instanceof Constructor ) ) { throw new TypeError( "Cannot call a class as a function" ); } }

            function _possibleConstructorReturn( self, call ) { if ( !self ) { throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" ); } return call && ( typeof call === "object" || typeof call === "function" ) ? call : self; }

            function _inherits( subClass, superClass ) { if ( typeof superClass !== "function" && superClass !== null ) { throw new TypeError( "Super expression must either be null or a function, not " + typeof superClass ); } subClass.prototype = Object.create( superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } } ); if ( superClass ) Object.setPrototypeOf ? Object.setPrototypeOf( subClass, superClass ) : subClass.__proto__ = superClass; }

            var createConnectedRouter = function createConnectedRouter( structure ) {
                var getIn = structure.getIn;

      
var toJS = structure.toJS;
                /*
   * ConnectedRouter listens to a history object passed from props.
   * When history is changed, it dispatches action to redux store.
   * Then, store will pass props to component to render.
   * This creates uni-directional flow from history->store->router->components.
   */

                var ConnectedRouter = function ( _get__2 ) {
                    _inherits( ConnectedRouter, _get__2 );

                    function ConnectedRouter( props, context ) {
                        _classCallCheck( this, ConnectedRouter );

                        var _this = _possibleConstructorReturn( this, ( ConnectedRouter.__proto__ || Object.getPrototypeOf( ConnectedRouter ) ).call( this, props ) );

                        _this.inTimeTravelling = false;

                        // Subscribe to store changes
                        _this.unsubscribe = context.store.subscribe( function () {
                            // Extract store's location
                            var _toJS = toJS( getIn( context.store.getState(), ['router', 'location'] ) );

            
var pathnameInStore = _toJS.pathname;

            
var searchInStore = _toJS.search;

            
var hashInStore = _toJS.hash;
                            // Extract history's location


                            var _props$history$locati = props.history.location;

            
var pathnameInHistory = _props$history$locati.pathname;

            
var searchInHistory = _props$history$locati.search;

            
var hashInHistory = _props$history$locati.hash;

                            // If we do time travelling, the location in store is changed but location in history is not changed

                            if ( pathnameInHistory !== pathnameInStore || searchInHistory !== searchInStore || hashInHistory !== hashInStore ) {
                                _this.inTimeTravelling = true;
                                // Update history's location to match store's location
                                props.history.push( {
                                    pathname: pathnameInStore,
                                    search: searchInStore,
                                    hash: hashInStore
                                } );
                            }
                        } );

                        var handleLocationChange = function handleLocationChange( location, action ) {
                            // Dispatch onLocationChanged except when we're in time travelling
                            if ( !_this.inTimeTravelling ) {
                                props.onLocationChanged( location, action );
                            } else {
                                _this.inTimeTravelling = false;
                            }
                        };

                        // Listen to history changes
                        _this.unlisten = props.history.listen( handleLocationChange );
                        // Dispatch a location change action for the initial location
                        handleLocationChange( props.history.location, props.history.action );
                        return _this;
                    }

                    _createClass( ConnectedRouter, [{
                        key: 'componentWillUnmount',
                        value: function componentWillUnmount() {
                            this.unlisten();
                            this.unsubscribe();
                        }
                    }, {
                        key: 'render',
                        value: function render() {
                            var _props = this.props;

            
var history = _props.history;

            
var children = _props.children;


                            return _get__( 'React' ).createElement(
                                _get__( 'Router' ),
                                { history },
                                children
                            );
                        }
                    }] );

                    return ConnectedRouter;
                }( _get__( 'Component' ) );

                ConnectedRouter.contextTypes = {
                    store: _get__( 'PropTypes' ).shape( {
                        getState: _get__( 'PropTypes' ).func.isRequired,
                        subscribe: _get__( 'PropTypes' ).func.isRequired
                    } ).isRequired
                };

                ConnectedRouter.propTypes = {
                    history: _get__( 'PropTypes' ).shape( {
                        action: _get__( 'PropTypes' ).string.isRequired,
                        listen: _get__( 'PropTypes' ).func.isRequired,
                        location: _get__( 'PropTypes' ).object.isRequired,
                        push: _get__( 'PropTypes' ).func.isRequired
                    } ).isRequired,
                    location: _get__( 'PropTypes' ).oneOfType( [_get__( 'PropTypes' ).object, _get__( 'PropTypes' ).string] ).isRequired,
                    action: _get__( 'PropTypes' ).string.isRequired,
                    basename: _get__( 'PropTypes' ).string,
                    children: _get__( 'PropTypes' ).oneOfType( [_get__( 'PropTypes' ).func, _get__( 'PropTypes' ).node] ),
                    onLocationChanged: _get__( 'PropTypes' ).func.isRequired
                };

                var mapStateToProps = function mapStateToProps( state ) {
                    return {
                        action: getIn( state, ['router', 'action'] ),
                        location: getIn( state, ['router', 'location'] )
                    };
                };

                var mapDispatchToProps = function mapDispatchToProps( dispatch ) {
                    return {
                        onLocationChanged: function onLocationChanged( location, action ) {
                            return dispatch( _get__( 'onLocationChanged' )( location, action ) );
                        }
                    };
                };

                return _get__( 'connect' )( mapStateToProps, mapDispatchToProps )( ConnectedRouter );
            };

            exports.default = _get__( 'createConnectedRouter' );

            function _getGlobalObject() {
                try {
                    if ( !!global ) {
                        return global;
                    }
                } catch ( e ) {
                    try {
                        if ( !!window ) {
                            return window;
                        }
                    } catch ( e ) {
                        return this;
                    }
                }
            }

            ;
            var _RewireModuleId__ = null;

            function _getRewireModuleId__() {
                if ( _RewireModuleId__ === null ) {
                    var globalVariable = _getGlobalObject();

                    if ( !globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ ) {
                        globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
                    }

                    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
                }

                return _RewireModuleId__;
            }

            function _getRewireRegistry__() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ ) {
                    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                }

                return __$$GLOBAL_REWIRE_REGISTRY__;
            }

            function _getRewiredData__() {
                var moduleId = _getRewireModuleId__();

                var registry = _getRewireRegistry__();

                var rewireData = registry[moduleId];

                if ( !rewireData ) {
                    registry[moduleId] = Object.create( null );
                    rewireData = registry[moduleId];
                }

                return rewireData;
            }

            ( function registerResetAll() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__rewire_reset_all__) {
                    theGlobalVariable.__rewire_reset_all__ = function () {
                        theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                    };
                }
            } )();

            var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
            var _RewireAPI__ = {};

            ( function () {
                function addPropertyToAPIObject( name, value ) {
                    Object.defineProperty( _RewireAPI__, name, {
                        value: value,
                        enumerable: false,
                        configurable: true
                    } );
                }

                addPropertyToAPIObject( '__get__', _get__ );
                addPropertyToAPIObject( '__GetDependency__', _get__ );
                addPropertyToAPIObject( '__Rewire__', _set__ );
                addPropertyToAPIObject( '__set__', _set__ );
                addPropertyToAPIObject( '__reset__', _reset__ );
                addPropertyToAPIObject( '__ResetDependency__', _reset__ );
                addPropertyToAPIObject( '__with__', _with__ );
            } )();

            function _get__( variableName ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _get_original__( variableName );
                } else {
                    var value = rewireData[variableName];

                    if ( value === INTENTIONAL_UNDEFINED ) {
                        return undefined;
                    } else {
                        return value;
                    }
                }
            }

            function _get_original__( variableName ) {
                switch ( variableName ) {
                    case 'Component':
                        return _react.Component;

                    case 'PropTypes':
                        return _propTypes2.default;

                    case 'onLocationChanged':
                        return _actions.onLocationChanged;

                    case 'connect':
                        return _reactRedux.connect;

                    case 'createConnectedRouter':
                        return createConnectedRouter;

                    case 'React':
                        return _react2.default;

                    case 'Router':
                        return _reactRouter.Router;
                }

                return undefined;
            }

            function _assign__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _set_original__( variableName, value );
                } else {
                    return rewireData[variableName] = value;
                }
            }

            function _set_original__( variableName, _value ) {
                switch ( variableName ) {}

                return undefined;
            }

            function _update_operation__( operation, variableName, prefix ) {
                var oldValue = _get__( variableName );

                var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

                _assign__( variableName, newValue );

                return prefix ? newValue : oldValue;
            }

            function _set__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( ( typeof variableName === 'undefined' ? 'undefined' : _typeof( variableName ) ) === 'object' ) {
                    Object.keys( variableName ).forEach( function ( name ) {
                        rewireData[name] = variableName[name];
                    } );
                } else {
                    if ( value === undefined ) {
                        rewireData[variableName] = INTENTIONAL_UNDEFINED;
                    } else {
                        rewireData[variableName] = value;
                    }

                    return function () {
                        _reset__( variableName );
                    };
                }
            }

            function _reset__( variableName ) {
                var rewireData = _getRewiredData__();

                delete rewireData[variableName];

                if ( Object.keys( rewireData ).length == 0 ) {
                    delete _getRewireRegistry__()[_getRewireModuleId__];
                }

                ;
            }

            function _with__( object ) {
                var rewireData = _getRewiredData__();

                var rewiredVariableNames = Object.keys( object );
                var previousValues = {};

                function reset() {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        rewireData[variableName] = previousValues[variableName];
                    } );
                }

                return function ( callback ) {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        previousValues[variableName] = rewireData[variableName];
                        rewireData[variableName] = object[variableName];
                    } );
                    var result = callback();

                    if ( !!result && typeof result.then === 'function' ) {
                        result.then( reset ).catch( reset );
                    } else {
                        reset();
                    }

                    return result;
                };
            }

            var _typeOfOriginalExport = typeof createConnectedRouter === 'undefined' ? 'undefined' : _typeof( createConnectedRouter );

            function addNonEnumerableProperty( name, value ) {
                Object.defineProperty( createConnectedRouter, name, {
                    value: value,
                    enumerable: false,
                    configurable: true
                } );
            }

            if ( ( _typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function' ) && Object.isExtensible( createConnectedRouter ) ) {
                addNonEnumerableProperty( '__get__', _get__ );
                addNonEnumerableProperty( '__GetDependency__', _get__ );
                addNonEnumerableProperty( '__Rewire__', _set__ );
                addNonEnumerableProperty( '__set__', _set__ );
                addNonEnumerableProperty( '__reset__', _reset__ );
                addNonEnumerableProperty( '__ResetDependency__', _reset__ );
                addNonEnumerableProperty( '__with__', _with__ );
                addNonEnumerableProperty( '__RewireAPI__', _RewireAPI__ );
            }

            exports.__get__ = _get__;
            exports.__GetDependency__ = _get__;
            exports.__Rewire__ = _set__;
            exports.__set__ = _set__;
            exports.__ResetDependency__ = _reset__;
            exports.__RewireAPI__ = _RewireAPI__;

            /** */ } ),

        /** */ "./node_modules/connected-react-router/lib/actions.js":
        /*! ************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/actions.js ***!
  \*********************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";


            Object.defineProperty( exports, "__esModule", {
                value: true
            } );

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function ( obj ) { return typeof obj; } : function ( obj ) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            /**
 * This action type will be dispatched when your history
 * receives a location change.
 */
            var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

            var onLocationChanged = exports.onLocationChanged = function onLocationChanged( location, action ) {
                return {
                    type: _get__( 'LOCATION_CHANGE' ),
                    payload: {
                        location: location,
                        action: action
                    }
                };
            };

            /**
 * This action type will be dispatched by the history actions below.
 * If you're writing a middleware to watch for navigation events, be sure to
 * look for actions of this type.
 */
            var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

            var updateLocation = function updateLocation( method ) {
                return function () {
                    for ( var _len = arguments.length, args = Array( _len ), _key = 0; _key < _len; _key++ ) {
                        args[_key] = arguments[_key];
                    }

                    return {
                        type: _get__( 'CALL_HISTORY_METHOD' ),
                        payload: {
                            method: method,
                            args: args
                        }
                    };
                };
            };

            /**
 * These actions correspond to the history API.
 * The associated routerMiddleware will capture these events before they get to
 * your reducer and reissue them as the matching function on your history.
 */
            var push = exports.push = _get__( 'updateLocation' )( 'push' );
            var replace = exports.replace = _get__( 'updateLocation' )( 'replace' );
            var go = exports.go = _get__( 'updateLocation' )( 'go' );
            var goBack = exports.goBack = _get__( 'updateLocation' )( 'goBack' );
            var goForward = exports.goForward = _get__( 'updateLocation' )( 'goForward' );

            var routerActions = exports.routerActions = { push: _get__( 'push' ), replace: _get__( 'replace' ), go: _get__( 'go' ), goBack: _get__( 'goBack' ), goForward: _get__( 'goForward' ) };

            function _getGlobalObject() {
                try {
                    if ( !!global ) {
                        return global;
                    }
                } catch ( e ) {
                    try {
                        if ( !!window ) {
                            return window;
                        }
                    } catch ( e ) {
                        return this;
                    }
                }
            }

            ;
            var _RewireModuleId__ = null;

            function _getRewireModuleId__() {
                if ( _RewireModuleId__ === null ) {
                    var globalVariable = _getGlobalObject();

                    if ( !globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ ) {
                        globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
                    }

                    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
                }

                return _RewireModuleId__;
            }

            function _getRewireRegistry__() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ ) {
                    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                }

                return __$$GLOBAL_REWIRE_REGISTRY__;
            }

            function _getRewiredData__() {
                var moduleId = _getRewireModuleId__();

                var registry = _getRewireRegistry__();

                var rewireData = registry[moduleId];

                if ( !rewireData ) {
                    registry[moduleId] = Object.create( null );
                    rewireData = registry[moduleId];
                }

                return rewireData;
            }

            ( function registerResetAll() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__rewire_reset_all__) {
                    theGlobalVariable.__rewire_reset_all__ = function () {
                        theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                    };
                }
            } )();

            var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
            var _RewireAPI__ = {};

            ( function () {
                function addPropertyToAPIObject( name, value ) {
                    Object.defineProperty( _RewireAPI__, name, {
                        value: value,
                        enumerable: false,
                        configurable: true
                    } );
                }

                addPropertyToAPIObject( '__get__', _get__ );
                addPropertyToAPIObject( '__GetDependency__', _get__ );
                addPropertyToAPIObject( '__Rewire__', _set__ );
                addPropertyToAPIObject( '__set__', _set__ );
                addPropertyToAPIObject( '__reset__', _reset__ );
                addPropertyToAPIObject( '__ResetDependency__', _reset__ );
                addPropertyToAPIObject( '__with__', _with__ );
            } )();

            function _get__( variableName ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _get_original__( variableName );
                } else {
                    var value = rewireData[variableName];

                    if ( value === INTENTIONAL_UNDEFINED ) {
                        return undefined;
                    } else {
                        return value;
                    }
                }
            }

            function _get_original__( variableName ) {
                switch ( variableName ) {
                    case 'LOCATION_CHANGE':
                        return LOCATION_CHANGE;

                    case 'CALL_HISTORY_METHOD':
                        return CALL_HISTORY_METHOD;

                    case 'updateLocation':
                        return updateLocation;

                    case 'push':
                        return push;

                    case 'replace':
                        return replace;

                    case 'go':
                        return go;

                    case 'goBack':
                        return goBack;

                    case 'goForward':
                        return goForward;
                }

                return undefined;
            }

            function _assign__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _set_original__( variableName, value );
                } else {
                    return rewireData[variableName] = value;
                }
            }

            function _set_original__( variableName, _value ) {
                switch ( variableName ) {}

                return undefined;
            }

            function _update_operation__( operation, variableName, prefix ) {
                var oldValue = _get__( variableName );

                var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

                _assign__( variableName, newValue );

                return prefix ? newValue : oldValue;
            }

            function _set__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( ( typeof variableName === 'undefined' ? 'undefined' : _typeof( variableName ) ) === 'object' ) {
                    Object.keys( variableName ).forEach( function ( name ) {
                        rewireData[name] = variableName[name];
                    } );
                } else {
                    if ( value === undefined ) {
                        rewireData[variableName] = INTENTIONAL_UNDEFINED;
                    } else {
                        rewireData[variableName] = value;
                    }

                    return function () {
                        _reset__( variableName );
                    };
                }
            }

            function _reset__( variableName ) {
                var rewireData = _getRewiredData__();

                delete rewireData[variableName];

                if ( Object.keys( rewireData ).length == 0 ) {
                    delete _getRewireRegistry__()[_getRewireModuleId__];
                }

                ;
            }

            function _with__( object ) {
                var rewireData = _getRewiredData__();

                var rewiredVariableNames = Object.keys( object );
                var previousValues = {};

                function reset() {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        rewireData[variableName] = previousValues[variableName];
                    } );
                }

                return function ( callback ) {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        previousValues[variableName] = rewireData[variableName];
                        rewireData[variableName] = object[variableName];
                    } );
                    var result = callback();

                    if ( !!result && typeof result.then === 'function' ) {
                        result.then( reset ).catch( reset );
                    } else {
                        reset();
                    }

                    return result;
                };
            }

            exports.__get__ = _get__;
            exports.__GetDependency__ = _get__;
            exports.__Rewire__ = _set__;
            exports.__set__ = _set__;
            exports.__ResetDependency__ = _reset__;
            exports.__RewireAPI__ = _RewireAPI__;
            exports.default = _RewireAPI__;

            /** */ } ),

        /** */ "./node_modules/connected-react-router/lib/createAll.js":
        /*! **************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/createAll.js ***!
  \************************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";


            Object.defineProperty( exports, "__esModule", {
                value: true
            } );
            exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function ( obj ) { return typeof obj; } : function ( obj ) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            var _extends = Object.assign || function ( target ) { for ( var i = 1; i < arguments.length; i++ ) { let source = arguments[i]; for ( var key in source ) { if ( Object.prototype.hasOwnProperty.call( source, key ) ) { target[key] = source[key]; } } } return target; };

            var _actions = __webpack_require__( /*! ./actions */ "./node_modules/connected-react-router/lib/actions.js" );

            var actions = _interopRequireWildcard( _actions );

            var _ConnectedRouter = __webpack_require__( /*! ./ConnectedRouter */ "./node_modules/connected-react-router/lib/ConnectedRouter.js" );

            var _ConnectedRouter2 = _interopRequireDefault( _ConnectedRouter );

            var _reducer = __webpack_require__( /*! ./reducer */ "./node_modules/connected-react-router/lib/reducer.js" );

            var _reducer2 = _interopRequireDefault( _reducer );

            var _middleware = __webpack_require__( /*! ./middleware */ "./node_modules/connected-react-router/lib/middleware.js" );

            var _middleware2 = _interopRequireDefault( _middleware );

            var _selectors = __webpack_require__( /*! ./selectors */ "./node_modules/connected-react-router/lib/selectors.js" );

            var _selectors2 = _interopRequireDefault( _selectors );

            function _interopRequireDefault( obj ) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _interopRequireWildcard( obj ) { if ( obj && obj.__esModule ) { return obj; } else { let newObj = {}; if ( obj != null ) { for ( var key in obj ) { if ( Object.prototype.hasOwnProperty.call( obj, key ) ) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

            var createAll = function createAll( structure ) {
                return _extends( {}, _get__( 'actions' ), _get__( 'createSelectors' )( structure ), {
                    ConnectedRouter: _get__( 'createConnectedRouter' )( structure ),
                    connectRouter: _get__( 'createConnectRouter' )( structure ),
                    routerMiddleware: _get__( 'routerMiddleware' )
                } );
            };

            exports.default = _get__( 'createAll' );

            function _getGlobalObject() {
                try {
                    if ( !!global ) {
                        return global;
                    }
                } catch ( e ) {
                    try {
                        if ( !!window ) {
                            return window;
                        }
                    } catch ( e ) {
                        return this;
                    }
                }
            }

            ;
            var _RewireModuleId__ = null;

            function _getRewireModuleId__() {
                if ( _RewireModuleId__ === null ) {
                    var globalVariable = _getGlobalObject();

                    if ( !globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ ) {
                        globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
                    }

                    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
                }

                return _RewireModuleId__;
            }

            function _getRewireRegistry__() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ ) {
                    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                }

                return __$$GLOBAL_REWIRE_REGISTRY__;
            }

            function _getRewiredData__() {
                var moduleId = _getRewireModuleId__();

                var registry = _getRewireRegistry__();

                var rewireData = registry[moduleId];

                if ( !rewireData ) {
                    registry[moduleId] = Object.create( null );
                    rewireData = registry[moduleId];
                }

                return rewireData;
            }

            ( function registerResetAll() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__rewire_reset_all__) {
                    theGlobalVariable.__rewire_reset_all__ = function () {
                        theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                    };
                }
            } )();

            var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
            var _RewireAPI__ = {};

            ( function () {
                function addPropertyToAPIObject( name, value ) {
                    Object.defineProperty( _RewireAPI__, name, {
                        value: value,
                        enumerable: false,
                        configurable: true
                    } );
                }

                addPropertyToAPIObject( '__get__', _get__ );
                addPropertyToAPIObject( '__GetDependency__', _get__ );
                addPropertyToAPIObject( '__Rewire__', _set__ );
                addPropertyToAPIObject( '__set__', _set__ );
                addPropertyToAPIObject( '__reset__', _reset__ );
                addPropertyToAPIObject( '__ResetDependency__', _reset__ );
                addPropertyToAPIObject( '__with__', _with__ );
            } )();

            function _get__( variableName ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _get_original__( variableName );
                } else {
                    var value = rewireData[variableName];

                    if ( value === INTENTIONAL_UNDEFINED ) {
                        return undefined;
                    } else {
                        return value;
                    }
                }
            }

            function _get_original__( variableName ) {
                switch ( variableName ) {
                    case 'actions':
                        return _filterWildcardImport__( actions );

                    case 'createSelectors':
                        return _selectors2.default;

                    case 'createConnectedRouter':
                        return _ConnectedRouter2.default;

                    case 'createConnectRouter':
                        return _reducer2.default;

                    case 'routerMiddleware':
                        return _middleware2.default;

                    case 'createAll':
                        return createAll;
                }

                return undefined;
            }

            function _assign__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _set_original__( variableName, value );
                } else {
                    return rewireData[variableName] = value;
                }
            }

            function _set_original__( variableName, _value ) {
                switch ( variableName ) {}

                return undefined;
            }

            function _update_operation__( operation, variableName, prefix ) {
                var oldValue = _get__( variableName );

                var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

                _assign__( variableName, newValue );

                return prefix ? newValue : oldValue;
            }

            function _set__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( ( typeof variableName === 'undefined' ? 'undefined' : _typeof( variableName ) ) === 'object' ) {
                    Object.keys( variableName ).forEach( function ( name ) {
                        rewireData[name] = variableName[name];
                    } );
                } else {
                    if ( value === undefined ) {
                        rewireData[variableName] = INTENTIONAL_UNDEFINED;
                    } else {
                        rewireData[variableName] = value;
                    }

                    return function () {
                        _reset__( variableName );
                    };
                }
            }

            function _reset__( variableName ) {
                var rewireData = _getRewiredData__();

                delete rewireData[variableName];

                if ( Object.keys( rewireData ).length == 0 ) {
                    delete _getRewireRegistry__()[_getRewireModuleId__];
                }

                ;
            }

            function _with__( object ) {
                var rewireData = _getRewiredData__();

                var rewiredVariableNames = Object.keys( object );
                var previousValues = {};

                function reset() {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        rewireData[variableName] = previousValues[variableName];
                    } );
                }

                return function ( callback ) {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        previousValues[variableName] = rewireData[variableName];
                        rewireData[variableName] = object[variableName];
                    } );
                    var result = callback();

                    if ( !!result && typeof result.then === 'function' ) {
                        result.then( reset ).catch( reset );
                    } else {
                        reset();
                    }

                    return result;
                };
            }

            var _typeOfOriginalExport = typeof createAll === 'undefined' ? 'undefined' : _typeof( createAll );

            function addNonEnumerableProperty( name, value ) {
                Object.defineProperty( createAll, name, {
                    value: value,
                    enumerable: false,
                    configurable: true
                } );
            }

            if ( ( _typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function' ) && Object.isExtensible( createAll ) ) {
                addNonEnumerableProperty( '__get__', _get__ );
                addNonEnumerableProperty( '__GetDependency__', _get__ );
                addNonEnumerableProperty( '__Rewire__', _set__ );
                addNonEnumerableProperty( '__set__', _set__ );
                addNonEnumerableProperty( '__reset__', _reset__ );
                addNonEnumerableProperty( '__ResetDependency__', _reset__ );
                addNonEnumerableProperty( '__with__', _with__ );
                addNonEnumerableProperty( '__RewireAPI__', _RewireAPI__ );
            }

            function _filterWildcardImport__() {
                var wildcardImport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var validPropertyNames = Object.keys( wildcardImport ).filter( function ( propertyName ) {
                    return propertyName !== '__get__' && propertyName !== '__set__' && propertyName !== '__reset__' && propertyName !== '__with__' && propertyName !== '__GetDependency__' && propertyName !== '__Rewire__' && propertyName !== '__ResetDependency__' && propertyName !== '__RewireAPI__';
                } );
                return validPropertyNames.reduce( function ( filteredWildcardImport, propertyName ) {
                    filteredWildcardImport[propertyName] = wildcardImport[propertyName];
                    return filteredWildcardImport;
                }, {} );
            }

            exports.__get__ = _get__;
            exports.__GetDependency__ = _get__;
            exports.__Rewire__ = _set__;
            exports.__set__ = _set__;
            exports.__ResetDependency__ = _reset__;
            exports.__RewireAPI__ = _RewireAPI__;

            /** */ } ),

        /** */ "./node_modules/connected-react-router/lib/index.js":
        /*! **********************************************************!*\
  !*** ./node_modules/connected-react-router/lib/index.js ***!
  \********************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";


            Object.defineProperty( exports, "__esModule", {
                value: true
            } );
            exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = exports.createMatchSelector = exports.getAction = exports.getLocation = exports.routerMiddleware = exports.connectRouter = exports.ConnectedRouter = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.LOCATION_CHANGE = undefined;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function ( obj ) { return typeof obj; } : function ( obj ) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            var _createAll = __webpack_require__( /*! ./createAll */ "./node_modules/connected-react-router/lib/createAll.js" );

            var _createAll2 = _interopRequireDefault( _createAll );

            var _plain = __webpack_require__( /*! ./structure/plain */ "./node_modules/connected-react-router/lib/structure/plain/index.js" );

            var _plain2 = _interopRequireDefault( _plain );

            function _interopRequireDefault( obj ) { return obj && obj.__esModule ? obj : { default: obj }; }

            var _get__2 = _get__( 'createAll' )( _get__( 'plainStructure' ) );

            var LOCATION_CHANGE = _get__2.LOCATION_CHANGE;

    
var CALL_HISTORY_METHOD = _get__2.CALL_HISTORY_METHOD;

    
var push = _get__2.push;

    
var replace = _get__2.replace;

    
var go = _get__2.go;

    
var goBack = _get__2.goBack;

    
var goForward = _get__2.goForward;

    
var routerActions = _get__2.routerActions;

    
var ConnectedRouter = _get__2.ConnectedRouter;

    
var connectRouter = _get__2.connectRouter;

    
var routerMiddleware = _get__2.routerMiddleware;

    
var getLocation = _get__2.getLocation;

    
var getAction = _get__2.getAction;

    
var createMatchSelector = _get__2.createMatchSelector;
            exports.LOCATION_CHANGE = LOCATION_CHANGE;
            exports.CALL_HISTORY_METHOD = CALL_HISTORY_METHOD;
            exports.push = push;
            exports.replace = replace;
            exports.go = go;
            exports.goBack = goBack;
            exports.goForward = goForward;
            exports.routerActions = routerActions;
            exports.ConnectedRouter = ConnectedRouter;
            exports.connectRouter = connectRouter;
            exports.routerMiddleware = routerMiddleware;
            exports.getLocation = getLocation;
            exports.getAction = getAction;
            exports.createMatchSelector = createMatchSelector;

            function _getGlobalObject() {
                try {
                    if ( !!global ) {
                        return global;
                    }
                } catch ( e ) {
                    try {
                        if ( !!window ) {
                            return window;
                        }
                    } catch ( e ) {
                        return this;
                    }
                }
            }

            ;
            var _RewireModuleId__ = null;

            function _getRewireModuleId__() {
                if ( _RewireModuleId__ === null ) {
                    var globalVariable = _getGlobalObject();

                    if ( !globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ ) {
                        globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
                    }

                    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
                }

                return _RewireModuleId__;
            }

            function _getRewireRegistry__() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ ) {
                    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                }

                return __$$GLOBAL_REWIRE_REGISTRY__;
            }

            function _getRewiredData__() {
                var moduleId = _getRewireModuleId__();

                var registry = _getRewireRegistry__();

                var rewireData = registry[moduleId];

                if ( !rewireData ) {
                    registry[moduleId] = Object.create( null );
                    rewireData = registry[moduleId];
                }

                return rewireData;
            }

            ( function registerResetAll() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__rewire_reset_all__) {
                    theGlobalVariable.__rewire_reset_all__ = function () {
                        theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                    };
                }
            } )();

            var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
            var _RewireAPI__ = {};

            ( function () {
                function addPropertyToAPIObject( name, value ) {
                    Object.defineProperty( _RewireAPI__, name, {
                        value: value,
                        enumerable: false,
                        configurable: true
                    } );
                }

                addPropertyToAPIObject( '__get__', _get__ );
                addPropertyToAPIObject( '__GetDependency__', _get__ );
                addPropertyToAPIObject( '__Rewire__', _set__ );
                addPropertyToAPIObject( '__set__', _set__ );
                addPropertyToAPIObject( '__reset__', _reset__ );
                addPropertyToAPIObject( '__ResetDependency__', _reset__ );
                addPropertyToAPIObject( '__with__', _with__ );
            } )();

            function _get__( variableName ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _get_original__( variableName );
                } else {
                    var value = rewireData[variableName];

                    if ( value === INTENTIONAL_UNDEFINED ) {
                        return undefined;
                    } else {
                        return value;
                    }
                }
            }

            function _get_original__( variableName ) {
                switch ( variableName ) {
                    case 'createAll':
                        return _createAll2.default;

                    case 'plainStructure':
                        return _plain2.default;
                }

                return undefined;
            }

            function _assign__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _set_original__( variableName, value );
                } else {
                    return rewireData[variableName] = value;
                }
            }

            function _set_original__( variableName, _value ) {
                switch ( variableName ) {}

                return undefined;
            }

            function _update_operation__( operation, variableName, prefix ) {
                var oldValue = _get__( variableName );

                var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

                _assign__( variableName, newValue );

                return prefix ? newValue : oldValue;
            }

            function _set__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( ( typeof variableName === 'undefined' ? 'undefined' : _typeof( variableName ) ) === 'object' ) {
                    Object.keys( variableName ).forEach( function ( name ) {
                        rewireData[name] = variableName[name];
                    } );
                } else {
                    if ( value === undefined ) {
                        rewireData[variableName] = INTENTIONAL_UNDEFINED;
                    } else {
                        rewireData[variableName] = value;
                    }

                    return function () {
                        _reset__( variableName );
                    };
                }
            }

            function _reset__( variableName ) {
                var rewireData = _getRewiredData__();

                delete rewireData[variableName];

                if ( Object.keys( rewireData ).length == 0 ) {
                    delete _getRewireRegistry__()[_getRewireModuleId__];
                }

                ;
            }

            function _with__( object ) {
                var rewireData = _getRewiredData__();

                var rewiredVariableNames = Object.keys( object );
                var previousValues = {};

                function reset() {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        rewireData[variableName] = previousValues[variableName];
                    } );
                }

                return function ( callback ) {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        previousValues[variableName] = rewireData[variableName];
                        rewireData[variableName] = object[variableName];
                    } );
                    var result = callback();

                    if ( !!result && typeof result.then === 'function' ) {
                        result.then( reset ).catch( reset );
                    } else {
                        reset();
                    }

                    return result;
                };
            }

            exports.__get__ = _get__;
            exports.__GetDependency__ = _get__;
            exports.__Rewire__ = _set__;
            exports.__set__ = _set__;
            exports.__ResetDependency__ = _reset__;
            exports.__RewireAPI__ = _RewireAPI__;
            exports.default = _RewireAPI__;

            /** */ } ),

        /** */ "./node_modules/connected-react-router/lib/middleware.js":
        /*! ***************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/middleware.js ***!
  \************************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";


            Object.defineProperty( exports, "__esModule", {
                value: true
            } );
            exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function ( obj ) { return typeof obj; } : function ( obj ) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            var _actions = __webpack_require__( /*! ./actions */ "./node_modules/connected-react-router/lib/actions.js" );

            function _toConsumableArray( arr ) { if ( Array.isArray( arr ) ) { for ( var i = 0, arr2 = Array( arr.length ); i < arr.length; i++ ) { arr2[i] = arr[i]; } return arr2; } else { return [...arr]; } }

            /**
 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
 * provided history object. This will prevent these actions from reaching your
 * reducer or any middleware that comes after this one.
 */
            var routerMiddleware = function routerMiddleware( history ) {
                return function ( store ) {
                    return function ( next ) {
                        return function ( action ) {
                            // eslint-disable-line no-unused-vars
                            if ( action.type !== _get__( 'CALL_HISTORY_METHOD' ) ) {
                                return next( action );
                            }

                            var _action$payload = action.payload;

            
var method = _action$payload.method;

            
var args = _action$payload.args;

                            history[method](..._toConsumableArray(args));
                        };
                    };
                };
            };

            exports.default = _get__( 'routerMiddleware' );

            function _getGlobalObject() {
                try {
                    if ( !!global ) {
                        return global;
                    }
                } catch ( e ) {
                    try {
                        if ( !!window ) {
                            return window;
                        }
                    } catch ( e ) {
                        return this;
                    }
                }
            }

            ;
            var _RewireModuleId__ = null;

            function _getRewireModuleId__() {
                if ( _RewireModuleId__ === null ) {
                    var globalVariable = _getGlobalObject();

                    if ( !globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ ) {
                        globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
                    }

                    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
                }

                return _RewireModuleId__;
            }

            function _getRewireRegistry__() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ ) {
                    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                }

                return __$$GLOBAL_REWIRE_REGISTRY__;
            }

            function _getRewiredData__() {
                var moduleId = _getRewireModuleId__();

                var registry = _getRewireRegistry__();

                var rewireData = registry[moduleId];

                if ( !rewireData ) {
                    registry[moduleId] = Object.create( null );
                    rewireData = registry[moduleId];
                }

                return rewireData;
            }

            ( function registerResetAll() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__rewire_reset_all__) {
                    theGlobalVariable.__rewire_reset_all__ = function () {
                        theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                    };
                }
            } )();

            var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
            var _RewireAPI__ = {};

            ( function () {
                function addPropertyToAPIObject( name, value ) {
                    Object.defineProperty( _RewireAPI__, name, {
                        value: value,
                        enumerable: false,
                        configurable: true
                    } );
                }

                addPropertyToAPIObject( '__get__', _get__ );
                addPropertyToAPIObject( '__GetDependency__', _get__ );
                addPropertyToAPIObject( '__Rewire__', _set__ );
                addPropertyToAPIObject( '__set__', _set__ );
                addPropertyToAPIObject( '__reset__', _reset__ );
                addPropertyToAPIObject( '__ResetDependency__', _reset__ );
                addPropertyToAPIObject( '__with__', _with__ );
            } )();

            function _get__( variableName ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _get_original__( variableName );
                } else {
                    var value = rewireData[variableName];

                    if ( value === INTENTIONAL_UNDEFINED ) {
                        return undefined;
                    } else {
                        return value;
                    }
                }
            }

            function _get_original__( variableName ) {
                switch ( variableName ) {
                    case 'CALL_HISTORY_METHOD':
                        return _actions.CALL_HISTORY_METHOD;

                    case 'routerMiddleware':
                        return routerMiddleware;
                }

                return undefined;
            }

            function _assign__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _set_original__( variableName, value );
                } else {
                    return rewireData[variableName] = value;
                }
            }

            function _set_original__( variableName, _value ) {
                switch ( variableName ) {}

                return undefined;
            }

            function _update_operation__( operation, variableName, prefix ) {
                var oldValue = _get__( variableName );

                var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

                _assign__( variableName, newValue );

                return prefix ? newValue : oldValue;
            }

            function _set__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( ( typeof variableName === 'undefined' ? 'undefined' : _typeof( variableName ) ) === 'object' ) {
                    Object.keys( variableName ).forEach( function ( name ) {
                        rewireData[name] = variableName[name];
                    } );
                } else {
                    if ( value === undefined ) {
                        rewireData[variableName] = INTENTIONAL_UNDEFINED;
                    } else {
                        rewireData[variableName] = value;
                    }

                    return function () {
                        _reset__( variableName );
                    };
                }
            }

            function _reset__( variableName ) {
                var rewireData = _getRewiredData__();

                delete rewireData[variableName];

                if ( Object.keys( rewireData ).length == 0 ) {
                    delete _getRewireRegistry__()[_getRewireModuleId__];
                }

                ;
            }

            function _with__( object ) {
                var rewireData = _getRewiredData__();

                var rewiredVariableNames = Object.keys( object );
                var previousValues = {};

                function reset() {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        rewireData[variableName] = previousValues[variableName];
                    } );
                }

                return function ( callback ) {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        previousValues[variableName] = rewireData[variableName];
                        rewireData[variableName] = object[variableName];
                    } );
                    var result = callback();

                    if ( !!result && typeof result.then === 'function' ) {
                        result.then( reset ).catch( reset );
                    } else {
                        reset();
                    }

                    return result;
                };
            }

            var _typeOfOriginalExport = typeof routerMiddleware === 'undefined' ? 'undefined' : _typeof( routerMiddleware );

            function addNonEnumerableProperty( name, value ) {
                Object.defineProperty( routerMiddleware, name, {
                    value: value,
                    enumerable: false,
                    configurable: true
                } );
            }

            if ( ( _typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function' ) && Object.isExtensible( routerMiddleware ) ) {
                addNonEnumerableProperty( '__get__', _get__ );
                addNonEnumerableProperty( '__GetDependency__', _get__ );
                addNonEnumerableProperty( '__Rewire__', _set__ );
                addNonEnumerableProperty( '__set__', _set__ );
                addNonEnumerableProperty( '__reset__', _reset__ );
                addNonEnumerableProperty( '__ResetDependency__', _reset__ );
                addNonEnumerableProperty( '__with__', _with__ );
                addNonEnumerableProperty( '__RewireAPI__', _RewireAPI__ );
            }

            exports.__get__ = _get__;
            exports.__GetDependency__ = _get__;
            exports.__Rewire__ = _set__;
            exports.__set__ = _set__;
            exports.__ResetDependency__ = _reset__;
            exports.__RewireAPI__ = _RewireAPI__;

            /** */ } ),

        /** */ "./node_modules/connected-react-router/lib/reducer.js":
        /*! ************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/reducer.js ***!
  \*********************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";


            Object.defineProperty( exports, "__esModule", {
                value: true
            } );
            exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function ( obj ) { return typeof obj; } : function ( obj ) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            var _actions = __webpack_require__( /*! ./actions */ "./node_modules/connected-react-router/lib/actions.js" );

            var createConnectRouter = function createConnectRouter( structure ) {
                var fromJS = structure.fromJS;

      
var merge = structure.merge;


                var createRouterReducer = function createRouterReducer( history ) {
                    var initialRouterState = fromJS( {
                        location: history.location,
                        action: history.action
                    } );

                    /*
    * This reducer will update the state with the most recent location history
    * has transitioned to.
    */
                    return function () {
                        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialRouterState;

                        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          
var type = _ref.type;

          
var payload = _ref.payload;

                        if ( type === _get__( 'LOCATION_CHANGE' ) ) {
                            return merge( state, payload );
                        }

                        return state;
                    };
                };

                return createRouterReducer;
            };

            exports.default = _get__( 'createConnectRouter' );

            function _getGlobalObject() {
                try {
                    if ( !!global ) {
                        return global;
                    }
                } catch ( e ) {
                    try {
                        if ( !!window ) {
                            return window;
                        }
                    } catch ( e ) {
                        return this;
                    }
                }
            }

            ;
            var _RewireModuleId__ = null;

            function _getRewireModuleId__() {
                if ( _RewireModuleId__ === null ) {
                    var globalVariable = _getGlobalObject();

                    if ( !globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ ) {
                        globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
                    }

                    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
                }

                return _RewireModuleId__;
            }

            function _getRewireRegistry__() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ ) {
                    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                }

                return __$$GLOBAL_REWIRE_REGISTRY__;
            }

            function _getRewiredData__() {
                var moduleId = _getRewireModuleId__();

                var registry = _getRewireRegistry__();

                var rewireData = registry[moduleId];

                if ( !rewireData ) {
                    registry[moduleId] = Object.create( null );
                    rewireData = registry[moduleId];
                }

                return rewireData;
            }

            ( function registerResetAll() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__rewire_reset_all__) {
                    theGlobalVariable.__rewire_reset_all__ = function () {
                        theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                    };
                }
            } )();

            var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
            var _RewireAPI__ = {};

            ( function () {
                function addPropertyToAPIObject( name, value ) {
                    Object.defineProperty( _RewireAPI__, name, {
                        value: value,
                        enumerable: false,
                        configurable: true
                    } );
                }

                addPropertyToAPIObject( '__get__', _get__ );
                addPropertyToAPIObject( '__GetDependency__', _get__ );
                addPropertyToAPIObject( '__Rewire__', _set__ );
                addPropertyToAPIObject( '__set__', _set__ );
                addPropertyToAPIObject( '__reset__', _reset__ );
                addPropertyToAPIObject( '__ResetDependency__', _reset__ );
                addPropertyToAPIObject( '__with__', _with__ );
            } )();

            function _get__( variableName ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _get_original__( variableName );
                } else {
                    var value = rewireData[variableName];

                    if ( value === INTENTIONAL_UNDEFINED ) {
                        return undefined;
                    } else {
                        return value;
                    }
                }
            }

            function _get_original__( variableName ) {
                switch ( variableName ) {
                    case 'LOCATION_CHANGE':
                        return _actions.LOCATION_CHANGE;

                    case 'createConnectRouter':
                        return createConnectRouter;
                }

                return undefined;
            }

            function _assign__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _set_original__( variableName, value );
                } else {
                    return rewireData[variableName] = value;
                }
            }

            function _set_original__( variableName, _value ) {
                switch ( variableName ) {}

                return undefined;
            }

            function _update_operation__( operation, variableName, prefix ) {
                var oldValue = _get__( variableName );

                var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

                _assign__( variableName, newValue );

                return prefix ? newValue : oldValue;
            }

            function _set__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( ( typeof variableName === 'undefined' ? 'undefined' : _typeof( variableName ) ) === 'object' ) {
                    Object.keys( variableName ).forEach( function ( name ) {
                        rewireData[name] = variableName[name];
                    } );
                } else {
                    if ( value === undefined ) {
                        rewireData[variableName] = INTENTIONAL_UNDEFINED;
                    } else {
                        rewireData[variableName] = value;
                    }

                    return function () {
                        _reset__( variableName );
                    };
                }
            }

            function _reset__( variableName ) {
                var rewireData = _getRewiredData__();

                delete rewireData[variableName];

                if ( Object.keys( rewireData ).length == 0 ) {
                    delete _getRewireRegistry__()[_getRewireModuleId__];
                }

                ;
            }

            function _with__( object ) {
                var rewireData = _getRewiredData__();

                var rewiredVariableNames = Object.keys( object );
                var previousValues = {};

                function reset() {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        rewireData[variableName] = previousValues[variableName];
                    } );
                }

                return function ( callback ) {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        previousValues[variableName] = rewireData[variableName];
                        rewireData[variableName] = object[variableName];
                    } );
                    var result = callback();

                    if ( !!result && typeof result.then === 'function' ) {
                        result.then( reset ).catch( reset );
                    } else {
                        reset();
                    }

                    return result;
                };
            }

            var _typeOfOriginalExport = typeof createConnectRouter === 'undefined' ? 'undefined' : _typeof( createConnectRouter );

            function addNonEnumerableProperty( name, value ) {
                Object.defineProperty( createConnectRouter, name, {
                    value: value,
                    enumerable: false,
                    configurable: true
                } );
            }

            if ( ( _typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function' ) && Object.isExtensible( createConnectRouter ) ) {
                addNonEnumerableProperty( '__get__', _get__ );
                addNonEnumerableProperty( '__GetDependency__', _get__ );
                addNonEnumerableProperty( '__Rewire__', _set__ );
                addNonEnumerableProperty( '__set__', _set__ );
                addNonEnumerableProperty( '__reset__', _reset__ );
                addNonEnumerableProperty( '__ResetDependency__', _reset__ );
                addNonEnumerableProperty( '__with__', _with__ );
                addNonEnumerableProperty( '__RewireAPI__', _RewireAPI__ );
            }

            exports.__get__ = _get__;
            exports.__GetDependency__ = _get__;
            exports.__Rewire__ = _set__;
            exports.__set__ = _set__;
            exports.__ResetDependency__ = _reset__;
            exports.__RewireAPI__ = _RewireAPI__;

            /** */ } ),

        /** */ "./node_modules/connected-react-router/lib/selectors.js":
        /*! **************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/selectors.js ***!
  \************************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";


            Object.defineProperty( exports, "__esModule", {
                value: true
            } );
            exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function ( obj ) { return typeof obj; } : function ( obj ) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            var _reactRouter = __webpack_require__( /*! react-router */ "react-router" );

            var createSelectors = function createSelectors( structure ) {
                var getIn = structure.getIn;

      
var toJS = structure.toJS;

                var getLocation = function getLocation( state ) {
                    return toJS( getIn( state, ['router', 'location'] ) );
                };
                var getAction = function getAction( state ) {
                    return toJS( getIn( state, ['router', 'action'] ) );
                };

                // It only makes sense to recalculate the `matchPath` whenever the pathname
                // of the location changes. That's why `createMatchSelector` memoizes
                // the latest result based on the location's pathname.
                var createMatchSelector = function createMatchSelector( path ) {
                    var lastPathname = null;
                    var lastMatch = null;

                    return function ( state ) {
                        var _ref = getLocation( state ) || {};

          
var pathname = _ref.pathname;

                        if ( pathname === lastPathname ) {
                            return lastMatch;
                        }
                        lastPathname = pathname;
                        var match = _get__( 'matchPath' )( pathname, path );
                        if ( !match || !lastMatch || match.url !== lastMatch.url ) {
                            lastMatch = match;
                        }

                        return lastMatch;
                    };
                };

                return { getLocation, getAction, createMatchSelector };
            };

            exports.default = _get__( 'createSelectors' );

            function _getGlobalObject() {
                try {
                    if ( !!global ) {
                        return global;
                    }
                } catch ( e ) {
                    try {
                        if ( !!window ) {
                            return window;
                        }
                    } catch ( e ) {
                        return this;
                    }
                }
            }

            ;
            var _RewireModuleId__ = null;

            function _getRewireModuleId__() {
                if ( _RewireModuleId__ === null ) {
                    var globalVariable = _getGlobalObject();

                    if ( !globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ ) {
                        globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
                    }

                    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
                }

                return _RewireModuleId__;
            }

            function _getRewireRegistry__() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ ) {
                    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                }

                return __$$GLOBAL_REWIRE_REGISTRY__;
            }

            function _getRewiredData__() {
                var moduleId = _getRewireModuleId__();

                var registry = _getRewireRegistry__();

                var rewireData = registry[moduleId];

                if ( !rewireData ) {
                    registry[moduleId] = Object.create( null );
                    rewireData = registry[moduleId];
                }

                return rewireData;
            }

            ( function registerResetAll() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__rewire_reset_all__) {
                    theGlobalVariable.__rewire_reset_all__ = function () {
                        theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                    };
                }
            } )();

            var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
            var _RewireAPI__ = {};

            ( function () {
                function addPropertyToAPIObject( name, value ) {
                    Object.defineProperty( _RewireAPI__, name, {
                        value: value,
                        enumerable: false,
                        configurable: true
                    } );
                }

                addPropertyToAPIObject( '__get__', _get__ );
                addPropertyToAPIObject( '__GetDependency__', _get__ );
                addPropertyToAPIObject( '__Rewire__', _set__ );
                addPropertyToAPIObject( '__set__', _set__ );
                addPropertyToAPIObject( '__reset__', _reset__ );
                addPropertyToAPIObject( '__ResetDependency__', _reset__ );
                addPropertyToAPIObject( '__with__', _with__ );
            } )();

            function _get__( variableName ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _get_original__( variableName );
                } else {
                    var value = rewireData[variableName];

                    if ( value === INTENTIONAL_UNDEFINED ) {
                        return undefined;
                    } else {
                        return value;
                    }
                }
            }

            function _get_original__( variableName ) {
                switch ( variableName ) {
                    case 'matchPath':
                        return _reactRouter.matchPath;

                    case 'createSelectors':
                        return createSelectors;
                }

                return undefined;
            }

            function _assign__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _set_original__( variableName, value );
                } else {
                    return rewireData[variableName] = value;
                }
            }

            function _set_original__( variableName, _value ) {
                switch ( variableName ) {}

                return undefined;
            }

            function _update_operation__( operation, variableName, prefix ) {
                var oldValue = _get__( variableName );

                var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

                _assign__( variableName, newValue );

                return prefix ? newValue : oldValue;
            }

            function _set__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( ( typeof variableName === 'undefined' ? 'undefined' : _typeof( variableName ) ) === 'object' ) {
                    Object.keys( variableName ).forEach( function ( name ) {
                        rewireData[name] = variableName[name];
                    } );
                } else {
                    if ( value === undefined ) {
                        rewireData[variableName] = INTENTIONAL_UNDEFINED;
                    } else {
                        rewireData[variableName] = value;
                    }

                    return function () {
                        _reset__( variableName );
                    };
                }
            }

            function _reset__( variableName ) {
                var rewireData = _getRewiredData__();

                delete rewireData[variableName];

                if ( Object.keys( rewireData ).length == 0 ) {
                    delete _getRewireRegistry__()[_getRewireModuleId__];
                }

                ;
            }

            function _with__( object ) {
                var rewireData = _getRewiredData__();

                var rewiredVariableNames = Object.keys( object );
                var previousValues = {};

                function reset() {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        rewireData[variableName] = previousValues[variableName];
                    } );
                }

                return function ( callback ) {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        previousValues[variableName] = rewireData[variableName];
                        rewireData[variableName] = object[variableName];
                    } );
                    var result = callback();

                    if ( !!result && typeof result.then === 'function' ) {
                        result.then( reset ).catch( reset );
                    } else {
                        reset();
                    }

                    return result;
                };
            }

            var _typeOfOriginalExport = typeof createSelectors === 'undefined' ? 'undefined' : _typeof( createSelectors );

            function addNonEnumerableProperty( name, value ) {
                Object.defineProperty( createSelectors, name, {
                    value: value,
                    enumerable: false,
                    configurable: true
                } );
            }

            if ( ( _typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function' ) && Object.isExtensible( createSelectors ) ) {
                addNonEnumerableProperty( '__get__', _get__ );
                addNonEnumerableProperty( '__GetDependency__', _get__ );
                addNonEnumerableProperty( '__Rewire__', _set__ );
                addNonEnumerableProperty( '__set__', _set__ );
                addNonEnumerableProperty( '__reset__', _reset__ );
                addNonEnumerableProperty( '__ResetDependency__', _reset__ );
                addNonEnumerableProperty( '__with__', _with__ );
                addNonEnumerableProperty( '__RewireAPI__', _RewireAPI__ );
            }

            exports.__get__ = _get__;
            exports.__GetDependency__ = _get__;
            exports.__Rewire__ = _set__;
            exports.__set__ = _set__;
            exports.__ResetDependency__ = _reset__;
            exports.__RewireAPI__ = _RewireAPI__;

            /** */ } ),

        /** */ "./node_modules/connected-react-router/lib/structure/plain/getIn.js":
        /*! **************************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/structure/plain/getIn.js ***!
  \************************************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";


            Object.defineProperty( exports, "__esModule", {
                value: true
            } );

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function ( obj ) { return typeof obj; } : function ( obj ) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            /* Code from github.com/erikras/redux-form by Erik Rasmussen */

            var getIn = function getIn( state, path ) {
                if ( !state ) {
                    return state;
                }

                var length = path.length;
                if ( !length ) {
                    return undefined;
                }

                var result = state;
                for ( var i = 0; i < length && !!result; ++i ) {
                    result = result[path[i]];
                }

                return result;
            };

            exports.default = _get__( "getIn" );

            function _getGlobalObject() {
                try {
                    if ( !!global ) {
                        return global;
                    }
                } catch ( e ) {
                    try {
                        if ( !!window ) {
                            return window;
                        }
                    } catch ( e ) {
                        return this;
                    }
                }
            }

            ;
            var _RewireModuleId__ = null;

            function _getRewireModuleId__() {
                if ( _RewireModuleId__ === null ) {
                    var globalVariable = _getGlobalObject();

                    if ( !globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ ) {
                        globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
                    }

                    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
                }

                return _RewireModuleId__;
            }

            function _getRewireRegistry__() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ ) {
                    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                }

                return __$$GLOBAL_REWIRE_REGISTRY__;
            }

            function _getRewiredData__() {
                var moduleId = _getRewireModuleId__();

                var registry = _getRewireRegistry__();

                var rewireData = registry[moduleId];

                if ( !rewireData ) {
                    registry[moduleId] = Object.create( null );
                    rewireData = registry[moduleId];
                }

                return rewireData;
            }

            ( function registerResetAll() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__rewire_reset_all__) {
                    theGlobalVariable.__rewire_reset_all__ = function () {
                        theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                    };
                }
            } )();

            var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
            var _RewireAPI__ = {};

            ( function () {
                function addPropertyToAPIObject( name, value ) {
                    Object.defineProperty( _RewireAPI__, name, {
                        value: value,
                        enumerable: false,
                        configurable: true
                    } );
                }

                addPropertyToAPIObject( '__get__', _get__ );
                addPropertyToAPIObject( '__GetDependency__', _get__ );
                addPropertyToAPIObject( '__Rewire__', _set__ );
                addPropertyToAPIObject( '__set__', _set__ );
                addPropertyToAPIObject( '__reset__', _reset__ );
                addPropertyToAPIObject( '__ResetDependency__', _reset__ );
                addPropertyToAPIObject( '__with__', _with__ );
            } )();

            function _get__( variableName ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _get_original__( variableName );
                } else {
                    var value = rewireData[variableName];

                    if ( value === INTENTIONAL_UNDEFINED ) {
                        return undefined;
                    } else {
                        return value;
                    }
                }
            }

            function _get_original__( variableName ) {
                switch ( variableName ) {
                    case "getIn":
                        return getIn;
                }

                return undefined;
            }

            function _assign__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _set_original__( variableName, value );
                } else {
                    return rewireData[variableName] = value;
                }
            }

            function _set_original__( variableName, _value ) {
                switch ( variableName ) {}

                return undefined;
            }

            function _update_operation__( operation, variableName, prefix ) {
                var oldValue = _get__( variableName );

                var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

                _assign__( variableName, newValue );

                return prefix ? newValue : oldValue;
            }

            function _set__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( ( typeof variableName === "undefined" ? "undefined" : _typeof( variableName ) ) === 'object' ) {
                    Object.keys( variableName ).forEach( function ( name ) {
                        rewireData[name] = variableName[name];
                    } );
                } else {
                    if ( value === undefined ) {
                        rewireData[variableName] = INTENTIONAL_UNDEFINED;
                    } else {
                        rewireData[variableName] = value;
                    }

                    return function () {
                        _reset__( variableName );
                    };
                }
            }

            function _reset__( variableName ) {
                var rewireData = _getRewiredData__();

                delete rewireData[variableName];

                if ( Object.keys( rewireData ).length == 0 ) {
                    delete _getRewireRegistry__()[_getRewireModuleId__];
                }

                ;
            }

            function _with__( object ) {
                var rewireData = _getRewiredData__();

                var rewiredVariableNames = Object.keys( object );
                var previousValues = {};

                function reset() {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        rewireData[variableName] = previousValues[variableName];
                    } );
                }

                return function ( callback ) {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        previousValues[variableName] = rewireData[variableName];
                        rewireData[variableName] = object[variableName];
                    } );
                    var result = callback();

                    if ( !!result && typeof result.then === 'function' ) {
                        result.then( reset ).catch( reset );
                    } else {
                        reset();
                    }

                    return result;
                };
            }

            var _typeOfOriginalExport = typeof getIn === "undefined" ? "undefined" : _typeof( getIn );

            function addNonEnumerableProperty( name, value ) {
                Object.defineProperty( getIn, name, {
                    value: value,
                    enumerable: false,
                    configurable: true
                } );
            }

            if ( ( _typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function' ) && Object.isExtensible( getIn ) ) {
                addNonEnumerableProperty( '__get__', _get__ );
                addNonEnumerableProperty( '__GetDependency__', _get__ );
                addNonEnumerableProperty( '__Rewire__', _set__ );
                addNonEnumerableProperty( '__set__', _set__ );
                addNonEnumerableProperty( '__reset__', _reset__ );
                addNonEnumerableProperty( '__ResetDependency__', _reset__ );
                addNonEnumerableProperty( '__with__', _with__ );
                addNonEnumerableProperty( '__RewireAPI__', _RewireAPI__ );
            }

            exports.__get__ = _get__;
            exports.__GetDependency__ = _get__;
            exports.__Rewire__ = _set__;
            exports.__set__ = _set__;
            exports.__ResetDependency__ = _reset__;
            exports.__RewireAPI__ = _RewireAPI__;

            /** */ } ),

        /** */ "./node_modules/connected-react-router/lib/structure/plain/index.js":
        /*! **************************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/structure/plain/index.js ***!
  \************************************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";


            Object.defineProperty( exports, "__esModule", {
                value: true
            } );
            exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function ( obj ) { return typeof obj; } : function ( obj ) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            var _extends = Object.assign || function ( target ) { for ( var i = 1; i < arguments.length; i++ ) { let source = arguments[i]; for ( var key in source ) { if ( Object.prototype.hasOwnProperty.call( source, key ) ) { target[key] = source[key]; } } } return target; };

            var _getIn = __webpack_require__( /*! ./getIn */ "./node_modules/connected-react-router/lib/structure/plain/getIn.js" );

            var _getIn2 = _interopRequireDefault( _getIn );

            function _interopRequireDefault( obj ) { return obj && obj.__esModule ? obj : { default: obj }; }

            var structure = {
                fromJS: function fromJS( value ) {
                    return value;
                },
                getIn: _get__( 'getIn' ),
                merge: function merge( state, payload ) {
                    return _extends( {}, state, payload );
                },
                toJS: function toJS( value ) {
                    return value;
                }
            };

            exports.default = _get__( 'structure' );

            function _getGlobalObject() {
                try {
                    if ( !!global ) {
                        return global;
                    }
                } catch ( e ) {
                    try {
                        if ( !!window ) {
                            return window;
                        }
                    } catch ( e ) {
                        return this;
                    }
                }
            }

            ;
            var _RewireModuleId__ = null;

            function _getRewireModuleId__() {
                if ( _RewireModuleId__ === null ) {
                    var globalVariable = _getGlobalObject();

                    if ( !globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ ) {
                        globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
                    }

                    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
                }

                return _RewireModuleId__;
            }

            function _getRewireRegistry__() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ ) {
                    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                }

                return __$$GLOBAL_REWIRE_REGISTRY__;
            }

            function _getRewiredData__() {
                var moduleId = _getRewireModuleId__();

                var registry = _getRewireRegistry__();

                var rewireData = registry[moduleId];

                if ( !rewireData ) {
                    registry[moduleId] = Object.create( null );
                    rewireData = registry[moduleId];
                }

                return rewireData;
            }

            ( function registerResetAll() {
                var theGlobalVariable = _getGlobalObject();

                if ( !theGlobalVariable.__rewire_reset_all__) {
                    theGlobalVariable.__rewire_reset_all__ = function () {
                        theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create( null );
                    };
                }
            } )();

            var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
            var _RewireAPI__ = {};

            ( function () {
                function addPropertyToAPIObject( name, value ) {
                    Object.defineProperty( _RewireAPI__, name, {
                        value: value,
                        enumerable: false,
                        configurable: true
                    } );
                }

                addPropertyToAPIObject( '__get__', _get__ );
                addPropertyToAPIObject( '__GetDependency__', _get__ );
                addPropertyToAPIObject( '__Rewire__', _set__ );
                addPropertyToAPIObject( '__set__', _set__ );
                addPropertyToAPIObject( '__reset__', _reset__ );
                addPropertyToAPIObject( '__ResetDependency__', _reset__ );
                addPropertyToAPIObject( '__with__', _with__ );
            } )();

            function _get__( variableName ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _get_original__( variableName );
                } else {
                    var value = rewireData[variableName];

                    if ( value === INTENTIONAL_UNDEFINED ) {
                        return undefined;
                    } else {
                        return value;
                    }
                }
            }

            function _get_original__( variableName ) {
                switch ( variableName ) {
                    case 'getIn':
                        return _getIn2.default;

                    case 'structure':
                        return structure;
                }

                return undefined;
            }

            function _assign__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( rewireData[variableName] === undefined ) {
                    return _set_original__( variableName, value );
                } else {
                    return rewireData[variableName] = value;
                }
            }

            function _set_original__( variableName, _value ) {
                switch ( variableName ) {}

                return undefined;
            }

            function _update_operation__( operation, variableName, prefix ) {
                var oldValue = _get__( variableName );

                var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

                _assign__( variableName, newValue );

                return prefix ? newValue : oldValue;
            }

            function _set__( variableName, value ) {
                var rewireData = _getRewiredData__();

                if ( ( typeof variableName === 'undefined' ? 'undefined' : _typeof( variableName ) ) === 'object' ) {
                    Object.keys( variableName ).forEach( function ( name ) {
                        rewireData[name] = variableName[name];
                    } );
                } else {
                    if ( value === undefined ) {
                        rewireData[variableName] = INTENTIONAL_UNDEFINED;
                    } else {
                        rewireData[variableName] = value;
                    }

                    return function () {
                        _reset__( variableName );
                    };
                }
            }

            function _reset__( variableName ) {
                var rewireData = _getRewiredData__();

                delete rewireData[variableName];

                if ( Object.keys( rewireData ).length == 0 ) {
                    delete _getRewireRegistry__()[_getRewireModuleId__];
                }

                ;
            }

            function _with__( object ) {
                var rewireData = _getRewiredData__();

                var rewiredVariableNames = Object.keys( object );
                var previousValues = {};

                function reset() {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        rewireData[variableName] = previousValues[variableName];
                    } );
                }

                return function ( callback ) {
                    rewiredVariableNames.forEach( function ( variableName ) {
                        previousValues[variableName] = rewireData[variableName];
                        rewireData[variableName] = object[variableName];
                    } );
                    var result = callback();

                    if ( !!result && typeof result.then === 'function' ) {
                        result.then( reset ).catch( reset );
                    } else {
                        reset();
                    }

                    return result;
                };
            }

            var _typeOfOriginalExport = typeof structure === 'undefined' ? 'undefined' : _typeof( structure );

            function addNonEnumerableProperty( name, value ) {
                Object.defineProperty( structure, name, {
                    value: value,
                    enumerable: false,
                    configurable: true
                } );
            }

            if ( ( _typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function' ) && Object.isExtensible( structure ) ) {
                addNonEnumerableProperty( '__get__', _get__ );
                addNonEnumerableProperty( '__GetDependency__', _get__ );
                addNonEnumerableProperty( '__Rewire__', _set__ );
                addNonEnumerableProperty( '__set__', _set__ );
                addNonEnumerableProperty( '__reset__', _reset__ );
                addNonEnumerableProperty( '__ResetDependency__', _reset__ );
                addNonEnumerableProperty( '__with__', _with__ );
                addNonEnumerableProperty( '__RewireAPI__', _RewireAPI__ );
            }

            exports.__get__ = _get__;
            exports.__GetDependency__ = _get__;
            exports.__Rewire__ = _set__;
            exports.__set__ = _set__;
            exports.__ResetDependency__ = _reset__;
            exports.__RewireAPI__ = _RewireAPI__;

            /** */ } ),

        /** */ "./node_modules/core-js/modules/_a-function.js":
        /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \**************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = function ( it ) {
                if ( typeof it !== 'function' ) throw TypeError( it + ' is not a function!' );
                return it;
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_add-to-unscopables.js":
        /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \************************************************************ */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // 22.1.3.31 Array.prototype[@@unscopables]
            var UNSCOPABLES = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js" )( 'unscopables' );
            var ArrayProto = Array.prototype;
            if ( ArrayProto[UNSCOPABLES] == undefined ) __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js" )( ArrayProto, UNSCOPABLES, {} );
            module.exports = function ( key ) {
                ArrayProto[UNSCOPABLES][key] = true;
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_an-object.js":
        /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \*************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js" );
            module.exports = function ( it ) {
                if ( !isObject( it ) ) throw TypeError( it + ' is not an object!' );
                return it;
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_array-includes.js":
        /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \******************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // false -> Array#indexOf
            // true  -> Array#includes
            var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js" );
            var toLength = __webpack_require__( /*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js" );
            var toAbsoluteIndex = __webpack_require__( /*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js" );
            module.exports = function ( IS_INCLUDES ) {
                return function ( $this, el, fromIndex ) {
                    var O = toIObject( $this );
                    var length = toLength( O.length );
                    var index = toAbsoluteIndex( fromIndex, length );
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if ( IS_INCLUDES && el != el ) while ( length > index ) {
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if ( value != value ) return true;
                        // Array#indexOf ignores holes, Array#includes - not
                    } else for ( ;length > index; index++ ) if ( IS_INCLUDES || index in O ) {
                        if ( O[index] === el ) return IS_INCLUDES || index || 0;
                    } return !IS_INCLUDES && -1;
                };
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_cof.js":
        /*! **********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \********************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            var toString = {}.toString;

            module.exports = function ( it ) {
                return toString.call( it ).slice( 8, -1 );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_core.js":
        /*! ***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \********************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            var core = module.exports = { version: '2.5.7' };
            if ( typeof __e === 'number' ) __e = core; // eslint-disable-line no-undef


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_ctx.js":
        /*! **********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \********************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // optional / simple context binding
            var aFunction = __webpack_require__( /*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js" );
            module.exports = function ( fn, that, length ) {
                aFunction( fn );
                if ( that === undefined ) return fn;
                switch ( length ) {
                    case 1: return function ( a ) {
                        return fn.call( that, a );
                    };
                    case 2: return function ( a, b ) {
                        return fn.call( that, a, b );
                    };
                    case 3: return function ( a, b, c ) {
                        return fn.call( that, a, b, c );
                    };
                }
                return function ( /* ...args */ ) {
                    return fn.apply( that, arguments );
                };
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_defined.js":
        /*! **************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            // 7.2.1 RequireObjectCoercible(argument)
            module.exports = function ( it ) {
                if ( it == undefined ) throw TypeError( "Can't call method on  " + it );
                return it;
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_descriptors.js":
        /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \***************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // Thank's IE8 for his funny defineProperty
            module.exports = !__webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js" )( function () {
                return Object.defineProperty( {}, 'a', { get () { return 7; } } ).a != 7;
            } );


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_dom-create.js":
        /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \**************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js" );
            var document = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js" ).document;
            // typeof document.createElement is 'object' in old IE
            var is = isObject( document ) && isObject( document.createElement );
            module.exports = function ( it ) {
                return is ? document.createElement( it ) : {};
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_enum-bug-keys.js":
        /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \******************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            // IE 8- don't enum bug keys
            module.exports = (
                'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
            ).split( ',' );


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_export.js":
        /*! *************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \************************************************ */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js" );
            var core = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js" );
            var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js" );
            var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js" );
            var ctx = __webpack_require__( /*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js" );
            var PROTOTYPE = 'prototype';

            var $export = function ( type, name, source ) {
                var IS_FORCED = type & $export.F;
                var IS_GLOBAL = type & $export.G;
                var IS_STATIC = type & $export.S;
                var IS_PROTO = type & $export.P;
                var IS_BIND = type & $export.B;
                var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || ( global[name] = {} ) : ( global[name] || {} )[PROTOTYPE];
                var exports = IS_GLOBAL ? core : core[name] || ( core[name] = {} );
                var expProto = exports[PROTOTYPE] || ( exports[PROTOTYPE] = {} );
                var key; var own; var out; var exp;
                if ( IS_GLOBAL ) source = name;
                for ( key in source ) {
                    // contains in native
                    own = !IS_FORCED && target && target[key] !== undefined;
                    // export native or passed
                    out = ( own ? target : source )[key];
                    // bind timers to global for call from export context
                    exp = IS_BIND && own ? ctx( out, global ) : IS_PROTO && typeof out === 'function' ? ctx( Function.call, out ) : out;
                    // extend global
                    if ( target ) redefine( target, key, out, type & $export.U );
                    // export
                    if ( exports[key] != out ) hide( exports, key, exp );
                    if ( IS_PROTO && expProto[key] != out ) expProto[key] = out;
                }
            };
            global.core = core;
            // type bitmap
            $export.F = 1;   // forced
            $export.G = 2;   // global
            $export.S = 4;   // static
            $export.P = 8;   // proto
            $export.B = 16;  // bind
            $export.W = 32;  // wrap
            $export.U = 64;  // safe
            $export.R = 128; // real proto method for `library`
            module.exports = $export;


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_fails.js":
        /*! ************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \*********************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = function ( exec ) {
                try {
                    return !!exec();
                } catch ( e ) {
                    return true;
                }
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_global.js":
        /*! *************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \************************************************ */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module.exports = typeof window !== 'undefined' && window.Math == Math
                ? window : typeof self !== 'undefined' && self.Math == Math ? self
                // eslint-disable-next-line no-new-func
                    : Function( 'return this' )();
            if ( typeof __g === 'number' ) __g = global; // eslint-disable-line no-undef


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_has.js":
        /*! **********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \********************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function ( it, key ) {
                return hasOwnProperty.call( it, key );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_hide.js":
        /*! ***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \********************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js" );
            var createDesc = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js" );
            module.exports = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js" ) ? function ( object, key, value ) {
                return dP.f( object, key, createDesc( 1, value ) );
            } : function ( object, key, value ) {
                object[key] = value;
                return object;
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_html.js":
        /*! ***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \********************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var document = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js" ).document;
            module.exports = document && document.documentElement;


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_ie8-dom-define.js":
        /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \******************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            module.exports = !__webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js" ) && !__webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js" )( function () {
                return Object.defineProperty( __webpack_require__( /*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js" )( 'div' ), 'a', { get () { return 7; } } ).a != 7;
            } );


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_iobject.js":
        /*! **************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var cof = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js" );
            // eslint-disable-next-line no-prototype-builtins
            module.exports = Object( 'z' ).propertyIsEnumerable( 0 ) ? Object : function ( it ) {
                return cof( it ) == 'String' ? it.split( '' ) : Object( it );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_is-object.js":
        /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \*************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = function ( it ) {
                return typeof it === 'object' ? it !== null : typeof it === 'function';
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_iter-create.js":
        /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \***************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";

            var create = __webpack_require__( /*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js" );
            var descriptor = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js" );
            var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js" );
            var IteratorPrototype = {};

            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js" )( IteratorPrototype, __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js" )( 'iterator' ), function () { return this; } );

            module.exports = function ( Constructor, NAME, next ) {
                Constructor.prototype = create( IteratorPrototype, { next: descriptor( 1, next ) } );
                setToStringTag( Constructor, `${NAME  } Iterator`);
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_iter-define.js":
        /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \***************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";

            var LIBRARY = __webpack_require__( /*! ./_library */ "./node_modules/core-js/modules/_library.js" );
            var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js" );
            var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js" );
            var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js" );
            var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js" );
            var $iterCreate = __webpack_require__( /*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js" );
            var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js" );
            var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js" );
            var ITERATOR = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js" )( 'iterator' );
            var BUGGY = !( [].keys && 'next' in [].keys() ); // Safari has buggy iterators w/o `next`
            var FF_ITERATOR = '@@iterator';
            var KEYS = 'keys';
            var VALUES = 'values';

            var returnThis = function () { return this; };

            module.exports = function ( Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED ) {
                $iterCreate( Constructor, NAME, next );
                var getMethod = function ( kind ) {
                    if ( !BUGGY && kind in proto ) return proto[kind];
                    switch ( kind ) {
                        case KEYS: return function keys() { return new Constructor( this, kind ); };
                        case VALUES: return function values() { return new Constructor( this, kind ); };
                    } return function entries() { return new Constructor( this, kind ); };
                };
                var TAG = `${NAME  } Iterator`;
                var DEF_VALUES = DEFAULT == VALUES;
                var VALUES_BUG = false;
                var proto = Base.prototype;
                var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                var $default = $native || getMethod( DEFAULT );
                var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod( 'entries' ) : undefined;
                var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                var methods; var key; var IteratorPrototype;
                // Fix native
                if ( $anyNative ) {
                    IteratorPrototype = getPrototypeOf( $anyNative.call( new Base() ) );
                    if ( IteratorPrototype !== Object.prototype && IteratorPrototype.next ) {
                        // Set @@toStringTag to native iterators
                        setToStringTag( IteratorPrototype, TAG, true );
                        // fix for some old engines
                        if ( !LIBRARY && typeof IteratorPrototype[ITERATOR] !== 'function' ) hide( IteratorPrototype, ITERATOR, returnThis );
                    }
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if ( DEF_VALUES && $native && $native.name !== VALUES ) {
                    VALUES_BUG = true;
                    $default = function values() { return $native.call( this ); };
                }
                // Define iterator
                if ( ( !LIBRARY || FORCED ) && ( BUGGY || VALUES_BUG || !proto[ITERATOR] ) ) {
                    hide( proto, ITERATOR, $default );
                }
                // Plug for library
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if ( DEFAULT ) {
                    methods = {
                        values: DEF_VALUES ? $default : getMethod( VALUES ),
                        keys: IS_SET ? $default : getMethod( KEYS ),
                        entries: $entries
                    };
                    if ( FORCED ) for ( key in methods ) {
                        if ( !( key in proto ) ) redefine( proto, key, methods[key] );
                    } else $export( $export.P + $export.F * ( BUGGY || VALUES_BUG ), NAME, methods );
                }
                return methods;
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_iter-step.js":
        /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \*************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = function ( done, value ) {
                return { value, done: !!done };
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_iterators.js":
        /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \*************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = {};


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_library.js":
        /*! **************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = false;


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_object-create.js":
        /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \******************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js" );
            var dPs = __webpack_require__( /*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js" );
            var enumBugKeys = __webpack_require__( /*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js" );
            var IE_PROTO = __webpack_require__( /*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js" )( 'IE_PROTO' );
            var Empty = function () { /* empty */ };
            var PROTOTYPE = 'prototype';

            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function () {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = __webpack_require__( /*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js" )( 'iframe' );
                var i = enumBugKeys.length;
                var lt = '<';
                var gt = '>';
                var iframeDocument;
                iframe.style.display = 'none';
                __webpack_require__( /*! ./_html */ "./node_modules/core-js/modules/_html.js" ).append( iframe );
                iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                // createDict = iframe.contentWindow.Object;
                // html.removeChild(iframe);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write( lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt );
                iframeDocument.close();
                createDict = iframeDocument.F;
                while ( i-- ) delete createDict[PROTOTYPE][enumBugKeys[i]];
                return createDict();
            };

            module.exports = Object.create || function create( O, Properties ) {
                var result;
                if ( O !== null ) {
                    Empty[PROTOTYPE] = anObject( O );
                    result = new Empty();
                    Empty[PROTOTYPE] = null;
                    // add "__proto__" for Object.getPrototypeOf polyfill
                    result[IE_PROTO] = O;
                } else result = createDict();
                return Properties === undefined ? result : dPs( result, Properties );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_object-dp.js":
        /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \*************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js" );
            var IE8_DOM_DEFINE = __webpack_require__( /*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js" );
            var toPrimitive = __webpack_require__( /*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js" );
            var dP = Object.defineProperty;

            exports.f = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js" ) ? Object.defineProperty : function defineProperty( O, P, Attributes ) {
                anObject( O );
                P = toPrimitive( P, true );
                anObject( Attributes );
                if ( IE8_DOM_DEFINE ) try {
                    return dP( O, P, Attributes );
                } catch ( e ) { /* empty */ }
                if ( 'get' in Attributes || 'set' in Attributes ) throw TypeError( 'Accessors not supported!' );
                if ( 'value' in Attributes ) O[P] = Attributes.value;
                return O;
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_object-dps.js":
        /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \**************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js" );
            var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js" );
            var getKeys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js" );

            module.exports = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js" ) ? Object.defineProperties : function defineProperties( O, Properties ) {
                anObject( O );
                var keys = getKeys( Properties );
                var length = keys.length;
                var i = 0;
                var P;
                while ( length > i ) dP.f( O, P = keys[i++], Properties[P] );
                return O;
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_object-gpo.js":
        /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \**************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js" );
            var toObject = __webpack_require__( /*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js" );
            var IE_PROTO = __webpack_require__( /*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js" )( 'IE_PROTO' );
            var ObjectProto = Object.prototype;

            module.exports = Object.getPrototypeOf || function ( O ) {
                O = toObject( O );
                if ( has( O, IE_PROTO ) ) return O[IE_PROTO];
                if ( typeof O.constructor === 'function' && O instanceof O.constructor ) {
                    return O.constructor.prototype;
                } return O instanceof Object ? ObjectProto : null;
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_object-keys-internal.js":
        /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \************************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js" );
            var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js" );
            var arrayIndexOf = __webpack_require__( /*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js" )( false );
            var IE_PROTO = __webpack_require__( /*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js" )( 'IE_PROTO' );

            module.exports = function ( object, names ) {
                var O = toIObject( object );
                var i = 0;
                var result = [];
                var key;
                for ( key in O ) if ( key != IE_PROTO ) has( O, key ) && result.push( key );
                // Don't enum bug & hidden keys
                while ( names.length > i ) if ( has( O, key = names[i++] ) ) {
                    ~arrayIndexOf( result, key ) || result.push( key );
                }
                return result;
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_object-keys.js":
        /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \***************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            var $keys = __webpack_require__( /*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js" );
            var enumBugKeys = __webpack_require__( /*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js" );

            module.exports = Object.keys || function keys( O ) {
                return $keys( O, enumBugKeys );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_property-desc.js":
        /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \******************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = function ( bitmap, value ) {
                return {
                    enumerable: !( bitmap & 1 ),
                    configurable: !( bitmap & 2 ),
                    writable: !( bitmap & 4 ),
                    value: value
                };
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_redefine.js":
        /*! ***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js" );
            var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js" );
            var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js" );
            var SRC = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js" )( 'src' );
            var TO_STRING = 'toString';
            var $toString = Function[TO_STRING];
            var TPL = ( '' + $toString ).split( TO_STRING );

            __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js" ).inspectSource = function ( it ) {
                return $toString.call( it );
            };

            ( module.exports = function ( O, key, val, safe ) {
                var isFunction = typeof val === 'function';
                if ( isFunction ) has( val, 'name' ) || hide( val, 'name', key );
                if ( O[key] === val ) return;
                if ( isFunction ) has( val, SRC ) || hide( val, SRC, O[key] ? `${  O[key]}` : TPL.join( String( key ) ) );
                if ( O === global ) {
                    O[key] = val;
                } else if ( !safe ) {
                    delete O[key];
                    hide( O, key, val );
                } else if ( O[key] ) {
                    O[key] = val;
                } else {
                    hide( O, key, val );
                }
                // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            } )( Function.prototype, TO_STRING, function toString() {
                return typeof this === 'function' && this[SRC] || $toString.call( this );
            } );


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_set-to-string-tag.js":
        /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \*********************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var def = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js" ).f;
            var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js" );
            var TAG = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js" )( 'toStringTag' );

            module.exports = function ( it, tag, stat ) {
                if ( it && !has( it = stat ? it : it.prototype, TAG ) ) def( it, TAG, { configurable: true, value: tag } );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_shared-key.js":
        /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \**************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var shared = __webpack_require__( /*! ./_shared */ "./node_modules/core-js/modules/_shared.js" )( 'keys' );
            var uid = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js" );
            module.exports = function ( key ) {
                return shared[key] || ( shared[key] = uid( key ) );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_shared.js":
        /*! *************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \************************************************ */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var core = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js" );
            var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js" );
            var SHARED = '__core-js_shared__';
            var store = global[SHARED] || ( global[SHARED] = {} );

            ( module.exports = function ( key, value ) {
                return store[key] || ( store[key] = value !== undefined ? value : {} );
            } )( 'versions', [] ).push( {
                version: core.version,
                mode: __webpack_require__( /*! ./_library */ "./node_modules/core-js/modules/_library.js" ) ? 'pure' : 'global',
                copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
            } );


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_to-absolute-index.js":
        /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \*********************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var toInteger = __webpack_require__( /*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js" );
            var max = Math.max;
            var min = Math.min;
            module.exports = function ( index, length ) {
                index = toInteger( index );
                return index < 0 ? max( index + length, 0 ) : min( index, length );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_to-integer.js":
        /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \**************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            // 7.1.4 ToInteger
            var ceil = Math.ceil;
            var floor = Math.floor;
            module.exports = function ( it ) {
                return isNaN( it = +it ) ? 0 : ( it > 0 ? floor : ceil )( it );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_to-iobject.js":
        /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \**************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // to indexed object, toObject with fallback for non-array-like ES3 strings
            var IObject = __webpack_require__( /*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js" );
            var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js" );
            module.exports = function ( it ) {
                return IObject( defined( it ) );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_to-length.js":
        /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \*************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // 7.1.15 ToLength
            var toInteger = __webpack_require__( /*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js" );
            var min = Math.min;
            module.exports = function ( it ) {
                return it > 0 ? min( toInteger( it ), 0x1FFFFFFFFFFFFF) : 0; // pow(2, 53) - 1 == 9007199254740991
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_to-object.js":
        /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \*************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js" );
            module.exports = function ( it ) {
                return Object( defined( it ) );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_to-primitive.js":
        /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \****************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            // 7.1.1 ToPrimitive(input [, PreferredType])
            var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js" );
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module.exports = function ( it, S ) {
                if ( !isObject( it ) ) return it;
                var fn; var val;
                if ( S && typeof ( fn = it.toString ) === 'function' && !isObject( val = fn.call( it ) ) ) return val;
                if ( typeof ( fn = it.valueOf ) === 'function' && !isObject( val = fn.call( it ) ) ) return val;
                if ( !S && typeof ( fn = it.toString ) === 'function' && !isObject( val = fn.call( it ) ) ) return val;
                throw TypeError( "Can't convert object to primitive value" );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_uid.js":
        /*! **********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \********************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            var id = 0;
            var px = Math.random();
            module.exports = function ( key ) {
                return 'Symbol('.concat( key === undefined ? '' : key, ')_', ( ++id + px ).toString( 36 ) );
            };


            /** */ } ),

        /** */ "./node_modules/core-js/modules/_wks.js":
        /*! **********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \********************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var store = __webpack_require__( /*! ./_shared */ "./node_modules/core-js/modules/_shared.js" )( 'wks' );
            var uid = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js" );
            var Symbol = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js" ).Symbol;
            var USE_SYMBOL = typeof Symbol === 'function';

            var $exports = module.exports = function ( name ) {
                return store[name] || ( store[name] =
    USE_SYMBOL && Symbol[name] || ( USE_SYMBOL ? Symbol : uid )( 'Symbol.' + name ) );
            };

            $exports.store = store;


            /** */ } ),

        /** */ "./node_modules/core-js/modules/es6.array.iterator.js":
        /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \*********************************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";

            var addToUnscopables = __webpack_require__( /*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js" );
            var step = __webpack_require__( /*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js" );
            var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js" );
            var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js" );

            // 22.1.3.4 Array.prototype.entries()
            // 22.1.3.13 Array.prototype.keys()
            // 22.1.3.29 Array.prototype.values()
            // 22.1.3.30 Array.prototype[@@iterator]()
            module.exports = __webpack_require__( /*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js" )( Array, 'Array', function ( iterated, kind ) {
                this._t = toIObject( iterated ); // target
                this._i = 0;                   // next index
                this._k = kind;                // kind
                // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
            }, function () {
                var O = this._t;
                var kind = this._k;
                var index = this._i++;
                if ( !O || index >= O.length ) {
                    this._t = undefined;
                    return step( 1 );
                }
                if ( kind == 'keys' ) return step( 0, index );
                if ( kind == 'values' ) return step( 0, O[index] );
                return step( 0, [index, O[index]] );
            }, 'values' );

            // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
            Iterators.Arguments = Iterators.Array;

            addToUnscopables( 'keys' );
            addToUnscopables( 'values' );
            addToUnscopables( 'entries' );


            /** */ } ),

        /** */ "./node_modules/core-js/modules/web.dom.iterable.js":
        /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \********************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            var $iterators = __webpack_require__( /*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js" );
            var getKeys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js" );
            var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js" );
            var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js" );
            var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js" );
            var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js" );
            var wks = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js" );
            var ITERATOR = wks( 'iterator' );
            var TO_STRING_TAG = wks( 'toStringTag' );
            var ArrayValues = Iterators.Array;

            var DOMIterables = {
                CSSRuleList: true, // TODO: Not spec compliant, should be false.
                CSSStyleDeclaration: false,
                CSSValueList: false,
                ClientRectList: false,
                DOMRectList: false,
                DOMStringList: false,
                DOMTokenList: true,
                DataTransferItemList: false,
                FileList: false,
                HTMLAllCollection: false,
                HTMLCollection: false,
                HTMLFormElement: false,
                HTMLSelectElement: false,
                MediaList: true, // TODO: Not spec compliant, should be false.
                MimeTypeArray: false,
                NamedNodeMap: false,
                NodeList: true,
                PaintRequestList: false,
                Plugin: false,
                PluginArray: false,
                SVGLengthList: false,
                SVGNumberList: false,
                SVGPathSegList: false,
                SVGPointList: false,
                SVGStringList: false,
                SVGTransformList: false,
                SourceBufferList: false,
                StyleSheetList: true, // TODO: Not spec compliant, should be false.
                TextTrackCueList: false,
                TextTrackList: false,
                TouchList: false
            };

            for ( var collections = getKeys( DOMIterables ), i = 0; i < collections.length; i++ ) {
                var NAME = collections[i];
                var explicit = DOMIterables[NAME];
                var Collection = global[NAME];
                var proto = Collection && Collection.prototype;
                var key;
                if ( proto ) {
                    if ( !proto[ITERATOR] ) hide( proto, ITERATOR, ArrayValues );
                    if ( !proto[TO_STRING_TAG] ) hide( proto, TO_STRING_TAG, NAME );
                    Iterators[NAME] = ArrayValues;
                    if ( explicit ) for ( key in $iterators ) if ( !proto[key] ) redefine( proto, key, $iterators[key], true );
                }
            }


            /** */ } ),

        /** */ "./node_modules/prop-types/factoryWithThrowingShims.js":
        /*! *************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \************************************************************ */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";

            /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



            var ReactPropTypesSecret = __webpack_require__( /*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js" );

            function emptyFunction() {}

            module.exports = function() {
                function shim( props, propName, componentName, location, propFullName, secret ) {
                    if ( secret === ReactPropTypesSecret ) {
                        // It is still safe when called from React.
                        return;
                    }
                    var err = new Error(
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
                    );
                    err.name = 'Invariant Violation';
                    throw err;
                };
                shim.isRequired = shim;
                function getShim() {
                    return shim;
                };
                // Important!
                // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
                var ReactPropTypes = {
                    array: shim,
                    bool: shim,
                    func: shim,
                    number: shim,
                    object: shim,
                    string: shim,
                    symbol: shim,

                    any: shim,
                    arrayOf: getShim,
                    element: shim,
                    instanceOf: getShim,
                    node: shim,
                    objectOf: getShim,
                    oneOf: getShim,
                    oneOfType: getShim,
                    shape: getShim,
                    exact: getShim
                };

                ReactPropTypes.checkPropTypes = emptyFunction;
                ReactPropTypes.PropTypes = ReactPropTypes;

                return ReactPropTypes;
            };


            /** */ } ),

        /** */ "./node_modules/prop-types/index.js":
        /*! ******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \***************************************** */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

            if ( false ) { let throwOnDirectAccess; var isValidElement; var REACT_ELEMENT_TYPE; } else {
                // By explicitly using `prop-types` you are opting into new production behavior.
                // http://fb.me/prop-types-in-prod
                module.exports = __webpack_require__( /*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js" )();
            }


            /** */ } ),

        /** */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
        /*! *************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \************************************************************ */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            "use strict";

            /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



            var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

            module.exports = ReactPropTypesSecret;


            /** */ } ),

        /** */ "./node_modules/redux-logger/dist/redux-logger.js":
        /*! ********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \******************************************************* */
        /*! no static exports found */
        /** */ ( function( module, exports, __webpack_require__ ) {

            !function( e,t ){ true?t( exports ):undefined}( this,function( e ){function t( e,t ){e.super_=t,e.prototype=Object.create( t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}} )}function r( e,t ){Object.defineProperty( this,"kind",{value:e,enumerable:!0} ),t&&t.length&&Object.defineProperty( this,"path",{value:t,enumerable:!0} )}function n( e,t,r ){n.super_.call( this,"E",e ),Object.defineProperty( this,"lhs",{value:t,enumerable:!0} ),Object.defineProperty( this,"rhs",{value:r,enumerable:!0} )}function o( e,t ){o.super_.call( this,"N",e ),Object.defineProperty( this,"rhs",{value:t,enumerable:!0} )}function i( e,t ){i.super_.call( this,"D",e ),Object.defineProperty( this,"lhs",{value:t,enumerable:!0} )}function a( e,t,r ){a.super_.call( this,"A",e ),Object.defineProperty( this,"index",{value:t,enumerable:!0} ),Object.defineProperty( this,"item",{value:r,enumerable:!0} )}function f( e,t,r ){let n=e.slice( ( r||t )+1||e.length );return e.length=t<0?e.length+t:t,e.push(...n),e}function u( e ){let t=typeof e=="undefined"?"undefined":N( e );returnt!=="object"?t:e===Math?"math":e===null?"null":Array.isArray( e )?"array":Object.prototype.toString.call(e)==="[object Date]"?"date":typeof e.toString=="function"&&/^\/.*\//.test( e.toString() )?"regexp":"object"}function l( e,t,r,c,s,d,p ){s=s||[],p=p||[];let g=s.slice( 0 );if( "undefined"!==typeof d ){if( c ){if( "function"===typeof c&&c( g,d ) )return;if( "object"===( "undefined"===typeof c?"undefined":N( c ) ) ){if( c.prefilter&&c.prefilter( g,d ) )return;if( c.normalize ){let h=c.normalize( g,d,e,t );h&&( e=h[0],t=h[1] )}}}g.push( d )}u(e)==="regexp"&&u(t)==="regexp"&&( e=e.toString(),t=t.toString() );let y=typeof e=="undefined"?"undefined":N( e ); var v="undefined"==typeof t?"undefined":N(t); var b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d); var m=v!=="undefined"||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty( d );if( !b&&m )r( new o( g,t ) );else if( !m&&b )r( new i( g,e ) );else if( u( e )!==u( t ) )r( new n( g,e,t ) );else if( "date"===u( e )&&e-t!==0 )r( new n( g,e,t ) );else if( "object"===y&&e!==null&&t!==null)if( p.filter( function( t ){return t.lhs===e} ).length )e!==t&&r( new n( g,e,t ) );else{if( p.push( {lhs:e,rhs:t} ),Array.isArray( e ) ){let w;e.length;for( w=0;w<e.length;w++ )w>=t.length?r( new a( g,w,new i( void 0,e[w] ) ) ):l( e[w],t[w],r,c,g,w,p );for( ;w<t.length; )r( new a( g,w,new o( void 0,t[w++] ) ) )}else{let x=Object.keys( e ); var S=Object.keys( t );x.forEach( function( n,o ){let i=S.indexOf( n );i>=0?( l( e[n],t[n],r,c,g,n,p ),S=f( S,i ) ):l( e[n],void 0,r,c,g,n,p )} ),S.forEach( function( e ){l( void 0,t[e],r,c,g,e,p )} )}p.length-=1}else e!==t&&( "number"===y&&isNaN( e )&&isNaN( t )||r( new n( g,e,t ) ) )}function c( e,t,r,n ){return n=n||[],l( e,t,function( e ){e&&n.push( e )},r ),n.length?n:void 0}function s( e,t,r ){if( r.path&&r.path.length ){let n; var o=e[t]; var i=r.path.length-1;for( n=0;n<i;n++ )o=o[r.path[n]];switch( r.kind ){case"A":s( o[r.path[n]],r.index,r.item );break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch( r.kind ){case"A":s( e[t],r.index,r.item );break;case"D":e=f( e,t );break;case"E":case"N":e[t]=r.rhs}return e}function d( e,t,r ){if( e&&t&&r&&r.kind ){for( var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i; )typeof n[r.path[o]]=="undefined"&&( n[r.path[o]]=typeof r.path[o]=="number"?[]:{} ),n=n[r.path[o]];switch( r.kind ){case"A":s( r.path?n[r.path[o]]:n,r.index,r.item );break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p( e,t,r ){if( r.path&&r.path.length ){let n; var o=e[t]; var i=r.path.length-1;for( n=0;n<i;n++ )o=o[r.path[n]];switch( r.kind ){case"A":p( o[r.path[n]],r.index,r.item );break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch( r.kind ){case"A":p( e[t],r.index,r.item );break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f( e,t )}return e}function g( e,t,r ){if( e&&t&&r&&r.kind ){let n; var o; var i=e;for( o=r.path.length-1,n=0;n<o;n++ )typeof i[r.path[n]]=="undefined"&&( i[r.path[n]]={} ),i=i[r.path[n]];switch( r.kind ){case"A":p( i[r.path[n]],r.index,r.item );break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h( e,t,r ){if( e&&t ){let n=function( n ){r&&!r( e,t,n )||d( e,t,n )};l( e,t,n )}}function y( e ){return`color: ${F[e].color}; font-weight: bold`}function v( e ){let t=e.kind; var r=e.path; var n=e.lhs; var o=e.rhs; var i=e.index; var a=e.item;switch( t ){case"E":return[r.join( "." ),n,"→",o];case"N":return[r.join( "." ),o];case"D":return[r.join( "." )];case"A":return[`${r.join(".")}[${i}]`,a];default:return[]}}function b( e,t,r,n ){let o=c( e,t );try{n?r.groupCollapsed( "diff" ):r.group( "diff" )}catch( e ){r.log( "diff" )}o?o.forEach( function( e ){let t=e.kind; var n=v( e );r.log(...["%c "+F[t].text,y(t)].concat(P(n)))} ):r.log( "—— no diff ——" );try{r.groupEnd()}catch( e ){r.log( "—— diff end —— " )}}function m( e,t,r,n ){switch( "undefined"===typeof e?"undefined":N( e ) ){case"object":returntypeof e[n]=="function"?e[n](...P(r)):e[n];case"function":return e( t );default:return e}}function w( e ){let t=e.timestamp; var r=e.duration;return function( e,n,o ){let i=["action"];return i.push( "%c"+String( e.type ) ),t&&i.push( "%c@ "+n ),r&&i.push( "%c(in "+o.toFixed( 2 )+" ms)" ),i.join( " " )}}function x( e,t ){let r=t.logger; var n=t.actionTransformer; var o=t.titleFormatter; var i=void 0===o?w(t):o; var a=t.collapsed; var f=t.colors; var u=t.level; var l=t.diff; var c=typeof t.titleFormatter=="undefined";e.forEach( function( o,s ){let d=o.started; var p=o.startedTime; var g=o.action; var h=o.prevState; var y=o.error; var v=o.took; var w=o.nextState; var x=e[s+1];x&&( w=x.prevState,v=x.started-d );let S=n( g ); var k="function"==typeof a?a(function(){return w},g,o):a; var j=D(p); var E=f.title?"color: "+f.title(S)+";":""; var A=["color: gray; font-weight: lighter;"];A.push( E ),t.timestamp&&A.push( "color: gray; font-weight: lighter;" ),t.duration&&A.push( "color: gray; font-weight: lighter;" );let O=i( S,j,v );try{k?f.title&&c?r.groupCollapsed(...["%c "+O].concat(A)):r.groupCollapsed( O ):f.title&&c?r.group(...["%c "+O].concat(A)):r.group( O )}catch( e ){r.log( O )}let N=m( u,S,[h],"prevState" ); var P=m(u,S,[S],"action"); var C=m(u,S,[y,h],"error"); var F=m( u,S,[w],"nextState" );if( N )if( f.prevState ){let L=`color: ${f.prevState(h)}; font-weight: bold`;r[N]( "%c prev state",L,h )}else r[N]( "prev state",h );if( P )if( f.action ){let T=`color: ${f.action(S)}; font-weight: bold`;r[P]( "%c action    ",T,S )}else r[P]( "action    ",S );if( y&&C )if( f.error ){let M=`color: ${f.error(y,h)}; font-weight: bold;`;r[C]( "%c error     ",M,y )}else r[C]( "error     ",y );if( F )if( f.nextState ){let _=`color: ${f.nextState(w)}; font-weight: bold`;r[F]( "%c next state",_,w )}else r[F]( "next state",w );l&&b( h,w,r,k );try{r.groupEnd()}catch( e ){r.log( "—— log end ——" )}} )}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; var t=Object.assign({},L,e); var r=t.logger; var n=t.stateTransformer; var o=t.errorTransformer; var i=t.predicate; var a=t.logErrors; var f=t.diffPredicate;if( "undefined"===typeof r )return function(){return function( e ){return function( t ){return e( t )}}};if( e.getState&&e.dispatch )return console.error( "[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n" ),function(){return function( e ){return function( t ){return e( t )}}};let u=[];return function( e ){let r=e.getState;return function( e ){return function( l ){if( "function"===typeof i&&!i( r,l ) )return e( l );let c={};u.push( c ),c.started=O.now(),c.startedTime=new Date,c.prevState=n( r() ),c.action=l;let s=void 0;if( a )try{s=e( l )}catch( e ){c.error=o( e )}else s=e( l );c.took=O.now()-c.started,c.nextState=n( r() );let d=t.diff&&typeof f=="function"?f( r,l ):t.diff;if( x( u,Object.assign( {},t,{diff:d} ) ),u.length=0,c.error )throw c.error;return s}}}}var k; var j; var E=function(e,t){return new Array(t+1).join(e)}; var A=function(e,t){return E("0",t-e.toString().length)+e}; var D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)}; var O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date; var N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}; var P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}; var C=[];k=("undefined"==typeof global?"undefined":N(global))==="object"&&global?global:typeof window!="undefined"?window:{},j=k.DeepDiff,j&&C.push( function(){typeof j!="undefined"&&k.DeepDiff===c&&( k.DeepDiff=j,j=void 0 )} ),t( n,r ),t( o,r ),t( i,r ),t( a,r ),Object.defineProperties( c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}} );var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}}; var L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0}; var T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}; var t=e.dispatch; var r=e.getState;returntypeof t=="function"||typeof r=="function"?S()( {dispatch:t,getState:r} ):void console.error( "\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n" )};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty( e,"__esModule",{value:!0} )} );


            /** */ } ),

        /** */ "./package.json":
        /*! **********************!*\
  !*** ./package.json ***!
  \********************* */
        /*! exports provided: name, productName, version, description, scripts, lint-staged, main, build, repository, author, contributors, license, bugs, keywords, homepage, jest, devDependencies, dependencies, devEngines, collective, browserslist, default */
        /** */ ( function( module ) {

            module.exports = {"name":"electron-react-boilerplate","productName":"ElectronReact","version":"0.17.1","description":"Electron application boilerplate based on React, React Router, Webpack, React Hot Loader for rapid application development","scripts":{"build":"concurrently \"yarn build-main\" \"yarn build-bg\" \"yarn build-renderer\"","build-dll":"cross-env NODE_ENV=development webpack --config ./configs/webpack.config.renderer.dev.dll.babel.js --colors","build-e2e":"cross-env E2E_BUILD=true yarn build","build-main":"cross-env NODE_ENV=production webpack --config ./configs/webpack.config.main.prod.babel.js --colors","build-bg":"cross-env NODE_ENV=production webpack --config ./configs/webpack.config.background.prod.babel.js --colors","build-renderer":"cross-env NODE_ENV=production webpack --config ./configs/webpack.config.renderer.prod.babel.js --colors","dev":"cross-env START_HOT=1 node -r @babel/register ./internals/scripts/CheckPortInUse.js && cross-env START_HOT=1 yarn start-renderer-dev","lint":"cross-env NODE_ENV=development eslint --cache --format=pretty .","lint-fix":"yarn --silent lint --fix; exit 0","lint-styles":"stylelint --ignore-path .eslintignore '**/*.*(css|scss)' --syntax scss","lint-styles-fix":"yarn --silent lint-styles --fix; exit 0","package":"yarn build && electron-builder build --publish never","package-all":"yarn build && electron-builder build -mwl","package-ci":"yarn postinstall && yarn build && electron-builder --publish always","package-linux":"yarn build && electron-builder build --linux","package-win":"yarn build && electron-builder build --win --x64","postinstall":"electron-builder install-app-deps package.json && yarn build-dll && opencollective-postinstall && node ./install-libs.js","postlint-fix":"prettier --ignore-path .eslintignore --single-quote --write '**/*.{*{js,jsx,json},babelrc,eslintrc,prettierrc,stylelintrc}'","postlint-styles-fix":"prettier --ignore-path .eslintignore --single-quote --write '**/*.{css,scss}'","precommit":"lint-staged","prestart":"yarn build","start":"cross-env NODE_ENV=production electron ./app/main.prod.js","start-main-dev":"cross-env HOT=1 NODE_ENV=development electron -r @babel/register ./app/main.dev.js","start-renderer-dev":"cross-env NODE_ENV=development webpack-dev-server --config configs/webpack.config.renderer.dev.babel.js","test":"cross-env NODE_ENV=test BABEL_DISABLE_CACHE=1 jest","test-all":"yarn lint && yarn build && yarn test && yarn build-e2e && yarn test-e2e","test-e2e":"node -r @babel/register ./internals/scripts/CheckBuiltsExist.js && cross-env NODE_ENV=test testcafe electron:./ ./test/e2e/HomePage.e2e.js","test-e2e-live":"node -r @babel/register ./internals/scripts/CheckBuiltsExist.js && cross-env NODE_ENV=test testcafe-live electron:./ ./test/e2e/HomePage.e2e.js","test-watch":"yarn test --watch"},"lint-staged":{"*.{js,jsx}":["cross-env NODE_ENV=development eslint --cache --format=pretty","prettier --ignore-path .eslintignore --single-quote --write","git add"],"{*.json,.{babelrc,eslintrc,prettierrc,stylelintrc}}":["prettier --ignore-path .eslintignore --parser json --write","git add"],"*.{css,scss}":["stylelint --ignore-path .eslintignore --syntax scss --fix","prettier --ignore-path .eslintignore --single-quote --write","git add"],"*.{yml,md}":["prettier --ignore-path .eslintignore --single-quote --write","git add"]},"main":"./app/main.prod.js","build":{"productName":"SAFE Launch Pad","appId":"org.develar.SAFELaunchPad","files":["app/dist/","app/app.html","app/main.prod.js","app/main.bg.js","app/main.prod.js.map","app/main.bg.js.map","package.json"],"dmg":{"contents":[{"x":130,"y":220},{"x":410,"y":220,"type":"link","path":"/Applications"}]},"protocols":{"name":"SAFE Network URL","schemes":["safe-another-auth'"]},"win":{"target":["nsis","msi"]},"linux":{"target":["deb","rpm","snap","AppImage"],"category":"Development"},"directories":{"buildResources":"resources","output":"release"},"publish":{"provider":"github","owner":"electron-react-boilerplate","repo":"electron-react-boilerplate","private":false}},"repository":{"type":"git","url":"git+https://github.com/electron-react-boilerplate/electron-react-boilerplate.git"},"author":{"name":"Electron React Boilerplte Maintainers","email":"electronreactboilerplate@gmail.com","url":"https://electron-react-boilerplate.js.org"},"contributors":[{"name":"Vikram Rangaraj","email":"vikr01@icloud.com","url":"https://github.com/vikr01"},{"name":"Amila Welihinda","email":"amilajack@gmail.com","url":"https://github.com/amilajack"}],"license":"MIT","bugs":{"url":"https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues"},"keywords":["electron","boilerplate","react","redux","sass","webpack","hot","reload"],"homepage":"https://github.com/electron-react-boilerplate/electron-react-boilerplate#readme","jest":{"testURL":"http://localhost/","moduleNameMapper":{"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":"<rootDir>/internals/mocks/fileMock.js","\\.(css|less|sass|scss)$":"identity-obj-proxy"},"moduleFileExtensions":["js","jsx","json"],"transform":{"^.+\\.jsx?$":"babel-jest"},"setupFiles":["./internals/scripts/CheckBuiltsExist.js"]},"devDependencies":{"@babel/core":"^7.1.6","@babel/plugin-proposal-class-properties":"^7.1.0","@babel/plugin-proposal-decorators":"^7.1.6","@babel/plugin-proposal-do-expressions":"^7.0.0","@babel/plugin-proposal-export-default-from":"^7.0.0","@babel/plugin-proposal-export-namespace-from":"^7.0.0","@babel/plugin-proposal-function-bind":"^7.0.0","@babel/plugin-proposal-function-sent":"^7.1.0","@babel/plugin-proposal-json-strings":"^7.0.0","@babel/plugin-proposal-logical-assignment-operators":"^7.0.0","@babel/plugin-proposal-nullish-coalescing-operator":"^7.0.0","@babel/plugin-proposal-numeric-separator":"^7.0.0","@babel/plugin-proposal-optional-chaining":"^7.0.0","@babel/plugin-proposal-pipeline-operator":"^7.0.0","@babel/plugin-proposal-throw-expressions":"^7.0.0","@babel/plugin-syntax-dynamic-import":"^7.0.0","@babel/plugin-syntax-import-meta":"^7.0.0","@babel/plugin-transform-react-constant-elements":"^7.0.0","@babel/plugin-transform-react-inline-elements":"^7.0.0","@babel/preset-env":"^7.1.6","@babel/preset-react":"^7.0.0","@babel/preset-typescript":"7.3.3","@babel/register":"^7.0.0","@types/redux":"3.6.0","@typescript-eslint/eslint-plugin":"1.4.2","@typescript-eslint/eslint-plugin-tslint":"1.4.2","@typescript-eslint/parser":"1.4.2","babel-core":"7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-jest":"^23.6.0","babel-loader":"^8.0.4","babel-plugin-add-module-exports":"1.0.0","babel-plugin-dev-expression":"^0.2.1","babel-plugin-import":"1.11.0","babel-plugin-module-resolver":"3.1.1","babel-plugin-transform-react-remove-prop-types":"^0.4.20","chalk":"^2.4.1","circular-dependency-plugin":"5.0.2","concurrently":"^4.1.0","connected-react-router":"^5.0.1","cross-env":"^5.2.0","cross-spawn":"^6.0.5","css-loader":"^1.0.1","detect-port":"^1.3.0","electron":"^3.0.10","electron-builder":"^20.34.0","electron-devtools-installer":"^2.2.4","enzyme":"^3.7.0","enzyme-adapter-react-16":"^1.7.0","enzyme-to-json":"^3.3.4","eslint":"^5.9.0","eslint-config-airbnb":"^17.1.0","eslint-config-prettier":"^3.3.0","eslint-formatter-pretty":"^2.0.0","eslint-import-resolver-babel-module":"4.0.0","eslint-import-resolver-webpack":"^0.10.1","eslint-plugin-compat":"^2.6.3","eslint-plugin-import":"^2.14.0","eslint-plugin-jest":"^22.0.0","eslint-plugin-jsx-a11y":"6.1.2","eslint-plugin-promise":"^4.0.1","eslint-plugin-react":"^7.11.1","eslint-plugin-testcafe":"^0.2.1","fbjs-scripts":"^1.0.1","file-loader":"^2.0.0","husky":"^1.1.4","identity-obj-proxy":"^3.0.0","jest":"^23.6.0","lint-staged":"^8.1.0","mini-css-extract-plugin":"^0.4.4","node-sass":"^4.10.0","opencollective-postinstall":"^2.0.1","optimize-css-assets-webpack-plugin":"^5.0.1","prettier":"^1.15.2","react-test-renderer":"^16.6.3","redux-logger":"^3.0.6","rimraf":"^2.6.2","sass-loader":"^7.1.0","sinon":"^7.1.1","spectron":"^5.0.0","style-loader":"^0.23.1","stylelint":"^9.8.0","stylelint-config-prettier":"^4.0.0","stylelint-config-standard":"^18.2.0","terser-webpack-plugin":"^1.1.0","testcafe":"^0.23.2","testcafe-browser-provider-electron":"^0.0.6","testcafe-live":"^0.1.4","testcafe-react-selectors":"^3.0.0","typescript":"3.3.3333","url-loader":"^1.1.2","webpack":"^4.26.0","webpack-bundle-analyzer":"^3.0.3","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","webpack-merge":"^4.1.4","yarn":"^1.12.3"},"dependencies":{"@fortawesome/fontawesome-free":"^5.5.0","antd":"3.11.2","devtron":"^1.4.0","electron-debug":"^2.0.0","electron-log":"2.2.17","electron-redux":"1.3.1","electron-updater":"^3.2.3","enum":"2.5.0","ffi":"https://github.com/node-ffi/node-ffi.git","fs-extra":"7.0.1","get-port":"4.2.0","history":"^4.7.2","node":"11.4.0","react":"^16.6.3","react-dom":"^16.6.3","react-hot-loader":"^4.3.12","react-redux":"^5.1.1","react-router":"^4.3.1","react-router-dom":"^4.3.1","redux":"^4.0.1","redux-actions":"2.6.4","redux-promise":"0.6.0","redux-thunk":"^2.3.0","ref":"1.3.5","ref-array":"1.2.0","ref-struct":"1.1.0","source-map-support":"^0.5.9","weak":"1.0.1"},"devEngines":{"node":">=7.x","npm":">=4.x","yarn":">=0.21.3"},"collective":{"url":"https://opencollective.com/electron-react-boilerplate-594"},"browserslist":"electron 1.6"};

            /** */ } ),

        /** */ "electron":
        /*! ***************************!*\
  !*** external "electron" ***!
  \************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "electron" );

            /** */ } ),

        /** */ "electron-log":
        /*! *******************************!*\
  !*** external "electron-log" ***!
  \****************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "electron-log" );

            /** */ } ),

        /** */ "electron-redux":
        /*! *********************************!*\
  !*** external "electron-redux" ***!
  \******************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "electron-redux" );

            /** */ } ),

        /** */ "fs-extra":
        /*! ***************************!*\
  !*** external "fs-extra" ***!
  \************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "fs-extra" );

            /** */ } ),

        /** */ "get-port":
        /*! ***************************!*\
  !*** external "get-port" ***!
  \************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "get-port" );

            /** */ } ),

        /** */ "history":
        /*! **************************!*\
  !*** external "history" ***!
  \************************* */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "history" );

            /** */ } ),

        /** */ "os":
        /*! *********************!*\
  !*** external "os" ***!
  \******************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "os" );

            /** */ } ),

        /** */ "path":
        /*! ***********************!*\
  !*** external "path" ***!
  \********************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "path" );

            /** */ } ),

        /** */ "react":
        /*! ************************!*\
  !*** external "react" ***!
  \*********************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "react" );

            /** */ } ),

        /** */ "react-redux":
        /*! ******************************!*\
  !*** external "react-redux" ***!
  \***************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "react-redux" );

            /** */ } ),

        /** */ "react-router":
        /*! *******************************!*\
  !*** external "react-router" ***!
  \****************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "react-router" );

            /** */ } ),

        /** */ "redux":
        /*! ************************!*\
  !*** external "redux" ***!
  \*********************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "redux" );

            /** */ } ),

        /** */ "redux-promise":
        /*! ********************************!*\
  !*** external "redux-promise" ***!
  \******************************* */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "redux-promise" );

            /** */ } ),

        /** */ "redux-thunk":
        /*! ******************************!*\
  !*** external "redux-thunk" ***!
  \***************************** */
        /*! no static exports found */
        /** */ ( function( module, exports ) {

            module.exports = require( "redux-thunk" );

            /** */ } )

        /** *** */ } );
// # sourceMappingURL=background.prod.js.map