import styled from 'styled-components/native';
import { COLOR_DARK_1 } from '../../../styles/colors';

export const SwitchWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledSwitch = styled.Switch`
    margin-right: 10px;
`;

export const SwitchText = styled.Text`
    color: ${COLOR_DARK_1};
`;
