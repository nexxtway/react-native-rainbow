import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledBar } from './styled';
import Semicircular from './semicircular';
import { BaseProps } from '../types';

export type Variants = 'brand' | 'success' | 'warning' | 'error';
export type Shape = 'linear' | 'semicircular';

interface Props extends BaseProps {
    variant?: Variants;
    shape?: Shape;
    value?: number;
    min?: number;
    max?: number;
}

function getNormalizedValue(value, max, min) {
    return Math.min(max, Math.max(min, value));
}

/**
 * ProgressBar component communicates to the user the progress of a particular process.
 */
const ProgressBar: React.FC<Props> = props => {
    const { style, variant, shape = 'linear', value, min, max } = props;
    const normalizedValue = useMemo(() => getNormalizedValue(value, max, min), [
        max,
        min,
        value,
    ]);

    if (shape === 'semicircular') {
        return (
            <Semicircular
                style={style}
                variant={variant}
                value={normalizedValue}
                max={max}
                min={min}
            />
        );
    }

    return (
        <StyledContainer style={style}>
            <StyledBar value={normalizedValue} variant={variant} />
        </StyledContainer>
    );
};

ProgressBar.propTypes = {
    /** An object with custom style applied to the outer element.
     * default value is undefined
     */
    style: PropTypes.object,
    /** Variant defines the colors of the progress it could be one of 'brand' | 'success' | 'warning' | 'error'
     * default value is brand
     */
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'error']),
    /** Defines the shape of the progress. */
    shape: PropTypes.oneOf(['linear', 'semicircular']),
    /**The percentage value of the progress. It must be between 0 and 100.
     * default 0
     */
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
};

ProgressBar.defaultProps = {
    style: undefined,
    variant: 'brand',
    shape: 'linear',
    value: 0,
    min: 0,
    max: 100,
};

export default ProgressBar;
