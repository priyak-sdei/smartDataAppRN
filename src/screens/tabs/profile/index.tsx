import {Screen} from '@components/index';
import {useAppSelector} from '@redux/store';
import React from 'react';
import {Text, View} from 'react-native';

const Profile = () => {
    const data = useAppSelector(state => state?.counter);

    return (
        <Screen preset="auto" safeAreaEdges={['top', 'bottom']}>
            <View>
                <Text>Profile</Text>
            </View>
        </Screen>
    );
};

export default Profile;
