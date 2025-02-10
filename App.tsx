import React from 'react';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@redux/store';
import AppNavigator from 'src/navigators/AppNavigator';

function App(): React.JSX.Element {
    return (
        // <KeyboardProvider>
        // <Provider store={store}>
        // <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
        // </PersistGate>
        // </Provider>
        // </KeyboardProvider>
    );
}

export default App;
