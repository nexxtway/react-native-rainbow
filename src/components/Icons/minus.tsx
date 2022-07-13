import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';
import { BaseProps } from '../types';

const Minus: React.FC<BaseProps> = ({ style }) => (
    <Svg style={style} viewBox="0 0 12 2">
        <G id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <G
                id="Components-CounterInput"
                transform="translate(-498.000000, -541.000000)"
                fill="currentColor"
                fillRule="nonzero"
            >
                <G id="Group-6-Copy" transform="translate(482.000000, 497.000000)">
                    <Path
                        d="M27.1428571,44.1428571 L16.8571429,44.1428571 C16.384,44.1428571 16,44.5268571 16,45 C16,45.4731429 16.384,45.8571429 16.8571429,45.8571429 L27.1428571,45.8571429 C27.616,45.8571429 28,45.4731429 28,45 C28,44.5268571 27.616,44.1428571 27.1428571,44.1428571 Z"
                        id="Path-Copy-6"
                    />
                </G>
            </G>
        </G>
    </Svg>
);

Minus.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Minus.defaultProps = {
    style: undefined,
};

export default Minus;
