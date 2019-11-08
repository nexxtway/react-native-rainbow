import styled from 'styled-components/native';
import { COLOR_WHITE, COLOR_BRAND } from '../../../styles/colors';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';

const StyledText = styled.Text`
    color: ${COLOR_WHITE};
    font-size: ${FONT_SIZE_HEADING_SMALL};
    line-height: 42;

    ${props => props.variant === 'neutral' && `color: ${COLOR_BRAND};`};
`;

export default StyledText;
