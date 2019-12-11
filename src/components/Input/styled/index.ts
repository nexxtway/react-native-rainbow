import styled from 'styled-components/native';
import { COLOR_GRAY_3, COLOR_ERROR } from '../../../styles/colors';

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
