import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { COLOR_WHITE, COLOR_BRAND } from '../../../styles/colors';

interface ContainerProps extends BaseProps {
    size?: string;
}

export const StyledContainer = styled.View<ContainerProps>``;

export const StyledAvatarContainer = styled.View<ContainerProps>`
    display: flex;
    flex-direction: row;
`;

interface ImageProps extends BaseProps {
    src?: string;
    zIndex?: number;
}

interface Props extends BaseProps {
    size?: string;
    firstChild: boolean;
    zIndex: number;
}

const sizes = {
    large: 56,
    medium: 48,
    small: 40,
    xSmall: 32,
};

export const StyledAvatar = styled.View<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR_WHITE};
    background: ${COLOR_BRAND};
    border: white solid 2px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    ${props =>
        props.zIndex &&
        `
        z-index: ${props.zIndex};
        `}
        
    ${props =>
        props.size === 'large' &&
        !props.firstChild &&
        `
        margin-left: -${sizes.large / 2.3};
    `}

    ${props =>
        props.size === 'medium' &&
        !props.firstChild &&
        `
        margin-left: -${sizes.medium / 2.3};
    `}

    ${props =>
        props.size === 'small' &&
        !props.firstChild &&
        `
        margin-left: -${sizes.small / 2.3};
    `}

    ${props =>
        props.size === 'x-small' &&
        !props.firstChild &&
        `
        margin-left: -${sizes.xSmall / 2.3};
    `}

    ${props =>
        props.size === 'large' &&
        `
            height: ${sizes.large} ;
            width: ${sizes.large} ;
            border-radius: ${sizes.large / 2};
        `};
    ${props =>
        props.size === 'medium' &&
        `
            height: ${sizes.medium} ;
            width: ${sizes.medium} ;
            border-radius: ${sizes.medium / 2};
        `};
    ${props =>
        props.size === 'small' &&
        `
            height: ${sizes.small} ;
            width: ${sizes.small} ;
            border-radius: ${sizes.small / 2};
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            height: ${sizes.xSmall};
            width: ${sizes.xSmall};
            border-radius: ${sizes.xSmall / 2};
        `};
`;

export const StyledImage = styled.Image<ImageProps>`
    border: none;
    border-radius: 24px;
    height: 100%;
    width: 100%;
`;
