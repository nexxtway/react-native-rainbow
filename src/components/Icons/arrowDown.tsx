import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../types';

const ArrowDown: React.FC<BaseProps> = ({ style }) => (
    <Svg viewBox="0 0 9 6" style={style}>
        <Path
            d="M4.478 5.061a.666.666 0 01-.443-.164L.184 1.46a.519.519 0 010-.793.682.682 0 01.887 0L4.478 3.71 7.886.667a.682.682 0 01.887 0 .518.518 0 010 .792L4.922 4.897a.666.666 0 01-.444.164z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </Svg>
);

export default ArrowDown;
