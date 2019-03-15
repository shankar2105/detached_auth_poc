import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware, routerActions } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import {
    inRendererProcess,
    // isRunningUnpacked,
    isRunningSpectronTestProcess
} from '@Constants';

import addMiddlewares from '@Store/addMiddlewares';

import {
    getInitialStateRenderer,
    replayActionMain,
    replayActionRenderer
} from 'electron-redux';

import createRootReducer from '../reducers';
// import * as counterActions from '../actions/counter';
// import type { counterStateType } from '../reducers/types';

const initialStateFromMain = inRendererProcess ? getInitialStateRenderer() : {};

let history;

if ( inRendererProcess ) {
    history = createHashHistory();
}

const rootReducer = createRootReducer( history );

// const configureStore = (initialState?: counterStateType) => {
const configureStore = (
    initialState = initialStateFromMain,
    thisIsTheBackgroundProcess = false
) => {
    // Redux Configuration
    const middleware = [];
    const enhancers = [];

    // Router Middleware
    if ( history ) {
        const router = routerMiddleware( history );
        middleware.push( router );
    }

    addMiddlewares( middleware, thisIsTheBackgroundProcess );

    // Logging Middleware
    const logger = createLogger( {
        level: 'info',
        collapsed: true
    } );

    // Skip redux logs in console during the tests
    if ( process.env.NODE_ENV !== 'test' ) {
        middleware.push( logger );
    }

    // Redux DevTools Configuration
    const actionCreators = {
        // ...counterActions,
        ...routerActions
    };

    let composeEnhancers;

    if ( !isRunningSpectronTestProcess && inRendererProcess ) {
        // If Redux DevTools Extension is installed use it, otherwise use Redux compose
        /* eslint-disable no-underscore-dangle */
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__( {
                // Options: http://extension.remotedev.io/docs/API/Arguments.html
                actionCreators
            } )
            : compose;
        /* eslint-enable no-underscore-dangle */
    } else {
        composeEnhancers = compose;
    }

    // Apply Middleware & Compose Enhancers
    enhancers.push( applyMiddleware( ...middleware ) );
    const enhancer = composeEnhancers( ...enhancers );

    // Create Store
    const store = createStore( rootReducer, initialState, enhancer );

    if ( module.hot ) {
        module.hot.accept(
            '../reducers',
            // eslint-disable-next-line global-require
            () => store.replaceReducer( require( '../reducers' ).default )
        );
    }

    if ( inRendererProcess ) {
        replayActionRenderer( store );
    } else {
        replayActionMain( store );
    }

    return store;
};

export default { configureStore, history };
