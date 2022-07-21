import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { Size } from '../types';
import { replaceAlpha } from '../../..//styles/helpers/color';

interface Props extends BaseProps {
    isActive?: boolean;
    variant?: string;
    isFullWidth?: boolean;
    disabled?: boolean;
    optionsLength?: number;
    activeIndex?: number;
}

export const StyledSegmentedControlContainer = styled.View<Props>`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: ${props => (props.isFullWidth ? '100%' : '60%')};
`;

export const StyledSegmentedControlLabel = attachThemeAttrs(styled.Text)`
    color: ${props => props.palette.text.label};
    text-align: center;
    margin-bottom: 8px;
    text-transform: uppercase;
`;

export const StyledSegmentedControlOptionsWrapper = attachThemeAttrs(styled.View)<Props>`
    display: flex;
    position: relative;
    flex-direction: row;
    border-radius: 200px;
    background: ${props => props.palette.background.disabled};
    justify-content: center;
    border: solid 1px ${props => props.palette.background.disabled};
    opacity: ${props => (props.disabled ? '.4' : '1')};
    overflow: hidden;
`;

const heightMap = {
    medium: '42px',
    small: '28px',
};

interface OptionProps extends Props {
    size: Size;
}
export const StyledOption = styled.TouchableOpacity<OptionProps>`
    display: flex;
    flex: 1;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    z-index: 1;
    height: ${props => heightMap[props.size] || heightMap.medium};
    box-shadow: ${props => (props.isActive ? '0px 0px 2px rgba(0,0,0, .2)' : 'none')};
`;

export const StyledOptionText = attachThemeAttrs(styled.Text)<Props>`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    color: ${props => replaceAlpha(props.palette.text.label, props.palette.isDark ? 0.5 : 0.3)};
    ${props =>
        !props.disabled &&
        props.isActive &&
        `
        color: ${
            props.variant === 'brand'
                ? props.palette.getContrastText(props.palette.brand.main)
                : props.palette.text.main
        };
    `};
`;

export const StyledBg = attachThemeAttrs(styled.View)<Props>`
    position: absolute;
    top: 0;
    height: 100%;
    ${props => props.optionsLength && ` width: ${100 / props.optionsLength}% `};
    border-radius: 22px;
    ${props =>
        !props.disabled &&
        props.isActive &&
        `
        background: ${
            props.variant === 'brand' ? props.palette.brand.main : props.palette.background.main
        };
    `}
    ${props =>
        props.disabled &&
        `
        background: transparent;
    `}
`;
