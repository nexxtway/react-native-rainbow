import styled from 'styled-components/native';
import {
    COLOR_WHITE,
    COLOR_BRAND,
    COLOR_GRAY_TRANSPARENT_3,
} from '../../../styles/colors';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import { ButtonVariant } from '../../types';

interface Props {
    variant?: ButtonVariant;
    disabled?: boolean;
}

const StyledText = styled.Text<Props>`
    color: ${COLOR_BRAND};
    font-size: ${FONT_SIZE_HEADING_SMALL};
    line-height: 46;
    text-align: center;

    ${props =>
        (props.variant === 'brand' ||
            props.variant === 'destructive' ||
            props.variant === 'success') &&
        `color: ${COLOR_WHITE};`};

    ${props => props.disabled && `color: ${COLOR_GRAY_TRANSPARENT_3};`}
`;

export default StyledText;
