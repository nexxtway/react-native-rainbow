import styled from 'styled-components/native';
import { COLOR_WHITE, COLOR_GRAY_2 } from '../../../styles/colors';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { SHADOW_4 } from '../../../styles/shadows';

const StyledViewContainer = styled.View<{}>`
    position: relative;
    background-color: ${COLOR_WHITE};
    border: 1px solid ${COLOR_GRAY_2};
    border-radius: ${BORDER_RADIUS_1};
    box-shadow: ${SHADOW_4};
    overflow: hidden;
`;

export default StyledViewContainer;
