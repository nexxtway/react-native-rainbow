import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled/button';
import { BaseProps, ButtonIconVariant, ButtonIconSize } from '../types';

export interface Props extends BaseProps {
    onPress?: (event?: any) => void;
    icon?: ReactNode;
    disabled?: boolean;
    variant?: ButtonIconVariant;
    size?: ButtonIconSize;
}

const ButtonIcon: React.FC<Props> = props => {
    const { onPress, icon, disabled, variant, size, style } = props;

    return (
        <StyledButton
            onPress={onPress}
            disabled={disabled}
            variant={variant}
            size={size}
            style={style}
        >
            {icon}
        </StyledButton>
    );
};

ButtonIcon.propTypes = {
    onPress: PropTypes.func,
    icon: PropTypes.node,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['base', 'brand', 'success']),
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    style: PropTypes.object,
};

ButtonIcon.defaultProps = {
    onPress: () => {},
    icon: undefined,
    disabled: false,
    variant: 'base',
    size: 'medium',
    style: undefined,
};

export default ButtonIcon;
