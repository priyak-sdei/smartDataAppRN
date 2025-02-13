import {StyleSheet} from 'react-native';
import {Fonts} from 'src/theme/typography';
import {ExtendedTheme} from 'src/types/ColorPalette';

export const createStyles = (colors: ExtendedTheme['colors']) =>
    StyleSheet.create({
        container: {
            backgroundColor: colors.expenseBackground,
        },
        heading: {
            backgroundColor: colors.primary,
            padding: 10,
            ...Fonts.bold,
        },
    });
