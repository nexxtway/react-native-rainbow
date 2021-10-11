import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Application from '../../src/components/Application';
import Button from '../../src/components/Button';
import Input from '../../src/components/Input';

const styles = {
    marginBottom: 24,
};

const deepPurpleTheme = {
    rainbow: {
        palette: {
            brand: '#6860db',
            mainBackground: '#f2f2f2',
        },
    },
};

storiesOf('Application', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic theming', () => (
        <Application theme={deepPurpleTheme}>
            <Input label="Name" style={styles} />
            <Input label="Email" style={styles} />
            <Button label="Submit" variant="brand" />
        </Application>
    ));
