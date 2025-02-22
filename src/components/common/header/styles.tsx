//import {Fonts} from '@theme/typography';
import {moderateScale, verticalScale} from '@theme/index';
import {Fonts} from '@theme/typography';
import {StyleSheet} from 'react-native';
import {ExtendedTheme} from 'src/types/ColorPalette';

export const createStyles = (colors: ExtendedTheme['colors']) =>
    StyleSheet.create({
        alignLeft: {
            alignItems: 'flex-start',
        },
        headerContainer: {
            alignItems: 'center',
            backgroundColor: colors.white,
            borderBottomWidth: 1,
            borderColor: colors.border,
            flexDirection: 'row',
            flex: 1,
            height: verticalScale(60),
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(15), // elevation: 3, // Shadow for Android
            shadowColor: colors.black, // Shadow for iOS
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
        },
        headerTitle: {
            ...Fonts.bold,
            fontSize: moderateScale(18),
        },
        iconContainer: {
            left: 0,
            width: moderateScale(30),
        },
        iconGroup: {
            flexDirection: 'row',
            height: moderateScale(30),
            width: moderateScale(25),
        },

        imageIcon: {
            height: moderateScale(28),
            resizeMode: 'contain',
            width: moderateScale(28),
        },

        leftJustify: {justifyContent: 'flex-end'},
        titleContainer: {
            alignItems: 'center',
            flex: 1, // Ensures center alignment,
        },
    });
