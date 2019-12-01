import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import InputCode from '../../src/components/InputCode';

const styles = {
    marginBottom: 24,
};

storiesOf('InputCode', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic', () => (
        <>
            <InputCode label="Enter Code" style={styles} />
            <InputCode label="Enter Code" error="Invalid Code" style={styles} />
        </>
    ));
