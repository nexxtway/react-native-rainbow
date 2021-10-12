import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

interface Props extends BaseProps {
    variant?: string;
}

export const StyledBadgeContainer = styled.View<BaseProps>`
    align-self: center;
`;

export const StyledBadge = attachThemeAttrs(styled.View)<Props>`
    border-width: 1px;
    padding: 2px 10px;
    text-align: center;
    border-radius: 16px;
    overflow: hidden;

    ${props =>
        props.variant === 'default' &&
        `
        background-color: ${props.palette.background.disabled};
        border-color: transparent;
    `};

    ${props =>
        props.variant === 'lightest' &&
        `
        background-color: ${props.palette.background.main};
        border-color: ${props.palette.background.disabled};
    `}

    ${props =>
        props.variant === 'outline-brand' &&
        `
        border-color: ${props.palette.brand.main};
    `}

    ${props =>
        props.variant === 'brand' &&
        `
        background-color: ${props.palette.brand.main}
        border-color: ${props.palette.brand.main}
    `}

    ${props =>
        props.variant === 'success' &&
        `
        background-color: ${props.palette.success.light};
        border-color: transparent;
    `}
    ${props =>
        props.variant === 'warning' &&
        `
        background-color: ${props.palette.warning.light};
        border-color: transparent;
    `}
    ${props =>
        props.variant === 'error' &&
        `
        background-color: ${props.palette.error.light};
        border-color: transparent;
    `}
`;

export const StyledTextBadge = attachThemeAttrs(styled.Text)<Props>`
    ${props =>
        props.variant === 'default' &&
        `
        color: ${props.palette.text.label};
    `}
    ${props =>
        props.variant === 'lightest' &&
        `
        color: ${props.palette.text.label};
    `}
    ${props =>
        props.variant === 'outline-brand' &&
        `
        color: ${props.palette.brand.main};
    `}
    ${props =>
        props.variant === 'brand' &&
        `
        color: ${props.palette.getContrastText(props.palette.brand.main)};
    `}
    ${props =>
        props.variant === 'success' &&
        `
        color: ${props.palette.success.dark};
    `}
    ${props =>
        props.variant === 'warning' &&
        `
        color: ${props.palette.warning.dark};
    `}
    ${props =>
        props.variant === 'error' &&
        `
        color: ${props.palette.error.dark};
    `}
`;
