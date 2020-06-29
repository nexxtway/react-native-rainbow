import React, { ReactNode, useState } from 'react';
import PropTypes from 'prop-types';

import RenderIf from '../RenderIf';
import { BaseProps } from '../types';
import {
    StyledSegmentedControlContainer,
    StyledSegmentedControlLabel,
    StyledSegmentedControlOptionsWrapper,
} from './styled';
import { OptionProps } from './types';
import Option from './option';
import OptionActiveBackground from './optionActiveBackground';

interface Props extends BaseProps {
    label?: ReactNode;
    variant?: 'default' | 'brand';
    value?: string;
    options?: OptionProps[];
    onChange?: (event: OptionProps) => void;
    disabled?: boolean;
    isFullWidth?: boolean;
}

/**
 * SegmentedControl component controls user interacion with a particular process.
 */

const SegmentedControl: React.FC<Props> = ({
    style,
    label,
    variant = 'default',
    value = '',
    options = [],
    onChange = () => {},
    disabled,
    isFullWidth,
}: Props) => {
    const [activeIndex, setaAtiveIndex] = useState(() => {
        const index = options.findIndex(option => option.value === value);
        return index > 0 ? index : 0;
    });
    const hasLabel = !!label;
    const isOptionActive = (option: OptionProps) => option.value === value;

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
            <StyledSegmentedControlOptionsWrapper disabled={disabled}>
                {options.map((option, index) => {
                    const isActive = isOptionActive(option);
                    return (
                        <Option
                            key={`option-${index}`}
                            option={option}
                            onPress={evt => {
                                setaAtiveIndex(index);
                                onChange(evt);
                            }}
                            disabled={disabled}
                            isActive={isActive}
                            variant={variant}
                        />
                    );
                })}
                <OptionActiveBackground
                    variant={variant}
                    disabled={!!disabled}
                    isActive={!!isOptionActive}
                    optionsLength={options.length || 0}
                    activeIndex={activeIndex}
                />
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
    label: PropTypes.node,
    /**Variant defines the colors of the progress circular it could be one of 'brand' | 'default'
     * default value is default
     */
    variant: PropTypes.oneOf(['default', 'brand']),
    /**The value of the segmentedControl.
     * default value undefined
     */
    value: PropTypes.string,
    /** An array of objects to render segmentedControl component options.
     * default value is empty array
     */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.string,
            icon: PropTypes.node,
        }).isRequired,
    ),
    /** function triggered on on ever change on the segmentedControl component.
     * default value is () => {}
     */
    onChange: PropTypes.func,
    /** a boolean option to disabled the segmentedControl component for interactions.
     * default value is false
     */
    disabled: PropTypes.bool,
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
    disabled: false,
    isFullWidth: false,
};

export default SegmentedControl;
