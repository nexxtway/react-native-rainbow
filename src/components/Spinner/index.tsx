import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import Svg from 'react-native-svg';

import { SpinnerSize, SpinnerVariant } from './types';
import { SpinnerContainer, variants } from './styled';
import useRotate from '../../hooks/useRotate';
import AnimatedCircle from './AnimatedCircle';

interface Props {
    isVisible?: boolean;
    size?: SpinnerSize;
    variant?: SpinnerVariant;
}

/**
 * Spinners should be shown when retrieving data or performing slow,
 * help to reassure the user that the system is actively retrieving data.
 */
const Spinner: React.FC<Props> = ({ size = 'medium', variant = 'brand', isVisible }) => {
    const rotate = useRotate();
    const style = { transform: [{ rotate }] };
    const stroke = variants[variant] || variants.brand;

    if (isVisible) {
        return (
            <Animated.View style={style}>
                <SpinnerContainer size={size}>
                    <Svg viewBox="0 0 50 50" height="100%" width="100%">
                        <AnimatedCircle stroke={stroke} />
                    </Svg>
                </SpinnerContainer>
            </Animated.View>
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
     * This values defaults to medium
     */
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /**
     * The variant changes the appearance of the spinner.
     * Accepted variants are base and neutral.
     * This value defaults to brand
     */
    variant: PropTypes.oneOf(['brand', 'neutral']),
};

Spinner.defaultProps = {
    isVisible: true,
    size: 'medium',
    variant: 'brand',
};

export default Spinner;
