import styled from 'styled-components/native';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Label = attachThemeAttrs(styled.Text)`
    font-size: 14px;
    margin-left: 12px;
    color: ${props => props.palette.text.label};
`;
