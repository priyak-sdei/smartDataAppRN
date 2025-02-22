import {IMAGES} from '@assets/images';
import CustomButton from '@components/common/button';
import CustomTextInput from '@components/common/textInput';
import {Header, Screen, Text} from '@components/index';
import useAppleSignIn from '@hooks/useAppleSignIn';
import useGoogleSignIn from '@hooks/useGoogleSignIn';
import {colors} from '@theme/colors';

import React, {useState} from 'react';
import {View} from 'react-native';
import Config from 'react-native-config';
import {useStyles} from 'src/hooks/useStyles';
import {LoginScreenProps} from 'src/navigators/AppParamList';
import {createStyles} from './styles';
const Login: React.FC<LoginScreenProps> = ({navigation}) => {
    const styles = useStyles(createStyles);

    const {handleGoogleSignIn} = useGoogleSignIn();
    const {handleAppleSignIn} = useAppleSignIn();

    const [secureText, setSecureText] = useState(false);

    return (
        <Screen preset="auto" safeAreaEdges={['top', 'bottom']}>
            <Header headerTitle={'screen.login'} showBack={false} />
            <View style={styles.mainContainer}>
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
                    withLabelContainerStyle={styles.passwordContainerStyle}
                    sourceRightIcon={secureText ? IMAGES.auth.eye : IMAGES.auth.eyeSlash}
                    onRightIconPress={() => setSecureText(!secureText)}
                />
                <CustomButton
                    buttonTitle="Login"
                    buttonStyle={styles.loginButtonStyle}
                    textStyle={styles.loginTextStyle}
                    onPress={() => navigation.reset({index: 0, routes: [{name: 'Tabs'}]})}
                />
                <Text text="Forgot Password?" style={styles.forgotPasswordStyle} />
                <Text>
                    {Config.ENV}
                    {Config.URL}
                </Text>
                <View style={styles.loginWithContainer}>
                    <View style={styles.lineStyle} />
                    <Text text="or log in with" style={styles.loginWithText} />
                    <View style={styles.lineStyle} />
                </View>
                <View style={styles.socialButtonContainer}>
                    <CustomButton
                        imageOnlyButton
                        onPress={() => handleGoogleSignIn()}
                        singleImageSource={IMAGES.auth.googleLogo}
                        buttonStyle={styles.customButtonStyle}
                    />
                    <CustomButton
                        imageOnlyButton
                        onPress={() => handleAppleSignIn()}
                        singleImageSource={IMAGES.auth.appleLogo}
                        buttonStyle={styles.customButtonStyle}
                    />
                </View>
                <Text style={styles.accountText}>
                    Dont have an account?{'  '}
                    <Text
                        tx="Sign Up"
                        style={styles.signUpText}
                        onPress={() => navigation.navigate('SignUp', {userId: 5})}
                    />
                </Text>
            </View>
        </Screen>
    );
};

export default Login;
