import React from 'react';
import PropTypes from 'prop-types';

import { StyledAvatar, StyledImage, StyledInitialsText } from './styled';
import { Avatar } from './types';
import RenderIf from '../RenderIf';

interface Props {
    maxAvatars?: number;
    size?: string;
    avatars?: Avatar[];
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
                <RenderIf isTrue={!!src}>
                    <StyledImage source={{ uri: src }} />
                </RenderIf>
                <RenderIf isTrue={!!initials}>
                    <StyledInitialsText size={size}>
                        {initials}
                    </StyledInitialsText>
                </RenderIf>
                <RenderIf isTrue={!!icon}>{icon}</RenderIf>
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
