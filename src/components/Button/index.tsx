import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import PropTypes from 'prop-types';
import StyledButton from './styled/button';
import StyledText from './styled/text';
import StyledIcon from './styled/icon';
import RenderIf from '../RenderIf';
import { ButtonVariant, ButtonIconPosition } from '../types';

interface Props {
    onPress?: (event?: any) => void;
    label?: ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    variant?: ButtonVariant;
    style?: StyleProp<ViewStyle>;
    icon?: ReactNode;
    iconPosition?: ButtonIconPosition;
}

const Button: React.FC<Props> = props => {
    const {
        onPress,
        label,
        disabled,
        isLoading,
        variant,
        style,
        icon,
        iconPosition,
    } = props;
    const isDisabled = disabled || isLoading;
    const hasLeftIcon = !!(icon && iconPosition === 'left');
    const hasRightIcon = !!(icon && iconPosition === 'right');

    return (
        <StyledButton
            style={style}
            variant={variant}
            onPress={onPress}
            disabled={isDisabled}
            hasLeftIcon={hasLeftIcon}
            hasRightIcon={hasRightIcon}
        >
            <RenderIf isTrue={hasLeftIcon}>
                <StyledIcon iconPosition={iconPosition}>{icon}</StyledIcon>
            </RenderIf>
            <StyledText
                variant={variant}
                disabled={isDisabled}
                numberOfLines={1}
            >
                {label}
            </StyledText>
            <RenderIf isTrue={hasRightIcon}>
                <StyledIcon iconPosition={iconPosition}>{icon}</StyledIcon>
            </RenderIf>
        </StyledButton>
    );
};

Button.propTypes = {
    onPress: PropTypes.func,
    label: PropTypes.node,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
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
    icon: undefined,
    iconPosition: 'right',
    disabled: false,
    isLoading: false,
    variant: 'neutral',
    style: undefined,
};

export default Button;
