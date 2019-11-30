import styled from 'styled-components/native';
import { COLOR_BRAND, COLOR_SUCCESS } from '../../../styles/colors';
import { ButtonIconVariant, ButtonIconSize } from '../../types';

interface Props {
    disabled?: boolean;
    variant?: ButtonIconVariant;
    size?: ButtonIconSize;
}

const StyledButton = styled.TouchableOpacity<Props>`
    background: transparent;
    border: 0;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
    text-decoration: none;
    overflow: visible;
    text-transform: none;

    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${COLOR_BRAND};
            border: 1px solid ${COLOR_BRAND};
        `};
    ${props =>
        props.variant === 'success' &&
        `
            background-color: ${COLOR_SUCCESS};
            border: 1px solid ${COLOR_SUCCESS};
        `};
    ${props =>
        props.size === 'xx-small' &&
        `
            width: 16;
            height: 16;
            line-height: 1;

            svg {
                width: 0.55rem !important;
                height: 0.55rem !important;
                font-size: 0.55rem !important;
            }
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            width: 20;
            height: 20;

            svg {
                width: 0.6rem !important;
                height: 0.6rem !important;
                font-size: 0.6rem !important;
            }
        `};
    ${props =>
        props.size === 'small' &&
        `
            width: 24;
            height: 24;

            svg {
                width: 0.65rem !important;
                height: 0.65rem !important;
        
                font-size: 0.65rem !important;
            }
        `};
    ${props =>
        props.size === 'medium' &&
        `
            width: 40;
            height: 40;

            svg {
                width: 1rem !important;
                height: 1rem !important;
                font-size: 1rem !important;
            }
        `};
    ${props =>
        props.size === 'large' &&
        `
            width: 48;
            height: 48;

            svg {
                width: 1.5rem !important;
                height: 1.5rem !important;
                font-size: 1rem !important;
            }
        `};
`;

export default StyledButton;
