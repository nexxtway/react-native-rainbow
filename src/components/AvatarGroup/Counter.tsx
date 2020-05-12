import React from 'react';
import PropTypes from 'prop-types';

import { AvatarProps, AvatarSizes } from './types';
import Avatar from '../Avatar';
import { StyledCounter } from './styled';
import getSuffixSI from '../../libs/utils/getSuffixSI';

interface Props {
    size?: AvatarSizes;
    avatars?: AvatarProps[];
}

const Counter: React.FC<Props> = ({ avatars = [], size = 'medium' }: Props) => {
    const total = getSuffixSI(avatars.length);

    return (
        <StyledCounter size={size}>
            <Avatar size={size} initials={total} />
        </StyledCounter>
    );
};

Counter.propTypes = {
    size: PropTypes.oneOf(['large', 'medium', 'small', 'x-small']),
    avatars: PropTypes.array,
};

Counter.defaultProps = {
    size: 'medium',
    avatars: [],
};

export default Counter;
