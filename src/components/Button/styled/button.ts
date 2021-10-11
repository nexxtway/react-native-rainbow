import styled from 'styled-components/native';
import { COLOR_GRAY_TRANSPARENT_2 } from '../../../styles/colors';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { ButtonVariant, BaseProps } from '../../types';

interface Props extends BaseProps {
    variant?: ButtonVariant;
    disabled?: boolean;
    hasRightIcon?: boolean;
    hasLeftIcon?: boolean;
    isLoading?: boolean;
}

const StyledButton = attachThemeAttrs(styled.TouchableOpacity)<Props>`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 100px;
    text-decoration: none;
    padding: 0 16px;
    height: 48px;
    position: relative;

    ${props =>
        props.variant === 'neutral' &&
        `
            background-color: ${props.palette.background.main};
            border: 1px solid ${props.palette.border.divider};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${props.palette.brand.main};
            border: 1px solid ${props.palette.brand.main};
        `};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            background-color: transparent;
            border: 1px solid ${props.palette.brand.main};
        `};
    ${props =>
        props.variant === 'destructive' &&
        `
            background-color: ${props.palette.error.main};
            border: 1px solid ${props.palette.error.main};
        `};
    ${props =>
        props.variant === 'success' &&
        `
            background-color: ${props.palette.success.main};
            border: 1px solid ${props.palette.success.main};
        `};
    ${props =>
        props.hasRightIcon &&
        `
            padding-right: 44px;

        `};
    ${props =>
        props.hasLeftIcon &&
        `
            padding-left: 44px;

        `};
    ${props =>
        props.disabled &&
        `
            background-color: ${COLOR_GRAY_TRANSPARENT_2};
            border: 1px solid transparent;
        `};

    ${props =>
        props.disabled &&
        props.variant === 'base' &&
        `
            background-color: transparent;
        `};

    ${props =>
        props.disabled &&
        props.variant === 'neutral' &&
        `
            background-color: ${props.isLoading ? props.palette.background.main : 'transparent'};
        `};

    ${props =>
        props.disabled &&
        props.variant === 'brand' &&
        `
            background-color: ${
                props.isLoading ? props.palette.brand.main : props.palette.background.disabled
            };
            border-color: ${
                props.isLoading ? props.palette.brand.main : props.palette.border.divider
            };
        `};

    ${props =>
        props.disabled &&
        props.variant === 'outline-brand' &&
        `
            background-color: transparent;
            border-color: ${
                props.isLoading ? props.palette.brand.main : props.palette.border.divider
            };
        `};

    ${props =>
        props.disabled &&
        props.variant === 'destructive' &&
        `
            background-color: ${
                props.isLoading ? props.palette.error.main : props.palette.background.disabled
            };
            border-color: ${
                props.isLoading ? props.palette.error.main : props.palette.background.disabled
            };
        `};

    ${props =>
        props.disabled &&
        props.variant === 'success' &&
        `
            background-color: ${
                props.isLoading ? props.palette.success.main : props.palette.background.disabled
            };
            border-color: ${
                props.isLoading ? props.palette.success.main : props.palette.background.disabled
            };
        `};
`;

export default StyledButton;
