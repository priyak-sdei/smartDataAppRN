import {colors} from '@theme/colors';
import {verticalScale} from '@theme/metric';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomSheetComponent, useBottomSheet} from '.';

const Example = () => {
    const {ref: helloSheetRef, open: openSheet, close: closeSheet} = useBottomSheet();

    const handleClose = () => {
        closeSheet();
    };

    return (
        <BottomSheetComponent backgroundStyle={styles.bottomSheet} ref={helloSheetRef}>
            <View style={styles.sheetContent}>
                <Text style={styles.sheetTitle}>Action Sheet</Text>
                <View>
                    <Text style={styles.sheetItem}>Option 1</Text>
                    <Text style={styles.sheetItem}>Option 2</Text>
                    <Text style={styles.sheetItem}>Option 3</Text>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </BottomSheetComponent>
    );
};

const styles = StyleSheet.create({
    bottomSheet: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 3,
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    closeButton: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 8,
        marginTop: 10,
        padding: 12,
    },
    closeButtonText: {
        color: colors.white,
        fontSize: 16,
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
        marginBottom: verticalScale(16),
    },
});
