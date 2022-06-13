import React, { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import RenderIf from '../RenderIf';
import Thumb from './thumb';
import { Container, SpinnerContainer, Label, StyledSpinner } from './styled';
import { BaseProps } from '../types';

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
    label?: string;
    onSuccess?: () => void;
    isLoading?: boolean;
}

const SwipeButton = (props: Props) => {
    const { label, onSuccess = () => {}, isLoading = false, style } = props;
    const [width, setWidth] = useState(0);
    const onLayout = (event: LayoutChangeEvent) => {
        setWidth(event.nativeEvent.layout.width);
    };
    return (
        <Container onLayout={onLayout} isLoading={isLoading} style={[shadowStyles, style]}>
            <RenderIf isTrue={isLoading}>
                <SpinnerContainer>
                    <StyledSpinner />
                </SpinnerContainer>
            </RenderIf>
            <RenderIf isTrue={!isLoading}>
                <Label numberOfLines={1} ellipsizeMode="tail">
                    {label}
                </Label>
                <RenderIf isTrue={width > 0}>
                    <Thumb maxWidth={width} onSuccess={onSuccess} />
                </RenderIf>
            </RenderIf>
        </Container>
    );
};

SwipeButton.defaultProps = {
    label: 'Swipe to Submit',
    onSuccess: () => {},
    isLoading: false,
};

export default SwipeButton;
