import styled from 'styled-components/native';
import { IconPosition } from '../../../components/types';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export interface Props {
    iconPosition?: IconPosition;
}

export const Label = attachThemeAttrs(styled.Text)`
    font-size: 14px;
    text-align: center;
    margin-bottom: 4px;
    text-transform: uppercase;
    color: ${props => props.palette.text.label};
`;

export const Error = attachThemeAttrs(styled.Text)`
    font-size: 14px;
    text-align: center;
    margin-top: 4px;
    color: ${props => props.palette.error.main};
`;

export const Icon = attachThemeAttrs(styled.View)<Props>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 100%;
    color: ${props => props.palette.text.header};

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
