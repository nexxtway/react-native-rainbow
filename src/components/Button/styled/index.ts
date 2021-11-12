import styled from 'styled-components/native';
import { Palette } from 'styled-components';
import Spinner from '../../Spinner';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { IconPosition, ButtonVariant } from '../../types';

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

export const StyledText = attachThemeAttrs(styled.Text)<Props>`
    color: ${props => props.palette.brand.main};
    font-size: ${FONT_SIZE_HEADING_SMALL};
    text-align: center;

    ${props => {
        const brandMainContrastText = props.palette.getContrastText(props.palette.brand.main);
        return (
            (props.variant === 'brand' ||
                props.variant === 'destructive' ||
                props.variant === 'success') &&
            `color: ${brandMainContrastText};`
        );
    }};

    ${props => {
        const errorMainContrastText = props.palette.getContrastText(props.palette.error.main);
        return (
            props.variant === 'destructive' &&
            `
                color: ${errorMainContrastText};
        `
        );
    }}

    ${props => {
        const successMainContrastText = props.palette.getContrastText(props.palette.success.main);
        return (
            props.variant === 'success' &&
            `
                color: ${successMainContrastText};
        `
        );
    }}

    ${props => props.disabled && `color: ${props.palette.text.disabled};`}
`;

interface SpinnerProps {
    variant?: ButtonVariant;
    palette: Palette;
}

const getSpinnerColor = (props: SpinnerProps): string => {
    const { variant, palette } = props;
    if (variant === 'brand' || variant === 'destructive' || variant === 'success') {
        return palette.getContrastText(palette.text.main);
    }
    if (variant === 'neutral') {
        return palette.background.highlight;
    }
    return palette.brand.main;
};

export const StyledSpinner = attachThemeAttrs(styled(Spinner))<SpinnerProps>`
    color: ${getSpinnerColor}
`;
