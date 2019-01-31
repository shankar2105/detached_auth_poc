import path from 'path';
import os from 'os';
import { env,
    isRunningUnpacked,
    isRunningPackaged,
    isRunningDebug,
    startedRunningProduction,
    startedRunningMock,
    isRunningSpectronTestProcess,
    isRunningSpectronTestProcessingPackagedApp,
    inMainProcess,
    isCI,
    TESTENV
} from '@Constants';
import log from 'electron-timber';
// import log from 'electron-log';
// const log = require( 'electron-log' );

//
// if ( log.transports )
// {
//
//     // Log level
//     // error, warn, log, log, debug, silly
//     log.transports.console.level = 'silly';
//     log.transports.file.level = 'silly';
//
//     if ( !isRunningDebug && isRunningPackaged )
//     {
//         log.transports.console.level = 'warn';
//         log.transports.file.level = 'warn';
//     }
//
//     log.transports.file.file = path.resolve( os.tmpdir(), 'safe-browser.log' );
//
//     /**
//     * Set output format template. Available variables:
//     * Main: {level}, {text}
//     * Date: {y},{m},{d},{h},{i},{s},{ms}
//     */
//     log.transports.console.format = '{h}:{i}:{s}:{ms} {text}';
//
//     // Set a function which formats output
//     // log.transports.console.format = ( msg ) => util.format( ...msg.data );
//
//     log.transports.file.format = '{h}:{i}:{s}:{ms} {text}';
//
//     // Set approximate maximum log size in bytes. When it exceeds,
//     // the archived log will be saved as the log.old.log file
//     log.transports.file.maxSize = 5 * 1024 * 1024;
// }

// HACK: for jest
if ( inMainProcess )
{

    console.log('not in main')
    // TODO: add buld ID if prod. Incase you're opening up, NOT THIS BUILD.
    log.log( '' );
    log.log( '' );
    log.log( '' );
    log.log( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    log.log( `      Started with node env: ${ env }` );
    // log.log( '       Log location:', log.transports.file.file );
    log.log( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    log.log( 'Running with derived constants:' );
    log.log( '' );
    log.log( 'isCI?', isCI );
    log.log( 'TESTENV?', TESTENV );
    log.log( 'isRunningDebug?', isRunningDebug );
    log.log( 'isRunningUnpacked?', isRunningUnpacked );
    log.log( 'isRunningPackaged?', isRunningPackaged );
    log.log( 'inMainProcess?', inMainProcess );
    log.log( 'startedRunningProduction?', startedRunningProduction );
    log.log( 'startedRunningMock?', startedRunningMock );
    log.log( 'isRunningSpectronTestProcess?', isRunningSpectronTestProcess );
    log.log( 'isRunningSpectronTestProcessingPackagedApp?', isRunningSpectronTestProcessingPackagedApp );
    log.log( '' );
    log.log( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    log.log( '' );

    process.on( 'uncaughtTypeError', err =>
    {
        log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
        log.error( 'whoops! there was an uncaught type error:' );
        log.error( err );
        log.error( err.file );
        log.error( err.line );
        log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    } );

    process.on( 'uncaughtException', err =>
    {
        log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
        log.error( 'whoops! there was an uncaught error:' );
        log.error( err );
        log.error( err.file );
        log.error( err.line );
        log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    } );

    process.on( 'unhandledRejection', ( reason, p ) =>
    {
        log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
        log.error( 'Unhandled Rejection. Reason:', reason.message || reason );
        log.error( 'At:', p );
        log.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    } );
}

export default log;
