import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import RowView from './RowView';
import CenterView from './CenterView';
import LikeButton from '../../src/components/LikeButton';

const BasicUse = function({ showLabel, variant }) {
    const [value, setValue] = useState();
    return (
        <RowView spaceTop={100}>
            <LikeButton
                showLabel={showLabel}
                value={value}
                onChange={setValue}
                variant={variant}
            />
        </RowView>
    );
};

storiesOf('Like Button', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => {
        return (
            <>
                <BasicUse />
                <BasicUse variant="shaded" />
                <BasicUse showLabel />
                <BasicUse showLabel variant="shaded" />
            </>
        );
    });
