import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@screens/tabs/home';
import Profile from '@screens/tabs/profile';
import React from 'react';
import {StyleSheet} from 'react-native';

const Tabs = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default Tabs;

const styles = StyleSheet.create({});
