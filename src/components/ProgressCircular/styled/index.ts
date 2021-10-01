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
            height: 86px;
            width: 86px;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            height: 56px;
            width: 56px;
        `};
    ${props =>
        props.size === 'small' &&
        `
            height: 40px;
            width: 40px;
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
