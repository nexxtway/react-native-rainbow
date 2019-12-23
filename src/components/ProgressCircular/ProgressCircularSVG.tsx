import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import {
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_ERROR,
    COLOR_WARNING,
} from '../../styles/colors';
import { BaseProps } from '../types';

const colors = {
    brand: COLOR_BRAND,
    success: COLOR_SUCCESS,
    warning: COLOR_WARNING,
    error: COLOR_ERROR,
};

type Variants = 'brand' | 'success' | 'warning' | 'error';

interface Props extends BaseProps {
    variant?: Variants;
    value?: number;
}

/**
 * A profress circular svg component represents an object or entity
 */

const ProgressCircularSVG: React.FC<Props> = props => {
    const { variant = 'brand', value = 0 } = props;
    return (
        <Svg viewBox="0 0 100 100" style={{ height: '100%', width: '100%' }}>
            <Path
                d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                stroke="#ccc"
                strokeLinecap="round"
                strokeWidth={1}
                fillOpacity={0}
            />
            <Path
                d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                stroke={colors[variant]}
                strokeLinecap="round"
                strokeWidth={6}
                fillOpacity={0}
                strokeDasharray={`${(value / 100) * 300} 300`}
            />
        </Svg>
    );
};

ProgressCircularSVG.propTypes = {
    /**Variant defines the colors of the progress circular it could be one of 'brand' | 'success' | 'warning' | 'error'
     * default value is brand
     */
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'error']),
    /**the value percentage of the progress circular
     * default 0
     */
    value: PropTypes.number,
};

ProgressCircularSVG.defaultProps = {
    variant: 'brand',
    value: 0,
};

export default ProgressCircularSVG;
