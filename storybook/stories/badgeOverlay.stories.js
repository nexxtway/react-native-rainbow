import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import User from '../../src/components/Icons/user';
import { BadgeOverlay } from '../../src/components';

const iconStyles = {
    color: '#a4a7b5',
    width: '30px',
    height: '30px',
};

const BadgeNode = () => <Text>1</Text>;

storiesOf('BadgeOverlay', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => {
        return (
            <>
                <BadgeOverlay value="1">
                    <User style={iconStyles} />
                </BadgeOverlay>
            </>
        );
    });
