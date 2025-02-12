import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {LoginScreenProps} from 'src/navigators/AppParamList';
import {Fonts} from 'src/theme/typography';
import {isRTL, translate, TxKeyPath} from 'src/i18n';
const Login: React.FC<LoginScreenProps> = ({navigation}) => {
    const i18nText = translate('name');
    const content = i18nText;
    console.log(i18nText, 'i18nText......');
    return (
        <View>
            <Text style={styles.loginTextStyle}>Login {content}</Text>
            <Button
                onPress={() => navigation.reset({index: 0, routes: [{name: 'Tabs'}]})}
                title="Tabs"
            />
            <Button onPress={() => navigation.navigate('SignUp', {userId: 5})} title="SignUp" />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    loginTextStyle: {
        ...Fonts.bold,
    },
});
