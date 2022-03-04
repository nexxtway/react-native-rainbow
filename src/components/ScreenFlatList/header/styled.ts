import styled from 'styled-components/native';
import Button from '../../Button';
import { COLOR_DARK_1, COLOR_WHITE } from '../../../styles/colors';
import ChevronBack from '../../Icons/chevronBack';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export const HeaderAreaView = styled.SafeAreaView`
    background-color: ${COLOR_WHITE};
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR_WHITE};
    padding: 24px 16px 20px 12px;
`;

export const StyledButton = attachThemeAttrs(styled(Button))`
    position: absolute;
    left: 0;
    color: ${props => props.palette.brand.main};
    height: 30px;
    line-height: 24px;
    padding: 0 10px;
`;

export const ArrowBackIcon = attachThemeAttrs(styled(ChevronBack))`
    width: 10px;
    height: 18px;
    color: ${props => props.palette.brand.main};
`;

export const Title = styled.Text`
    font-size: 24px;
    padding: 0 0 0 48px;
    font-weight: 800;
    color: ${COLOR_DARK_1};
`;

export const StyledButtonLabel = attachThemeAttrs(styled.Text)`
    color: ${props => props.palette.brand.main};
    font-size: 16px;
    margin-left: 24px;
`;
