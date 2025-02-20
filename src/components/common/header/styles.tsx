import {horizontalScale, moderateScale, verticalScale} from '@theme/metric';
import {Fonts} from '@theme/typography';
import {StyleSheet} from 'react-native';
import {ExtendedTheme} from 'src/types/ColorPalette';

export const createStyles = (colors: ExtendedTheme['colors']) =>
    StyleSheet.create({
        headerContainer: {
            width: '100%',
            paddingVertical: verticalScale(15),
            paddingHorizontal: horizontalScale(20),
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: moderateScale(1),
            // borderColor: Colors.borderColorHeader,
            alignItems: 'center',
        },
        drawerContainer: {
            alignItems: 'center',
            flexDirection: 'row',
        },

        imageContainer: {
            position: 'absolute',
            zIndex: 1,
            padding: moderateScale(5),
        },
        imageStyle: {
            width: moderateScale(30),
            height: moderateScale(30),
        },
        screenText: {
            ...Fonts.medium,
            // color: Colors.primaryText,
            textAlign: 'center',
            includeFontPadding: false,
            textAlignVertical: 'center',
        },
        titleContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        rightIconStyle: {
            height: moderateScale(35),
            width: moderateScale(35),
            borderRadius: moderateScale(50),
        },
        rightIconContainer: {
            flex: 1,
            alignItems: 'flex-end',
        },
    });
