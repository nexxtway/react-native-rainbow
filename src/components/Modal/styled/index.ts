import styled from 'styled-components/native';
import CloseIcon from '../../Icons/close';
import ButtonIcon from '../../ButtonIcon';
import { BaseProps } from '../../types';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export const Title = attachThemeAttrs(styled.Text)<{}>`
    font-size: 18px;
    color: ${props => props.palette.text.main};
    margin: 24px 40px;
    text-align: center;
`;

export const Container = attachThemeAttrs(styled.SafeAreaView)<BaseProps>`
    flex: 1;
    background-color: ${props => props.palette.background.main};
`;

export const Content = styled.View`
    flex: 1;
`;

export const StyledCloseIcon = attachThemeAttrs(styled(CloseIcon))<{}>`
    color: ${props => props.palette.text.header};
    height: 16px;
    width: 16px;
`;

export const CloseButton = styled(ButtonIcon)<{}>`
    position: absolute;
    top: 12px;
    right: 12px;
`;
