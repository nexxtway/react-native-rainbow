import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import Spinkit from 'react-native-spinkit';
import { Palette } from 'styled-components';
import useTheme from '../../hooks/useTheme';
import { BaseProps } from '../types';
import { SpinnerSize, SpinnerVariant } from './types';

const sizeMap: Record<string, number> = {
    'xx-small': 18,
    'x-small': 22,
    small: 26,
    medium: 30,
    large: 38,
};

const getSpinnerColor = ({ palette, variant }: { palette: Palette; variant: SpinnerVariant }) => {
    if (variant === 'brand') {
        return palette.brand.main;
    }
    if (variant === 'neutral') {
        return palette.border.divider;
    }
    return palette.brand.main;
};

const type = Platform.OS === 'ios' ? 'Arc' : 'FadingCircleAlt';

interface Props extends BaseProps {
    isVisible?: boolean;
    size?: SpinnerSize;
    variant?: SpinnerVariant;
}

/**
 * Spinners should be shown when retrieving data or performing slow,
 * help to reassure the user that the system is actively retrieving data.
 */
const Spinner = ({ size = 'medium', variant = 'brand', isVisible, style }: Props) => {
    const {
        rainbow: { palette },
    } = useTheme();

    if (isVisible) {
        const spinnerSize = sizeMap[size] || sizeMap.medium;
        return (
            <Spinkit
                style={style}
                type={type}
                size={spinnerSize}
                color={getSpinnerColor({ palette, variant })}
            />
        );
    }
    return null;
};

Spinner.propTypes = {
    /**
     * Show/Hide the spinner
     * */
    isVisible: PropTypes.bool,
    /**
     * The size of the spinner. Accepted sizes are small, medium and large.
     * This values defaults to medium.
     */
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /**
     * The variant changes the appearance of the spinner.
     * Accepted variants are base and neutral.
     * This value defaults to brand.
     */
    variant: PropTypes.oneOf(['brand', 'neutral']),
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Spinner.defaultProps = {
    isVisible: true,
    size: 'medium',
    variant: 'brand',
    style: undefined,
};

export default Spinner;
