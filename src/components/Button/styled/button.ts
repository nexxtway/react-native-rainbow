import styled from 'styled-components/native';
import {
    COLOR_WHITE,
    COLOR_BRAND,
    COLOR_ERROR,
    COLOR_SUCCESS,
    COLOR_GRAY_TRANSPARENT_2,
} from '../../../styles/colors';
import { ButtonVariant, BaseProps } from '../../types';

interface Props extends BaseProps {
    variant?: ButtonVariant;
    disabled?: boolean;
    hasRightIcon?: boolean;
    hasLeftIcon?: boolean;
}

const StyledButton = styled.TouchableOpacity<Props>`
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
            background-color: ${COLOR_WHITE};
            border: 1px solid ${COLOR_GRAY_TRANSPARENT_2};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${COLOR_BRAND};
            border: 1px solid ${COLOR_BRAND};
        `};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            background-color: transparent;
            border: 1px solid ${COLOR_BRAND};
        `};
    ${props =>
        props.variant === 'destructive' &&
        `
            background-color: ${COLOR_ERROR};
            border: 1px solid ${COLOR_ERROR};
        `};
    ${props =>
        props.variant === 'success' &&
        `
            background-color: ${COLOR_SUCCESS};
            border: 1px solid ${COLOR_SUCCESS};
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
`;

export default StyledButton;
