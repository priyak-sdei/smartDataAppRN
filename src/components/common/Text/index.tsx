import React from 'react';
import {TOptions} from 'i18next';
import {StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle} from 'react-native';
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
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/app/components/Text/}
 * @param {TextProps} props - The props for the `Text` component.
 * @returns {JSX.Element} The rendered `Text` component.
 */
export function Text(props: TextProps) {
    const {tx, txOptions, text} = props;
    const i18nText = tx && translate(tx, txOptions);
    const content = i18nText || text;

    const $styles: StyleProp<TextStyle> = [$rtlStyle];
    return <RNText style={$styles}>{content}</RNText>;
}

const $rtlStyle: TextStyle = isRTL ? {writingDirection: 'rtl'} : {};
