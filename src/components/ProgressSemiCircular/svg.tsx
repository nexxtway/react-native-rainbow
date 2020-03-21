import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text } from 'react-native';
import { Svg, Path, G, Circle } from 'react-native-svg';

interface Props {}

const CircularProgress: React.FC<Props> = props => {
    const {
        size,
        width,
        backgroundWidth,
        tintColor,
        tintTransparency,
        backgroundColor,
        style,
        rotation,
        lineCap,
        arcSweepAngle,
        fill,
        children,
        childrenContainerStyle,
        padding,
        renderCap,
        dashedBackground,
        dashedTint,
    } = props;

    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    };

    const getCirclePath = (x, y, radius, startAngle, endAngle) => {
        var start = polarToCartesian(x, y, radius, endAngle * 0.9999);
        var end = polarToCartesian(x, y, radius, startAngle);
        var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        var d = [
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
    };

    const clampFill = fill => Math.min(100, Math.max(0, fill));

    const maxWidthCircle = backgroundWidth
        ? Math.max(width, backgroundWidth)
        : width;
    const sizeWithPadding = size / 2 + padding / 2;
    const radius = size / 2 - maxWidthCircle / 2 - padding / 2;

    const currentFillAngle = (arcSweepAngle * clampFill(fill)) / 100;
    const backgroundPath = getCirclePath(
        sizeWithPadding,
        sizeWithPadding,
        radius,
        tintTransparency ? 0 : currentFillAngle,
        arcSweepAngle,
    );
    const circlePath = getCirclePath(
        sizeWithPadding,
        sizeWithPadding,
        radius,
        0,
        currentFillAngle,
    );
    const coordinate = polarToCartesian(
        sizeWithPadding,
        sizeWithPadding,
        radius,
        currentFillAngle,
    );

    const offset = size - maxWidthCircle * 2;

    const localChildrenContainerStyle = {
        ...{
            position: 'absolute',
            left: maxWidthCircle + padding / 2,
            top: maxWidthCircle + padding / 2,
            width: offset,
            height: offset,
            borderRadius: offset / 2,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        },
        ...childrenContainerStyle,
    };

    const strokeDasharrayTint =
        dashedTint.gap > 0
            ? Object.values(dashedTint).map(value => parseInt(value))
            : null;

    const strokeDasharrayBackground =
        dashedBackground.gap > 0
            ? Object.values(dashedBackground).map(value => parseInt(value))
            : null;

    return (
        <View style={{ width: 150, height: 85, marginBottom: 24 }}>
            <Svg width="100%" height="100%">
                <G
                    rotation={rotation}
                    originX={(size + padding) / 2}
                    originY={(size + padding) / 2}
                >
                    <Path
                        d={backgroundPath}
                        stroke={backgroundColor}
                        strokeWidth={5}
                        strokeLinecap={lineCap}
                        strokeDasharray={strokeDasharrayBackground}
                        fill="transparent"
                    />
                    {fill > 0 && (
                        <Path
                            d={circlePath}
                            stroke={tintColor}
                            strokeWidth={width}
                            strokeLinecap={lineCap}
                            strokeDasharray={strokeDasharrayTint}
                            fill="transparent"
                        />
                    )}
                    <Circle cx={75} cy={5} r="3" fill="blue" />
                    <Circle
                        cx={coordinate.x}
                        cy={coordinate.y}
                        r="3"
                        fill="blue"
                    />
                </G>
            </Svg>
            {/* {children && (
                    <View style={localChildrenContainerStyle}>
                        {children(fill)}
                    </View>
                )} */}
            <Text>50</Text>
        </View>
    );
};

CircularProgress.propTypes = {
    style: ViewPropTypes.style,
    size: PropTypes.number.isRequired,
    fill: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    backgroundWidth: PropTypes.number,
    tintColor: PropTypes.string,
    tintTransparency: PropTypes.bool,
    backgroundColor: PropTypes.string,
    rotation: PropTypes.number,
    lineCap: PropTypes.string,
    arcSweepAngle: PropTypes.number,
    children: PropTypes.func,
    childrenContainerStyle: ViewPropTypes.style,
    padding: PropTypes.number,
    renderCap: PropTypes.func,
    dashedBackground: PropTypes.object,
    dashedTint: PropTypes.object,
};

CircularProgress.defaultProps = {
    style: undefined,
    size: 150,
    fill: 80,
    width: 10,
    tintColor: 'red',
    tintTransparency: true,
    backgroundColor: 'green',
    rotation: -90,
    lineCap: 'round',
    arcSweepAngle: 180,
    padding: 0,
    dashedBackground: { width: 0, gap: 0 },
    dashedTint: { width: 0, gap: 0 },
};

export default CircularProgress;
