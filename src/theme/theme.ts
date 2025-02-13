import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {colors as customColor} from './colors';

export const theme = {
    light: {
        ...DefaultTheme,

        colors: {
            ...DefaultTheme.colors,
            ...customColor,
            primary: '#B0BEC5',
            secondary: '#29434E',
            error: '#D32F2F',
            text: '#212121',
            border: '#212121',
            activeTab: '#1976D2',
            inactiveTab: '#757575',
        },
    },
    dark: {
        ...DarkTheme,
        colors: {
            ...customColor,
            ...DarkTheme.colors,
            expenseBackground: 'yellow',
            primary: 'red',
            secondary: '#29434E',
            error: '#D32F2F',
            text: '#FFFFFF',
            border: '#FFFFFF',
            activeTab: '#4FC3F7',
            inactiveTab: '#FFFFFF',
        },
    },
};
