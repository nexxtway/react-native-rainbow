import styled from 'styled-components/native';
import {
    COLOR_BRAND,
    COLOR_ERROR,
    COLOR_SUCCESS,
    COLOR_WARNING,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_GRAY_3,
} from '../../../styles/colors';

export type Variants = 'brand' | 'success' | 'warning' | 'error';

interface Props {
    variant?: Variants;
    value: number;
    max: number;
}

export const StyledContainer = styled.View`
    position: relative;
    height: 4px;
    border-radius: 100px;
    background-color: ${COLOR_GRAY_TRANSPARENT_2};
    align-items: center;
`;

export const StyledBar = styled.View<Props>`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${COLOR_BRAND};
    height: 100%;
    width: ${props => (props.value / props.max) * 100}%;
    border-radius: 100px;

    ${props =>
        props.variant === 'success' &&
        `
            background-color: ${COLOR_SUCCESS};
        `};

    ${props =>
        props.variant === 'warning' &&
        `
            background-color: ${COLOR_WARNING};
        `};

    ${props =>
        props.variant === 'error' &&
        `
            background-color: ${COLOR_ERROR};
        `};
`;

interface ValueProps {
    size: number;
}

export const StyledValue = styled.Text<ValueProps>`
    font-size: ${props => props.size / 4};
    font-weight: 600;
    text-align: center;
    color: #434464;
`;

export const StyledIconContainer = styled.View`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

export const ValueContainer = styled.View`
    position: absolute;
    top: 10;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const FooterText = styled.Text`
    font-size: 14px;
    color: ${COLOR_GRAY_3};
    font-weight: 700;
    margin-right: -4px;
`;
