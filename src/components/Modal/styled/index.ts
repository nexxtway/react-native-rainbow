import styled from 'styled-components/native';
import { COLOR_DARK_1, COLOR_GRAY_3 } from '../../../styles/colors';
import CloseIcon from '../../Icons/close';
import ButtonIcon from '../../ButtonIcon';
import { BaseProps } from '../../types';

export const Title = styled.Text<{}>`
    font-size: 18px;
    color: ${COLOR_DARK_1};
    margin: 24px 40px;
    text-align: center;
`;

export const Container = styled.SafeAreaView<BaseProps>`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
`;

export const StyledCloseIcon = styled(CloseIcon)<{}>`
    color: ${COLOR_GRAY_3};
    height: 16px;
    width: 16px;
`;

export const CloseButton = styled(ButtonIcon)<{}>`
    position: absolute;
    top: 12px;
    right: 12px;
`;
