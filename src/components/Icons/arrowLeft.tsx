import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../types';

const ArrowLeft: React.FC<BaseProps> = ({ style }) => (
    <Svg viewBox="0 0 19 14" style={style}>
        <Path
            d="M6.09.197a.662.662 0 01.94.93l-4.77 4.762h15.742c.367 0 .668.29.668.657a.67.67 0 01-.668.667H2.26l4.77 4.753a.673.673 0 010 .94.66.66 0 01-.94 0l-5.9-5.89a.662.662 0 010-.93L6.09.197z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

export default ArrowLeft;
