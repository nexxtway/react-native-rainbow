import React, { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';
import styled from 'styled-components/native';
import Icon from './icon';

const THUMB_WIDTH = 60;

const Container = styled(Animated.View)`
    width: ${THUMB_WIDTH}px;
    height: 56px;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px;
`;

const ThumbIcon = styled.View`
    width: 60px;
    height: 56px;
    background-color: rgb(0, 171, 142);
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;
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
                    Animated.spring(offset, { toValue: maxWidth, useNativeDriver: false }).start();
                    onSuccess();
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
            <Container style={{ width: offset }} {...panResponder.panHandlers}>
                <ThumbIcon>
                    <Icon />
                </ThumbIcon>
            </Container>
        );
    }
    return null;
};

export default Thumb;
