import styled from 'styled-components';
import CloseIcon from '../../Icons/close';
import { COLOR_GRAY_3 } from '../../../styles/colors';

const StyledCloseIcon = styled(CloseIcon)<{}>`
    color: ${COLOR_GRAY_3};
    height: 16;
    width: 16;
`;

export default StyledCloseIcon;
