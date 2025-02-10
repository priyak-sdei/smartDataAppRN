/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import AppNavigator from './navigators/AppNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@redux/store';

function App(): React.JSX.Element {
    return (
        // <KeyboardProvider>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator />
            </PersistGate>
        </Provider>
        // </KeyboardProvider>
    );
}

export default App;
