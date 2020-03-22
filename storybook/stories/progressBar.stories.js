import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import ProgressBar from '../../src/components/ProgressBar';

const styles = {
    marginBottom: 40,
};

storiesOf('Progress Bar', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => (
        <>
            <ProgressBar style={styles} value={50} />
            <ProgressBar style={styles} value={10} variant="success" />
            <ProgressBar style={styles} value={25} variant="warning" />
            <ProgressBar style={styles} value={70} variant="error" />
        </>
    ));
