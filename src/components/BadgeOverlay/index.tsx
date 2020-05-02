import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { BaseProps } from '../types';
import { positionOverlay, variantOverlay, overlapOverlay } from './types';
import {
    StyledOverlayContainer,
    StyledBadge,
    StyledBadgeOverlayText,
} from './styled';
import RenderIf from '../RenderIf';

interface Props extends BaseProps {
    children?: ReactNode;
    isHidden?: boolean;
    overlap?: overlapOverlay;
    position?: positionOverlay;
    value?: string | number;
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
    position = 'top-right',
    value,
    variant = 'error',
    overlap = 'rectangle',
}) => {
    return (
        <StyledOverlayContainer overlap={overlap}>
            {children}
            <StyledBadge
                overlap={overlap}
                positionOverlay={position}
                variant={variant}
                isHidden={isHidden}
            >
                <RenderIf isTrue={!!value}>
                    <StyledBadgeOverlayText>{value}</StyledBadgeOverlayText>
                </RenderIf>
            </StyledBadge>
        </StyledOverlayContainer>
    );
};

BadgeOverlay.propTypes = {
    /** Object that will have the BadgeOverlay.*/
    children: PropTypes.node,
    /** If true, the badge will be hidden.*/
    isHidden: PropTypes.bool,
    /** Wrapped shape the badge should overlap. This property is used to place the badge relative to the corner of the wrapped element. */
    overlap: PropTypes.oneOf(['rectangle', 'circle']),

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
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
