import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { BaseProps } from '../types';
import { StyledBadge, StyledBadgeContainer, StyledTextBadge } from './styled';

type badgeVariant = 'default' | 'lightest' | 'outline-brand' | 'brand';

interface Props extends BaseProps {
    label?: ReactNode;
    variant?: badgeVariant;
}

/**
 * Badges are labels which hold small amounts of information.
 */

const Badge: React.FC<Props> = props => {
    const { label, variant, style } = props;

    return (
        <StyledBadgeContainer style={style}>
            <StyledBadge variant={variant}>
                {label && typeof label === 'string' ? (
                    <StyledTextBadge variant={variant}>{label}</StyledTextBadge>
                ) : (
                    label
                )}
            </StyledBadge>
        </StyledBadgeContainer>
    );
};

Badge.propTypes = {
    label: PropTypes.node,
    variant: PropTypes.oneOf(['default', 'lightest', 'outline-brand', 'brand']),
    style: PropTypes.object,
};

Badge.defaultProps = {
    label: null,
    variant: 'default',
    style: undefined,
};

export default Badge;
