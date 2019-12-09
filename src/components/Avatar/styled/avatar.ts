import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { COLOR_BRAND, COLOR_WHITE } from '../../../styles/colors';

interface Props extends BaseProps {
    src?: string;
    size?: string;
    style?: object;
}

const StyledAvatar = styled.View<Props>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR_WHITE};
    background-color: ${COLOR_BRAND};
    border: none;
    border-radius: 24px;
    text-decoration: none;
    text-transform: uppercase;

    ${props =>
        props.size === 'large' &&
        `
            heigth: 48px;
            width: 48px;
            font-size: 24px;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            heigth: 32px;
            width: 32px;
            font-size: 16px;
        `};
    ${props =>
        props.size === 'small' &&
        `
            heigth: 24px;
            width: 24px;
            font-size: 12px;
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            heigth: 20px;
            width: 20px;
            font-size: 10px;
        `};
    ${props =>
        props.src !== '' &&
        `
            background-image: url(${props.src}) center center;
            background-size: cover;
        `};
`;

export default StyledAvatar;
