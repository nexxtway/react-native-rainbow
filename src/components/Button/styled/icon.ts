import styled from 'styled-components/native';
import { ButtonIconPosition } from '../../types';

interface Props {
    iconPosition?: ButtonIconPosition;
}

const StyledIcon = styled.View<Props>`
    position: absolute;
    ${props =>
        props.iconPosition === 'right' &&
        `
            margin-left: 16;
            right: 16;

        `};
    ${props =>
        props.iconPosition === 'left' &&
        `
            margin-right: 16;
            left: 16;
        `};
`;

export default StyledIcon;
