import Header from '@components/common/header';
import {Screen} from '@components/index';
import React from 'react';
import {Text, View} from 'react-native';
import {load} from 'src/utils/storage';

const Home = () => {
    const data = load('userData');

    return (
        <Screen preset="auto" safeAreaEdges={['top', 'bottom']}>
            <View>
                <Header title="Home" />
                <Text>Home</Text>
            </View>
        </Screen>
    );
};

export default Home;
