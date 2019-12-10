import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import RowView from './RowView';
import Avatar from '../../src/components/Avatar';
import ArrowRight from '../../src/components/Icons/arrowRight';

const PHOTO = 'https://source.unsplash.com/mEZ3PoFGs_k/50x50';

const iconStyles = {
    color: 'white',
    width: '100%',
    height: '100%',
};

storiesOf('Avatar', module)
    .addDecorator(getStory => <RowView>{getStory()}</RowView>)
    .add('Image', () => (
        <>
            <Avatar
                size="large"
                src={PHOTO}
                icon={<ArrowRight style={iconStyles} />}
            />
            <Avatar src={PHOTO} />
            <Avatar size="small" src={PHOTO} />
            <Avatar size="x-small" src={PHOTO} />
        </>
    ))
    .add('Initials', () => (
        <>
            <Avatar size="large" initials="AB" />
            <Avatar initials="AB" />
            <Avatar size="small" initials="AB" />
            <Avatar size="x-small" initials="AB" />
        </>
    ))
    .add('Icon', () => (
        <>
            <Avatar size="large" icon={<ArrowRight style={iconStyles} />} />
            <Avatar icon={<ArrowRight style={iconStyles} />} />
            <Avatar size="small" icon={<ArrowRight style={iconStyles} />} />
            <Avatar size="x-small" icon={<ArrowRight style={iconStyles} />} />
        </>
    ));
