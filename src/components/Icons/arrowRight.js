import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRight = ({ style }) => (
    <Svg width={19} height={14} style={style}>
        <Path
            d="M12.909.689a.662.662 0 00-.94.93l4.769 4.761H.997a.662.662 0 00-.668.658.67.67 0 00.668.667h15.741l-4.77 4.753a.673.673 0 000 .94.66.66 0 00.94 0l5.9-5.89a.662.662 0 000-.93l-5.9-5.89z"
            fillRule="nonzero"
        />
    </Svg>
);

export default ArrowRight;
