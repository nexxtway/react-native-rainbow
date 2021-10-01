import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-native-spinkit';
import { StyledText } from './styled';
import { ButtonVariant } from '../types';
import { COLOR_BRAND } from '../../styles/colors';

interface Props {
    variant?: ButtonVariant;
    disabled?: boolean;
    children?: any;
    isLoading?: boolean;
}

const ButtonContent: React.FC<Props> = props => {
    const { variant, children, disabled, isLoading } = props;

    if (isLoading) {
        return <Spinner type="Arc" size={30} color={COLOR_BRAND} />;
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
