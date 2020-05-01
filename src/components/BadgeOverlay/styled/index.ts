import styled from 'styled-components/native';

import { BaseProps } from '../../types';
import { variantOverlay, positionOverlay } from '../types';
import {
    COLOR_ERROR,
    COLOR_WHITE,
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_WARNING,
} from '../../../styles/colors';

const variants = {
    error: COLOR_ERROR,
    brand: COLOR_BRAND,
    warning: COLOR_WARNING,
    success: COLOR_SUCCESS,
};

const positions = {
    'top-right': 'top: -10px; right: 0;',
    'top-left': 'top: -10px; left:0',
    'bottom-left': 'bottom: -2px; left: -5px',
    'bottom-right': 'bottom: -2px; right: -5px',
};

interface Props {
    variant: variantOverlay;
    positionOverlay: positionOverlay;
}

export const StyledOverlayContainer = styled.View<BaseProps>`
    position: relative;
    width: 33px;
`;

export const StyledBadge = styled.View<Props>`
    min-width: 18px;
    height: 19px;
    width: auto;
    border-radius: 999;
    position: absolute;
    padding: 0 3px;
    background-color: ${props => variants[props.variant] || `${COLOR_ERROR}`};
    ${props => positions[props.positionOverlay]}
`;

export const StyledBadgeOverlayText = styled.Text`
    color: ${COLOR_WHITE};
    text-align: center;
    font-size: 10px;
    line-height: 19px;
    font-weight: bold;
    margin: 0 1px;
`;
