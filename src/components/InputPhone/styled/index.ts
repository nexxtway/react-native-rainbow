import styled from 'styled-components/native';
import Input from '../../Input/styled/input';
import ArrowDown from '../../Icons/arrowDown';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    position: relative;
`;

export const StyledInput = styled(Input)`
    padding-left: 114px;
`;

export const LeftElement = styled.View`
    flex-direction: row;
    position: absolute;
    left: 8px;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const ButtonContent = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const ArrowDownIcon = attachThemeAttrs(styled(ArrowDown))`
    width: 10px;
    height: 10px;
    margin-left: 6px;
    color: ${props => props.palette.text.disabled};
`;

export const Divider = attachThemeAttrs(styled.View)`
    background-color: ${props => props.palette.border.divider};
    width: 1px;
    height: 40%;
    margin-left: 8px;
`;

export const PrefixCode = attachThemeAttrs(styled.Text)`
    color: ${props => props.palette.text.header};
    font-size: 16px;
    padding-left: 6px;
    font-style: italic;
`;
