import styled from 'styled-components/native';
import { BaseProps } from '../../types';

interface Props extends BaseProps {
    src?: string;
    size?: string;
}

const StyledImage = styled.ImageBackground<Props>`
    position: absolute;
    border: none;
    border-radius: 24px;

    ${props =>
        props.size === 'large' &&
        `
            height: 48;
            width: 48;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            height: 32;
            width: 32;
            
        `};
    ${props =>
        props.size === 'small' &&
        `
            height: 24;
            width: 24;
            
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            height: 20;
            width: 20;
            
        `};
`;

export default StyledImage;
