/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */

import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';

export const NAVIGATION = {} as const;

export type AuthStackParamList = {
    Login: object | undefined;
    SignUp: {userId: number};
};

export type RootStackParamList = {
    AuthStack: undefined;
    Tabs: undefined;
    // Add other screens as needed
};

export type AuthScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<
    AuthStackParamList,
    T
>;

export type RootScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    T
>;

export type LoginScreenProps = {
    navigation: NativeStackNavigationProp<AuthStackParamList, 'Login'> &
        NativeStackNavigationProp<RootStackParamList>;
};
