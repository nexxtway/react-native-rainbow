import styled from 'styled-components/native';
import { PADDING_SMALL, PADDING_X_SMALL } from '../../../styles/paddings';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import { SHADOW_4 } from '../../../styles/shadows';
import {
    COLOR_WHITE,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_GRAY_4,
} from '../../../styles/colors';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import { BaseProps } from '../../types';

export const Container = styled.View<BaseProps>`
    position: relative;
    background-color: ${COLOR_WHITE};
    border: 1px solid ${COLOR_GRAY_TRANSPARENT_2};
    border-radius: ${BORDER_RADIUS_1};
    box-shadow: ${SHADOW_4};
    overflow: hidden;
`;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${PADDING_SMALL};
`;

export const TitleContent = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const Icon = styled.View`
    flex-shrink: 0;
    margin-right: ${MARGIN_X_SMALL};
`;

export const TextTitle = styled.Text`
    font-size: ${FONT_SIZE_HEADING_SMALL};
    font-weight: 300;
    color: ${COLOR_GRAY_4};
`;

export const Footer = styled.View`
    border-style: solid;
    border-top-width: 1px;
    border-top-color: ${COLOR_GRAY_TRANSPARENT_2};
    padding-vertical: ${PADDING_X_SMALL};
    padding-horizontal: ${PADDING_X_SMALL};
`;
