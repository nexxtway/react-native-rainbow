import React from 'react';
import PropTypes from 'prop-types';

import { StyledAvatar } from './styled';
import { AvatarProps, AvatarSizes } from './types';
import { Avatar } from '..';

interface Props {
    maxAvatars?: number;
    size?: AvatarSizes;
    avatars?: AvatarProps[];
}

const Avatars: React.FC<Props> = props => {
    const { avatars = [], maxAvatars = 3, size } = props;
    const items = avatars.slice(0, maxAvatars).map((avatar, idx) => {
        const { src, initials, icon } = avatar;

        const key = `avatar-${idx}`;
        const zIndex = maxAvatars - idx;
        return (
            <StyledAvatar
                key={key}
                zIndex={zIndex}
                firstChild={idx === 0}
                size={size}
            >
                <Avatar src={src} initials={initials} icon={icon} />
            </StyledAvatar>
        );
    });

    return <>{items}</>;
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