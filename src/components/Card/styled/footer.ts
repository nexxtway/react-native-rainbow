import styled from 'styled-components/native';
import { COLOR_GRAY_2 } from '../../../styles/colors';
import { PADDING_SMALL, PADDING_MEDIUM } from '../../../styles/paddings';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledViewFooter = styled.View<{}>`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: normal;
    text-align: center;
    border-style: solid;
    border-top-width: 1px;
    border-top-color: ${COLOR_GRAY_2};
    padding-vertical: ${PADDING_SMALL};
    padding-horizontal: ${PADDING_MEDIUM};
`;

export default StyledViewFooter;
