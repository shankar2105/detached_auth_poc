import * as safeBrowserAppActions from '@Extensions/safe/actions/safeBrowserApplication_actions';
import logger from 'logger';
import {
    getCurrentStore,
    getSafeBrowserAppObject,
    safeBrowserAppIsAuthed
} from '@Extensions/safe/safeBrowserApplication/theApplication';

/**
 * Get WebIds for the current user
 * @return {Promise} Resolves to Array of webIds
 */
const getWebIds = async () =>
{
    const currentStore = getCurrentStore();

    const safeBrowserApp = getSafeBrowserAppObject();
    logger.log( 'getWebIds' );

    if ( !safeBrowserApp ) throw new Error( 'SafeBrowserApp should be initiated.' );

    if ( !safeBrowserAppIsAuthed() ) throw new Error( 'SafeBrowserApp is not authorised' );

    let webIds = [];

    currentStore.dispatch( safeBrowserAppActions.fetchingWebIds() );
    webIds = await safeBrowserApp.web.getWebIds();

    currentStore.dispatch( safeBrowserAppActions.setAvailableWebIds( webIds ) );

    return webIds;
};

export default getWebIds;
