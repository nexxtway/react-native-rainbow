import React from 'react';

import { Avatar } from './types';
import { StyledCounter, StyledTextCounter } from './styled';
import abbreviateNumber from './helpers/AbbreviateNumber';

interface Props {
    size?: string;
    avatars?: Avatar[];
}

const Counter: React.FC<Props> = props => {
    const { avatars = [], size } = props;
    const total = abbreviateNumber(avatars.length);

    return (
        <StyledCounter size={size}>
            <StyledTextCounter size={size}>{total}</StyledTextCounter>
        </StyledCounter>
    );
};

export default Counter;
