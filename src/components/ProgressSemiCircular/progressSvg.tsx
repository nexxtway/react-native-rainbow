import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path, Ellipse } from 'react-native-svg';
import {
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_ERROR,
    COLOR_WARNING,
    COLOR_GRAY_TRANSPARENT_2,
} from '../../styles/colors';
import { BaseProps } from '../types';
import { Variants } from './index';

const colors = {
    brand: COLOR_BRAND,
    success: COLOR_SUCCESS,
    warning: COLOR_WARNING,
    error: COLOR_ERROR,
};

interface Props extends BaseProps {
    variant?: Variants;
    value?: number;
}

const ProgressSvg: React.FC<Props> = props => {
    const { variant = 'brand', value = 0 } = props;
    let strokeDash = `${(value / 100) * 300} 300`;

    return (
        <Svg width="100%" height="100%">
            <G rotation={90} originX={50} originY={50}>
                <Path
                    d={backgroundPath}
                    stroke={backgroundColor}
                    strokeWidth={backgroundWidth || width}
                    strokeLinecap={lineCap}
                    strokeDasharray={strokeDasharrayBackground}
                    fill="transparent"
                />
                {fill > 0 && (
                    <Path
                        d={circlePath}
                        stroke={tintColor}
                        strokeWidth={width}
                        strokeLinecap={lineCap}
                        strokeDasharray={strokeDasharrayTint}
                        fill="transparent"
                    />
                )}
                {cap}
            </G>
        </Svg>
    );

    // return (
    //     <Svg viewBox="0 0 144 86" height="100%" width="100%">
    //         <G
    //             transform="rotate(-90 43.563 40.5)"
    //             fill="none"
    //             fillRule="evenodd"
    //         >
    //             <Path
    //                 d="M13.49 1.75C31.037-.478 77.103 19.977 79.297 68.963c0 25.649-10.906 42.086-23.764 53.598C43.963 132.92 22.331 140.159.017 139.234"
    //                 stroke={COLOR_GRAY_TRANSPARENT_2}
    //                 strokeWidth={3}
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //             />
    //             <Path
    //                 d="M2.466 2.103c33.337-4.14 74.638 18.09 76.832 67.119 0 25.67-10.71 42.825-23.764 53.644"
    //                 stroke={colors[variant]}
    //                 strokeWidth={8}
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeDasharray={strokeDash}
    //             />
    //             <Ellipse
    //                 fillOpacity={0.155}
    //                 fill="#000"
    //                 cx={2.991}
    //                 cy={2.123}
    //                 rx={2.194}
    //                 ry={2.068}
    //             />
    //             <Ellipse
    //                 fillOpacity={0.155}
    //                 fill="#000"
    //                 cx={55.889}
    //                 cy={122.343}
    //                 rx={2.194}
    //                 ry={2.068}
    //             />
    //         </G>
    //     </Svg>
    // );

    // return (
    //     <Svg viewBox="0 0 100 100" height="100%" width="100%">
    //         <Path
    //             d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
    //             stroke={COLOR_GRAY_TRANSPARENT_2}
    //             strokeLinecap="round"
    //             strokeWidth="2"
    //             fillOpacity="0"
    //         />
    //         <Path
    //             d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
    //             stroke={colors[variant]}
    //             strokeLinecap="round"
    //             strokeWidth="4"
    //             fillOpacity="0"
    //             strokeDasharray={strokeDash}
    //         />
    //         <Path
    //             d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
    //             stroke="rgba(0,0,0,0.2)"
    //             strokeLinecap="round"
    //             strokeWidth="2"
    //             fillOpacity="0"
    //             strokeDasharray="0 300"
    //         />
    //     </Svg>
    // );
};

ProgressSvg.propTypes = {
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'error']),
    value: PropTypes.number,
};

ProgressSvg.defaultProps = {
    variant: 'brand',
    value: 0,
};

export default ProgressSvg;
