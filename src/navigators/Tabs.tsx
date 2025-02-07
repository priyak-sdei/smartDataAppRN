import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import Home from 'src/screens/tabs/home/Home';
import Profile from 'src/screens/tabs/profile/Profile';

const Tabs = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default Tabs;

const styles = StyleSheet.create({});
