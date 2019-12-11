import styled from 'styled-components/native';
import { Label } from '../../Input/styled/index';

export const Container = styled.View<{}>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
`;

export const StyledLabel = styled(Label)`
    margin-bottom: 8px;
`;
