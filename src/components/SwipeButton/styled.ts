import styled from 'styled-components/native';
import { Palette } from 'styled-components';
import { Animated } from 'react-native';
import Spinner from '../Spinner';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';
import lighten from '../../styles/helpers/color/lighten';
import darken from '../../styles/helpers/color/darken';

export const Container = attachThemeAttrs(styled.View)<{ isLoading: boolean }>`
    border-radius: 20px;
    background-color: ${props => lighten(darken(props.palette.brand.main, 0.2), 0.5)};
    height: 56px;
    justify-content: center;
    align-items: center;
    ${props =>
        !props.isLoading &&
        `
        padding: 14px 24px;
    `}
`;

export const SpinnerContainer = styled.View`
    border-radius: 20px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
`;

export const StyledSpinner = attachThemeAttrs(styled(Spinner))`
    color: ${props => props.palette.getContrastText(props.palette.brand.main)};
`;

export const Label = attachThemeAttrs(styled.Text)`
    color: ${props => props.palette.getContrastText(props.palette.brand.main)};
    font-size: 20px;
    letter-spacing: 0.36px;
`;

export const ThumbContainer = styled(Animated.View)<{ width: number }>`
    width: ${props => props.width}px;
    height: 56px;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px;
`;

export const ThumbIcon = attachThemeAttrs(styled.View)<{ palette: Palette }>`
    width: 60px;
    height: 56px;
    background-color: ${props => props.palette.brand.main};
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;
