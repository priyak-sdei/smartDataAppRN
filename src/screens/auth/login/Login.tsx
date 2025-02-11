import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {pick, types} from 'react-native-document-picker';
import {LoginScreenProps} from 'src/navigators/AppParamList';
import {fetchImage, socketInit} from 'src/utils/Socket';

const BASE_URL = 'https://sdeiaiml.com:7004/';

const Login: React.FC<LoginScreenProps> = ({navigation}) => {
    const [imageArray, setImageArray] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        socketInit();

        // Fetch images and update state
        fetchImage((path: string) => {
            console.log('Image path received:', path);
            setImageArray(prevImages => [...prevImages, `${BASE_URL}${path}`]);
        });
    }, []);

    const uploadMp4Video = async () => {
        try {
            // Pick a video file
            const result = await pick({
                type: [types.video], // Allows video selection
            });

            const selectedVideo = result[0];
            console.log('selectedVideo', selectedVideo);
            if (selectedVideo.type !== 'video/mp4') {
                Alert.alert('Error', 'Only MP4 files are allowed.');
                return;
            }

            // Create FormData
            const formData = new FormData();
            formData.append('uploaded_file', {
                uri: selectedVideo?.uri,
                name: selectedVideo?.name || 'video.mp4',
                type: selectedVideo?.type,
            });

            // Upload file
            setIsLoading(true);
            const response = await axios.post(
                'https://sdeiaiml.com:7004/detect/fall/15',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );

            console.log('Upload Success:', response.data);
            if (response?.data) {
                setIsLoading(false);
            }
            // Alert.alert('Success', 'Video uploaded successfully!');
        } catch (error) {
            setIsLoading(false);
            console.log('Upload Error:', error);
        }
    };

    return (
        <View style={styles.mainContainer}>
            {/* <Button
                onPress={() => navigation.reset({index: 0, routes: [{name: 'Tabs'}]})}
                title="Tabs"
            />
            <Button onPress={() => navigation.navigate('SignUp', {userId: 5})} title="SignUp" /> */}
            <TouchableOpacity onPress={uploadMp4Video} style={styles.uploadButtonContainer}>
                {isLoading ? (
                    <ActivityIndicator color={'white'} />
                ) : (
                    <Text style={styles.uploadTextStyle}>Upload File</Text>
                )}
            </TouchableOpacity>
            <Text style={styles.frameTextStyle}>Frames</Text>
            <FlatList
                numColumns={3}
                contentContainerStyle={styles.listContainerStyle}
                data={imageArray}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Image source={{uri: item}} style={styles.imageStyle} />}
            />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        flex: 1,
        marginTop: 30,
    },
    uploadButtonContainer: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    uploadTextStyle: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
    },
    frameTextStyle: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 500,
    },
    imageStyle: {
        width: 100,
        height: 100,
        margin: 10,
    },
    listContainerStyle: {
        marginTop: 20,
    },
});
