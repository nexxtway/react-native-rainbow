import styled from 'styled-components/native';
import {
    COLOR_WHITE,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_DARK_1,
    COLOR_GRAY_3,
} from '../../../styles/colors';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { lighten } from '../../../styles/helpers/color';
import { ButtonVariant, BaseProps } from '../../types';

interface Props extends BaseProps {
    variant?: ButtonVariant;
    disabled?: boolean;
    hasRightIcon?: boolean;
    hasLeftIcon?: boolean;
    isLoading?: boolean;
}

const StyledButton = attachThemeAttrs(styled.TouchableOpacity).attrs(props => {
    if (props.palette.isDark) {
        return {
            inverse: {
                text: COLOR_DARK_1,
                active: lighten(COLOR_DARK_1, 0.6),
                border: COLOR_DARK_1,
                disabled: lighten(COLOR_DARK_1, 0.6),
            },
        };
    }
    return {
        inverse: {
            text: COLOR_WHITE,
            active: COLOR_GRAY_3,
            border: COLOR_WHITE,
            disabled: COLOR_GRAY_3,
        },
    };
})<Props>`
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
