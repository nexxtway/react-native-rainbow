import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { BaseProps } from '../types';
import { positionOverlay, variantOverlay } from './types';
import {
    StyledOverlayContainer,
    StyledBadge,
    StyledBadgeOverlayText,
} from './styled';
import RenderIf from '../RenderIf';

interface Props extends BaseProps {
    children?: ReactNode;
    isHidden?: boolean;
    position?: positionOverlay;
    value?: ReactNode;
    variant?: variantOverlay;
}

/**
 * Badge Overlay is used to show small numerical value or status descriptors
 * for UI elements. Normally appears in proximity to notifications or
 * user avatars with eye-catching appeal, typically displaying unread messages count.
 */

const BadgeOverlay: React.FC<Props> = ({
    children,
    isHidden,
    position,
    value,
    variant,
}) => {
    const valueIsString = typeof value === 'string';
    return (
        <StyledOverlayContainer>
            {children}
            <RenderIf isTrue={!isHidden}>
                <StyledBadge positionOverlay={position} variant={variant}>
                    <RenderIf isTrue={valueIsString}>
                        <StyledBadgeOverlayText>{value}</StyledBadgeOverlayText>
                    </RenderIf>
                    <RenderIf isTrue={!valueIsString}>{value}</RenderIf>
                </StyledBadge>
            </RenderIf>
        </StyledOverlayContainer>
    );
};

BadgeOverlay.propTypes = {
    /** Object that will have the BadgeOverlay.*/
    children: PropTypes.node,
    /** If true, the badge will be hidden.*/
    isHidden: PropTypes.bool,
    /** Describes the position of the badge respect to container. */
    position: PropTypes.oneOf([
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
    ]),
    /** The content rendered within the badge.
     * If the value is not passed a dot is rendered instead of the badge.
     */
    value: PropTypes.node,
    /** The variant changes the appearance of the badge. */
    variant: PropTypes.oneOf(['brand', 'success', 'error', 'warning']),
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

BadgeOverlay.defaultProps = {
    children: undefined,
    isHidden: false,
    position: 'top-right',
    value: undefined,
    variant: 'error',
    style: undefined,
};

export default BadgeOverlay;
