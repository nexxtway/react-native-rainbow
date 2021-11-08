import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import SwipeButton from '../../src/components/SwipeButton';

storiesOf('SwipeButton', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => {
        return (
            <>
                <SwipeButton
                    label="Swipe to Aceept"
                    onSuccess={() => alert('Suceess!')}
                    style={[{ width: 280 }]}
                />
            </>
        );
    });
