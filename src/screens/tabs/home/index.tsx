import React from 'react';
import {Text, View} from 'react-native';
import {load} from 'src/utils/storage';

const Home = () => {
    const data = load('userData');

    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default Home;
