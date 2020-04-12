import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import RowView from './RowView';
import CenterView from './CenterView';
import LikeButton from '../../src/components/LikeButton';

const BasicUse = function() {
    const [value, setValue] = useState();
    return (
        <RowView spaceTop={50}>
            <LikeButton showLabel value={value} onChange={setValue} />
        </RowView>
    );
};

storiesOf('Like Button', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => {
        return (
            <>
                <BasicUse />
            </>
        );
    });
