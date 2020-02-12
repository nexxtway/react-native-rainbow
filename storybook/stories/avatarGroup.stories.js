import React from 'react';
import { storiesOf } from '@storybook/react-native';

import RowView from './RowView';
import AvatarGroup from '../../src/components/AvatarGroup';
import { Text } from 'react-native';
import User from '../../src/components/Icons/user';

const PHOTO = 'https://source.unsplash.com/mEZ3PoFGs_k/50x50';

const avatars = Array.from({ length: 5 }).fill({
    src: PHOTO,
});

const avatarsCounter = Array.from({ length: 1000 }).fill({
    src: PHOTO,
});

storiesOf('AvatarGroup', module)
    .add('Basic', () => {
        return (
            <React.Fragment>
                <RowView spaceTop={100} flexDirection={'column'}>
                    <AvatarGroup
                        size="large"
                        avatars={avatars}
                        maxAvatars={3}
                        showCounter={false}
                    />
                    <Text>Large</Text>
                </RowView>
                <RowView spaceTop={30} flexDirection={'column'}>
                    <AvatarGroup
                        size="medium"
                        avatars={avatars}
                        maxAvatars={3}
                        showCounter={false}
                    />
                    <Text>Medium</Text>
                </RowView>
                <RowView spaceTop={30} flexDirection={'column'}>
                    <AvatarGroup
                        size="small"
                        avatars={avatars}
                        maxAvatars={3}
                        showCounter={false}
                    />
                    <Text>Small</Text>
                </RowView>
                <RowView spaceTop={30} flexDirection={'column'}>
                    <AvatarGroup
                        size="x-small"
                        avatars={avatars}
                        maxAvatars={3}
                        showCounter={false}
                    />
                    <Text>x small</Text>
                </RowView>
            </React.Fragment>
        );
    })
    .add('Basic with counter', () => {
        return (
            <React.Fragment>
                <RowView flexDirection={'column'} spaceTop={120}>
                    <AvatarGroup
                        size="large"
                        avatars={avatarsCounter}
                        maxAvatars={3}
                        showCounter={true}
                    />
                    <Text>AvatarGroup Large with counter</Text>
                </RowView>
                <RowView flexDirection={'column'} spaceTop={30}>
                    <AvatarGroup
                        size="medium"
                        avatars={avatarsCounter}
                        maxAvatars={3}
                        showCounter={true}
                    />
                    <Text>AvatarGroup medium with counter</Text>
                </RowView>
                <RowView flexDirection={'column'} spaceTop={30}>
                    <AvatarGroup
                        size="small"
                        avatars={avatarsCounter}
                        maxAvatars={3}
                        showCounter={true}
                    />
                    <Text>AvatarGroup small with counter</Text>
                </RowView>
                <RowView flexDirection={'column'} spaceTop={30}>
                    <AvatarGroup
                        size="x-small"
                        avatars={avatarsCounter}
                        maxAvatars={3}
                        showCounter={true}
                    />
                    <Text>AvatarGroup x-small with counter</Text>
                </RowView>
            </React.Fragment>
        );
    })
    .add('Avatar with Initials', () => {
        const avatarsInitials = [
            { initials: 'RC' },
            { initials: 'HO' },
            { initials: 'EC' },
            { initials: 'EC' },
            { initials: 'JF' },
        ];

        return (
            <React.Fragment>
                <RowView flexDirection={'column'} spaceTop={120}>
                    <AvatarGroup
                        size="large"
                        avatars={avatarsInitials}
                        maxAvatars={5}
                        showCounter={false}
                    />
                    <Text>AvatarGroup Large with Initials</Text>
                </RowView>
                <RowView flexDirection={'column'} spaceTop={30}>
                    <AvatarGroup
                        size="medium"
                        avatars={avatarsInitials}
                        maxAvatars={5}
                        showCounter={false}
                    />
                    <Text>AvatarGroup Medium with Initials</Text>
                </RowView>
                <RowView flexDirection={'column'} spaceTop={30}>
                    <AvatarGroup
                        size="small"
                        avatars={avatarsInitials}
                        maxAvatars={5}
                        showCounter={false}
                    />
                    <Text>AvatarGroup Small with Initials</Text>
                </RowView>
                <RowView flexDirection={'column'} spaceTop={30}>
                    <AvatarGroup
                        size="x-small"
                        avatars={avatarsInitials}
                        maxAvatars={5}
                        showCounter={false}
                    />
                    <Text>AvatarGroup X-small with Initials</Text>
                </RowView>
            </React.Fragment>
        );
    })
    .add('Avatar with icon', () => {
        const iconStyles = {
            color: 'white',
            width: '60%',
            height: '60%',
        };
        const avatarsIcons = [
            {
                icon: <User style={iconStyles} />,
            },
            {
                icon: <User style={iconStyles} />,
            },
            {
                icon: <User style={iconStyles} />,
            },
        ];

        return (
            <React.Fragment>
                <RowView flexDirection={'column'} spaceTop={120}>
                    <AvatarGroup
                        size="large"
                        avatars={avatarsIcons}
                        maxAvatars={5}
                        showCounter={false}
                    />
                    <Text>AvatarGroup Large with Initials</Text>
                </RowView>
                <RowView flexDirection={'column'} spaceTop={30}>
                    <AvatarGroup
                        size="medium"
                        avatars={avatarsIcons}
                        maxAvatars={5}
                        showCounter={false}
                    />
                    <Text>AvatarGroup Medium with Initials</Text>
                </RowView>
                <RowView flexDirection={'column'} spaceTop={30}>
                    <AvatarGroup
                        size="small"
                        avatars={avatarsIcons}
                        maxAvatars={5}
                        showCounter={false}
                    />
                    <Text>AvatarGroup Small with Initials</Text>
                </RowView>
                <RowView flexDirection={'column'} spaceTop={30}>
                    <AvatarGroup
                        size="x-small"
                        avatars={avatarsIcons}
                        maxAvatars={5}
                        showCounter={false}
                    />
                    <Text>AvatarGroup Medium with Initials</Text>
                </RowView>
            </React.Fragment>
        );
    });
