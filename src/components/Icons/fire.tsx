import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../types';

const Fire: React.FC<BaseProps> = ({ style }) => {
    return (
        <Svg viewBox="0 0 63 85" fill="none" style={style}>
            <Path
                d="M21 41.5C18.2 17.9 32.833 4 40.5 0 46 28 63 30.5 63 52.5 63 76.913 43.333 83.667 34 84c-8.833.333-27.7-3.7-32.5-22.5C-3.3 42.7 6.5 30.667 12 27c-.8 9.6 5.667 13.667 9 14.5z"
                fill="#FFCE61"
            />
            <Path
                d="M28.278 65.83c-.98-7.865 4.144-12.497 6.829-13.83 1.926 9.331 7.879 10.5 7.879 17.496 0 8.136-6.887 10.387-10.155 10.498-3.094.11-9.7-1.233-11.381-7.498-1.681-6.266 1.75-10.276 3.677-11.498-.28 3.2 1.984 4.555 3.151 4.832z"
                fill="#F6B31E"
            />
        </Svg>
    );
};

export default Fire;
