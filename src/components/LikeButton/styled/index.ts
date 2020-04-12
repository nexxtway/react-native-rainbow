import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { SHADOW_1 } from '../../../styles/shadows';
import { COLOR_WHITE, COLOR_GRAY_3 } from '../../../styles/colors';

export const LikeButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

interface Props extends BaseProps {
    size?: string;
    shadow?: true;
}
export const IconContainer = styled.View<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${COLOR_WHITE};
    border-radius: 24px;
    text-transform: uppercase;
    ${props => props.shadow && `box-shadow: ${SHADOW_1};`}
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
    border-radius: 24px;
    text-transform: uppercase;
    box-shadow: ${SHADOW_1};
`;

export const ButtonIconContainer = styled.TouchableOpacity``;
