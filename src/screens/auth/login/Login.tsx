import React from 'react';
import {Button, Text, View} from 'react-native';
import {LoginScreenProps} from 'src/navigators/AppParamList';

const Login: React.FC<LoginScreenProps> = ({navigation}) => {
    return (
        <View>
            <Text>Login</Text>
            <Button
                onPress={() => navigation.reset({index: 0, routes: [{name: 'Tabs'}]})}
                title="Tabs"
            />
            <Button onPress={() => navigation.navigate('SignUp', {userId: 5})} title="SignUp" />
        </View>
    );
};

export default Login;
