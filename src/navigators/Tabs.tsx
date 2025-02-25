import {IMAGES} from '@assets/images';
import {Text} from '@components/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@screens/tabs/home';
import Profile from '@screens/tabs/profile';
import {colors} from '@theme/colors';
import {horizontalScale, moderateScale, verticalScale} from '@theme/metric';
import {Fonts} from '@theme/typography';
import React from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';

const Tabs = () => {
    const Tab = createBottomTabNavigator();

    interface RoutingProps {
        key?: string;
        name?: string;
        params?: object;
    }

    const setTabIcon = (route: RoutingProps, focused: boolean) => {
        let iconName;
        let label;

        if (route.name === 'Home') {
            iconName = focused ? IMAGES?.tabs.homeIcon : IMAGES?.tabs.homeIcon;
            label = 'Home';
        } else if (route.name === 'Profile') {
            iconName = focused ? IMAGES?.tabs.calendarIcon : IMAGES?.tabs.calendarIcon;
            label = 'Profile';
        }

        return (
            <View style={styles.tabItemStyle}>
                <Image
                    resizeMode="contain"
                    source={iconName}
                    style={focused ? styles.tabIconStyle : styles.focusTabIconStyle}
                />
                <Text style={focused ? styles.focusedLabelStyle : styles.customLabelStyle}>
                    {label}
                </Text>
            </View>
        );
    };

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                animation: 'shift',
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => setTabIcon(route, focused),
                tabBarStyle: {
                    ...styles.tabBarStyle,
                    height:
                        Platform.OS === 'ios'
                            ? //   && DeviceInfo.hasNotch()
                              verticalScale(90)
                            : verticalScale(75),
                },
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default Tabs;

const styles = StyleSheet.create({
    customLabelStyle: {
        ...Fonts.regular,
        color: colors.white,
        fontSize: moderateScale(16),
        marginTop: verticalScale(5),
        width: '100%',
    },
    focusTabIconStyle: {
        height: moderateScale(30),
        width: moderateScale(30),
    },
    focusedLabelStyle: {
        ...Fonts.semibold,
        color: colors.white,
        fontSize: moderateScale(16),
        marginTop: verticalScale(5),
        width: '100%',
    },
    tabBarStyle: {
        backgroundColor: colors.primary,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        paddingHorizontal: verticalScale(5),
        paddingTop: verticalScale(5),
    },
    tabIconStyle: {
        height: moderateScale(30),
        width: moderateScale(30),
    },
    tabItemStyle: {
        alignItems: 'center',
        marginTop: verticalScale(10),
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(10),
    },
});
