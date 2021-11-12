import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Select from '../../../src/components/Select';
import Application from '../../../src/components/Application';

const styles = {
    flex: 1,
};

const selectStyles = {
    marginVertical: 24,
    marginHorizontal: 40,
};

const greenTheme = {
    rainbow: {
        palette: {
            brand: 'rgb(0, 171, 142)',
        },
    },
};

const orangeTheme = {
    rainbow: {
        palette: {
            brand: '#f8752d',
            success: '#00a042',
            error: '#e53935',
        },
    },
};

const deepPurpleTheme = {
    rainbow: {
        palette: {
            brand: '#6860db',
            mainBackground: '#f2f2f2',
        },
    },
};

const yellowTheme = {
    rainbow: {
        palette: {
            brand: '#ffcc00',
            success: '#aeea00',
            error: '#ff5252',
        },
    },
};

const cyanDarkTheme = {
    rainbow: {
        palette: {
            brand: '#80deea',
            success: '#b9f6ca',
            error: '#ff5252',
            mainBackground: '#303030',
        },
    },
};

const themeMap = {
    green: greenTheme,
    orange: orangeTheme,
    yellow: yellowTheme,
    'deep-purple': deepPurpleTheme,
    'cyan-dark': cyanDarkTheme,
};

const options = [
    { label: 'Default', value: 'default' },
    { label: 'Green', value: 'green' },
    { label: 'Orange', value: 'orange' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Deep Purple', value: 'deep-purple' },
    { label: 'Cyan Dark', value: 'cyan-dark' },
];

const ThemeWrapper = ({ children }) => {
    const [selectedTheme, setTheme] = useState();
    const theme = themeMap[selectedTheme];

    return (
        <SafeAreaView style={styles}>
            <Application theme={theme}>
                <Select
                    options={options}
                    style={selectStyles}
                    placeholder="Select a theme"
                    onChange={value => setTheme(value)}
                />
                {children}
            </Application>
        </SafeAreaView>
    );
};

export default ThemeWrapper;
