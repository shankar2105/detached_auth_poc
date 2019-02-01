import { Tray, BrowserWindow, ipcMain } from 'electron';
import logger from 'logger';
// import path from 'path';
import {
    isRunningUnpacked,
    // isRunningDevelopment,
    CONFIG
} from '@Constants';

let tray;
let safeLaunchPadWindow;

export const createTray = () => 
{
    tray = new Tray( 'resources/icon.png' );
    tray.on( 'right-click', toggleWindow );
    tray.on( 'double-click', toggleWindow );
    tray.on( 'click', event => 
{
        toggleWindow();

        // Show devtools when command clicked
        if (
            safeLaunchPadWindow.isVisible()
            && process.defaultApp
            && event.metaKey
        )
        {
            safeLaunchPadWindow.openDevTools( { mode: 'undocked' } );
            // mainWindow.openDevTools({ mode:'undocked' });
        }
    } );
};

const getWindowPosition = () => 
{
    const safeLaunchPadWindowBounds = safeLaunchPadWindow.getBounds();
    const trayBounds = tray.getBounds();

    // Center safeLaunchPadWindow horizontally below the tray icon
    const x = Math.round(
        trayBounds.x
            + trayBounds.width / 2
            - safeLaunchPadWindowBounds.width / 2
    );

    // Position safeLaunchPadWindow 4 pixels vertically below the tray icon
    const y = Math.round( trayBounds.y + trayBounds.height + 4 );

    return { x, y };
};

export const createSafeLaunchPadWindow = () => 
{
    safeLaunchPadWindow = new BrowserWindow( {
        width          : 300,
        height         : 450,
        show           : false,
        frame          : false,
        fullscreenable : false,
        resizable      : false,
        transparent    : true,
        webPreferences : {
            // Prevents renderer process code from not running when safeLaunchPadWindow is
            // hidden
            // preload: path.join(__dirname, 'browserPreload.js'),
            backgroundThrottling : false,
            nodeIntegration      : true
        }
    } );
    safeLaunchPadWindow.loadURL( `file://${ CONFIG.APP_HTML_PATH }` );

    // Hide the safeLaunchPadWindow when it loses focus
    safeLaunchPadWindow.on( 'blur', () => 
{
        if ( !safeLaunchPadWindow.webContents.isDevToolsOpened() )
        {
            safeLaunchPadWindow.hide();
        }
    } );

    safeLaunchPadWindow.webContents.on( 'did-finish-load', () => 
{
        // safeLaunchPadWindow.webContents.executeJavaScript(
        //   "window.peruseNav('safeLaunchPadWindow')",
        //   () => {
        //     logger.log('Safe Info Window Loaded');
        //   }
        // );

        // for debug
        showWindow();

        logger.log( 'LAUNCH PAD: Loaded' );

        if ( isRunningUnpacked )
        {
            safeLaunchPadWindow.openDevTools( { mode: 'undocked' } );
        }
    } );

    return safeLaunchPadWindow;
};

const toggleWindow = () => 
{
    if ( safeLaunchPadWindow.isVisible() )
    {
        safeLaunchPadWindow.hide();
    }
    else
    {
        showWindow();
    }
};

const showWindow = () => 
{
    const position = getWindowPosition();
    safeLaunchPadWindow.setPosition( position.x, position.y, false );
    safeLaunchPadWindow.show();
    safeLaunchPadWindow.focus();
};

ipcMain.on( 'show-safeLaunchPadWindow', () => 
{
    showWindow();
} );
