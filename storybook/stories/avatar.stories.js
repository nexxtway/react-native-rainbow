import React from 'react';
import { storiesOf } from '@storybook/react-native';
import RowView from './RowView';
import Avatar from '../../src/components/Avatar';
import User from '../../src/components/Icons/user';

const PHOTO = 'https://source.unsplash.com/mEZ3PoFGs_k/50x50';

const iconStyles = {
    color: 'white',
    width: '100%',
    height: '100%',
};

storiesOf('Avatar', module).add('Basic', () => (
    <>
        <RowView spaceTop={150}>
            <Avatar size="large" src={PHOTO} />
            <Avatar src={PHOTO} />
            <Avatar size="small" src={PHOTO} />
            <Avatar size="x-small" src={PHOTO} />
        </RowView>
        <RowView spaceTop={50}>
            <Avatar size="large" icon={<User style={iconStyles} />} />
            <Avatar size="large" initials="AB" />
        </RowView>
    </>
));
