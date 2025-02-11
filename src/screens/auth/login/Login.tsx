import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {LoginScreenProps} from 'src/navigators/AppParamList';
import {Fonts} from 'src/theme/typography';

const Login: React.FC<LoginScreenProps> = ({navigation}) => {
    return (
        <View>
            <Text style={styles.loginTextStyle}>Login</Text>
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
