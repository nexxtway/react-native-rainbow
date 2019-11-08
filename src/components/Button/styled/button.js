import styled from 'styled-components/native';
import {
    COLOR_WHITE,
    COLOR_BRAND,
    COLOR_GRAY_2,
    COLOR_ERROR,
    COLOR_SUCCESS,
} from '../../../styles/colors';

const StyledButton = styled.TouchableOpacity`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 100px;
    text-decoration: none;
    padding-vertical: 0;
    padding-horizontal: 16;
    text-align: center;

    ${props =>
        props.variant === 'neutral' &&
        `
            background-color: ${COLOR_WHITE};
            border: 1px solid ${COLOR_GRAY_2};
            color: ${COLOR_BRAND};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${COLOR_BRAND};
            border: 1px solid ${COLOR_BRAND};
            color: ${COLOR_WHITE};
        `};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            background-color: transparent;
            border: 1px solid ${COLOR_BRAND};
            color: ${COLOR_BRAND};
        `};
    ${props =>
        props.variant === 'inverse' &&
        `
            background-color: transparent;
            border: 1px solid transparent;
            color: ${COLOR_WHITE};
        `};
    ${props =>
        props.variant === 'border-inverse' &&
        `   background-color: transparent;
            border: 1px solid ${COLOR_WHITE};
            color: ${COLOR_WHITE};
        `};
    ${props =>
        props.variant === 'destructive' &&
        `
            background-color: ${COLOR_ERROR};
            border: 1px solid ${COLOR_ERROR};
            color: ${COLOR_WHITE};
        `};
    ${props =>
        props.variant === 'success' &&
        `
            background-color: ${COLOR_SUCCESS};
            border: 1px solid ${COLOR_SUCCESS};
            color: ${COLOR_WHITE};
        `};
`;

export default StyledButton;
