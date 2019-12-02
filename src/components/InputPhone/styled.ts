import styled from 'styled-components/native';
import { COLOR_GRAY_3 } from '../../styles/colors';

export const InputContainer = styled.View<{}>`
    display: flex;
    flex-direction: row;
    position: relative;
`;

export const LeftElement = styled.View<{}>`
    flex-direction: row;
    position: absolute;
    left: 10;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const PrefixCode = styled.Text<{}>`
    color: ${COLOR_GRAY_3};
    font-size: 16;
    padding-left: 8;
`;
