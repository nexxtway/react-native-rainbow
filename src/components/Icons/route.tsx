import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { BaseProps } from '../types';

const Route: React.FC<BaseProps> = ({ style }) => {
    return (
        <Svg viewBox="0 0 57 60" fill="none" style={style}>
            <Path
                d="M25 27.37C25 34.204 12.5 47 12.5 47S0 34.203 0 27.37C0 20.54 5.596 15 12.5 15S25 20.539 25 27.37z"
                fill="#F8393A"
            />
            <Circle cx={13} cy={26} r={5} fill="#fff" />
            <Path
                d="M25 27.37C25 34.204 12.5 47 12.5 47S0 34.203 0 27.37C0 20.54 5.596 15 12.5 15S25 20.539 25 27.37z"
                fill="#F8393A"
            />
            <Circle cx={13} cy={26} r={5} fill="#fff" />
            <Path
                d="M49 9.665C49 15.002 39.5 25 39.5 25S30 15.002 30 9.665C30 4.327 34.253 0 39.5 0S49 4.327 49 9.665z"
                fill="#F8393A"
            />
            <Circle cx={40} cy={8} r={3} fill="#fff" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.839 33.156C27.486 32.168 29.234 32 30 32h7v5h-7c-.234 0-.986.082-1.589.444-.267.16-.47.353-.614.6-.14.239-.297.649-.297 1.356 0 1.44.53 2.122 1 2.498.583.467 1.27.602 1.5.602h19.5c1.233 0 3.028.35 4.586 1.471C55.77 45.185 57 47.185 57 50s-1.229 4.815-2.914 6.029C52.528 57.15 50.733 57.5 49.5 57.5H14v-5h35.5c.433 0 1.139-.15 1.664-.529.398-.286.836-.786.836-1.971s-.438-1.685-.836-1.971c-.525-.379-1.23-.529-1.664-.529H30c-1.27 0-3.083-.465-4.624-1.698C23.72 44.478 22.5 42.36 22.5 39.4c0-3.137 1.512-5.148 3.339-6.244z"
                fill="#CFD8DC"
            />
            <Circle cx={40} cy={34} r={5} fill="#B0BEC5" />
            <Circle cx={12} cy={55} r={5} fill="#B0BEC5" />
        </Svg>
    );
};

export default Route;
