import {colors} from '@theme/colors';
import {horizontalScale, moderateScale, verticalScale} from '@theme/metric';
import {Fonts} from '@theme/typography';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    labelStyle: {
        ...Fonts.semibold,
        color: colors.black,
        fontSize: moderateScale(14),
    },
    leftIcon: {
        height: moderateScale(24),
        width: moderateScale(24),
    },
    leftIconContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: horizontalScale(5),
    },
    rightIcon: {
        height: moderateScale(24),
        marginRight: horizontalScale(15),
        width: moderateScale(24),
    },
    textInputContainer: {
        alignItems: 'center',
        borderColor: colors.mutedGrey,
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(1),
        flexDirection: 'row',
        height: verticalScale(45),
        justifyContent: 'space-between',
        marginVertical: verticalScale(2),
    },
    textInputStyle: {
        height: verticalScale(45),
        includeFontPadding: false,
        margin: moderateScale(12),
        // backgroundColor: 'red',
        width: '82%',
    },
    withLabelContainer: {
        marginTop: verticalScale(15),
    },
});
