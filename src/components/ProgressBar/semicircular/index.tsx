import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { Svg, Path, G, Circle } from 'react-native-svg';
import {
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_ERROR,
    COLOR_WARNING,
    COLOR_GRAY_2,
} from '../../../styles/colors';
import { BaseProps } from '../../types';
import { StyledValue, Footer, FooterText, ValueContainer } from '../styled';

function clamp(value: number) {
    return Math.min(100, Math.max(0, value));
}

interface PolarToCartesianParams {
    centerX: number;
    centerY: number;
    radius: number;
    angleInDegrees: number;
}

function getPolarToCartesian(params: PolarToCartesianParams) {
    const { centerX, centerY, radius, angleInDegrees } = params;
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
    };
}

interface CirclePathParams {
    x: number;
    y: number;
    radius: number;
    endAngle: number;
}

function getCirclePath(params: CirclePathParams) {
    const { x, y, radius, endAngle } = params;
    const startAngle = 0;
    const start = getPolarToCartesian({
        centerX: x,
        centerY: y,
        radius,
        angleInDegrees: endAngle * 0.9999,
    });
    const end = getPolarToCartesian({
        centerX: x,
        centerY: y,
        radius,
        angleInDegrees: startAngle,
    });
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    const d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y,
    ];
    return d.join(' ');
}

const colorMap = {
    brand: COLOR_BRAND,
    success: COLOR_SUCCESS,
    warning: COLOR_WARNING,
    error: COLOR_ERROR,
};
const TRANSPARENT_COLOR = 'rgba(0, 0, 0, 0.3)';

export type Variants = 'brand' | 'success' | 'warning' | 'error';

interface Props extends BaseProps {
    variant?: Variants;
    value?: number;
    max?: number;
    min?: number;
}

const CircularProgress: React.FC<Props> = props => {
    const { value = 0, variant = 'brand', max = 100, min = 0, style } = props;
    const [size, setSize] = useState(0);

    const arcSweepAngle = 180;
    const circleWidth = 10;

    const sizeWithPadding = size / 2;
    const radius = size / 2 - circleWidth / 2;

    const currentFillAngle = (arcSweepAngle * clamp(value)) / max;
    const backgroundPath = getCirclePath({
        x: sizeWithPadding,
        y: sizeWithPadding,
        radius,
        endAngle: arcSweepAngle,
    });
    const circlePath = getCirclePath({
        x: sizeWithPadding,
        y: sizeWithPadding,
        radius,
        endAngle: currentFillAngle,
    });
    const startCoordinate = getPolarToCartesian({
        centerX: sizeWithPadding,
        centerY: sizeWithPadding,
        radius,
        angleInDegrees: 0,
    });
    const endCoordinate = getPolarToCartesian({
        centerX: sizeWithPadding,
        centerY: sizeWithPadding,
        radius,
        angleInDegrees: currentFillAngle,
    });

    return (
        <View
            style={[{ width: '100%', height: size / 2 + 10 }, style]}
            onLayout={event => setSize(event.nativeEvent.layout.width)}
        >
            <Svg width="100%" height="100%">
                <G rotation={-90} originX={size / 2} originY={size / 2}>
                    <Path
                        d={backgroundPath}
                        stroke={COLOR_GRAY_2}
                        strokeWidth={5}
                        strokeLinecap="round"
                        fill="transparent"
                    />
                    {value > 0 && (
                        <Path
                            d={circlePath}
                            stroke={colorMap[variant]}
                            strokeWidth={circleWidth}
                            strokeLinecap="round"
                            fill="transparent"
                        />
                    )}
                    <Circle
                        cx={startCoordinate.x}
                        cy={startCoordinate.y}
                        r="3"
                        fill={TRANSPARENT_COLOR}
                    />
                    <Circle
                        cx={endCoordinate.x}
                        cy={endCoordinate.y}
                        r="3"
                        fill={TRANSPARENT_COLOR}
                    />
                </G>
            </Svg>
            <ValueContainer>
                <StyledValue size={size}>{value}</StyledValue>
            </ValueContainer>
            <Footer>
                <FooterText>{min}</FooterText>
                <FooterText>{max}</FooterText>
            </Footer>
        </View>
    );
};

CircularProgress.propTypes = {
    value: PropTypes.number,
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'error']),
    style: ViewPropTypes.style,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
};

CircularProgress.defaultProps = {
    value: 0,
    variant: 'brand',
    style: undefined,
};

export default CircularProgress;
