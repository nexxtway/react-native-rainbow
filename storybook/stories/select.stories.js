import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ThemeWrapper from './ThemeWrapper';
import CenterView from './CenterView';
import Select from '../../src/components/Select';

const styles = {
    marginBottom: 24,
};

const options = [
    { value: 'option 1', label: 'Option 1' },
    { value: 'option 2', label: 'Option 2' },
    { value: 'option 3', label: 'Option 3' },
];

const Examples = () => {
    return (
        <>
            <Select style={styles} options={options} placeholder="Select an option" />
            <Select style={styles} label="Label" options={options} />
            <Select style={styles} label="Disabled Select" options={options} disabled />
            <Select
                style={styles}
                label="Label"
                options={options}
                error="This is a required field"
            />
        </>
    );
};

storiesOf('Select', module)
    .addDecorator(getStory => (
        <ThemeWrapper>
            <CenterView>{getStory()}</CenterView>
        </ThemeWrapper>
    ))
    .add('basic', () => <Examples />);
