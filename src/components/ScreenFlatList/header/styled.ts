import styled from 'styled-components/native';
import Button from '../../Button';
import { COLOR_BRAND, COLOR_DARK_1, COLOR_WHITE } from '../../../styles/colors';
import ChevronBack from '../../Icons/chevronBack';

export const HeaderAreaView = styled.SafeAreaView`
    background-color: ${COLOR_WHITE};
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLOR_WHITE};
    padding: 24px 12px 20px 12px;
`;

export const StyledButton = styled(Button)`
    position: absolute;
    left: 0;
    color: ${COLOR_BRAND};
    height: 30px;
    line-height: 24px;
    padding: 0 20px;
`;

export const ArrowBackIcon = styled(ChevronBack)`
    width: 10px;
    height: 18px;
    color: ${COLOR_BRAND};
`;

export const TitleContainer = styled.View`
    padding: 0 14px 0 42px;
    flex: 1;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 800;
    color: ${COLOR_DARK_1};
`;
