import React from 'react';
import {Text, View} from 'react-native';
import {AuthScreenProps} from 'src/navigators/AppParamList';

const SignUp: React.FC<AuthScreenProps<'SignUp'>> = ({route}) => {
    return (
        <View>
            <Text>SignUp</Text>
        </View>
    );
};

export default SignUp;
