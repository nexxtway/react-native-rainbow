import { Animated, Easing } from 'react-native';
import { useRef, useCallback, useEffect } from 'react';

const useRotate = (startDelay: number = 500) => {
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
            ]),
        ).start();
    }, [rotate]);

    useEffect(() => {
        setTimeout(() => {
            spin();
        }, startDelay);
    }, [spin, startDelay]);

    return rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
};

export default useRotate;
