import {TOptions} from 'i18next';
import React, {ReactNode} from 'react';
import {Text as RNText, TextProps as RNTextProps, StyleProp, TextStyle} from 'react-native';
import {isRTL, translate, TxKeyPath} from 'src/i18n';

export interface TextProps extends RNTextProps {
    /**
     * Text which is looked up via i18n.
     */
    tx?: TxKeyPath;
    /**
     * The text to display if not using `tx` or nested components.
     */
    text?: string;
    /**
     * Optional options to pass to i18n. Useful for interpolation
     * as well as explicitly setting locale or translation fallbacks.
     */
    txOptions?: TOptions;
    /**
     * Children components.
     */
    children?: ReactNode;

    style?: StyleProp<TextStyle>;
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @param {TextProps} props - The props for the `Text` component.
 * @returns {JSX.Element} The rendered `Text` component.
 */
export function Text(props: TextProps) {
    const {tx, txOptions, text, children, style} = props;
    const i18nText = tx && translate(tx, txOptions);
    const content = i18nText || text || children;

    const $styles: StyleProp<TextStyle> = [$rtlStyle, style];
    return (
        <RNText {...props} style={$styles}>
            {content}
        </RNText>
    );
}

const $rtlStyle: TextStyle = isRTL
    ? {writingDirection: 'rtl', includeFontPadding: false}
    : {includeFontPadding: false};
