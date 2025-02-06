import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function AppNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
