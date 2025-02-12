/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './devtools/ReactotronConfig';
import React, {useEffect} from 'react';
import {initI18n} from './i18n';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import AppNavigator from './navigators/AppNavigator';
import {Provider} from 'react-redux';
import {persistor, store} from '@redux/store';
import {PersistGate} from 'redux-persist/integration/react';
function App(): React.JSX.Element {
    useEffect(() => {
        initI18n().then(() => console.log('translaion init'));
    }, []);

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
