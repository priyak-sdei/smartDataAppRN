import React from 'react';
import {
    Image,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import {Text} from '../text';
import {styles} from './styles';

type BaseButtonProps = {
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
    imageWithText?: boolean;
    imageWithTextSource?: ImageSourcePropType;
    imageWithTextSourceStyle?: StyleProp<ImageStyle>;
};

type ImageButtonProps = {
    imageOnlyButton: true;
    singleImageSource: ImageSourcePropType;
    singleImageStyle?: StyleProp<ImageStyle>;
    buttonTitle?: never;
};

type TextButtonProps = {
    imageOnlyButton?: false;
    singleImageSource?: never;
    singleImageStyle?: never;
    buttonTitle: string;
};

type ButtonProps = BaseButtonProps & (ImageButtonProps | TextButtonProps);

const CustomButton: React.FC<ButtonProps> = ({
    buttonStyle,
    textStyle,
    imageOnlyButton = false,
    singleImageStyle,
    singleImageSource,
    onPress,
    imageWithText = false,
    imageWithTextSource,
    imageWithTextSourceStyle,
    buttonTitle,
    ...props
}) => {
    return (
        <TouchableOpacity onPress={onPress} {...props} style={[styles.buttonStyle, buttonStyle]}>
            {imageOnlyButton ? (
                <Image source={singleImageSource} style={singleImageStyle} resizeMode="contain" />
            ) : (
                <View style={styles.imageWithTextContainer}>
                    {imageWithText && (
                        <Image
                            source={imageWithTextSource}
                            style={imageWithTextSourceStyle}
                            resizeMode="contain"
                        />
                    )}
                    <Text style={[styles.textStyle, textStyle]} text={buttonTitle} />
                </View>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;
