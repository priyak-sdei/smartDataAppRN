import {IMAGES} from '@assets/images';
import {useStyles} from '@hooks/useStyles';
import {goBack} from '@navigators/navigationUtilities';
import React from 'react';
import {
    Image,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
    TouchableOpacity,
    View,
} from 'react-native';
import {Text} from '../text';
import {createStyles} from './styles';
interface IconButton {
    image?: ImageSourcePropType; // Image source (optional)
    onPress?: () => void;
    iconStyle?: StyleProp<ImageStyle>;
}
interface HeaderProps {
    headerTitle: string;
    titleAlign?: 'left' | 'center';
    leftIcons?: IconButton[]; // Multiple left icons (image or vector)
    rightIcons?: IconButton[]; // Multiple right icons (image or vector)
    showBack?: boolean; // Show back button
}

export const Header: React.FC<HeaderProps> = ({
    headerTitle,
    titleAlign = 'center',
    showBack = true,
    leftIcons = [],
    rightIcons = [],
}) => {
    const styles = useStyles(createStyles);
    return (
        <View style={styles.headerContainer}>
            <View style={styles.iconGroup}>
                {/* Back Button */}
                {showBack && (
                    <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
                        <Image source={IMAGES.common.arrowLeft} style={styles.imageIcon} />
                    </TouchableOpacity>
                )}
                {/* Left Icons */}
                {leftIcons.map((icon, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={icon.onPress}
                        style={styles.iconContainer}>
                        <Image source={icon.image} style={[styles.imageIcon, icon.iconStyle]} />
                    </TouchableOpacity>
                ))}
            </View>

            {/* Header Title - Flexbox keeps it centered */}
            <View style={[styles.titleContainer, titleAlign === 'left' && styles.alignLeft]}>
                <Text tx={headerTitle} style={styles.headerTitle} />
            </View>

            {/* Right Icons */}
            <View style={[styles.iconGroup, styles.leftJustify]}>
                {rightIcons.map((icon, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={icon.onPress}
                        style={styles.iconContainer}>
                        <Image source={icon.image} style={[styles.imageIcon, icon.iconStyle]} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};
