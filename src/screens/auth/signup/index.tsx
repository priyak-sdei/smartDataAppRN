import {IMAGES} from '@assets/images';
import CustomButton from '@components/common/button';
import CustomTextInput from '@components/common/textInput';
import {increment} from '@redux/slices/counterSlice';
import {useAppDispatch, useAppSelector} from '@redux/store';
import {colors} from '@theme/colors';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Header, Screen, Text} from 'src/components';
import {useStyles} from 'src/hooks/useStyles';
import {AuthScreenProps} from 'src/navigators/AppParamList';
import {resetRoot} from 'src/navigators/navigationUtilities';
import {save} from 'src/utils/storage';
import {createStyles} from './styles';

const SignUp: React.FC<AuthScreenProps<'SignUp'>> = ({navigation}) => {
    const dispatch = useAppDispatch();
    const [secureText, setSecureText] = useState(false);
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
            <Header headerTitle="screen.sign_up"></Header>
            <View style={styles.container}>
                <CustomTextInput
                    placeholder="Name"
                    labelTitle="Name"
                    withLabel={true}
                    placeholderTextColor={colors.placeholder}
                />
                <CustomTextInput
                    placeholder="+91"
                    labelTitle="Phone Number"
                    withLabel={true}
                    placeholderTextColor={colors.placeholder}
                />
                <CustomTextInput
                    placeholder="example@example.com"
                    labelTitle="Email"
                    withLabel={true}
                    placeholderTextColor={colors.placeholder}
                />
                <CustomTextInput
                    placeholder="Password"
                    placeholderTextColor={colors.placeholder}
                    labelTitle="Password"
                    withLabel={true}
                    sourceRightIcon={secureText ? IMAGES.auth.eye : IMAGES.auth.eyeSlash}
                    onRightIconPress={() => setSecureText(!secureText)}
                />
                <CustomTextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={colors.placeholder}
                    labelTitle="Confirm Password"
                    withLabel={true}
                    withLabelContainerStyle={styles.passwordContainerStyle}
                    sourceRightIcon={secureText ? IMAGES.auth.eye : IMAGES.auth.eyeSlash}
                    onRightIconPress={() => setSecureText(!secureText)}
                />
                <CustomButton
                    buttonTitle="Sign up"
                    buttonStyle={styles.loginButtonStyle}
                    textStyle={styles.loginTextStyle}
                />
                <Text style={styles.accountText}>
                    Already have an account?{'  '}
                    <Text
                        tx="Login"
                        style={styles.signUpText}
                        onPress={() => navigation.goBack()}
                    />
                </Text>
            </View>
        </Screen>
    );
};

export default SignUp;
