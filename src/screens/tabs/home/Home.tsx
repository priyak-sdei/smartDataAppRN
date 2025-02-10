import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {load} from 'src/utils/storage';

const Home = () => {
    const data = load('userData');
    console.log('data', data);

    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
