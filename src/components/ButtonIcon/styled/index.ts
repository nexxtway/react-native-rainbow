import styled from 'styled-components/native';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { ButtonIconVariant, ButtonIconSize, BaseProps } from '../../types';

interface Props extends BaseProps {
    disabled?: boolean;
    variant?: ButtonIconVariant;
    size?: ButtonIconSize;
}

export const Button = attachThemeAttrs(styled.TouchableOpacity)<Props>`
    background: transparent;
    border: 0;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
    text-decoration: none;
    overflow: visible;
    text-transform: none;

    ${props =>
        props.variant === 'neutral' &&
        `
            background-color: ${props.palette.background.main};
            border: 1px solid ${props.palette.background.disabled};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${props.palette.brand.main};
            border: 1px solid ${props.palette.brand.main};
        `};
    ${props =>
        props.variant === 'success' &&
        `
            background-color: ${props.palette.success.main};
            border: 1px solid ${props.palette.success.main};
        `};
    ${props =>
        props.disabled &&
        `
            background-color: ${props.palette.background.disabled};
            border: 1px solid transparent;
        `};
    ${props =>
        props.disabled &&
        props.variant === 'base' &&
        `
            background-color: transparent;
            border: 1px solid transparent;
        `};
    ${props =>
        props.disabled &&
        props.variant === 'neutral' &&
        `
            background-color: transparent;
            border: 1px solid transparent;
        `};
    ${props =>
        props.size === 'xx-small' &&
        `
            width: 20px;
            height: 20px;
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            width: 32px;
            height: 32px;
        `};
    ${props =>
        props.size === 'small' &&
        `
            width: 40px;
            height: 40px;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            width: 48px;
            height: 48px;
        `};
    ${props =>
        props.size === 'large' &&
        `
            width: 64px;
            height: 64px;
        `};
`;
