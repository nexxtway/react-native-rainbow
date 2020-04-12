import React from 'react';
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Mask,
    Use,
} from 'react-native-svg';
import { BaseProps } from '../types';

const Wow: React.FC<BaseProps> = ({ style }) => {
    return (
        <Svg viewBox="0 0 35 35" fill="none" style={style}>
            <Defs>
                <LinearGradient
                    x1="49.996%"
                    y1="-.429%"
                    x2="49.996%"
                    y2="99.577%"
                    id="prefix__b"
                >
                    <Stop stopColor="#502411" offset="0%" />
                    <Stop stopColor="#8C4B1A" offset="100%" />
                </LinearGradient>
                <Path
                    d="M.295 7.72c0 3.702 2.203 6.704 4.916 6.704 2.715 0 4.917-3.002 4.917-6.703 0-3.702-2.202-6.704-4.917-6.704-2.714 0-4.916 3.002-4.916 6.704"
                    id="prefix__a"
                />
            </Defs>
            <G fill="none" fillRule="evenodd">
                <Path
                    d="M17.5 0C7.836 0 0 7.834 0 17.5S7.836 35 17.5 35C27.166 35 35 27.166 35 17.5S27.166 0 17.5 0z"
                    fill="#FFE17D"
                />
                <G transform="translate(12.219 16.86)">
                    <Mask id="prefix__c" fill="#fff">
                        <Use xlinkHref="#prefix__a" />
                    </Mask>
                    <Path
                        d="M.295 7.72c0 3.702 2.203 6.704 4.916 6.704 2.715 0 4.917-3.002 4.917-6.703 0-3.702-2.202-6.704-4.917-6.704-2.714 0-4.916 3.002-4.916 6.704"
                        fill="url(#prefix__b)"
                        mask="url(#prefix__c)"
                    />
                </G>
                <Path
                    d="M13.407 10.726a2.682 2.682 0 11-5.363 0 2.682 2.682 0 015.363 0M26.816 10.726a2.683 2.683 0 01-5.364 0 2.683 2.683 0 015.364 0"
                    fill="#26304E"
                />
            </G>
        </Svg>
    );
};

export default Wow;
