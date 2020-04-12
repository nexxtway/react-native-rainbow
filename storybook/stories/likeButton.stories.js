import React from 'react';
import { storiesOf } from '@storybook/react-native';
import RowView from './RowView';
import Avatar from '../../src/components/Avatar';
import User from '../../src/components/Icons/user';
import LikeButton from '../../src/components/LikeButton';
import Like from '../../src/components/Icons/like';

const PHOTO = 'https://source.unsplash.com/mEZ3PoFGs_k/50x50';

const iconStyles = {
    width: '60%',
    height: '60%',
};

storiesOf('Like Button', module).add('Basic', () => (
    <>
        <RowView spaceTop={50}>
            <LikeButton labelEnabled />
            {/* <Avatar size="large" icon={<Like style={iconStyles} />} /> */}
        </RowView>
    </>
));
