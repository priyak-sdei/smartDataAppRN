//import {Fonts} from '@theme/typography';
import {moderateScale, SPACING, verticalScale} from '@theme/index';
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
            paddingHorizontal: moderateScale(SPACING.s), // elevation: 3, // Shadow for Android
            shadowColor: colors.black, // Shadow for iOS
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
        },
        headerTitle: {
            ...Fonts.bold,
            fontSize: moderateScale(SPACING.sm),
        },
        iconContainer: {
            left: 0,
            width: moderateScale(SPACING.xl),
        },
        iconGroup: {
            flexDirection: 'row',
            height: moderateScale(SPACING.xl),
            width: moderateScale(SPACING.l),
        },

        imageIcon: {
            height: moderateScale(SPACING.xl),
            resizeMode: 'contain',
            width: moderateScale(SPACING.xl),
        },

        leftJustify: {justifyContent: 'flex-end'},
        titleContainer: {
            alignItems: 'center',
            flex: 1,
        },
    });
