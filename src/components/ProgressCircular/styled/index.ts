import styled from 'styled-components/native';
import { BaseProps } from '../../types';
import { Sizes } from '../index';

interface Props extends BaseProps {
    size?: Sizes;
}

export const StyledProgressCircular = styled.View<Props>`
    position: relative;
    ${props =>
        props.size === 'large' &&
        `
            height: 86;
            width: 86;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            height: 56;
            width: 56;
        `};
    ${props =>
        props.size === 'small' &&
        `
            height: 40;
            width: 40;
        `};
`;

export const StyledIconContainer = styled.View<{}>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;
