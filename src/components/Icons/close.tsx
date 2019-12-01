import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../types';

const Close: React.FC<BaseProps> = ({ style }) => (
    <Svg viewBox="0 0 21 21" style={style}>
        <Path
            d="M20.605 2.146a.77.77 0 00-1.087-1.088l-8.686 8.688-8.686-8.688a.77.77 0 00-1.088 1.088l8.686 8.688-8.686 8.687a.77.77 0 001.09 1.088l8.685-8.688 8.686 8.688a.773.773 0 001.09 0c.3-.3.3-.788 0-1.088l-8.686-8.687 8.682-8.688z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

Close.propTypes = {
    style: PropTypes.object,
};

Close.defaultProps = {
    style: undefined,
};

export default Close;
