import { ReactNode } from 'react';
import styled from 'styled-components/native';
import {
    COLOR_GRAY_1,
    COLOR_GRAY_2,
    COLOR_DARK_1,
    COLOR_BRAND,
    COLOR_ERROR,
    COLOR_GRAY_TRANSPARENT_1,
} from '../../../styles/colors';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { SHADOW_OUTLINE, SHADOW_ERROR } from '../../../styles/shadows';

interface Props {
    isFocused?: boolean;
    error?: ReactNode;
    disabled?: boolean;
}

const Input = styled.TextInput<Props>`
    background-color: ${COLOR_GRAY_1};
    border: 1px solid ${COLOR_GRAY_2};
    border-radius: ${BORDER_RADIUS_2};
    width: 100%;
    padding: 0 16px;
    height: 44;
    color: ${COLOR_DARK_1};
    font-size: ${FONT_SIZE_TEXT_LARGE};

    ${props =>
        props.isFocused &&
        `
         border: 1px solid ${COLOR_BRAND};
         background-color: ${COLOR_GRAY_1};
         box-shadow: ${SHADOW_OUTLINE};
    `}

    ${props =>
        props.error &&
        `
        background-color: ${COLOR_GRAY_1};
        border: 1px solid ${COLOR_ERROR};
    `}

    ${props =>
        props.error &&
        props.isFocused &&
        `
        box-shadow: ${SHADOW_ERROR};
        padding: 0 16px;
    `}

    ${props =>
        props.disabled &&
        `
        background-color: ${COLOR_GRAY_TRANSPARENT_1};
        color: ${COLOR_GRAY_2};
    `}
`;

export default Input;
