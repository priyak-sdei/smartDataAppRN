import {IMAGES} from '@assets/images';
import CustomButton from '@components/common/button';
import CustomTextInput from '@components/common/textInput';
import useAppleSignIn from '@hooks/useAppleSignIn';
import useGoogleSignIn from '@hooks/useGoogleSignIn';
import {colors} from '@theme/colors';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Screen, Text} from 'src/components';
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
                />
                <Text text="Forgot Password?" style={styles.forgotPasswordStyle} />
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
            </View>
        </Screen>
    );
};

export default Login;
