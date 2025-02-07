import * as React from 'react';
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';
import {RootStackParamList} from './AppParamList';
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<T extends keyof RootStackParamList>(
    name: T,
    params?: RootStackParamList[T],
) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    } else {
        console.error('navigationRef not ready');
    }
}

export default function AppNavigator() {
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
