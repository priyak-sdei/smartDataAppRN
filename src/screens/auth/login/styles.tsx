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
        customButtonStyle: {
            backgroundColor: colors.primary,
        },
        forgotPasswordStyle: {
            ...Fonts.medium,
            color: colors.darkGrey,
            textAlign: 'right',
            textDecorationLine: 'underline',
        },
        lineStyle: {
            backgroundColor: colors.mutedGrey,
            height: 1.2,
            width: horizontalScale(100),
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
        loginWithContainer: {
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            marginVertical: verticalScale(15),
        },
        loginWithText: {
            ...Fonts.semibold,
            alignSelf: 'center',
            color: colors.mutedGrey,
            paddingHorizontal: horizontalScale(12),
        },
        mainContainer: {
            backgroundColor: colors.card,
            flex: 1,
            paddingHorizontal: horizontalScale(25),
        },
        passwordContainerStyle: {
            marginBottom: verticalScale(10),
        },
        signUpText: {
            color: colors.primary,
            ...Fonts.medium,
            textDecorationLine: 'underline',
        },
        socialButtonContainer: {
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
        },
    });
