import styled from 'styled-components/native';

interface Props {
    size?: string;
}

const StyledIcon = styled.View<Props>`
    position: relative;
    ${props =>
        props.size === 'large' &&
        `
            heigth: 24px;
            width: 24px;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            heigth: 16px;
            width: 16px;
        `};
    ${props =>
        props.size === 'small' &&
        `
            heigth: 12px;
            width: 12px;
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            heigth: 10px;
            width: 10px;
        `};
`;

export default StyledIcon;
