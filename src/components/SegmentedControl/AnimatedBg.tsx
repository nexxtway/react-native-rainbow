import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import { StyledBg } from './styled';

interface Props {
    variant: string;
    disabled: boolean;
    isActive: boolean;
    optionsLength: number;
    activeIndex: number;
}
const AnimatedElement = Animated.createAnimatedComponent(StyledBg);

const AnimatedBg: React.FC<Props> = ({
    variant,
    disabled,
    isActive,
    optionsLength,
    activeIndex = 0,
}) => {
    const positionAnimationValue = useRef(new Animated.Value(0)).current;
    const segmentWidth = 100 / optionsLength;
    const inputRange = Array.from({ length: optionsLength })
        .fill('')
        .map((_, i) => i);

    const outputRange = Array.from({ length: optionsLength })
        .fill('')
        .map((_, i) => `${Math.round(segmentWidth * i * 100) / 100}%`);

    useEffect(() => {
        Animated.timing(positionAnimationValue, {
            toValue: activeIndex,
            useNativeDriver: false,
            easing: Easing.ease,
            duration: 250,
        }).start();
    }, [activeIndex, positionAnimationValue]);

    const interpolate = positionAnimationValue.interpolate({
        inputRange: inputRange,
        outputRange: outputRange,
    });

    const style = {
        left: interpolate,
    };

    return (
        <AnimatedElement
            variant={variant}
            disabled={disabled}
            style={style}
            isActive={isActive}
            optionsLength={optionsLength}
            activeIndex={activeIndex}
        />
    );
};

export default AnimatedBg;
