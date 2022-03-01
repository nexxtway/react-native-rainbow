import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function ChevronBack(props: SvgProps) {
    return (
        <Svg viewBox="0 0 12 22" {...props}>
            <Path
                d="M3.621 11l7.94-7.94A1.5 1.5 0 009.439.94l-9 9a1.5 1.5 0 000 2.12l9 9a1.5 1.5 0 002.122-2.12L3.62 11z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </Svg>
    );
}

export default ChevronBack;
