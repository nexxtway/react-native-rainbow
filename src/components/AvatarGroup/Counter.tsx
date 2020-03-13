import React from 'react';
import PropTypes from 'prop-types';

import { AvatarProps } from './types';
import Avatar from '../Avatar';
import { StyledCounter } from './styled';
import abbreviateNumber from './helpers/AbbreviateNumber';

interface Props {
    size?: 'small' | 'x-small' | 'medium' | 'large';
    avatars?: Array<AvatarProps> | any;
}

const Counter: React.FC<Props> = props => {
    const { avatars = [], size = 'medium' } = props;
    const total = abbreviateNumber(avatars.length);

    return (
        <StyledCounter size={size}>
            <Avatar size={size} initials={`${total}`} />
        </StyledCounter>
    );
};

Counter.propTypes = {
    size: PropTypes.oneOf(['large', 'medium', 'small', 'x-small']),
    avatars: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            initials: PropTypes.string,
            icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        }),
    ),
};

Counter.defaultProps = {
    size: 'small',
    avatars: [],
};

export default Counter;
