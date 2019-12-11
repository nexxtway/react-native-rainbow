import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import {
    COLOR_GRAY_TRANSPARENT_4,
    COLOR_DARK_2,
    COLOR_BRAND,
    COLOR_WHITE,
} from '../../../styles/colors';

interface Props extends BaseProps {
    variant?: string;
}

export const StyledBadgeContainer = styled.View`
    align-self: center;
`;

export const StyledBadge = styled.View<Props>`
    
    border-width: 1px;
    padding: 2px 10px;
    text-align: center;
    border-radius: 16px;
    overflow: hidden;
    ${props =>
        props.variant === 'default' &&
        `
        background: ${COLOR_GRAY_TRANSPARENT_4}
        border-color: ${COLOR_GRAY_TRANSPARENT_4}
    `};

    ${props =>
        props.variant === 'lightest' &&
        `
        background: ${COLOR_WHITE};
        border-color: ${COLOR_GRAY_TRANSPARENT_4}
    `}

    ${props =>
        props.variant === 'outline-brand' &&
        `
        color: ${COLOR_BRAND}
        border-color: ${COLOR_BRAND}
    `}

    ${props =>
        props.variant === 'brand' &&
        `
        color: ${COLOR_WHITE}
        background: ${COLOR_BRAND}
        border-color: ${COLOR_BRAND}
    `}
`;

export const StyledTextBadge = styled.Text<Props>`
    ${props =>
        props.variant === 'default' &&
        `
        color: ${COLOR_DARK_2}
    `}
    ${props =>
        props.variant === 'lightest' &&
        `
        color: ${COLOR_DARK_2}
    `}
    ${props =>
        props.variant === 'outline-brand' &&
        `
        color: ${COLOR_BRAND}
    `}
    ${props =>
        props.variant === 'brand' &&
        `
        color: ${COLOR_WHITE}
    `}
`;