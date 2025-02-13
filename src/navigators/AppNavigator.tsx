import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';
import {ThemeProvider} from 'src/theme/ThemeContext';
import {navigationRef} from './navigationUtilities';
import {theme} from 'src/theme';
import {useColorScheme} from 'react-native';
export default function AppNavigator() {
    const scheme = useColorScheme();
    const Stack = createNativeStackNavigator();
    return (
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
    );
}
