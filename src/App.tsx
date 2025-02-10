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
import {persistor, store} from '@redux/store';
import {PersistGate} from 'redux-persist/integration/react';
function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <KeyboardProvider>
                    <AppNavigator />
                </KeyboardProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
