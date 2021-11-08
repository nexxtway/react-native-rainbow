import React, { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import styled from 'styled-components/native';
import { RenderIf } from '..';
import { BaseProps } from '../types';
import Thumb from './thumb';

const Container = styled.View`
    border-radius: 20px;
    background-color: rgb(123, 194, 183);
    padding: 14px 24px;
    height: 56px;
    justify-content: center;
    align-items: center;
`;

const Label = styled.Text`
    color: white;
    font-size: 20px;
    letter-spacing: 0.36;
`;

const shadowStyles = {
    shadowColor: 'rgba(0, 0, 0, 0.22)',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 1,
};

interface Props extends BaseProps {
    label: string;
    onSuccess: () => void;
}

const SwipeButton = (props: Props) => {
    const { label, onSuccess, style } = props;
    const [width, setWidth] = useState(0);
    const onLayout = (event: LayoutChangeEvent) => {
        setWidth(event.nativeEvent.layout.width);
    };
    return (
        <Container onLayout={onLayout} style={[shadowStyles, style]}>
            <Label>{label}</Label>
            <RenderIf isTrue={width > 0}>
                <Thumb maxWidth={width} onSuccess={onSuccess} />
            </RenderIf>
        </Container>
    );
};

SwipeButton.defaultProps = {
    label: 'Swipe to Submit',
    onSuccess: () => {},
};

export default SwipeButton;
