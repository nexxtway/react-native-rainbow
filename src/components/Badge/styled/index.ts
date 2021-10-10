import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import {
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_GRAY_4,
    COLOR_BRAND,
    COLOR_WHITE,
    COLOR_SUCCESS_LIGHT,
    COLOR_SUCCESS_ACTIVE,
    COLOR_WARNING_LIGHT,
    COLOR_ERROR_ACTIVE,
    COLOR_ERROR_LIGHT,
} from '../../../styles/colors';

interface Props extends BaseProps {
    variant?: string;
}

export const StyledBadgeContainer = styled.View<BaseProps>`
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
        background-color: ${COLOR_GRAY_TRANSPARENT_2};
        border-color: transparent;
    `};

    ${props =>
        props.variant === 'lightest' &&
        `
        background-color: ${COLOR_WHITE};
        border-color: ${COLOR_GRAY_TRANSPARENT_2};
    `}

    ${props =>
        props.variant === 'outline-brand' &&
        `
        border-color: ${COLOR_BRAND};
    `}

    ${props =>
        props.variant === 'brand' &&
        `
        background-color: ${COLOR_BRAND};
        border-color: ${COLOR_BRAND};
    `}

    ${props =>
        props.variant === 'success' &&
        `
        background-color: ${COLOR_SUCCESS_LIGHT};
        border-color: transparent;
    `}
    ${props =>
        props.variant === 'warning' &&
        `
        background-color: ${COLOR_WARNING_LIGHT};
        border-color: transparent;
    `}
    ${props =>
        props.variant === 'error' &&
        `
        background-color: ${COLOR_ERROR_LIGHT};
        border-color: transparent;
    `}
`;

export const StyledTextBadge = styled.Text<Props>`
    ${props =>
        props.variant === 'default' &&
        `
        color: ${COLOR_GRAY_4};
    `}
    ${props =>
        props.variant === 'lightest' &&
        `
        color: ${COLOR_GRAY_4};
    `}
    ${props =>
        props.variant === 'outline-brand' &&
        `
        color: ${COLOR_BRAND};
    `}
    ${props =>
        props.variant === 'brand' &&
        `
        color: ${COLOR_WHITE};
    `}
    ${props =>
        props.variant === 'success' &&
        `
        color: ${COLOR_SUCCESS_ACTIVE};
    `}
    ${props =>
        props.variant === 'warning' &&
        `
        color: ${COLOR_ERROR_ACTIVE};
    `}
    ${props =>
        props.variant === 'error' &&
        `
        color: ${COLOR_ERROR_ACTIVE};
    `}
`;
