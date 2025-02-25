import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {ExtendedTheme} from 'src/types/ColorPalette';

// Generic type to define a style function
type StyleFunction<T> = (colors: ExtendedTheme['colors']) => T;

export const useStyles = <T extends StyleSheet.NamedStyles<T>>(stylesFunc: StyleFunction<T>): T => {
    const {colors} = useTheme() as unknown as ExtendedTheme;
    return StyleSheet.create(stylesFunc(colors));
};
