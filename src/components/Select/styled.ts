import { ReactNode } from 'react';
import styled from 'styled-components/native';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';
import ArrowDown from '../Icons/arrowDown';

interface Props {
    error?: ReactNode;
}

export const ArrowIcon = attachThemeAttrs(styled(ArrowDown))<Props>`
    width: 16px;
    height: 16px;
    color: ${props => props.palette.brand.main};

    ${props =>
        props.disabled &&
        `
        color: ${props.palette.text.disabled}
    `}

    ${props =>
        props.error &&
        `
        color: ${props.palette.error.main};
    `}
`;
