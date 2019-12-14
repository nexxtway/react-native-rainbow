import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled/button';
import { StyledIcon } from './styled/index';
import RenderIf from '../RenderIf';
import { BaseProps, ButtonVariant, IconPosition } from '../types';
import ButtonContent from './buttonContent';

interface Props extends BaseProps {
    onPress?: (event?: any) => void;
    label?: ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    variant?: ButtonVariant;
    icon?: ReactNode;
    iconPosition?: IconPosition;
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
            <ButtonContent variant={variant} disabled={isDisabled}>
                {label}
            </ButtonContent>
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
    iconPosition: 'left',
    disabled: false,
    isLoading: false,
    variant: 'neutral',
    style: undefined,
};

export default Button;
