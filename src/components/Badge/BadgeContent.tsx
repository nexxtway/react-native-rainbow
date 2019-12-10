import React from 'react';
import PropTypes from 'prop-types';
import { BaseProps, BadgeVariant } from '../types';
import { StyledTextBadge } from './styled';

interface Props extends BaseProps {
    variant?: BadgeVariant;
    children?: any;
}

/**
 * Here we handle the content of the badges.
 */
const BadgetContent: React.FC<Props> = props => {
    const { variant, children } = props;
    if (typeof children === 'string' || typeof children === 'number') {
        return <StyledTextBadge variant={variant}>{children}</StyledTextBadge>;
    }
    return children;
};

BadgetContent.propTypes = {
    /* The text or component to be displayed on the badge. */
    children: PropTypes.node,
    /** The variant changes the appearance of the badge.
     * Accepted variants include default, lightest, brand and outline-brand.
     * This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'lightest', 'outline-brand', 'brand']),
};

BadgetContent.defaultProps = {
    children: null,
    variant: 'default',
};

export default BadgetContent;
