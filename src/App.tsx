/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {persistor, store} from '@redux/store';
import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {initialWindowMetrics, SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import './devtools/ReactotronConfig';
import {initI18n} from './i18n';
import AppNavigator from './navigators/AppNavigator';

import {StyleSheet} from 'react-native';
function App(): React.JSX.Element {
    useEffect(() => {
        initI18n().then(() => {});
    }, []);

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <KeyboardProvider>
                        <GestureHandlerRootView style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
