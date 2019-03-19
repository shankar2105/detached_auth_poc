import React, { Component } from 'react';
import { Provider, Store } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Routes } from '../Routes';

interface RootProps {
    store: Store;
    history: any;
}
export const Root: React.FunctionComponent<RootProps> = ( props ) => {
    const { store, history } = props;
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>
    );
};
