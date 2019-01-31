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

let processLog = log;
// if( global.thisIsTheBackgroundProcess )
// {
//     processLog = processLog.create({name:'Background'})
// }
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
    processLog.log( '' );
    processLog.log( '' );
    processLog.log( '' );
    processLog.log( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    processLog.log( `      Started with node env: ${ env }` );
    // processLog.log( '       Log location:', processLog.transports.file.file );
    processLog.log( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    processLog.log( 'Running with derived constants:' );
    processLog.log( '' );
    processLog.log( 'isCI?', isCI );
    processLog.log( 'TESTENV?', TESTENV );
    processLog.log( 'isRunningDebug?', isRunningDebug );
    processLog.log( 'isRunningUnpacked?', isRunningUnpacked );
    processLog.log( 'isRunningPackaged?', isRunningPackaged );
    processLog.log( 'inMainProcess?', inMainProcess );
    processLog.log( 'startedRunningProduction?', startedRunningProduction );
    processLog.log( 'startedRunningMock?', startedRunningMock );
    processLog.log( 'isRunningSpectronTestProcess?', isRunningSpectronTestProcess );
    processLog.log( 'isRunningSpectronTestProcessingPackagedApp?', isRunningSpectronTestProcessingPackagedApp );
    processLog.log( '' );
    processLog.log( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    processLog.log( '' );

    process.on( 'uncaughtTypeError', err =>
    {
        processLog.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
        processLog.error( 'whoops! there was an uncaught type error:' );
        processLog.error( err );
        processLog.error( err.file );
        processLog.error( err.line );
        processLog.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    } );

    process.on( 'uncaughtException', err =>
    {
        processLog.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
        processLog.error( 'whoops! there was an uncaught error:' );
        processLog.error( err );
        processLog.error( err.file );
        processLog.error( err.line );
        processLog.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    } );

    process.on( 'unhandledRejection', ( reason, p ) =>
    {
        processLog.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
        processLog.error( 'Unhandled Rejection. Reason:', reason.message || reason );
        processLog.error( 'At:', p );
        processLog.error( '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' );
    } );
}

export default log;
