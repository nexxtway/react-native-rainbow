import styled from 'styled-components/native';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { IconPosition } from '../../types';
import PlusIcon from '../../Icons/plus';
import MinusIcon from '../../Icons/minus';

interface ButtonContainerProps {
    iconPosition?: IconPosition;
}

interface IconProps {
    disabled?: boolean;
}

export const RelativeView = styled.View`
    position: relative;
`;

export const ButtonContainer = attachThemeAttrs(styled.View)<ButtonContainerProps>`
    color: ${props => props.palette.text.header};
    height: 100%;
    top: 0;
    position: absolute;
    line-height: 1;
    border: 0;
    display: flex;
    z-index: 2;
    align-items: center;
    justify-content: center;

    ${props =>
        props.iconPosition === 'left' &&
        `
        left: 5;
    `}
    ${props =>
        props.iconPosition === 'right' &&
        `
        right: 5;
    `}
`;

export const StyledPlusIcon = attachThemeAttrs(styled(PlusIcon))<IconProps>`
    width: 16px;
    height: 16px;
    color: ${props => props.palette.brand.main};
    ${props =>
        props.disabled &&
        `
        color: ${props.palette.text.disabled}
    `}
`;

export const StyledMinusIcon = attachThemeAttrs(styled(MinusIcon))<IconProps>`
    width: 16px;
    height: 16px;
    color: ${props => props.palette.brand.main};
    ${props =>
        props.disabled &&
        `
        color: ${props.palette.text.disabled}
    `}
`;
