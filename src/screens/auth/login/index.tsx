import {IMAGES} from '@assets/images';
import CustomButton from '@components/common/button';
import CustomTextInput from '@components/common/textInput';
import {Header, Screen, Text} from '@components/index';
import useAppleSignIn from '@hooks/useAppleSignIn';
import useGoogleSignIn from '@hooks/useGoogleSignIn';
import {colors} from '@theme/colors';
import React, {useState} from 'react';
import {Alert, NativeModules, PermissionsAndroid, View} from 'react-native';
import RNFS from 'react-native-fs';
import {useStyles} from 'src/hooks/useStyles';
import {LoginScreenProps} from 'src/navigators/AppParamList';
import {createStyles} from './styles';
const {FileProviderModule} = NativeModules;
const Login: React.FC<LoginScreenProps> = ({navigation}) => {
    console.log(NativeModules, 'hii', FileProviderModule);
    const styles = useStyles(createStyles);
    const {handleGoogleSignIn} = useGoogleSignIn();
    const {handleAppleSignIn} = useAppleSignIn();

    const [secureText, setSecureText] = useState(false);

    const updateAndInstallApp = async () => {
        // console.log('NMewwww', `${RNFS.DownloadDirectoryPath}/latest.apk`);
        // await FileProviderModule.installAPK(`${RNFS.DownloadDirectoryPath}/latest.apk`);

        // return;
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            try {
                const path = `${RNFS.DownloadDirectoryPath}/latest.apk`;
                console.log('Downloading APK to:', path);

                const download = await RNFS.downloadFile({
                    fromUrl:
                        'https://github.com/priyak-sdei/smartDataAppRN/releases/download/Release/app-dev-release.apk',
                    toFile: path,
                    progress: res => {
                        console.log(
                            `Download Progress: ${((res.bytesWritten / res.contentLength) * 100).toFixed(2)}%`,
                        );
                    },
                }).promise;

                if (download.statusCode === 200) {
                    console.log('Download complete, installing APK...', path);
                    try {
                        console.log('Installing APK from:', path);
                        await FileProviderModule.installAPK(path);
                        console.log('APK Install Prompt Opened');
                    } catch (error) {
                        console.error('Installation error:', error);
                        Alert.alert('Installation Failed', 'Could not install the update.');
                    }
                } else {
                    Alert.alert('Download Failed', 'Failed to download the update.');
                }
            } catch (error) {
                console.error('Download error:', error);
                Alert.alert('Error', 'Failed to download APK.');
            }
        } else {
            Alert.alert('Permission Required', 'Storage permission is needed to update the app.');
        }
    };

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
                    onPress={() => {
                        updateAndInstallApp();
                        // navigation.reset({index: 0, routes: [{name: 'Tabs'}]});
                    }}
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
