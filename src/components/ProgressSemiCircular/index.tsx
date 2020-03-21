import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import {
    StyledProgressCircular,
    StyledValue,
    StyledIconContainer,
} from './styled';
import RenderIf from '../RenderIf';
// import ProgressSvg from './ProgressSvg';
import ProgressSvg from './svg';
import { Text } from 'react-native';
import { BaseProps } from '../types';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from 'react-native-svg';

export type Sizes = 'large' | 'medium' | 'small';
export type Variants = 'brand' | 'success' | 'warning' | 'error';

interface Props extends BaseProps {
    variant?: Variants;
    icon?: ReactNode;
    size?: Sizes;
    value?: number;
}

// variant;
// value;
// min;
// max;

/**
 * ProgressSemiCircular component communicates to the user the progress of a particular process.
 */

const ProgressSemiCircular: React.FC<Props> = props => {
    const { style, variant, icon, size, value } = props;

    // return (
    //     <AnimatedCircularProgress
    //         size={150}
    //         width={10}
    //         fill={80}
    //         tintColor="red"
    //         onAnimationComplete={() => console.log('onAnimationComplete')}
    //         backgroundColor="green"
    //         // renderCap={({ center }) => (
    //         //     <Circle cx={center.x} cy={center.y} r="5" fill="red" />
    //         // )}
    //         rotation={-90}
    //         lineCap="round"
    //         arcSweepAngle={180}
    //         // tintColorSecondary="blue"
    //     >
    //         {() => <Text>50</Text>}
    //     </AnimatedCircularProgress>
    // );
    return <ProgressSvg variant={variant} value={value} />;

    // return (
    //     <StyledProgressCircular size={size} style={style}>
    //         {/* <RenderIf isTrue={!!icon}>
    //             <StyledIconContainer>{icon}</StyledIconContainer>
    //         </RenderIf> */}
    //         <StyledValue>{value}</StyledValue>
    //         <ProgressSvg variant={variant} value={value} />
    //     </StyledProgressCircular>
    // );
};

ProgressSemiCircular.propTypes = {
    /** An object with custom style applied to the outer element.
     * default value is undefined
     */
    style: PropTypes.object,
    /**Variant defines the colors of the progress circular it could be one of 'brand' | 'success' | 'warning' | 'error'
     * default value is brand
     */
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'error']),
    /** The the icon centered at the progress circular.
     * default value is null
     */
    icon: PropTypes.node,
    /** The size of the progress circular. One of small, medium, and large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    /**The percentage value of the progress circular. It must be between 0 and 100.
     * default 0
     */
    value: PropTypes.number,
};

ProgressSemiCircular.defaultProps = {
    style: undefined,
    variant: 'brand',
    icon: null,
    size: 'medium',
    value: 0,
};

export default ProgressSemiCircular;
