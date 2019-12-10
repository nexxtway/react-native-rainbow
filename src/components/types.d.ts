import { StyleProp, ViewStyle } from 'react-native';

export interface BaseProps {
    style?: StyleProp<ViewStyle>;
}

export type ButtonVariant =
    | 'base'
    | 'neutral'
    | 'brand'
    | 'outline-brand'
    | 'destructive'
    | 'success';

export type ButtonIconVariant = 'base' | 'brand' | 'success';
export type ButtonIconPosition = 'left' | 'right';

export type ButtonIconSize =
    | 'xx-small'
    | 'x-small'
    | 'small'
    | 'medium'
    | 'large';

export type BadgeVariant = 'default' | 'lightest' | 'outline-brand' | 'brand';
