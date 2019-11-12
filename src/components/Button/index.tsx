import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import PropTypes from 'prop-types';
import StyledButton from './styled/button';
import StyledText from './styled/text';
import { ButtonVariant } from '../types';

export interface ButtonProps {
    onPress?: (event?: any) => void;
    label?: any;
    disabled?: boolean;
    loading?: boolean;
    variant?: ButtonVariant;
    style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = props => {
    const { onPress, label, variant, style } = props;

    return (
        <StyledButton style={style} variant={variant} onPress={onPress}>
            <StyledText variant={variant} numberOfLines={1}>
                {label}
            </StyledText>
        </StyledButton>
    );
};

Button.propTypes = {
    onPress: PropTypes.func,
    label: PropTypes.node,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'inverse',
        'border-inverse',
    ]),
    style: PropTypes.object,
};

Button.defaultProps = {
    onPress: () => {},
    label: undefined,
    disabled: false,
    loading: false,
    variant: 'neutral',
    style: undefined,
};

export default Button;
