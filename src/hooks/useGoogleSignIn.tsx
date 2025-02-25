import {GOOGLE_IOS_CLIENT, GOOGLE_WEB_CLIENT, GOOGLE_WEB_CLIENT_RELEASE} from '@env';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const useGoogleSignIn = () => {
    const handleGoogleSignIn = async () => {
        try {
            GoogleSignin.configure({
                webClientId: __DEV__ ? GOOGLE_WEB_CLIENT : GOOGLE_WEB_CLIENT_RELEASE,
                iosClientId: GOOGLE_IOS_CLIENT,
            });

            const hasPlayServices = await GoogleSignin.hasPlayServices();
            if (!hasPlayServices) {
                console.error('Google Play services are not available.');
                return;
            }

            const userInfo = await GoogleSignin.signIn();

            if (userInfo.type === 'cancelled') {
                console.error('Sign-in was cancelled. Please try again.');
                return;
            }

            if (!userInfo) {
                console.error('Sign-in was cancelled. Please try again.');
                return;
            }
        } catch (error) {
            console.error('Error during Google sign-in:', error);
        }
    };

    return {
        handleGoogleSignIn,
    };
};

export default useGoogleSignIn;
