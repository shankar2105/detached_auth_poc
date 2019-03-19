import { configureStore as configureStoreDev } from './configureStore.dev';
// import configureStoreProd from './configureStore.prod';
export { history } from './configureStore.dev';
const selectedConfigureStore =
    // In case a different set up is needed for prod:
    // process.env.NODE_ENV === 'production'
    //     ? configureStoreProd
    // :
    configureStoreDev;

export const configureStore = selectedConfigureStore;
