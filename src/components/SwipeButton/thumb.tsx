import React, { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';
import Icon from './icon';
import { ThumbContainer, ThumbIcon } from './styled';

const THUMB_WIDTH = 60;

interface Props {
    maxWidth: number;
    onSuccess: () => void;
}

const Thumb = (props: Props) => {
    const { maxWidth, onSuccess } = props;
    const offset = useRef(new Animated.Value(THUMB_WIDTH)).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_event, gestureState) => {
                const { dx } = gestureState;
                if (dx > 0) {
                    Animated.timing(offset, {
                        toValue: Math.min(dx + THUMB_WIDTH, maxWidth),
                        duration: 0,
                        useNativeDriver: false,
                    }).start();
                }
            },
            onPanResponderEnd: (_event, gestureState) => {
                if (gestureState.dx > maxWidth / 2) {
                    Animated.spring(offset, {
                        toValue: maxWidth,
                        useNativeDriver: false,
                        restSpeedThreshold: 100,
                        restDisplacementThreshold: 40,
                    }).start(() => onSuccess());
                } else {
                    Animated.spring(offset, {
                        toValue: THUMB_WIDTH,
                        useNativeDriver: false,
                    }).start();
                }
            },
        }),
    ).current;
    if (maxWidth > 0) {
        return (
            <ThumbContainer
                width={THUMB_WIDTH}
                style={{ width: offset }}
                {...panResponder.panHandlers}
            >
                <ThumbIcon>
                    <Icon />
                </ThumbIcon>
            </ThumbContainer>
        );
    }
    return null;
};

export default Thumb;
