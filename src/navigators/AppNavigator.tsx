import {NetworkProvider} from '@provider/NetworkProvider';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useColorScheme} from 'react-native';
import {theme} from 'src/theme';
import {ThemeProvider} from 'src/theme/ThemeContext';
import AuthStackNavigator from './AuthStack';
import {navigationRef} from './navigationUtilities';
import Tabs from './Tabs';
export default function AppNavigator() {
    const scheme = useColorScheme();
    const Stack = createNativeStackNavigator();
    return (
        <NetworkProvider>
            <ThemeProvider>
                <NavigationContainer
                    ref={navigationRef}
                    theme={scheme === 'dark' ? theme.dark : theme.light}>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
                        <Stack.Screen name="Tabs" component={Tabs} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        </NetworkProvider>
    );
}
