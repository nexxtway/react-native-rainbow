import React, { useState } from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import ThemeWrapper from './ThemeWrapper';
import CenterView from './CenterView';
import Checkbox from '../../src/components/Checkbox';

const styles = {
    marginBottom: 16,
};

const textStyle = {
    fontSize: 12,
    color: '#000',
};

const ControlledCheckbox = props => {
    const [value, setValue] = useState(props.value);
    return <Checkbox {...props} value={value} onChange={setValue} />;
};

storiesOf('Checkbox', module)
    .addDecorator(getStory => (
        <ThemeWrapper>
            <CenterView>{getStory()}</CenterView>
        </ThemeWrapper>
    ))
    .add('basic', () => (
        <>
            <ControlledCheckbox style={styles} label="Label" value />
            <ControlledCheckbox style={styles} label="Label" error="This is a required field" />
            <ControlledCheckbox style={styles} label="Disabled Checkbox" disabled />
            <ControlledCheckbox style={styles} label="Disabled Checkbox" value disabled />
            <ControlledCheckbox
                style={styles}
                label={<Text style={textStyle}>Custom Label</Text>}
            />
        </>
    ));
