import React from 'react';
import PropTypes from 'prop-types';

import { SpinnerSize, SpinnerVariant } from './types';
import { SpinnerContainer, SpinnerCircle } from './styled';

interface Props {
    isVisible?: boolean;
    size?: SpinnerSize;
    variant?: SpinnerVariant;
}
/**
 * Spinners should be shown when retrieving data or performing slow,
 * help to reassure the user that the system is actively retrieving data.
 */
const Spinner: React.FC<Props> = () => {
    return (
        <SpinnerContainer>
            <SpinnerCircle />
        </SpinnerContainer>
    );
};

Spinner.propTypes = {
    /**
     * Show/Hide the spinner
     * */
    isVisible: PropTypes.bool,
    /**
     * The size of the spinner. Accepted sizes are small, medium and large.
     * This values defaults to medium
     */
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /**
     * The variant changes the appearance of the spinner.
     * Accepted variants are base and neutral.
     * This value defaults to brand
     */
    variant: PropTypes.oneOf(['brand', 'neutral']),
};

Spinner.defaultProps = {
    isVisible: true,
    size: 'medium',
    variant: 'brand',
};

export default Spinner;
