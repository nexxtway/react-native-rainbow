import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import {
    StyledProgressCircular,
    StyledIconContainer,
    StyledIcon,
} from './styled';
import RenderIf from '../RenderIf';
import ProgressCircularSVG from './ProgressCircularSVG';
import { BaseProps } from '../types';

type Sizes = 'large' | 'medium' | 'small';
type Variants = 'brand' | 'success' | 'warning' | 'error';

interface Props extends BaseProps {
    variant?: Variants;
    icon?: ReactNode;
    size?: Sizes;
    value?: number;
}

/**
 * A profress circular component represents an object or entity
 */

const ProgressCircular: React.FC<Props> = props => {
    const { style, variant, icon, size, value } = props;

    return (
        <StyledProgressCircular size={size} style={style}>
            <RenderIf isTrue={!!icon}>
                <StyledIconContainer>
                    <StyledIcon>{icon}</StyledIcon>
                </StyledIconContainer>
            </RenderIf>
            <ProgressCircularSVG variant={variant} value={value} />
        </StyledProgressCircular>
    );
};

ProgressCircular.propTypes = {
    /** An object with custom style applied to the outer element.
     * default value is undefined
     */
    style: PropTypes.object,
    /**Variant defines the colors of the progress circular it could be one of 'brand' | 'success' | 'warning' | 'error'
     * default value is brand
     */
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'error']),
    /** The the icon centered at the progress circular.
     * default value is null
     */
    icon: PropTypes.node,
    /** The size of the progress circular. One of small, medium, and large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    /**the value percentage of the progress circular
     * default 0
     */
    value: PropTypes.number,
};

ProgressCircular.defaultProps = {
    style: undefined,
    variant: 'brand',
    icon: null,
    size: 'medium',
    value: 0,
};

export default ProgressCircular;
