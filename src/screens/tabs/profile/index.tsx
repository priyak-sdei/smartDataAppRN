import {useAppSelector} from '@redux/store';
import React from 'react';
import {Text, View} from 'react-native';

const Profile = () => {
    const data = useAppSelector(state => state?.counter);

    return (
        <View>
            <Text>Profile</Text>
        </View>
    );
};

export default Profile;
