import styled from 'styled-components/native';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';

export const Divider = attachThemeAttrs(styled.View)`
    height: 1px;
    margin-left: 20px;
    width: 100%;
    background-color: ${props => props.palette.background.main};
`;
