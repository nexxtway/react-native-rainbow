import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { SHADOW_1 } from '../../../styles/shadows';
import { COLOR_WHITE, COLOR_GRAY_3 } from '../../../styles/colors';
import { Variant, Size } from '../';

interface Props extends BaseProps {
    variant?: Variant;
    hasValue?: boolean;
    showLabel?: boolean;
    isModalVisible?: boolean;
}

export const ButtonContainer = styled.View<Props>`
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 50px;
    opacity: 1;
    ${props => props.hasValue && props.showLabel && 'padding: 2px;'}
    ${props =>
        props.variant === 'shaded' && `background-color: ${COLOR_WHITE}`};
    ${props => props.variant === 'shaded' && `box-shadow: ${SHADOW_1};`};
    ${props => props.isModalVisible && 'opacity: 0'}
`;

interface ButtonProps extends BaseProps {
    size?: Size;
}

export const IconContainer = styled.View<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${COLOR_WHITE};
    border-radius: 24px;
    text-transform: uppercase;
    ${props =>
        props.size === 'x-small' &&
        `
            width: 20;
            height: 20;
        `};
    ${props =>
        props.size === 'small' &&
        `
            width: 30;
            height: 30;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            width: 35;
            height: 35;
        `};
    ${props =>
        props.size === 'large' &&
        `
            width: 40;
            height: 40;
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
            font-size: 10px;
            margin-left: 4px;
            margin-right: 1px;
        `};
    ${props =>
        props.size === 'small' &&
        `
            font-size: 18px;
            margin-left: 6px;
            margin-right: 3px;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            font-size: 25px;
        `};
    ${props =>
        props.size === 'large' &&
        `
            font-size: 30px;
            margin-left: 8px;
            margin-right: 4px;
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
    padding: 4px;
`;

export const ButtonIconContainer = styled.TouchableOpacity`
    margin: 4px;
`;
