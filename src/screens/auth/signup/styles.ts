import {horizontalScale, moderateScale, verticalScale} from '@theme/metric';
import {StyleSheet} from 'react-native';
import {Fonts} from 'src/theme/typography';
import {ExtendedTheme} from 'src/types/ColorPalette';

export const createStyles = (colors: ExtendedTheme['colors']) =>
    StyleSheet.create({
        accountText: {
            ...Fonts.regular,
            fontSize: moderateScale(15),
            marginTop: verticalScale(15),
        },
        container: {
            backgroundColor: colors.card,
            flex: 1,
            paddingHorizontal: horizontalScale(25),
        },
        heading: {
            backgroundColor: colors.primary,
            padding: 10,
            ...Fonts.bold,
        },
        loginButtonStyle: {
            // backgroundColor:colors.
            borderRadius: moderateScale(25),
            marginTop: verticalScale(20),
            // paddingVertical: verticalScale(10),
        },
        loginTextStyle: {
            ...Fonts.semibold,
            fontSize: moderateScale(16),
        },
        passwordContainerStyle: {
            marginBottom: verticalScale(10),
        },
        signUpText: {
            color: colors.primary,
            ...Fonts.semibold,
            fontSize: moderateScale(15),
            textDecorationLine: 'underline',
        },
    });
