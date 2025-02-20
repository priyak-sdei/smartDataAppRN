import {colors} from '@theme/colors';
import {moderateScale, verticalScale} from '@theme/metric';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: verticalScale(10),
        padding: moderateScale(10),
    },
    imageWithTextContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    singleImageStyle: {
        height: moderateScale(40),
        width: moderateScale(40),
    },
    textStyle: {
        color: colors.card,
        includeFontPadding: false,
    },
});
