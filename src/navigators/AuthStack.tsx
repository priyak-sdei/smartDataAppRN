import React from 'react';
import Login from '../screens/auth/login/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './AppParamList';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;
