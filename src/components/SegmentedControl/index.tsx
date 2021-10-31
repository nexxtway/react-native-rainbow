import React, { ReactNode, useState } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { BaseProps } from '../types';
import {
    StyledSegmentedControlContainer,
    StyledSegmentedControlLabel,
    StyledSegmentedControlOptionsWrapper,
} from './styled';
import { OptionProps, Size } from './types';
import Option from './option';
import OptionActive from './optionActive';

interface Props extends BaseProps {
    label?: ReactNode;
    variant?: 'default' | 'brand';
    value?: string;
    options?: OptionProps[];
    onChange?: (event: OptionProps) => void;
    disabled?: boolean;
    isFullWidth?: boolean;
    size?: Size;
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
    size = 'medium',
}: Props) => {
    const [activeIndex, setaAtiveIndex] = useState(() => {
        const index = options.findIndex(option => option.value === value);
        return index > 0 ? index : 0;
    });
    const hasLabel = !!label;
    const isOptionActive = (option: OptionProps) => option.value === value;

    return (
        <StyledSegmentedControlContainer isFullWidth={isFullWidth} style={style}>
            <RenderIf isTrue={hasLabel}>
                <StyledSegmentedControlLabel>{label}</StyledSegmentedControlLabel>
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
                            size={size}
                        />
                    );
                })}
                <OptionActive
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
    /** An object with custom style applied to the outer element. */
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    /** The label of the SegmentedControl. */
    label: PropTypes.node,
    /** Variant defines the colors of the SegmentedControl. It can be one of 'brand' | 'default'. */
    variant: PropTypes.oneOf(['default', 'brand']),
    /** The value of the SegmentedControl. */
    value: PropTypes.string,
    /** An array of objects to render SegmentedControl options. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.string,
            icon: PropTypes.node,
        }).isRequired,
    ),
    /** Function triggered on each change on the SegmentedControl. */
    onChange: PropTypes.func,
    /** A boolean option to disabled the SegmentedControl. */
    disabled: PropTypes.bool,
    /** A boolean option to control if the SegmentedControl should be full width. */
    isFullWidth: PropTypes.bool,
    /** Defines the height of the SegmentedControl. */
    size: PropTypes.oneOf(['medium', 'small']),
};

SegmentedControl.defaultProps = {
    label: undefined,
    variant: 'default',
    value: undefined,
    options: [],
    onChange: () => {},
    disabled: false,
    isFullWidth: false,
    size: 'medium',
};

export default SegmentedControl;
