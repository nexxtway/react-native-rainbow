import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { COLOR_WHITE } from '../../../styles/colors';
import { AvatarSizes } from '../types';

export const StyledContainer = styled.View<BaseProps>`
    display: flex;
    flex-direction: row;
`;

export const StyledAvatarContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

interface Props extends BaseProps {
    size?: AvatarSizes;
    firstChild: boolean;
    zIndex: number;
}

const sizes = {
    large: 48,
    medium: 32,
    small: 24,
    'x-small': 20,
};

export const StyledAvatar = styled.View<Props>`
    border: solid ${COLOR_WHITE} 2px;
    ${props =>
        props.zIndex &&
        `
        z-index: ${props.zIndex};
    `}

    ${props =>
        props.size &&
        `
        margin-left: -${sizes[props.size] / 1.8}px;
        border-radius: ${sizes[props.size] / 1.8}px;
    `}

    ${props =>
        props.firstChild &&
        `
        margin-left: 0;
    `};
`;

interface SizeProps {
    size?: AvatarSizes;
}

export const StyledCounter = styled.View<SizeProps>`
    border: solid 2px ${COLOR_WHITE};
    z-index: 10;
    ${props =>
        props.size &&
        `
        border-radius: ${sizes[props.size] / 1.8}px;
        margin-right: -${sizes[props.size] / 1.8}px;
    `};
`;
