import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { COLOR_WHITE, COLOR_BRAND } from '../../../styles/colors';

export const StyledContainer = styled.View<BaseProps>`
    display: flex;
    flex-direction: row;
`;

export const StyledAvatarContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

interface Props extends BaseProps {
    size?: string;
    firstChild: boolean;
    zIndex: number;
}

const sizes = {
    large: 56,
    medium: 48,
    small: 40,
    'x-small': 32,
};

export const StyledAvatar = styled.View<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${COLOR_WHITE}  solid 2px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    ${props =>
        props.zIndex &&
        `
        z-index: ${props.zIndex};
        `}

    ${props =>
        props.size &&
        `
        margin-left: -${sizes[props.size] / 2} 
        height: ${sizes[props.size]} ;
        width: ${sizes[props.size]} ;
        border-radius: ${sizes[props.size] / 2};
    `}

    ${props =>
        props.firstChild &&
        `
        margin-left: 0;
    `}
`;

export const StyledImage = styled.Image`
    border: none;
    border-radius: 24px;
    height: 100%;
    width: 100%;
`;

interface sizeProps {
    size?: string;
}

export const StyledInitialsText = styled.Text<sizeProps>`
    color: ${COLOR_WHITE};
    ${props =>
        props.size &&
        `
        font-size: ${sizes[props.size] / 2.3};
    `};
`;

export const StyledCounter = styled.View<sizeProps>`
    background: ${COLOR_BRAND};
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: solid 1px ${COLOR_WHITE};
    ${props =>
        props.size &&
        `
        height: ${sizes[props.size]};
        width: ${sizes[props.size]};
        border-radius: ${sizes[props.size] / 2};
        margin-right: -${sizes[props.size] / 2.1};
    `};
`;

export const StyledTextCounter = styled.Text<sizeProps>`
    color: ${COLOR_WHITE};
    ${props =>
        props.size &&
        `
         font-size: ${sizes[props.size] / 2.2}
    `}
`;
