import * as React from 'react';
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';
import {RootStackParamList} from './AppParamList';
import {navigationRef} from './navigationUtilities';
import DarkTheme from 'src/theme/DarkTheme';
import DefaultTheme from 'src/theme/DefaultTheme';
import {useState} from 'react';
export default function AppNavigator() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
                <Stack.Screen name="Tabs" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
