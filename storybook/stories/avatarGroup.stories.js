import React from 'react';
import { storiesOf } from '@storybook/react-native';

import RowView from './RowView';
import AvatarGroup from '../../src/components/AvatarGroup';
import { Text } from 'react-native';

const PHOTO = 'https://source.unsplash.com/mEZ3PoFGs_k/50x50';

storiesOf('AvatarGroup', module).add('Basic', () => {
    const avatars = [
        {
            src: PHOTO,
        },
        {
            src: PHOTO,
        },
        {
            src: PHOTO,
        },
        {
            src: PHOTO,
        },
    ];
    return (
        <React.Fragment>
            <RowView spaceTop={100} flexDirection={'column'}>
                <AvatarGroup
                    size="large"
                    avatars={avatars}
                    maxAvatars={4}
                    showCounter={false}
                />
                <Text>Large</Text>
            </RowView>
            <RowView spaceTop={30} flexDirection={'column'}>
                <AvatarGroup
                    size="medium"
                    avatars={avatars}
                    maxAvatars={4}
                    showCounter={false}
                />
                <Text>Medium</Text>
            </RowView>
            <RowView spaceTop={30} flexDirection={'column'}>
                <AvatarGroup
                    size="small"
                    avatars={avatars}
                    maxAvatars={4}
                    showCounter={false}
                />
                <Text>Small</Text>
            </RowView>
            <RowView spaceTop={30} flexDirection={'column'}>
                <AvatarGroup
                    size="x-small"
                    avatars={avatars}
                    maxAvatars={4}
                    showCounter={false}
                />
                <Text>x small</Text>
            </RowView>
        </React.Fragment>
    );
});
