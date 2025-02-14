import {increment} from '@redux/slices/counterSlice';
import {useAppDispatch, useAppSelector} from '@redux/store';
import React from 'react';
import {Button, View} from 'react-native';
import {AuthScreenProps} from 'src/navigators/AppParamList';
import {resetRoot} from 'src/navigators/navigationUtilities';
import {save} from 'src/utils/storage';
import {useStyles} from 'src/hooks/useStyles';
import {createStyles} from './SignUp.styles';
import {Text, Screen} from 'src/components';
const SignUp: React.FC<AuthScreenProps<'SignUp'>> = props => {
    const dispatch = useAppDispatch();
    const styles = useStyles(createStyles);
    const data = useAppSelector(state => state?.counter);

    const handleSignUpPress = async () => {
        resetRoot({
            index: 0,
            routes: [{name: 'Tabs', params: {screen: 'Profile'}}],
        });
        const body = {
            token: 'adhajksdlfkgsjfagsjfksdgafklsgdfakdsgfdksdfgdfgdfgdfgdf',
        };

        save('userData', JSON.stringify(body));
        dispatch(increment());
    };

    return (
        <Screen preset="auto" safeAreaEdges={['top', 'bottom']}>
            <View style={styles.container}>
                <Text>SignUp</Text>
                <Button onPress={handleSignUpPress} title="Sign Up page" />
            </View>
        </Screen>
    );
};

export default SignUp;
