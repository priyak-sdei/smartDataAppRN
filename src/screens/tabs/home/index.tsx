import {IMAGES} from '@assets/images';
import {Header, Screen} from '@components/index';
import React from 'react';
import {Text, View} from 'react-native';
import {load} from 'src/utils/storage';

const Home = () => {
    const data = load('userData');

    return (
        <Screen preset="auto" safeAreaEdges={['top', 'bottom']}>
            <Header
                headerTitle="screen.home"
                showBack={false}
                rightIcons={[
                    {
                        image: IMAGES.home.profile,
                        onPress: () => {},
                    },
                ]}
            />
            <View>
                <Text>Home</Text>
            </View>
        </Screen>
    );
};

export default Home;
