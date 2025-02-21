import {IMAGES} from '@assets/images';
import {useStyles} from '@hooks/useStyles';
import {horizontalScale, verticalScale} from '@theme/metric';
import React from 'react';
import {
    Image,
    ImageResizeMode,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
    TextStyle,
    TouchableOpacity,
    View,
} from 'react-native';
import {Text} from '../text';
import {createStyles} from './styles';

interface CustomHeader {
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
    sourceRightIcon?: ImageSourcePropType;
    imageIcon?: React.ReactElement;
    text?: React.ReactElement;
    backIcon?: boolean;
    rightView?: React.ReactElement;
    onPressRightIcon?: () => void;
    resizeMode?: ImageResizeMode;
    rightDisabled?: boolean;
    leftIconStyle?: StyleProp<ImageStyle>;
}

export const Header: React.FC<CustomHeader> = ({
    title,
    onPress,
    titleStyle,
    imageIcon,
    sourceRightIcon,
    text,
    backIcon = true,
    onPressRightIcon,
    rightDisabled = false,
    rightView,
    resizeMode = 'contain',
    leftIconStyle,
}) => {
    const styles = useStyles(createStyles);
    return (
        <View style={styles.headerContainer}>
            <View style={styles.drawerContainer}>
                {/* {text} */}
                {backIcon && (
                    <TouchableOpacity
                        hitSlop={{
                            top: verticalScale(10),
                            right: horizontalScale(10),
                            bottom: verticalScale(12),
                            left: horizontalScale(5),
                        }}
                        onPress={onPress}
                        style={styles.imageContainer}>
                        <Image
                            source={IMAGES.common.arrowLeft}
                            style={[styles.imageStyle, leftIconStyle]}
                        />
                    </TouchableOpacity>
                )}
                <View style={styles.titleContainer}>
                    <Text tx={title} style={[styles.screenText, titleStyle]} />
                    {/* <Label  style={[styles.screenText, titleStyle]}>
            {title}
          </Label> */}
                    {imageIcon}
                </View>
            </View>
            {sourceRightIcon && (
                <TouchableOpacity style={styles.rightIconContainer} onPress={onPressRightIcon}>
                    <Image
                        source={sourceRightIcon}
                        style={styles.rightIconStyle}
                        resizeMode={resizeMode}
                    />
                </TouchableOpacity>
            )}
            {rightView && (
                <TouchableOpacity
                    disabled={rightDisabled}
                    style={styles.rightIconContainer}
                    onPress={onPressRightIcon}>
                    {rightView}
                </TouchableOpacity>
            )}
        </View>
    );
};
