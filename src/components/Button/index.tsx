import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import PropTypes from 'prop-types';
import StyledButton from './styled/button';
import StyledText from './styled/text';
import { ButtonVariant } from '../types';

interface Props {
    onPress?: (event?: any) => void;
    label?: ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    variant?: ButtonVariant;
    style?: StyleProp<ViewStyle>;
}

const Button: React.FC<Props> = props => {
    const { onPress, label, disabled, isLoading, variant, style } = props;
    const isDisabled = disabled || isLoading;

    return (
        <StyledButton
            style={style}
            variant={variant}
            onPress={onPress}
            disabled={isDisabled}
        >
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
    isLoading: PropTypes.bool,
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
    ]),
    style: PropTypes.object,
};

Button.defaultProps = {
    onPress: () => {},
    label: undefined,
    disabled: false,
    isLoading: false,
    variant: 'neutral',
    style: undefined,
};

export default Button;
