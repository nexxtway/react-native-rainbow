import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Input from '../../src/components/Input';
import User from '../../src/components/Icons/user';
import Heart from '../../src/components/Icons/heart';
import { COLOR_GRAY_2 } from '../../src/styles/colors';

const styles = {
    marginBottom: 24,
};

const iconStyles = {
    color: COLOR_GRAY_2,
    width: '100%',
    height: '100%',
};

storiesOf('Input', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic', () => (
        <>
            <Input style={styles} icon={<User style={iconStyles} />} />
            <Input style={styles} label="Label" placeholder="Type here" />
            <Input style={styles} label="Disabled Input" disabled />
            <Input
                icon={<Heart style={iconStyles} />}
                iconPosition="right"
                style={styles}
                label="Label"
                error="This is a required field"
            />
        </>
    ));
