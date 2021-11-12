import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import ThemeWrapper from './ThemeWrapper';
import CenterView from './CenterView';
import SwipeButton from '../../src/components/SwipeButton';

const styles = {
    marginTop: 36,
};

const Example = () => {
    const [isLoading, setLoading] = useState(false);

    const handleSuccess = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <SwipeButton
            label="Swipe to load"
            onSuccess={handleSuccess}
            isLoading={isLoading}
            style={styles}
        />
    );
};

storiesOf('SwipeButton', module)
    .addDecorator(getStory => (
        <ThemeWrapper>
            <CenterView>{getStory()}</CenterView>
        </ThemeWrapper>
    ))
    .add('Basic', () => {
        return (
            <>
                <SwipeButton label="Swipe to Aceept" onSuccess={() => alert('Suceess!')} />
                <Example />
            </>
        );
    });
