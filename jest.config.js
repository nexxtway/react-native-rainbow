module.exports = {
    preset: 'react-native',
    collectCoverage: true,
    setupFilesAfterEnv: ['jest-enzyme'],
    testEnvironment: 'enzyme',
    testEnvironmentOptions: {
        enzymeAdapter: 'react16',
    },
};
