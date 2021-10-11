import { ReactNode } from 'react';
import styled from 'styled-components/native';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { IconPosition } from '../../../components/types';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export interface Props {
    isFocused?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    hasIcon?: boolean;
    iconPosition?: IconPosition;
}

const Input = attachThemeAttrs(styled.TextInput)<Props>`
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    width: 100%;
    padding: 0 16px;
    height: 48px;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};

    ${props =>
        props.isFocused &&
        `
        border: 1px solid ${props.palette.brand.main};
        background-color: ${props.palette.background.main};
        box-shadow: ${props.shadows.brand};
    `}

    ${props =>
        props.error &&
        `
        background-color: ${props.palette.background.main};
        border: 1px solid ${props.palette.error.main};
    `}

    ${props =>
        props.error &&
        props.isFocused &&
        `
        box-shadow: ${props.shadows.error};
        padding: 0 16px;
    `}

    ${props =>
        props.disabled &&
        `
        background-color: ${props.palette.background.disabled};
        color: ${props.palette.text.disabled};
    `}
    ${props =>
        props.hasIcon &&
        props.iconPosition === 'left' &&
        `
        padding-left: 45px;
    `}
    ${props =>
        props.hasIcon &&
        props.iconPosition === 'right' &&
        `
        padding-right: 45px;
    `}
`;

export default Input;
