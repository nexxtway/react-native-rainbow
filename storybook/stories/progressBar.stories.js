import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import ProgressBar from '../../src/components/ProgressBar';
import Shoe from '../../src/components/Icons/shoe';
import Fire from '../../src/components/Icons/fire';
import Route from '../../src/components/Icons/route';
import Person from '../../src/components/Icons/person';
import { View } from 'react-native';

const styles = {
    marginBottom: 40,
};

const viewStyles = {
    paddingLeft: 40,
    paddingRight: 40,
};

const iconStyles = {
    width: '40%',
    height: '40%',
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
    ))
    .add('Semicircular shape', () => (
        <View style={viewStyles}>
            <ProgressBar
                shape="semicircular"
                value={5}
                max={10}
                icon={<Person style={iconStyles} />}
                style={styles}
            />
            <ProgressBar
                variant="success"
                shape="semicircular"
                value={8}
                max={10}
                icon={<Shoe style={iconStyles} />}
                style={styles}
            />
            <ProgressBar
                variant="warning"
                shape="semicircular"
                value={3}
                max={10}
                icon={<Fire style={iconStyles} />}
                style={styles}
            />
            <ProgressBar
                variant="error"
                shape="semicircular"
                value={10}
                max={10}
                icon={<Route style={iconStyles} />}
            />
        </View>
    ));
