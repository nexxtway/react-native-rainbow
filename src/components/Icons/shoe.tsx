import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { BaseProps } from '../types';

const Shoe: React.FC<BaseProps> = ({ style }) => {
    return (
        <Svg viewBox="0 0 124 98" fill="none" style={style}>
            <Rect x={8} y={89} width={28} height={5} rx={2.5} fill="#E5E5E5" />
            <Rect y={71} width={17} height={5} rx={2.5} fill="#E5E5E5" />
            <Path
                d="M2.23 30.986c.4-1.2 25.5-20.167 38-29.5 1.168-1 3.4-2.5 3-.5-.5 2.5.5 17 9 24.5 6.8 6 16.5 6.833 20.5 6.5 0-1.5.344-7.5 4-12 6.5-8 11.5-6 13-4.5s2 3.5 1.5 5.5-8 5-9 9.5 10.5 27 12 29.5 10.501 2.5 15.501 3.5 12 3.5 13 7.5 1.5 7.5-3 17.5c-3.6 8-10.5 9.333-13.5 9h-35.5c-6.5 0-9.5-1-13.5-3s-31.5-25-33-27-1-7-2-9.5-6-2.5-9-4-8.5-9-11-14-.5-7.5 0-9z"
                fill="#1DE9B6"
            />
            <Path d="M38.5 34L74 42.5 79 53 42.5 69 30 54l8.5-20z" fill="#F2F2F2" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.259 68.531C26.176 58.475 27.394 45.741 28 41.5c.8-5.6 8-12.667 11.5-15.5.74-8.878-3.88-15.874-6.82-18.853 2.771-2.086 5.355-4.022 7.55-5.661 1.168-1 3.4-2.5 3-.5-.406 2.034.18 12.015 4.994 19.704L40.5 26c1.739 8 1 14.5 0 19-.8 3.6-5.333 8.833-7.5 11l-5.789 14.302c-.788-.7-1.45-1.299-1.952-1.77z"
                fill="#1AD2A4"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.854 22.247c-6.023 4.671-10.457 8.24-10.623 8.739-.08.237-.196.5-.327.793-.694 1.56-1.778 3.998.327 8.207 2.5 5 8 12.5 11 14 1.09.545 2.444.892 3.775 1.233 2.33.597 4.588 1.175 5.225 2.767.432 1.08.584 2.627.738 4.197.203 2.063.41 4.167 1.262 5.303 1.5 2 29 25 33 27s7 3 13.5 3h35.5c1.891.21 5.333-.242 8.52-2.61l-.216-2.376-9-2h-33.5l-26-18.5-24-27.5c-3.333-2.667-10.1-8.7-10.5-11.5-.366-2.563.636-7.833 1.32-10.753z"
                fill="#CBCBCB"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.8 34.532c2.305 8.019 10.205 23.411 11.43 25.454 1.047 1.744 5.743 2.271 10.184 2.77 1.926.216 3.805.427 5.317.73.297.06.6.124.91.194L109 64.5c-1 2.333-3.8 7.1-7 7.5l-.669.084C97.258 72.6 90.785 73.42 87 72c-3.93-1.474-5.93-6.81-7.421-10.79L79.5 61C78 57 71 35 71 33.5c0-.298-.059-.812-.154-1.453a20.68 20.68 0 001.885-.061c0-1.5.344-7.5 4-12 6.5-8 11.5-6 13-4.5l.075.076c-2.755.917-8.572 3.97-11.306 9.438-2.8 5.6-3.167 8-3 8.5 1.764 0 5.09.229 7.3 1.032z"
                fill="#1AD2A4"
            />
            <Rect
                x={83}
                y={50.827}
                width={14.2}
                height={5}
                rx={2.5}
                transform="rotate(-11.485 83 50.827)"
                fill="#E5E5E5"
            />
            <Rect
                x={78}
                y={38.827}
                width={14.2}
                height={5}
                rx={2.5}
                transform="rotate(-11.485 78 38.827)"
                fill="#E5E5E5"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M123.385 76.436c-.151 2.771-1.093 6.357-3.654 12.05-3.6 8-10.5 9.333-13.5 9h-5.169l-.927-.22c-9.666-1.166-31.4-4.7-41-9.5-12-6-42-39-46.5-44s1.5-7 3.5-5 39 38.5 42 40c.48.24 1.035.582 1.694.987 3.466 2.13 9.782 6.013 22.806 6.013h31.5c3.553 0 7.128-5.215 9.25-9.33z"
                fill="#E5E5E5"
            />
        </Svg>
    );
};

export default Shoe;
