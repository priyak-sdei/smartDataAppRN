module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        'react-native-reanimated/plugin',
        [
            'module:react-native-dotenv',
            {
                envName: 'ENVFILE',
                moduleName: '@env', // Ensures variables are imported from '@env'
                path: '.env', // Specifies the path to the .env file
                safe: true, // Ensures all required variables are set
                allowUndefined: false, // Prevents using undefined variables
            },
        ],
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
                    '@provider': './src/provider',
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
