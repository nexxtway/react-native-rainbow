import styled from 'styled-components/native';

import { BaseProps } from '../../types';
import { variantOverlay, positionOverlay } from '../types';
import { COLOR_ERROR, COLOR_WHITE } from '../../../styles/colors';

interface Props {
    variant?: variantOverlay;
    positionOverlay?: positionOverlay;
}

export const StyledOverlayContainer = styled.View<BaseProps>`
    position: relative;
    width: 100%;
    width: 33px;
`;

export const StyledBadge = styled.View<Props>`
    width: 16px;
    height: 16px;
    border-radius: 999;
    position: absolute;
    ${props =>
        props.positionOverlay === 'top-right' &&
        `
        top: -10px
        right:0
    `}
    ${props =>
        props.variant === 'error' &&
        `
        background-color: ${COLOR_ERROR};
        `};
`;

export const StyledBadgeOverlayText = styled.Text`
    color: ${COLOR_WHITE};
    text-align: center;
    font-size: 12px;
`;
