import styled from 'styled-components/native';
import Input from '../../../Input';
import Magnifying from '../../../Icons/magnifying';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

export const InputSearch = styled(Input)`
    margin: 0 16px 16px 24px;
`;

export const MagnifyingIcon = attachThemeAttrs(styled(Magnifying))`
    width: 20px;
    height: 20px;
    color: ${props => props.palette.brand.main};
`;

export const ListItemContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 16px 16px 24px;
`;

export const Divider = attachThemeAttrs(styled.View)`
    background-color: ${props => props.palette.border.divider};
    height: 0.5px;
    width: 80%;
    align-self: flex-end;
`;

export const RightContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Title = attachThemeAttrs(styled.Text)`
    font-size: 16px;
    color: ${props => props.palette.text.main};
    margin-left: 12px;
`;

export const Prefix = attachThemeAttrs(styled.Text)`
    font-size: 14px;
    color: ${props => props.palette.text.header};
    font-style: italic;
`;
