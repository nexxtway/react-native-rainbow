import styled from 'styled-components/native';

import { BaseProps } from '../../types';
import { variantOverlay, positionOverlay, overlapOverlay } from '../types';
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

const positionsRectangle = {
    'top-left': 'top:0;left:0;transform: scale(1) translate(-10px,-10px)',
    'top-right': 'top:0;right:0;transform: scale(1) translate(10px,-10px)',
    'bottom-left': 'bottom:0;left:0;transform: scale(1) translate(-10px,10px)',
    'bottom-right': 'bottom:0;right:0;transform: scale(1) translate(10px,10px)',
};

const positionsCircle = {
    'top-left': 'top:11;left:11;transform: scale(1) translate(-10px,-10px)',
    'top-right': 'top:11;right:11;transform: scale(1) translate(10px,-10px)',
    'bottom-left':
        'bottom:11;left:11;transform: scale(1) translate(-10px,10px)',
    'bottom-right':
        'bottom:11;right:11;transform: scale(1) translate(10px,10px)',
};

const positions = {
    rectangle: positionsRectangle,
    circle: positionsCircle,
};

const overlap = {
    rectangle: 'border-radius: 0',
    circle: 'border-radius: 999',
};

interface IOverlay extends BaseProps {
    overlap: overlapOverlay;
}

export const StyledOverlayContainer = styled.View<IOverlay>`
    position: relative;
    ${props => overlap[props.overlap] || overlap.circle}
`;

interface Props {
    variant: variantOverlay;
    positionOverlay: positionOverlay;
    overlap: overlapOverlay;
    isHidden: boolean;
}
export const StyledBadge = styled.View<Props>`
    min-width: 18px;
    height: 19px;
    width: auto;
    border-radius: 999;
    position: absolute;
    padding: 0 3px;
    background-color: ${props => variants[props.variant] || `${COLOR_ERROR}`};
    ${props =>
        positions[props.overlap][props.positionOverlay] ||
        positions.circle['top-right']}
    ${props => props.isHidden && 'transform: scale(0)'}
`;

export const StyledBadgeOverlayText = styled.Text`
    color: ${COLOR_WHITE};
    text-align: center;
    font-size: 10px;
    line-height: 19px;
    font-weight: bold;
    margin: 0 1px;
`;
