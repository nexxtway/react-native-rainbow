import styled from 'styled-components/native';
import Input from '../../../Input';
import {
    COLOR_GRAY_2,
    COLOR_DARK_1,
    COLOR_GRAY_3,
} from '../../../../styles/colors';

export const InputSearch = styled(Input)`
    margin: 0 16px 16px 24px;
`;

export const ListItemContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 16px 16px 24px;
`;

export const Divider = styled.View`
    background-color: ${COLOR_GRAY_2};
    height: 0.5;
    width: 80%;
    align-self: flex-end;
`;

export const RightContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 16;
    color: ${COLOR_DARK_1};
    margin-left: 12;
`;

export const Prefix = styled.Text`
    font-size: 14;
    color: ${COLOR_GRAY_3};
    font-style: italic;
`;
