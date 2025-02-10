/**
 * This file does the setup for integration with Reactotron, which is a
 * free desktop app for inspecting and debugging your React Native app.
 * @see https://github.com/infinitered/reactotron
 */

import {DevSettings, DevToolsSettingsManager, NativeModules} from 'react-native';
import {reactotronRedux} from 'reactotron-redux';
import {goBack, navigate, resetRoot} from 'src/navigators/navigationUtilities';
import {Reactotron} from './ReactotronClient';
import {ArgType} from 'reactotron-core-client';
import {ReactotronReactNative} from 'reactotron-react-native';
import {storage} from 'src/utils/storage';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import {RootStackParamList} from 'src/navigators/AppParamList';

if (__DEV__) {
    const reactotron = Reactotron.configure({
        // host: 'localhost',
        onConnect: () => {
            Reactotron.clear();
        },
        name: 'SmartDataRnApp',
    }) // Reactotron's IP (localhost for local development)
        .useReactNative() // Add React Native plugins (e.g., async storage, networking, etc.)
        .connect(); // Connect Reactotron

    reactotron.use(mmkvPlugin<ReactotronReactNative>({storage}));

    // You can also enable Reactotron with Redux support (optional)
    Reactotron.use(reactotronRedux());

    // This is optional but can be used to track Redux actions
    Reactotron.clear(); // Clear logs in the Reactotron app

    /**
     * Reactotron allows you to define custom commands that you can run
     * from Reactotron itself, and they will run in your app.
     *
     * Define them in the section below with `onCustomCommand`. Use your
     * creativity -- this is great for development to quickly and easily
     * get your app into the state you want.
     *
     * NOTE: If you edit this file while running the app, you will need to do a full refresh
     * or else your custom commands won't be registered correctly.
     */

    reactotron.onCustomCommand({
        title: 'Reload App',
        description: 'Reloads the App',
        command: 'reloadApp',
        handler: () => {
            Reactotron.log('Reloading the App');
            if (DevSettings) {
                DevSettings.reload();
            }
        },
    });

    reactotron.onCustomCommand({
        title: 'Reset Navigation State',
        description: 'Resets the navigation state',
        command: 'resetNavigation',
        handler: () => {
            Reactotron.log('resetting navigation state');
            resetRoot({index: 0, routes: [{name: 'AuthStack', params: {screen: 'SignUp'}}]});
        },
    });

    reactotron.onCustomCommand<[{name: 'route'; type: ArgType.String}]>({
        command: 'navigateTo',
        handler: args => {
            const {route} = args ?? {};
            if (route) {
                Reactotron.log(`Navigating to: ${route}`);
                navigate(route as keyof RootStackParamList); // this should be tied to the navigator, but since this is for debugging, we can navigate to illegal routes
            } else {
                Reactotron.log('Could not navigate. No route provided.');
            }
        },
        title: 'Navigate To Screen',
        description: 'Navigates to a screen by name.',
        args: [{name: 'route', type: ArgType.String}],
    });

    reactotron.onCustomCommand({
        title: 'Go Back',
        description: 'Goes back',
        command: 'goBack',
        handler: () => {
            Reactotron.log('Going back');
            goBack();
        },
    });
}
