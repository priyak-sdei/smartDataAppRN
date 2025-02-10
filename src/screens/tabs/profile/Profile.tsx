import {useAppSelector} from '@redux/store';
import React from 'react';
import {Text, View} from 'react-native';
import {storage} from 'src/utils/storage';

const Profile = () => {
    const data = useAppSelector(state => state?.counter);
    console.log('data in signnup', data, storage.getString('userData'));

    return (
        <View>
            <Text>Profile</Text>
        </View>
    );
};

export default Profile;
