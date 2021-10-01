import styled from 'styled-components/native';
import { IconPosition, ButtonVariant } from '../../types';
import { COLOR_WHITE, COLOR_BRAND, COLOR_GRAY_TRANSPARENT_3 } from '../../../styles/colors';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';

interface Props {
    iconPosition?: IconPosition;
    variant?: ButtonVariant;
    disabled?: boolean;
}

export const StyledIcon = styled.View<Props>`
    position: absolute;
    ${props =>
        props.iconPosition === 'right' &&
        `
            margin-left: 16px;
            right: 16px;

        `};
    ${props =>
        props.iconPosition === 'left' &&
        `
            margin-right: 16px;
            left: 16px;
        `};
`;

export const StyledText = styled.Text<Props>`
    color: ${COLOR_BRAND};
    font-size: ${FONT_SIZE_HEADING_SMALL};
    text-align: center;

    ${props =>
        (props.variant === 'brand' ||
            props.variant === 'destructive' ||
            props.variant === 'success') &&
        `color: ${COLOR_WHITE};`};

    ${props => props.disabled && `color: ${COLOR_GRAY_TRANSPARENT_3};`}
`;
