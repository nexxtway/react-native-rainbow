import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { COLOR_BRAND, COLOR_WHITE } from '../../../styles/colors';

interface Props extends BaseProps {
    size?: string;
}

export const StyledAvatar = styled.View<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR_WHITE};
    background: ${COLOR_BRAND};
    border: none;
    border-radius: 24px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;

    ${props =>
        props.size === 'large' &&
        `
            height: 48;
            width: 48;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            height: 32;
            width: 32;
        `};
    ${props =>
        props.size === 'small' &&
        `
            height: 24;
            width: 24;
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            height: 20;
            width: 20;
        `};
`;

export const StyledImage = styled.Image<{}>`
    border: none;
    border-radius: 24px;
    height: 100%;
    width: 100%;
`;

export const StyledText = styled.Text<Props>`
    color: ${COLOR_WHITE};
    text-align: center;
    text-transform: uppercase;

    ${props =>
        props.size === 'large' &&
        `
            font-size: 24px
        `};
    ${props =>
        props.size === 'medium' &&
        `
            font-size: 16px
        `};
    ${props =>
        props.size === 'small' &&
        `
            font-size: 12px
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            font-size: 10px
        `};
`;
