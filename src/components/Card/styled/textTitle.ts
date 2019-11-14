import styled from 'styled-components/native';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../styles/fontSizes';
import { COLOR_GRAY_4 } from '../../../styles/colors';

const StyledTextTitle = styled.Text<{}>`
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    font-weight: 500;
    color: ${COLOR_GRAY_4};
`;

export default StyledTextTitle;
