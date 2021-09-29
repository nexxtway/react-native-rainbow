import React from 'react';
import Svg, { Defs, Path, LinearGradient, Stop, G, Mask, Use } from 'react-native-svg';
import { BaseProps } from '../types';

const Sad: React.FC<BaseProps> = ({ style }) => {
    return (
        <Svg viewBox="0 0 35 35" fill="none" style={style}>
            <Defs>
                <Path
                    d="M1.428 5.306c-.22.516.395.978.839.635 2.371-1.814 5.371-1.814 5.371-1.814s3.002 0 5.371 1.814c.446.343 1.06-.12.84-.635C12.99 3.289 11.188.668 7.639.668c-3.549 0-5.349 2.621-6.21 4.638"
                    id="prefix__a"
                />
                <Path
                    d="M.124 9.03a3.575 3.575 0 107.15 0h.001C7.275 7.056 3.7.986 3.7.986S.124 7.056.124 9.03"
                    id="prefix__d"
                />
                <LinearGradient x1="49.999%" y1="-.422%" x2="49.999%" y2="99.57%" id="prefix__b">
                    <Stop stopColor="#502411" offset="0%" />
                    <Stop stopColor="#8C4B1A" offset="100%" />
                </LinearGradient>
            </Defs>
            <G fill="none" fillRule="evenodd">
                <Path
                    d="M17.5 0C7.836 0 0 7.834 0 17.5S7.836 35 17.5 35C27.166 35 35 27.166 35 17.5S27.166 0 17.5 0z"
                    fill="#FFE17D"
                />
                <G fill="#26304E">
                    <Path d="M13.407 16.536c0 1.728-1.2 3.13-2.68 3.13-1.48 0-2.682-1.402-2.682-3.13s1.201-3.129 2.682-3.129c1.48 0 2.68 1.401 2.68 3.13M26.815 16.536c0 1.728-1.2 3.13-2.68 3.13-1.48 0-2.682-1.402-2.682-3.13s1.201-3.129 2.682-3.129c1.48 0 2.68 1.401 2.68 3.13" />
                </G>
                <G transform="translate(9.792 22.86)">
                    <Mask id="prefix__c" fill="#fff">
                        <Use xlinkHref="#prefix__a" />
                    </Mask>
                    <Path
                        d="M1.428 5.306c-.22.516.395.978.839.635 2.371-1.814 5.371-1.814 5.371-1.814s3.002 0 5.371 1.814c.446.343 1.06-.12.84-.635C12.99 3.289 11.188.668 7.639.668c-3.549 0-5.349 2.621-6.21 4.638"
                        fill="url(#prefix__b)"
                        mask="url(#prefix__c)"
                    />
                </G>
                <G fill="#D97700">
                    <Path d="M5.363 14.301a.892.892 0 01-.632-1.526c.393-.393 3.923-3.837 6.89-3.837a.893.893 0 110 1.788c-1.896 0-4.704 2.391-5.625 3.314a.892.892 0 01-.633.261M29.497 14.301a.892.892 0 00.632-1.526c-.393-.393-3.923-3.837-6.888-3.837a.895.895 0 100 1.788c1.896 0 4.702 2.391 5.625 3.314a.892.892 0 00.631.261" />
                </G>
                <G transform="translate(24.792 21.36)">
                    <Mask id="prefix__e" fill="#fff">
                        <Use xlinkHref="#prefix__d" />
                    </Mask>
                    <Path
                        d="M.124 9.03a3.575 3.575 0 107.15 0h.001C7.275 7.056 3.7.986 3.7.986S.124 7.056.124 9.03"
                        mask="url(#prefix__e)"
                    />
                </G>
            </G>
        </Svg>
    );
};

export default Sad;
