import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { BaseProps } from '../types';
import { StyledBadge, StyledBadgeContainer } from './styled/badge';

type badgeVariant = 'default' | 'lightest' | 'outline-brand' | 'brand';

interface Props extends BaseProps {
    label?: ReactNode;
    variant?: badgeVariant;
    style?: object;
}

const Badge: React.FC<Props> = props => {
    const { label, variant, style } = props;
    return (
        <StyledBadgeContainer>
            <StyledBadge style={style} variant={variant}>
                {label}
            </StyledBadge>
        </StyledBadgeContainer>
    );
};

Badge.propTypes = {
    label: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'lightest', 'outline-brand', 'brand']),
    style: PropTypes.object,
};

Badge.defaultProps = {
    variant: 'default',
};

export default Badge;
