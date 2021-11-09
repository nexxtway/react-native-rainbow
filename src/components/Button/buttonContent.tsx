import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import Spinner from 'react-native-spinkit';
import { Palette } from 'styled-components';
import { StyledText } from './styled';
import { ButtonVariant } from '../types';
import useTheme from '../../hooks/useTheme';

interface Props {
    variant?: ButtonVariant;
    disabled?: boolean;
    children?: any;
    isLoading?: boolean;
}

const getSpinnerColor = (palette: Palette, variant?: ButtonVariant): string => {
    if (variant === 'brand' || variant === 'destructive' || variant === 'success') {
        return palette.getContrastText(palette.text.main);
    }
    if (variant === 'neutral') {
        return palette.background.highlight;
    }
    return palette.brand.main;
};

const ButtonContent: React.FC<Props> = props => {
    const { variant, children, disabled, isLoading } = props;
    const {
        rainbow: { palette },
    } = useTheme();

    if (isLoading) {
        const type = Platform.OS === 'ios' ? 'Arc' : 'FadingCircleAlt';
        return <Spinner type={type} size={30} color={getSpinnerColor(palette, variant)} />;
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
