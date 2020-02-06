import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Avatar } from '../types';
import { StyledAvatar, StyledImage } from './styled';

interface AvatarProps {
    maxAvatars: number;
    size: string;
    avatars: Avatar[];
}

const Avatars: React.FC<AvatarProps> = ({
    avatars,
    maxAvatars,
    size,
}: AvatarProps) => {
    const items = avatars?.slice(0, maxAvatars).map((avatar, idx) => {
        const { src } = avatar;
        const key = `avatar-${idx}`;
        const zIndex = `${maxAvatars - idx}`;
        return (
            <StyledAvatar zIndex={zIndex} firstChild={idx === 0} size={size}>
                <StyledImage source={{ uri: src }} />
            </StyledAvatar>
        );
    });

    return items;
};

Avatars.propTypes = {
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    avatars: PropTypes.array,
    maxAvatars: PropTypes.number,
};

Avatars.defaultProps = {
    size: 'medium',
    avatars: [],
    maxAvatars: 3,
};

export default Avatars;
