import React from 'react';
import PropTypes from 'prop-types';
import { StyledText, StyledSpinner } from './styled';
import { ButtonVariant } from '../types';

interface Props {
    variant?: ButtonVariant;
    disabled?: boolean;
    children?: any;
    isLoading?: boolean;
}

const ButtonContent: React.FC<Props> = props => {
    const { variant, children, disabled, isLoading } = props;

    if (isLoading) {
        return <StyledSpinner variant={variant} />;
    }

    if (typeof children === 'string' || typeof children === 'number') {
        return (
            <StyledText variant={variant} disabled={disabled} numberOfLines={1}>
                {children}
            </StyledText>
        );
    }
    return children;
};

ButtonContent.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
    ]),
    disabled: PropTypes.bool,
};

ButtonContent.defaultProps = {
    children: null,
    variant: 'base',
    disabled: false,
};

export default ButtonContent;
