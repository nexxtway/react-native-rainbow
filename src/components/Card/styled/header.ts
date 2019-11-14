import styled from 'styled-components/native';
import { PADDING_SMALL, PADDING_MEDIUM } from '../../../styles/paddings';
import { MARGIN_SMALL } from '../../../styles/margins';

const StyledViewHeader = styled.View<{}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${PADDING_SMALL} ${PADDING_MEDIUM} 0 ${PADDING_MEDIUM};
    margin-bottom: ${MARGIN_SMALL};
`;

export default StyledViewHeader;
