import styled from 'styled-components/native';
import { COLOR_GRAY_3, COLOR_ERROR } from '../../../styles/colors';

type InputIconPostions = 'left' | 'right';

export interface Props {
    iconPosition?: InputIconPostions;
}

export const Label = styled.Text`
    font-size: 14;
    text-align: center;
    margin-bottom: 4;
    text-transform: uppercase;
    color: ${COLOR_GRAY_3};
`;

export const Error = styled.Text`
    font-size: 14;
    text-align: center;
    margin-top: 4;
    color: ${COLOR_ERROR};
`;

export const Icon = styled.View<Props>`
    position: absolute;
    top: 14px;
    width: 20px;
    height: 20px;
    color: ${COLOR_GRAY_3};

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
