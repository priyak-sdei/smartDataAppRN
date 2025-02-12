import React from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomSheetComponent, useBottomSheet} from 'src/components/common/actionSheet/ActionSheet';
import {LoginScreenProps} from 'src/navigators/AppParamList';
import {Fonts} from 'src/theme/typography';
import {Text} from 'src/components';
import {ThemedStyle} from 'src/theme';
const Login: React.FC<LoginScreenProps> = ({navigation}) => {
    const {ref: helloSheetRef, open: openSheet, close: closeSheet} = useBottomSheet();

    const handleClose = () => {
        closeSheet();
    };

    return (
        <View>
            <Button
                onPress={() => navigation.reset({index: 0, routes: [{name: 'Tabs'}]})}
                title="Tabs"
            />
            <Text style={styles.loginTextStyle} tx="common.Hi" txOptions={{name: 'Priya11'}} />

            <Button onPress={() => navigation.navigate('SignUp', {userId: 5})} title="SignUp" />
            <Button
                onPress={() => {
                    openSheet();
                }}
                title="Open Action Sheet"
            />
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
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    loginTextStyle: {
        ...Fonts.bold,
    },
    sheetContent: {
        padding: 20,
        justifyContent: 'space-between',
    },
    sheetTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    sheetItem: {
        fontSize: 18,
        marginVertical: 8,
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
});
