module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        'react-native-reanimated/plugin',
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@hooks': './src/hooks',
                    '@i18n': './src/i18n',
                    '@navigators': './src/navigators',
                    '@redux': './src/redux',
                    '@screens': './src/screens',
                    '@theme': './src/theme',
                    '@types': './src/types',
                    '@utils': './src/utils',
                    // Add more aliases as needed
                },
            },
        ],
    ],
};
