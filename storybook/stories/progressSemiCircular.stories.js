import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import ProgressSemiCircular from '../../src/components/ProgressSemiCircular';
import Shoe from '../../src/components/Icons/shoe';
import Fire from '../../src/components/Icons/fire';
import Route from '../../src/components/Icons/route';
import Person from '../../src/components/Icons/person';

const styles = {
    alignItems: 'center',
};

const iconStyles = {
    width: '40%',
    height: '40%',
};

storiesOf('ProgressSemiCircular', module)
    .addDecorator(getStory => (
        <CenterView style={styles}>{getStory()}</CenterView>
    ))
    .add('Basic', () => (
        <>
            <ProgressSemiCircular
                value={50}
                icon={<Person style={iconStyles} />}
            />
            <ProgressSemiCircular
                variant="success"
                value={80}
                icon={<Shoe style={iconStyles} />}
            />
            <ProgressSemiCircular
                variant="warning"
                value={30}
                icon={<Fire style={iconStyles} />}
            />
            <ProgressSemiCircular
                variant="error"
                value={100}
                icon={<Route style={iconStyles} />}
            />
        </>
    ));
