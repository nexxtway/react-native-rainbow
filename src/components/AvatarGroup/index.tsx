import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { AvatarGroup as AvatarGroupProps } from '../types';
import { StyledContainer, StyledAvatarContainer } from './styled';
import RenderIf from '../RenderIf';
import Avatars from './Avatars';

/**
 * An Avatar group represents an group of avatar
 */

const AvatarGroup: React.FC<AvatarGroupProps> = props => {
    const { size, avatars, maxAvatars, showCounter } = props;
    return (
        <StyledContainer size={size}>
            <RenderIf isTrue={showCounter}>
                <Text>Counter</Text>
            </RenderIf>
            <StyledAvatarContainer>
                <Avatars
                    size={size}
                    maxAvatars={maxAvatars}
                    avatars={avatars}
                />
            </StyledAvatarContainer>
        </StyledContainer>
    );
};

AvatarGroup.propTypes = {
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    style: PropTypes.string,
    avatars: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            initials: PropTypes.string,
            icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
            title: PropTypes.string,
            assistiveText: PropTypes.string,
        }),
    ),
    maxAvatars: PropTypes.number,
    showCounter: PropTypes.bool,
};

AvatarGroup.defaultProps = {
    size: 'medium',
    style: undefined,
    avatars: [],
    maxAvatars: 3,
    showCounter: false,
};

export default AvatarGroup;
