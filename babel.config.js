module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        // 'react-native-reanimated/plugin',
        [
            'module-resolver',
            {
                root: ['./'],
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.android.js',
                    '.android.tsx',
                    '.ios.js',
                    '.ios.tsx',
                ],
                alias: {
                    // '@components': './src/components',
                    // '@containers': './src/containers',
                    // '@routes': './src/routes',
                    // '@utils': './src/utils',
                    // '@assets': './src/assets',
                    // '@config': './src/config',
                    '@redux': './src/redux',
                    // '@constants': './src/constants',
                    // Add more aliases as needed
                },
            },
        ],
    ],
};
