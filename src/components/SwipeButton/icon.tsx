import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
import useTheme from '../../hooks/useTheme';

function SvgComponent(props: SvgProps) {
    const { brand, getContrastText } = useTheme().rainbow.palette;
    return (
        <Svg width={19} height={20} {...props}>
            <G fill={getContrastText(brand.main)} fillRule="nonzero">
                <Path d="M2.678.464l5.946 8.431a1.57 1.57 0 010 2.21l-5.946 8.43a1.563 1.563 0 01-2.223 0 1.586 1.586 0 01-.008-2.215L5.306 10 .455 2.674a1.57 1.57 0 010-2.21 1.563 1.563 0 012.223 0z" />
                <Path d="M11.678.464l5.946 8.431a1.57 1.57 0 010 2.21l-5.946 8.43a1.563 1.563 0 01-2.223 0 1.586 1.586 0 01-.008-2.215L14.306 10 9.455 2.674a1.57 1.57 0 010-2.21 1.563 1.563 0 012.223 0z" />
            </G>
        </Svg>
    );
}

export default SvgComponent;
