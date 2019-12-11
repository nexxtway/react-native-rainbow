import { ReactNode } from 'react';
import styled from 'styled-components/native';
import {
    COLOR_GRAY_2,
    COLOR_DARK_1,
    COLOR_BRAND,
    COLOR_ERROR,
} from '../../../styles/colors';

interface Props {
    isFocused?: boolean;
    hasValue?: boolean;

    isLastInput?: boolean;
    error?: ReactNode;
}

const Input = styled.TextInput<Props>`
    border-bottom-color: ${COLOR_GRAY_2};
    border-bottom-width: 1;
    width: 44;
    padding: 0;
    color: ${COLOR_DARK_1};
    font-size: 40;
    text-align: center;

    ${props =>
        !props.isLastInput &&
        `
        margin-right: 10;
    `}
    ${props =>
        props.hasValue &&
        `
            border-bottom-color: ${COLOR_BRAND};
            border-bottom-width: 1;
    `}
    ${props =>
        props.isFocused &&
        `
            border-bottom-color: ${COLOR_BRAND};
            border-bottom-width: 2;
    `}
    ${props =>
        props.error &&
        `
            border-bottom-color: ${COLOR_ERROR};
            border-bottom-width: 1;
    `}
    ${props =>
        props.error &&
        props.isFocused &&
        `
            border-bottom-color: ${COLOR_ERROR};
            border-bottom-width: 2;
    `}
`;

export default Input;
