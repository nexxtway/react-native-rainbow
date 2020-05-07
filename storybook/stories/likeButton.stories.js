import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import RowView from './RowView';
import CenterView from './CenterView';
import LikeButton from '../../src/components/LikeButton';

const BasicUse = function({ showLabel, variant }) {
    const [value, setValue] = useState();
    return (
        <RowView spaceTop={50}>
            <LikeButton
                showLabel={showLabel}
                value={value}
                onChange={setValue}
                variant={variant}
            />
        </RowView>
    );
};

const DisabledUse = function({ showLabel, variant, value }) {
    return (
        <RowView spaceTop={50}>
            <LikeButton
                showLabel={showLabel}
                value={value}
                variant={variant}
                readOnly={true}
            />
        </RowView>
    );
};

const SizeUse = function({ size }) {
    const [value, setValue] = useState();
    return (
        <RowView spaceTop={50}>
            <LikeButton
                showLabel={true}
                disabled={true}
                size={size}
                value={value}
                onChange={setValue}
            />
            <LikeButton
                showLabel={true}
                variant="shaded"
                disabled={true}
                size={size}
                value={value}
                onChange={setValue}
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
                <DisabledUse showLabel variant="shaded" value="like" />
                <DisabledUse showLabel value="love" />
            </>
        );
    })
    .add('Size', () => {
        return (
            <>
                <SizeUse size={'x-small'} />
                <SizeUse size={'small'} />
                <SizeUse size={'medium'} />
                <SizeUse size={'large'} />
            </>
        );
    });
