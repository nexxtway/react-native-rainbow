import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { BaseProps } from '../types';
import {
    StyledSegmentedControlContainer,
    StyledSegmentedControlLabel,
    StyledSegmentedControlOptionsWrapper,
} from './styled';
import SegmentedControlOption from './SegmentedControlOption';

interface Option {
    label: ReactNode;
    value: string;
    icon?: ReactNode;
}

interface Props extends BaseProps {
    label?: string;
    variant?: 'default' | 'brand';
    value?: string;
    options?: Option[];
    onChange?: (event: any) => void;
    isDisabled?: boolean;
    isFullWidth?: boolean;
}

/**
 * SegmentedControl component controls user interacion with a particular process.
 */

const SegmentedControl: React.FC<Props> = props => {
    const {
        style,
        label,
        variant = 'default',
        value,
        options = [],
        onChange = () => {},
        isDisabled,
        isFullWidth,
    } = props;
    const [active, setActive] = React.useState(value);

    let handleOnChange = (value: string) => {
        setActive(value);
        onChange(value);
    };

    let hasLabel = !!label;
    return (
        <StyledSegmentedControlContainer
            isFullWidth={isFullWidth}
            style={style}
        >
            <RenderIf isTrue={hasLabel}>
                <StyledSegmentedControlLabel>
                    {label}
                </StyledSegmentedControlLabel>
            </RenderIf>
            <StyledSegmentedControlOptionsWrapper isDisabled={isDisabled}>
                {options.map((option, index) => (
                    <SegmentedControlOption
                        key={index}
                        label={option.label}
                        value={option.value}
                        icon={option.icon}
                        handleSelect={handleOnChange}
                        isDisabled={isDisabled}
                        isActive={!!(option.value === active)}
                        variant={variant}
                    />
                ))}
            </StyledSegmentedControlOptionsWrapper>
        </StyledSegmentedControlContainer>
    );
};

SegmentedControl.propTypes = {
    /** An object with custom style applied to the outer element.
     * default value is undefined
     */
    style: PropTypes.object,
    /** defined the label over the segmentedControl.
     * default value is undefined
     */
    label: PropTypes.string,
    /**Variant defines the colors of the progress circular it could be one of 'brand' | 'default'
     * default value is default
     */
    variant: PropTypes.oneOf(['default', 'brand']),
    /**The value of the segmentedControl.
     * default value undefined
     */
    value: PropTypes.string,
    /** An array of object to render segmentedControl component options.
     * default value is empty array
     */
    options: PropTypes.array,
    /** function triggered on on ever change on the segmentedControl component.
     * default value is () => {}
     */
    onChange: PropTypes.func,
    /** a boolean option to disabled the segmentedControl component for interactions.
     * default value is false
     */
    isDisabled: PropTypes.bool,
    /** a boolean option to control if the segmentedControl component should be full width.
     * default value is false
     */
    isFullWidth: PropTypes.bool,
};

SegmentedControl.defaultProps = {
    label: undefined,
    variant: 'default',
    value: undefined,
    options: [],
    onChange: () => {},
    isDisabled: false,
    isFullWidth: false,
};

export default SegmentedControl;
