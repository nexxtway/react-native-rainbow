module.exports = {
    root: true,
    extends: '@react-native-community',
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
};
