import styled from 'styled-components/native';
import { COLOR_GRAY_2, COLOR_GRAY_3, COLOR_ERROR } from '../../../styles/colors';
import { IconPosition } from '../../../components/types';

export interface Props {
    iconPosition?: IconPosition;
}

export const Label = styled.Text`
    font-size: 14px;
    text-align: center;
    margin-bottom: 4px;
    text-transform: uppercase;
    color: ${COLOR_GRAY_3};
`;

export const Error = styled.Text`
    font-size: 14px;
    text-align: center;
    margin-top: 4px;
    color: ${COLOR_ERROR};
`;

export const Icon = styled.View<Props>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 100%;
    color: ${COLOR_GRAY_2};

    ${props =>
        props.iconPosition === 'left' &&
        `
        left: 0;
        margin-left: 15px;
    `}
    ${props =>
        props.iconPosition === 'right' &&
        `
        right: 0;
        margin-right: 15px;
    `}
`;
