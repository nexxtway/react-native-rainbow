import React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';
import { BaseProps } from '../types';

const Person: React.FC<BaseProps> = ({ style }) => {
    return (
        <Svg viewBox="0 0 40 69" fill="none" style={style}>
            <Ellipse
                cx={22.915}
                cy={11.654}
                rx={5.5}
                ry={7}
                transform="rotate(24.605 22.915 11.654)"
                fill="#F2BB80"
            />
            <Path
                d="M38.5 32L32 26.5 28.5 31c1 .5 3.1 1.6 3.5 2 .4.4.167.833 0 1l-8 3-1 6c4.167-1.667 13-5.4 15-7 2-1.6 1.167-3.333.5-4z"
                fill="#F2BB80"
            />
            <Path
                d="M12 15.5c-2 1-4 2.5-5.5 4 0 .8 2 3.667 3 5L8 42l15.5 1L25 28.5l3.5 2.5 3.5-4.5-6-4.5h-3c-2.8 0-6.333-1-8-1.5l-3-5z"
                fill="#01B6F5"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.41 22L11.536 42.228 23.5 43 25 28.5l3.5 2.5 3.5-4.5-6-4.5h-1.59z"
                fill="#01A7E1"
            />
            <Path d="M6 52l2-10 15.5 1 1.5 9h-7.5l-.5-4h-2.5l-1 4H6z" fill="#595959" />
            <Path d="M22 65l-4-13h7l3 13h-6zM9.5 65L13 52H6L3.5 65h6z" fill="#F2BB80" />
            <Path
                d="M28.577 65h-6c-1 0-.5 4 0 4h9c.167-.167.4-.7 0-1.5s-2.166-2-3-2.5zM3.287 65h6.124c1.02 0 .51 4 0 4H.225c-.17-.167-.408-.7 0-1.5.409-.8 2.212-2 3.062-2.5z"
                fill="#01B6F5"
            />
            <Path
                d="M8.5 10.5l3.5 5-5.5 4C5.833 18 4.2 14.4 3 12c-1.2-2.4.167-4 1-4.5L16.5 0 19 4C15.667 5.667 8.9 9.1 8.5 9.5c-.4.4-.167.833 0 1z"
                fill="#F2BB80"
            />
        </Svg>
    );
};

export default Person;
