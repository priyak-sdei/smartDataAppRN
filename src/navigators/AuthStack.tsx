import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './AppParamList';
import SignUp from 'src/screens/auth/signup/SignUp';
import Login from 'src/screens/auth/login/Login';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;
