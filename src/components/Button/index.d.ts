import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ButtonVariant } from '../types';

export interface ButtonProps {
    onPress?: (event?: any) => void;
    label?: any;
    disabled?: boolean;
    loading?: boolean;
    variant?: ButtonVariant;
    style?: StyleProp<ViewStyle>;
}

declare const Button: React.FC<ButtonProps>;
export default Button;
