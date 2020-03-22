import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledBar } from './styled';
import { BaseProps } from '../types';

export type Variants = 'brand' | 'success' | 'warning' | 'error';

interface Props extends BaseProps {
    variant?: Variants;
    icon?: ReactNode;
    value?: number;
}

/**
 * ProgressCircular component communicates to the user the progress of a particular process.
 */

const ProgressBar: React.FC<Props> = props => {
    const { style, variant, value } = props;

    return (
        <StyledContainer style={style}>
            <StyledBar value={value} variant={variant} />
        </StyledContainer>
    );
};

ProgressBar.propTypes = {
    /** An object with custom style applied to the outer element.
     * default value is undefined
     */
    style: PropTypes.object,
    /**Variant defines the colors of the progress it could be one of 'brand' | 'success' | 'warning' | 'error'
     * default value is brand
     */
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'error']),
    /**The percentage value of the progress. It must be between 0 and 100.
     * default 0
     */
    value: PropTypes.number,
};

ProgressBar.defaultProps = {
    style: undefined,
    variant: 'brand',
    value: 0,
};

export default ProgressBar;
