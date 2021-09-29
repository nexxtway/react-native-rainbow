import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { SHADOW_1 } from '../../../styles/shadows';
import { COLOR_WHITE, COLOR_GRAY_3 } from '../../../styles/colors';
import { Variant, Size, Value } from '../';

interface Props extends BaseProps {
    variant?: Variant;
    hasValue?: boolean;
    showLabel?: boolean;
    isModalVisible?: boolean;
}

interface ButtonProps extends BaseProps {
    size?: Size;
    value?: Value;
}

export const Container = styled.TouchableOpacity<Props>`
    background-color: transparent;
    padding: 4px;
`;

export const ButtonContainer = styled.View<Props>`
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: transparent;
    opacity: 1;
    ${props =>
        props.variant === 'shaded' &&
        `
            background-color: ${COLOR_WHITE};
            box-shadow: ${SHADOW_1};
            padding: 4px;
        `};
    ${props => props.isModalVisible && 'opacity: 0'}
`;

export const IconContainer = styled.View<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    ${props =>
        props.size === 'x-small' &&
        `
            width: 20;
            height: 20;
        `};
    ${props =>
        props.size === 'small' &&
        `
            width: 24;
            height: 24;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            width: 28;
            height: 28;
        `};
    ${props =>
        props.size === 'large' &&
        `
            width: 32;
            height: 32;
        `};
`;

export const LableContainer = styled.Text<ButtonProps>`
    font-size: 20px;
    margin-left: 8px;
    margin-right: 3px;
    color: ${COLOR_GRAY_3};
    ${props =>
        props.size === 'x-small' &&
        `
            font-size: 14px;
            margin-left: 4px;
        `};
    ${props =>
        props.size === 'small' &&
        `
            font-size: 16px;
            margin-left: 4px;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            font-size: 18px;
            margin-left: 4px;
        `};
    ${props =>
        props.size === 'large' &&
        `
            font-size: 20px;
            margin-left: 4px;
            margin-right: 4px;
        `};
    ${props =>
        props.value === 'like' &&
        `
            color: #44A4EC;
            font-weight: 700;
        `};
    ${props =>
        props.value === 'love' &&
        `
            color: #FE3D5F;
            font-weight: 700;
        `};
    ${props =>
        (props.value === 'haha' || props.value === 'wow' || props.value === 'sad') &&
        `
            color: #F3D05C;
            font-weight: 700;
        `};

    ${props =>
        props.value === 'angry' &&
        `
            color: #FD7458;
            font-weight: 700;
        `};
`;

export const StatesContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${COLOR_WHITE};
    border-radius: 50px;
    text-transform: uppercase;
    box-shadow: ${SHADOW_1};
    flex-shrink: 0;
    padding: 6px;
`;

export const ButtonIconContainer = styled.TouchableOpacity`
    margin: 4px;
`;
