import logger from 'logger';
import { CONFIG, PROTOCOLS } from '@Constants';

import { remote } from 'electron';
/* eslint-enable import/extensions */

export const registerSafeAuthProtocol = () =>
{
    logger.log( 'Registering safe-auth scheme' );
    const partition = CONFIG.SAFE_PARTITION;
    const ses = remote.session.fromPartition( partition );

    ses.protocol.registerHttpProtocol( PROTOCOLS.SAFE_AUTH, ( req, cb ) =>
    {
        logger.log( `Procotol:: safe-auth:// url being parsed: ${ req.url }` );

        // TODO. Sort out when/where with slash
        const newUrl = `http://localhost:${ CONFIG.PORT }/auth/${ req.url }`;

        cb( { url: newUrl } );
    }, err =>
    {
        if ( err )
        {
            logger.error( 'Problem registering safe-auth', err );
        }
    } );
};

export default registerSafeAuthProtocol;
