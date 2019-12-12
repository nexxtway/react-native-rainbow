import styled from 'styled-components/native';
import { COLOR_GRAY_3, COLOR_GRAY_2 } from '../../../styles/colors';
import Input from '../../Input/styled/input';
import ArrowDown from '../../Icons/arrowDown';

export const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    position: relative;
`;

export const StyledInput = styled(Input)`
    padding-left: 114;
`;

export const LeftElement = styled.View`
    flex-direction: row;
    position: absolute;
    left: 8;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const ButtonContent = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const ArrowDownIcon = styled(ArrowDown)`
    width: 10;
    height: 10;
    margin-left: 6;
    color: ${COLOR_GRAY_2};
`;

export const Divider = styled.View`
    background-color: ${COLOR_GRAY_2};
    width: 1;
    height: 40%;
    margin-left: 8;
`;

export const PrefixCode = styled.Text`
    color: ${COLOR_GRAY_3};
    font-size: 16;
    padding-left: 6;
    font-style: italic;
`;
