import {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetModal,
    BottomSheetView as GBottomSheetView,
} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {colors} from '@theme/colors';
import React from 'react';
import {Keyboard, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useSafeInsets = () => {
    return useSafeAreaInsets();
};

type BottomSheetContentRef = React.ElementRef<typeof BottomSheetModal>;

export function useBottomSheet() {
    const ref = React.useRef<BottomSheetModalMethods>(null);

    const open = React.useCallback(() => {
        ref.current?.present(); // Ensure `.present()` is available
    }, []);

    const close = React.useCallback(() => {
        ref.current?.dismiss();
    }, []);

    return {ref, open, close};
}

type BottomSheetRef = React.ElementRef<typeof View>;
type BottomSheetProps = React.ComponentPropsWithoutRef<typeof View>;

const BOTTOM_SHEET_HEADER_HEIGHT = 80;
const CLOSED_INDEX = -1;

interface BottomSheetContext {
    sheetRef: React.RefObject<BottomSheetModal>;
}
const BottomSheetContext = React.createContext({} as BottomSheetContext);

const BottomSheet = React.forwardRef<BottomSheetRef, BottomSheetProps>(({...props}, ref) => {
    const sheetRef = React.useRef<BottomSheetModal>(null);

    return (
        <BottomSheetContext.Provider value={{sheetRef: sheetRef}}>
            <View ref={ref} {...props} />
        </BottomSheetContext.Provider>
    );
});

BottomSheet.displayName = 'BottomSheet';

type BottomSheetContentProps = Omit<
    React.ComponentPropsWithoutRef<typeof BottomSheetModal>,
    'backdropComponent'
> & {
    backdropProps?: Partial<React.ComponentPropsWithoutRef<typeof BottomSheetBackdrop>>;
};

export function useBottomSheetContext() {
    const context = React.useContext(BottomSheetContext);
    if (!context) {
        throw new Error(
            'BottomSheet compound components cannot be rendered outside the BottomSheet component',
        );
    }
    return context;
}

const BottomSheetContent = React.forwardRef<BottomSheetContentRef, BottomSheetContentProps>(
    (
        {
            enablePanDownToClose = true,
            enableDynamicSizing = true,
            index: _unused = 0,
            backdropProps,
            backgroundStyle,
            android_keyboardInputMode = 'adjustResize',
            ...props
        },
        ref,
    ) => {
        const insets = useSafeAreaInsets();
        // const { isDarkColorScheme } = useColorScheme();
        // const { colors } = useTheme();
        const {sheetRef} = useBottomSheetContext();

        React.useImperativeHandle(ref, () => {
            if (!sheetRef.current) {
                return {} as BottomSheetModalMethods;
            }
            return sheetRef.current;
        }, [sheetRef]);

        const renderBackdrop = React.useCallback(
            (props: BottomSheetBackdropProps) => {
                const {
                    pressBehavior = 'close',
                    //   opacity = isDarkColorScheme ? 0.3 : 0.7,
                    disappearsOnIndex = CLOSED_INDEX,
                    style,
                    onPress,
                    ...rest
                } = {
                    ...props,
                    ...backdropProps,
                };
                return (
                    <BottomSheetBackdrop
                        // opacity={opacity}
                        disappearsOnIndex={disappearsOnIndex}
                        pressBehavior={pressBehavior}
                        style={[{backgroundColor: colors.overlayColor}, style]}
                        onPress={() => {
                            if (Keyboard.isVisible()) {
                                Keyboard.dismiss();
                            }
                            onPress?.();
                        }}
                        {...rest}
                    />
                );
            },
            [backdropProps],
        );

        return (
            <BottomSheetModal
                ref={sheetRef}
                index={0}
                enablePanDownToClose={enablePanDownToClose}
                backdropComponent={renderBackdrop}
                enableDynamicSizing={enableDynamicSizing}
                backgroundStyle={[{backgroundColor: colors.white}, backgroundStyle]}
                handleIndicatorStyle={{
                    backgroundColor: colors.black,
                }}
                topInset={insets.top}
                android_keyboardInputMode={android_keyboardInputMode}
                {...props}
            />
        );
    },
);

BottomSheetContent.displayName = 'BottomSheetContent';

type BottomSheetViewProps = Omit<
    React.ComponentPropsWithoutRef<typeof GBottomSheetView>,
    'style'
> & {
    hadHeader?: boolean;
    style?: ViewStyle;
};

function BottomSheetView({children, hadHeader = true, style, ...props}: BottomSheetViewProps) {
    const insets = useSafeAreaInsets();
    return (
        <GBottomSheetView
            style={[
                {
                    paddingBottom: insets.bottom + (hadHeader ? BOTTOM_SHEET_HEADER_HEIGHT : 0),
                },
                style,
            ]}
            {...props}>
            {children}
        </GBottomSheetView>
    );
}

export const BottomSheetComponent = React.forwardRef<
    BottomSheetModalMethods,
    {children: React.ReactNode; sheetStyle?: ViewStyle; backgroundStyle?: object}
>(({children, sheetStyle, backgroundStyle}, ref) => {
    return (
        <BottomSheet>
            <BottomSheetContent
                ref={ref}
                enableContentPanningGesture={true}
                handleComponent={() => null}
                backgroundStyle={backgroundStyle}>
                <BottomSheetView style={sheetStyle} hadHeader={false}>
                    {children}
                </BottomSheetView>
            </BottomSheetContent>
        </BottomSheet>
    );
});

BottomSheetComponent.displayName = 'BottomSheetComponent';
