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
                    // '@components': './src/components',
                    // '@containers': './src/containers',
                    // '@routes': './src/routes',
                    // '@utils': './src/utils',
                    // '@assets': './src/assets',
                    // '@config': './src/config',
                    '@redux': './src/redux',
                    '@screens': './src/screens',
                    // '@constants': './src/constants',
                    // Add more aliases as needed
                },
            },
        ],
    ],
};
