import {horizontalScale, moderateScale, verticalScale} from '@theme/metric';
import {Fonts} from '@theme/typography';
import {StyleSheet} from 'react-native';
import {ExtendedTheme} from 'src/types/ColorPalette';

export const createStyles = (colors: ExtendedTheme['colors']) =>
    StyleSheet.create({
        drawerContainer: {
            alignItems: 'center',
            flexDirection: 'row',
        },
        headerContainer: {
            alignItems: 'center',
            borderBottomWidth: moderateScale(1),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: horizontalScale(20),
            paddingVertical: verticalScale(15),
            width: '100%',
        },

        imageContainer: {
            padding: moderateScale(5),
            position: 'absolute',
            zIndex: 1,
        },
        imageStyle: {
            height: moderateScale(30),
            width: moderateScale(30),
        },
        rightIconContainer: {
            alignItems: 'flex-end',
            flex: 1,
        },
        rightIconStyle: {
            borderRadius: moderateScale(50),
            height: moderateScale(35),
            width: moderateScale(35),
        },
        screenText: {
            ...Fonts.medium,
            includeFontPadding: false,
            textAlign: 'center',
            textAlignVertical: 'center',
        },
        titleContainer: {
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
        },
    });
