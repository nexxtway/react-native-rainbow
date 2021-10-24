import React, { ReactNode } from 'react';
import NativeCheckbox from '@react-native-community/checkbox';
import RenderIf from '../RenderIf';
import useTheme from '../../hooks/useTheme';
import useReactHookForm from '../../hooks/useReactHookForm';
import getContrastText from '../../styles/helpers/color/getContrastText';
import { Container, Label } from './styled';
import { BaseProps } from '../types';

const checkboxStyle = {
    width: 18,
    height: 18,
};

interface Props extends BaseProps {
    label?: ReactNode;
    onChange?: (value: boolean) => void;
    value?: boolean;
    disabled?: boolean;
    [key: string]: unknown;
}

const Checkbox = (props: Props) => {
    const { label, onChange, value, disabled, style } = useReactHookForm(props);
    const {
        rainbow: { palette },
    } = useTheme();

    const mainColor = disabled ? palette.text.disabled : palette.brand.main;
    const checkColor = disabled ? 'white' : getContrastText(mainColor);
    const tintColors = {
        true: mainColor,
        false: mainColor,
    };

    return (
        <Container style={style}>
            <NativeCheckbox
                boxType="square"
                tintColors={tintColors}
                tintColor={mainColor}
                onCheckColor={checkColor}
                onFillColor={mainColor}
                onTintColor={mainColor}
                onAnimationType="fill"
                offAnimationType="fill"
                disabled={disabled}
                onValueChange={onChange}
                value={value}
                style={checkboxStyle}
            />
            <RenderIf isTrue={!!label}>
                <Label>{label}</Label>
            </RenderIf>
        </Container>
    );
};

export default Checkbox;
