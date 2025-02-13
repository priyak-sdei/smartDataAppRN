import React from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomSheetComponent, useBottomSheet} from 'src/components/common/actionSheet/ActionSheet';
import {LoginScreenProps} from 'src/navigators/AppParamList';
import {Fonts} from 'src/theme/typography';
import {Text} from 'src/components';
import {createStyles} from './Login.styles';
import {useStyles} from 'src/hooks/useStyles';
const Login: React.FC<LoginScreenProps> = ({navigation}) => {
    // console.log(themeMode, 'themeMode...');
    const styles = useStyles(createStyles);
    const {ref: helloSheetRef, open: openSheet, close: closeSheet} = useBottomSheet();

    const handleClose = () => {
        closeSheet();
    };

    return (
        <View>
            <View style={styles.text}>
                <Button
                    onPress={() => navigation.reset({index: 0, routes: [{name: 'Tabs'}]})}
                    title="Tabs"
                />
            </View>

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
