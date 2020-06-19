import { Animated, Easing } from 'react-native';
import { useRef, useCallback, useEffect } from 'react';

const { PI } = Math;

const useSpin = (startDelay: number = 500) => {
    const rotate = useRef(new Animated.Value(0)).current;

    const spin = useCallback(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(rotate, {
                    toValue: 1,
                    duration: 1300,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
                Animated.timing(rotate, {
                    toValue: 2,
                    duration: 1300,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
            ]),
        ).start();
    }, [rotate]);

    useEffect(() => {
        setTimeout(() => {
            spin();
        }, startDelay);
    }, [spin, startDelay]);

    return rotate.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [125, PI * 2, -120],
    });
};

export default useSpin;
