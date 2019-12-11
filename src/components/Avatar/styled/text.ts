import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { COLOR_WHITE } from '../../../styles/colors';

interface Props extends BaseProps {
    size?: string;
}

const StyledText = styled.Text<Props>`
    color: ${COLOR_WHITE};
    text-align: center;
    text-transform: uppercase;

    ${props =>
        props.size === 'large' &&
        `
            font-size: 24px
        `};
    ${props =>
        props.size === 'medium' &&
        `
            font-size: 16px
        `};
    ${props =>
        props.size === 'small' &&
        `
            font-size: 12px
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            font-size: 10px
        `};
`;

export default StyledText;
