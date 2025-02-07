/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './navigators/AppNavigator';
import {StyleSheet} from 'react-native';
import {KeyboardProvider} from 'react-native-keyboard-controller';
function App(): React.JSX.Element {
    return (
        <KeyboardProvider>
            <AppNavigator />
        </KeyboardProvider>
    );
}

const styles = StyleSheet.create({});

export default App;
