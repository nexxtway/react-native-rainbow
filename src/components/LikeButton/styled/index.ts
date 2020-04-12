import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { SHADOW_1 } from '../../../styles/shadows';
import { COLOR_WHITE, COLOR_GRAY_3 } from '../../../styles/colors';
import { Variant } from '../';

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
    ${props => props.hasValue && props.showLabel && 'padding: 4px;'}
    ${props =>
        props.variant === 'shaded' && `background-color: ${COLOR_WHITE}`};
    ${props => props.variant === 'shaded' && `box-shadow: ${SHADOW_1};`};
    ${props => props.isModalVisible && 'opacity: 0'}
`;

export const IconContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${COLOR_WHITE};
    border-radius: 24px;
    text-transform: uppercase;
`;

export const LableContainer = styled.Text`
    font-size: 20px;
    margin-left: 8px;
    color: ${COLOR_GRAY_3};
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
