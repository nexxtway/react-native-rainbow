import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../types';

const Magnifying: React.FC<BaseProps> = ({ style }) => (
    <Svg viewBox="0 0 15 16" style={style}>
        <Path
            d="M14.565 15.33l-4.588-5.188A6.075 6.075 0 0011.58 6a6.07 6.07 0 00-1.696-4.242C8.789.625 7.336 0 5.789 0c-1.546 0-3 .624-4.093 1.758A6.075 6.075 0 000 6a6.07 6.07 0 001.696 4.242C2.79 11.375 4.243 12 5.789 12a5.62 5.62 0 003.62-1.316l4.587 5.186a.378.378 0 00.545.025.41.41 0 00.024-.565zM.77 6C.771 3.133 3.022.8 5.79.8c2.766 0 5.017 2.333 5.017 5.2s-2.25 5.2-5.017 5.2C3.022 11.2.77 8.867.77 6z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

Magnifying.propTypes = {
    style: PropTypes.object,
};

Magnifying.defaultProps = {
    style: undefined,
};

export default Magnifying;
