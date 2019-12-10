import styled from 'styled-components/native';

interface Props {
    size?: string;
}

const StyledIcon = styled.View<Props>`
    ${props =>
        props.size === 'large' &&
        `
            height: 24;
            width: 24;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            height: 16;
            width: 16;
        `};
    ${props =>
        props.size === 'small' &&
        `
            height: 12;
            width: 12;
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            height: 10;
            width: 10;
        `};
`;

export default StyledIcon;
