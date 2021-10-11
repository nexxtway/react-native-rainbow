import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Application from '../../../src/components/Application';

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
    orange: orangeTheme,
    yellow: yellowTheme,
    'deep-purple': deepPurpleTheme,
    'cyan-dark': cyanDarkTheme,
};

const ThemeWrapper = ({ children }) => {
    const [selectedTheme, setTheme] = useState();
    const theme = themeMap[selectedTheme];

    return (
        <Application theme={theme}>
            <Picker selectedValue={selectedTheme} onValueChange={value => setTheme(value)}>
                <Picker.Item label="Default" value="default" />
                <Picker.Item label="Orange" value="orange" />
                <Picker.Item label="Yellow" value="yellow" />
                <Picker.Item label="Deep Purple" value="deep-purple" />
                <Picker.Item label="Cyan Dark" value="cyan-dark" />
            </Picker>
            {children}
        </Application>
    );
};

export default ThemeWrapper;
