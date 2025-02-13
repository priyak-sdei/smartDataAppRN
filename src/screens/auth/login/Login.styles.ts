import {StyleSheet} from 'react-native';
import {Fonts} from 'src/theme/typography';

export const createStyles = colors =>
    StyleSheet.create({
        bottomSheet: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
        },
        closeButton: {
            padding: 12,
            marginTop: 10,
            backgroundColor: 'tomato',
            borderRadius: 8,
            alignItems: 'center',
        },
        closeButtonText: {
            color: 'white',
            fontSize: 16,
        },
        loginTextStyle: {
            ...Fonts.bold,
        },

        sheetContent: {
            justifyContent: 'space-between',
            padding: 20,
        },
        sheetItem: {
            fontSize: 18,
            marginVertical: 8,
        },
        sheetTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 16,
        },

        text: {
            backgroundColor: colors.primary,
            padding: 10,
        },
    });
