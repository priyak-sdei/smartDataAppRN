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
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {initialWindowMetrics, SafeAreaProvider} from 'react-native-safe-area-context';
function App(): React.JSX.Element {
    useEffect(() => {
        initI18n().then(() => {});
    }, []);

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <KeyboardProvider>
                        <GestureHandlerRootView style={{flex: 1}}>
                            <BottomSheetModalProvider>
                                <AppNavigator />
                            </BottomSheetModalProvider>
                        </GestureHandlerRootView>
                    </KeyboardProvider>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
}

export default App;
