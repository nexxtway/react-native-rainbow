import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Input from '../../src/components/Input';

const styles = {
    marginBottom: 24,
};

storiesOf('Input', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic', () => (
        <>
            <Input style={styles} />
            <Input style={styles} label="Label" placeholder="Type here" />
            <Input style={styles} label="Disabled Input" disabled />
            <Input
                style={styles}
                label="Label"
                error="This is a required field"
            />
        </>
    ));
