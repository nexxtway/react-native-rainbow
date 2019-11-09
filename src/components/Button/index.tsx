import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
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

Button.defaultProps = {
    label: undefined,
    onPress: () => {},
    variant: 'neutral',
    style: undefined,
};

export default Button;
