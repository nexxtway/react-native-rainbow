import styled from 'styled-components/native';
import { COLOR_BRAND, COLOR_NEUTRAL } from '../../styles/colors';

interface ISpinner {
    size: string;
}

const sizes = {
    'xx-small': 18,
    'x-small': 22,
    small: 26,
    medium: 30,
    large: 38,
};

export const variants = {
    brand: COLOR_BRAND,
    neutral: COLOR_NEUTRAL,
};

export const SpinnerContainer = styled.View<ISpinner>`
    width: ${props => sizes[props.size] || sizes.medium}px;
    height: ${props => sizes[props.size] || sizes.medium}px;
`;
