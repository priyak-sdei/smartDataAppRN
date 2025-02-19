import {colors} from '@theme/colors';
import React from 'react';
import {
    Image,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
    TextInput,
    TextInputProps,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import {Text} from '../text';
import {styles} from './styles';

type CustomTextInputProps = TextInputProps & {
    withLabel?: boolean;
    textInputContainer?: StyleProp<ViewStyle>;
    labelTitle?: string;
    labelStyle?: StyleProp<TextStyle>;
    withLabelContainerStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    sourceLeftIcon?: ImageSourcePropType;
    leftIconDisabled?: boolean;
    onLeftIconPress?: () => void;
    leftIconStyle?: StyleProp<ImageStyle>;
    sourceRightIcon?: ImageSourcePropType;
    rightIconDisabled?: boolean;
    onRightIconPress?: () => void;
    rightIconStyle?: StyleProp<ImageStyle>;
};

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    withLabel = true,
    textInputContainer,
    labelTitle,
    labelStyle,
    withLabelContainerStyle,
    textInputStyle,
    sourceLeftIcon,
    leftIconDisabled = true,
    onLeftIconPress,
    leftIconStyle,
    sourceRightIcon,
    rightIconDisabled = false,
    onRightIconPress,
    rightIconStyle,
    ...textInputProps
}) => {
    return (
        <View style={[styles.withLabelContainer, withLabelContainerStyle]}>
            <Text text={labelTitle} style={[styles.labelStyle, labelStyle]} />
            <View style={[styles.textInputContainer, textInputContainer]}>
                {sourceLeftIcon && (
                    <TouchableOpacity
                        disabled={leftIconDisabled}
                        style={styles.leftIconContainer}
                        onPress={onLeftIconPress}>
                        <Image
                            source={sourceLeftIcon}
                            style={[styles.leftIcon, leftIconStyle]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
                <TextInput
                    {...textInputProps}
                    style={[styles.textInputStyle, textInputStyle]}
                    cursorColor={colors.black}
                />
                {sourceRightIcon && (
                    <TouchableOpacity disabled={rightIconDisabled} onPress={onRightIconPress}>
                        <Image
                            source={sourceRightIcon}
                            style={[styles.rightIcon, rightIconStyle]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default CustomTextInput;
