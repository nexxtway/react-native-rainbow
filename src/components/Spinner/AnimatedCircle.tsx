import React from 'react';
import { Circle } from 'react-native-svg';
import { Animated } from 'react-native';
import useSpin from '../../hooks/useSpin';

interface Props {
    stroke: string;
}

const AnimatedElement = Animated.createAnimatedComponent(Circle);
const { PI } = Math;
const r = 20;

const AnimatedCircle: React.FC<Props> = ({ stroke }) => {
    const circumference = r * 2 * PI;
    const spin = useSpin();

    return (
        <AnimatedElement
            stroke={stroke}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={spin}
        />
    );
};

export default AnimatedCircle;
