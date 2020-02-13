import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import {
    COLOR_BRAND,
    COLOR_GRAY_3,
    COLOR_GRAY_TRANSPARENT_1,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_GRAY_TRANSPARENT_3,
    COLOR_DARK_1,
} from '../../../styles/colors';

interface Props extends BaseProps {
    isActive?: boolean;
    variant?: string;
    isFullWidth?: boolean;
    isDisabled?: boolean;
}
// border radius
let br = 200;

export const StyledSegmentedControlContainer = styled.View<Props>`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: ${props => (props.isFullWidth ? '100%' : '60%')};
`;

export const StyledSegmentedControlLabel = styled.Text<{}>`
    color: ${COLOR_GRAY_3};
    text-align: center;
    margin-bottom: 8px;
    text-transform: uppercase;
`;

export const StyledSegmentedControlOptionsWrapper = styled.View<Props>`
    display: flex;
    flex-direction: row;
    border-radius: ${br};
    background: ${COLOR_GRAY_TRANSPARENT_2};
    justify-content: center;
    border: solid 1px ${COLOR_GRAY_TRANSPARENT_2};
    opacity: ${props => (props.isDisabled ? '.4' : '1')};
`;

export const StyledOption = styled.TouchableOpacity<Props>`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: ${br};
    height: 42;
    ${props =>
        !props.disabled &&
        props.isActive &&
        `
        background: ${props.variant === 'brand' ? COLOR_BRAND : 'white'};
    `}
    box-shadow: ${props =>
        props.isActive ? '0px 0px 2px rgba(0,0,0, .2)' : 'none'};
`;

export const StyledOptionText = styled.Text<Props>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    line-height: 15px;
    color: ${COLOR_GRAY_TRANSPARENT_3};
    ${props =>
        !props.isDisabled &&
        props.isActive &&
        `
        color: ${props.variant === 'brand' ? 'white' : COLOR_DARK_1}
    `};
`;
