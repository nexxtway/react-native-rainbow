import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import RowView from './RowView';
import CenterView from './CenterView';
import LikeButton from '../../src/components/LikeButton';

const BasicUse = function({ showLabel, variant, disabled }) {
    const [value, setValue] = useState();
    return (
        <RowView spaceTop={50}>
            <LikeButton
                showLabel={showLabel}
                value={value}
                onChange={setValue}
                variant={variant}
                readOnly={disabled}
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
    return (
        <RowView spaceTop={50}>
            <LikeButton
                showLabel={true}
                value={'like'}
                disabled={true}
                size={size}
                readOnly={true}
            />
            <LikeButton
                showLabel={true}
                value={'like'}
                variant="shaded"
                disabled={true}
                size={size}
                readOnly={true}
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
                <DisabledUse value="like" />
            </>
        );
    })
    .add('Size', () => {
        return (
            <>
                <SizeUse />
                <SizeUse size={'x-small'} />
                <SizeUse size={'small'} />
                <SizeUse size={'medium'} />
                <SizeUse size={'large'} />
            </>
        );
    });
