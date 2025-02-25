import {Text} from '@components/index';
import NetInfo from '@react-native-community/netinfo';
import {colors} from '@theme/colors';
import {moderateScale} from '@theme/metric';
import {SPACING} from '@theme/spacing';
import {Fonts} from '@theme/typography';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

interface NetworkContextType {
    isOffline: boolean;
}

const NetworkContext = createContext<NetworkContextType>({isOffline: false});

export const NetworkProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [isOffline, setIsOffline] = useState<boolean | null>(null); // Initially `null` to prevent online message at launch
    const [showMessage, setShowMessage] = useState(false);
    const fadeAnim = useState(new Animated.Value(0))[0];
    const [message, setMessage] = useState('');
    const [bgColor, setBgColor] = useState('red');

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            const offlineStatus = !state.isConnected;
            if (isOffline === null) {
                // First-time check, prevent showing "You are online" at launch
                setIsOffline(offlineStatus);

                return;
            }
            if (offlineStatus) {
                // Show "You are offline" (Stays visible)
                setIsOffline(true);
                setMessage('common.offline');
                setBgColor('red');
                setShowMessage(true);

                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            } else if (isOffline) {
                setIsOffline(false);
                setMessage('common.online');
                setBgColor('green');
                setShowMessage(true);

                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();

                // Hide "You are online" after 2 seconds
                setTimeout(() => {
                    Animated.timing(fadeAnim, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true,
                    }).start(() => setShowMessage(false));
                }, 2000);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [isOffline]);

    return (
        <NetworkContext.Provider value={{isOffline: isOffline ?? false}}>
            <View style={styles.flexContainer}>
                {showMessage && (
                    <Animated.View
                        style={[styles.banner, {backgroundColor: bgColor, opacity: fadeAnim}]}>
                        <Text style={styles.bannerText} tx={message} />
                    </Animated.View>
                )}
                {children}
            </View>
        </NetworkContext.Provider>
    );
};

// Custom Hook to use network context
export const useNetwork = () => useContext(NetworkContext);

const styles = StyleSheet.create({
    banner: {
        alignItems: 'center',
        left: 0,
        padding: moderateScale(2),
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1000,
    },
    bannerText: {
        color: colors.white,
        ...Fonts.medium,
        fontSize: moderateScale(SPACING.xxxs),
        textAlign: 'center',
    },
    flexContainer: {
        flex: 1,
    },
});
