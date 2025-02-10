import {storage} from '@redux/mmkv/MMKVStorage';
import {increment} from '@redux/slices/counterSlice';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {LoginScreenProps} from 'src/navigators/AppParamList';

const Login: React.FC<LoginScreenProps> = ({navigation}) => {
    // const dispatch = useDispatch();

    const handleTabPress = () => {
        navigation.reset({index: 0, routes: [{name: 'Tabs'}]});
        // dispatch(increment());
    };

    return (
        <View>
            <Text>Login</Text>
            <Button onPress={handleTabPress} title="Tabs" />
            <Button onPress={() => navigation.navigate('SignUp', {userId: 5})} title="SignUp" />
        </View>
    );
};

export default Login;
