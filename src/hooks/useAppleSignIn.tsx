import appleAuth, {appleAuthAndroid} from '@invertase/react-native-apple-authentication';
import {Platform} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

const useAppleSignIn = () => {
    const handleAppleSignIn = async () => {
        if (Platform.OS === 'android') {
            try {
                if (appleAuthAndroid.isSupported) {
                    // Generate secure, random values for state and nonce
                    const rawNonce = uuid();
                    const state = uuid();

                    // Configure the request
                    appleAuthAndroid.configure({
                        // The Service ID you registered with Apple
                        clientId: 'org.native.example.BaseProject.auth',

                        // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
                        // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
                        redirectUri: 'https://rnbaseproject-ef8d3.firebaseapp.com/__/auth/handler',

                        // The type of response requested - code, id_token, or both.
                        responseType: appleAuthAndroid.ResponseType.ALL,

                        // The amount of user information requested from Apple.
                        scope: appleAuthAndroid.Scope.ALL,

                        // Random nonce value that will be SHA256 hashed before sending to Apple.
                        nonce: rawNonce,

                        // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
                        state,
                    });

                    // Open the browser window for user sign in
                    const response = await appleAuthAndroid.signIn();
                } else {
                    console.error('apple auth not supported!!');
                }
            } catch (error) {
                console.error('error', error);
            }
        } else if (Platform.OS === 'ios') {
            try {
                const appleAuthRequestResponse = await appleAuth.performRequest({
                    requestedOperation: appleAuth.Operation.LOGIN,
                    // Note: it appears putting FULL_NAME first is important, see issue #293
                    requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
                });

                // console.('appleAuthRequestResponse-------', appleAuthRequestResponse);

                // get current authentication state for user
                // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
                const credentialState = await appleAuth.getCredentialStateForUser(
                    appleAuthRequestResponse.user,
                );

                // use credentialState response to ensure the user is authenticated
                if (credentialState === appleAuth.State.AUTHORIZED) {
                    // user is authenticated
                }
            } catch (error) {
                console.error('error in apple signin', error);
            }
        }
    };

    return {handleAppleSignIn};
};

export default useAppleSignIn;
