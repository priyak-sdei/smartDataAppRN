import React from 'react';
import {Button, Text, View} from 'react-native';
import {AuthScreenProps} from 'src/navigators/AppParamList';
import {navigate, resetRoot} from 'src/navigators/navigationUtilities';

const SignUp: React.FC<AuthScreenProps<'SignUp'>> = props => {
    console.log(props, 'props.....');
    return (
        <View>
            <Text>SignUp</Text>
            <Button
                onPress={
                    () => {
                        resetRoot({
                            index: 0,
                            routes: [{name: 'Tabs', params: {screen: 'Profile'}}],
                        });
                    }

                    //props.navigation.reset({index: 0, routes: [{name: 'Tabs'}]})
                }
                title="Sign Up page"
            />
        </View>
    );
};

export default SignUp;
