import { ReactNode } from 'react';
import styled from 'styled-components/native';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export interface Props {
    error?: ReactNode;
    disabled?: boolean;
}

const Input = attachThemeAttrs(styled.TextInput)<Props>`
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    width: 100%;
    padding: 0 45px;
    height: 48px;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};

    ${props =>
        props.error &&
        `
        background-color: ${props.palette.background.main};
        border: 1px solid ${props.palette.error.main};
    `}

    ${props =>
        props.error &&
        `
        box-shadow: ${props.shadows.error};
    `}

    ${props =>
        props.disabled &&
        `
        background-color: ${props.palette.background.disabled};
        color: ${props.palette.text.disabled};
    `}
`;

export default Input;
